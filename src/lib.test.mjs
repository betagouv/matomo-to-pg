// @ts-check
import { describe, it, mock } from "node:test";
import assert from "node:assert";
import {
  getMaxValue,
  copyTableBatch,
  fetchValidActionIds,
  copyActions,
  importSite,
} from "./lib.mjs";

/**
 * Create a mock database that tracks query builder calls
 * @param {object} options
 * @param {any[]} [options.selectResults] - Array of results for sequential execute() calls
 * @param {object} [options.insertResult]
 * @param {any} [options.executeTakeFirstResult]
 */
const createMockDB = ({
  selectResults = [[]],
  insertResult = { numInsertedOrUpdatedRows: 0 },
  executeTakeFirstResult = null,
} = {}) => {
  const calls = {
    selectFrom: [],
    select: [],
    selectAll: [],
    where: [],
    orderBy: [],
    limit: [],
    offset: [],
    distinct: [],
    insertInto: [],
    values: [],
  };

  let executeCallIndex = 0;

  const createChain = () => {
    const chain = {
      selectFrom: (table) => {
        calls.selectFrom.push(table);
        return chain;
      },
      select: (cols) => {
        calls.select.push(cols);
        return chain;
      },
      selectAll: () => {
        calls.selectAll.push(true);
        return chain;
      },
      where: (...args) => {
        calls.where.push(args);
        return chain;
      },
      orderBy: (col) => {
        calls.orderBy.push(col);
        return chain;
      },
      limit: (n) => {
        calls.limit.push(n);
        return chain;
      },
      offset: (n) => {
        calls.offset.push(n);
        return chain;
      },
      distinct: () => {
        calls.distinct.push(true);
        return chain;
      },
      insertInto: (table) => {
        calls.insertInto.push(table);
        return chain;
      },
      values: (rows) => {
        calls.values.push(rows);
        return chain;
      },
      executeTakeFirst: async () => {
        return executeTakeFirstResult ?? insertResult;
      },
      execute: async () => {
        const result = selectResults[executeCallIndex] ?? [];
        executeCallIndex++;
        return result;
      },
    };
    return chain;
  };

  const db = createChain();
  db._calls = calls;
  db._resetExecuteIndex = () => {
    executeCallIndex = 0;
  };

  return db;
};

describe("getMaxValue", () => {
  it("should return 0 when no rows exist", async () => {
    const mockDB = createMockDB({ executeTakeFirstResult: { value: null } });
    const result = await getMaxValue(
      mockDB,
      "matomo.matomo_log_visit",
      "idvisit",
      1,
    );
    assert.strictEqual(result, 0);
  });

  it("should return the max value when rows exist", async () => {
    const mockDB = createMockDB({ executeTakeFirstResult: { value: "42" } });
    const result = await getMaxValue(
      mockDB,
      "matomo.matomo_log_visit",
      "idvisit",
      1,
    );
    assert.strictEqual(result, 42);
  });

  it("should query the correct table", async () => {
    const mockDB = createMockDB({ executeTakeFirstResult: { value: "10" } });
    await getMaxValue(mockDB, "matomo.matomo_log_visit", "idvisit", 1);

    assert.deepStrictEqual(mockDB._calls.selectFrom, [
      "matomo.matomo_log_visit",
    ]);
  });

  it("should apply idsite filter when provided", async () => {
    const mockDB = createMockDB({ executeTakeFirstResult: { value: "10" } });
    await getMaxValue(mockDB, "matomo.matomo_log_visit", "idvisit", 42);

    assert.strictEqual(mockDB._calls.where.length, 1);
    // The where clause is a function, we verify it was called
    assert.strictEqual(typeof mockDB._calls.where[0][0], "function");
  });

  it("should work without idsite filter", async () => {
    const mockDB = createMockDB({ executeTakeFirstResult: { value: "100" } });
    const result = await getMaxValue(
      mockDB,
      "matomo.matomo_log_action",
      "idaction",
    );

    assert.strictEqual(result, 100);
    assert.deepStrictEqual(mockDB._calls.selectFrom, [
      "matomo.matomo_log_action",
    ]);
  });
});

describe("copyTableBatch", () => {
  it("should query source table with correct parameters when no rows", async () => {
    const sourceDB = createMockDB({ selectResults: [[]] });
    const targetDB = createMockDB();

    await copyTableBatch({
      sourceDB,
      targetDB,
      sourceTable: "matomo_log_visit",
      targetTable: "matomo.matomo_log_visit",
      idsite: 1,
      idColumn: "idvisit",
      startId: 0,
      log: () => {},
    });

    assert.deepStrictEqual(sourceDB._calls.selectFrom, ["matomo_log_visit"]);
    assert.deepStrictEqual(sourceDB._calls.selectAll, [true]);
    assert.deepStrictEqual(sourceDB._calls.limit, [500]);
    assert.strictEqual(sourceDB._calls.where.length, 2); // idsite and idColumn conditions
  });

  it("should insert into target table and return last ID", async () => {
    const sourceDB = createMockDB({
      selectResults: [
        [
          { idvisit: 10, data: "a" },
          { idvisit: 20, data: "b" },
        ],
        [], // Empty to exit loop
      ],
    });
    const targetDB = createMockDB({
      insertResult: { numInsertedOrUpdatedRows: 2 },
    });

    const lastId = await copyTableBatch({
      sourceDB,
      targetDB,
      sourceTable: "matomo_log_visit",
      targetTable: "matomo.matomo_log_visit",
      idsite: 1,
      idColumn: "idvisit",
      startId: 0,
      log: () => {},
    });

    assert.strictEqual(lastId, 20);
    assert.deepStrictEqual(targetDB._calls.insertInto, [
      "matomo.matomo_log_visit",
    ]);
    assert.deepStrictEqual(targetDB._calls.values, [
      [
        { idvisit: 10, data: "a" },
        { idvisit: 20, data: "b" },
      ],
    ]);
  });

  it("should use correct idColumn for ordering and filtering", async () => {
    const sourceDB = createMockDB({ selectResults: [[]] });
    const targetDB = createMockDB();

    await copyTableBatch({
      sourceDB,
      targetDB,
      sourceTable: "matomo_log_link_visit_action",
      targetTable: "matomo.matomo_log_link_visit_action",
      idsite: 5,
      idColumn: "idlink_va",
      startId: 100,
      log: () => {},
    });

    assert.deepStrictEqual(sourceDB._calls.selectFrom, [
      "matomo_log_link_visit_action",
    ]);
    // First where is for idsite
    assert.deepStrictEqual(sourceDB._calls.where[0], ["idsite", "=", 5]);
  });
});

describe("fetchValidActionIds", () => {
  it("should return empty set when no actions found", async () => {
    const sourceDB = createMockDB({ selectResults: [[]] });
    const result = await fetchValidActionIds(sourceDB, 1, 0, () => {});

    assert.strictEqual(result.size, 0);
  });

  it("should query matomo_log_link_visit_action with correct columns", async () => {
    const sourceDB = createMockDB({ selectResults: [[]] });
    await fetchValidActionIds(sourceDB, 1, 0, () => {});

    assert.deepStrictEqual(sourceDB._calls.selectFrom, [
      "matomo_log_link_visit_action",
    ]);
    assert.strictEqual(sourceDB._calls.select.length, 1);
    assert.deepStrictEqual(sourceDB._calls.select[0], [
      "idlink_va",
      "idaction_name",
      "idaction_url",
    ]);
    assert.deepStrictEqual(sourceDB._calls.distinct, []); // no distinct
  });

  it("should apply idsite and date filters", async () => {
    const sourceDB = createMockDB({ selectResults: [[]] });
    await fetchValidActionIds(sourceDB, 42, 0, () => {});

    // Check idsite filter
    assert.deepStrictEqual(sourceDB._calls.where[0], ["idsite", "=", 42]);
    // Check date filter (second where call)
    assert.strictEqual(sourceDB._calls.where[1][0], "server_time");
    assert.strictEqual(sourceDB._calls.where[1][1], ">=");
  });

  it("should use cursor-based pagination on idlink_va", async () => {
    const sourceDB = createMockDB({ selectResults: [[]] });
    await fetchValidActionIds(sourceDB, 1, 0, () => {});

    assert.deepStrictEqual(sourceDB._calls.limit, [1000]);
    assert.deepStrictEqual(sourceDB._calls.offset, []); // no offset
    assert.deepStrictEqual(sourceDB._calls.orderBy, ["idlink_va"]);
    // cursor where: idlink_va > 0
    const cursorWhere = sourceDB._calls.where.find(
      (w) => Array.isArray(w) && w[0] === "idlink_va",
    );
    assert.deepStrictEqual(cursorWhere, ["idlink_va", ">", 0]);
  });

  it("should advance cursor using last idlink_va of each batch", async () => {
    const sourceDB = createMockDB({
      selectResults: [
        [
          { idlink_va: 10, idaction_name: 1, idaction_url: 2 },
          { idlink_va: 20, idaction_name: 3, idaction_url: 4 },
        ],
        [], // End pagination
      ],
    });

    await fetchValidActionIds(sourceDB, 1, 0, () => {});

    // Second call should use cursor idlink_va > 20
    const cursorWheres = sourceDB._calls.where.filter(
      (w) => Array.isArray(w) && w[0] === "idlink_va",
    );
    assert.deepStrictEqual(cursorWheres[0], ["idlink_va", ">", 0]);
    assert.deepStrictEqual(cursorWheres[1], ["idlink_va", ">", 20]);
  });

  it("should collect unique action IDs from multiple batches", async () => {
    const sourceDB = createMockDB({
      selectResults: [
        [
          { idlink_va: 1, idaction_name: 1, idaction_url: 2 },
          { idlink_va: 2, idaction_name: 1, idaction_url: 3 },
          { idlink_va: 3, idaction_name: null, idaction_url: 4 },
        ],
        [], // End pagination
      ],
    });

    const result = await fetchValidActionIds(sourceDB, 1, 0, () => {});

    assert.strictEqual(result.size, 4);
    assert.ok(result.has(1));
    assert.ok(result.has(2));
    assert.ok(result.has(3));
    assert.ok(result.has(4));
  });

  it("should only collect action IDs greater than lastActionId", async () => {
    const sourceDB = createMockDB({
      selectResults: [
        [
          { idlink_va: 1, idaction_name: 5, idaction_url: 10 },
          { idlink_va: 2, idaction_name: 3, idaction_url: 15 },
        ],
        [],
      ],
    });

    const result = await fetchValidActionIds(sourceDB, 1, 8, () => {});

    assert.strictEqual(result.size, 2);
    assert.ok(result.has(10));
    assert.ok(result.has(15));
    assert.ok(!result.has(5));
    assert.ok(!result.has(3));
  });
});

describe("copyActions", () => {
  it("should not query when no valid actions to process", async () => {
    const sourceDB = createMockDB();
    const targetDB = createMockDB();

    await copyActions({
      sourceDB,
      targetDB,
      validActions: new Set(),
      lastActionId: 0,
      log: () => {},
    });

    // No queries should be made
    assert.deepStrictEqual(sourceDB._calls.selectFrom, []);
  });

  it("should filter out already processed actions", async () => {
    const sourceDB = createMockDB({ selectResults: [[]] });
    const targetDB = createMockDB();

    await copyActions({
      sourceDB,
      targetDB,
      validActions: new Set([1, 2, 3]),
      lastActionId: 10, // All actions are <= 10
      log: () => {},
    });

    // No source queries because all actions filtered out
    assert.deepStrictEqual(sourceDB._calls.selectFrom, []);
  });

  it("should query matomo_log_action with action IDs", async () => {
    const sourceDB = createMockDB({
      selectResults: [
        [{ idaction: 15 }, { idaction: 20 }],
        [], // End loop
      ],
    });
    const targetDB = createMockDB({
      insertResult: { numInsertedOrUpdatedRows: 2 },
    });

    await copyActions({
      sourceDB,
      targetDB,
      validActions: new Set([15, 20, 25]),
      lastActionId: 10,
      log: () => {},
    });

    assert.deepStrictEqual(sourceDB._calls.selectFrom, ["matomo_log_action"]);
    assert.deepStrictEqual(sourceDB._calls.selectAll, [true]);
    assert.deepStrictEqual(sourceDB._calls.orderBy, ["idaction"]);
  });

  it("should insert into matomo.matomo_log_action and return last ID", async () => {
    const sourceDB = createMockDB({
      selectResults: [
        [{ idaction: 15 }, { idaction: 20 }],
        [], // End loop
      ],
    });
    const targetDB = createMockDB({
      insertResult: { numInsertedOrUpdatedRows: 2 },
    });

    const lastId = await copyActions({
      sourceDB,
      targetDB,
      validActions: new Set([15, 20]),
      lastActionId: 10,
      log: () => {},
    });

    assert.strictEqual(lastId, 20);
    assert.deepStrictEqual(targetDB._calls.insertInto, [
      "matomo.matomo_log_action",
    ]);
    assert.deepStrictEqual(targetDB._calls.values, [
      [{ idaction: 15 }, { idaction: 20 }],
    ]);
  });
});

describe("importSite", () => {
  it("should query all four tables for max values", async () => {
    const sourceDB = createMockDB({ selectResults: [[]] });
    const targetDB = createMockDB({ executeTakeFirstResult: { value: "0" } });

    await importSite({
      sourceDB,
      targetDB,
      idsite: 1,
      log: () => {},
    });

    // getMaxValue is called 4 times on targetDB
    assert.deepStrictEqual(targetDB._calls.selectFrom, [
      "matomo.matomo_log_visit",
      "matomo.matomo_log_conversion",
      "matomo.matomo_log_link_visit_action",
      "matomo.matomo_log_action",
    ]);
  });

  it("should copy from all source tables", async () => {
    const sourceDB = createMockDB({ selectResults: [[]] });
    const targetDB = createMockDB({ executeTakeFirstResult: { value: "0" } });

    await importSite({
      sourceDB,
      targetDB,
      idsite: 1,
      log: () => {},
    });

    // Should query source tables for copying
    const sourceTables = sourceDB._calls.selectFrom;
    assert.ok(sourceTables.includes("matomo_log_visit"));
    assert.ok(sourceTables.includes("matomo_log_conversion"));
    assert.ok(sourceTables.includes("matomo_log_link_visit_action"));
  });

  it("should use correct idsite for all operations", async () => {
    const sourceDB = createMockDB({ selectResults: [[]] });
    const targetDB = createMockDB({ executeTakeFirstResult: { value: "0" } });

    await importSite({
      sourceDB,
      targetDB,
      idsite: 42,
      log: () => {},
    });

    // All idsite filters on source should use 42
    const idsiteFilters = sourceDB._calls.where.filter(
      (w) => Array.isArray(w) && w[0] === "idsite" && w[1] === "=",
    );
    assert.ok(idsiteFilters.length > 0);
    idsiteFilters.forEach((filter) => {
      assert.strictEqual(filter[2], 42);
    });
  });
});
