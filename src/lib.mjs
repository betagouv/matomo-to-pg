// @ts-check

/**
 * @typedef {import("kysely").Kysely<import("./source").DB>} SourceDB
 * @typedef {import("kysely").Kysely<import("./target").DB>} TargetDB
 */

const BATCH_ROWS = 500;
const ACTION_BATCH = 1000;

/**
 * Get the maximum value of a column in a table
 * @param {TargetDB} targetDB
 * @param {keyof import("./target").DB} table
 * @param {string} column
 * @param {number?} idsite
 */
export const getMaxValue = async (targetDB, table, column, idsite = null) => {
  const maxRow = await targetDB
    .selectFrom(table)
    .select(
      ({ eb }) =>
        /** @type {import("kysely").AliasedExpression<number, "value">} */ (
          // @ts-ignore
          eb.fn.max(column).as("value")
        ),
    )
    .where(
      (eb) => (idsite && eb("idsite", "=", idsite)) || eb(eb.lit(1), "=", 1),
    )
    .executeTakeFirst();
  // @ts-ignore for some reason maxRow.value is a string in the result
  const maxValue = (maxRow && parseInt(maxRow.value)) || 0;
  return maxValue;
};

/**
 * Copy rows from source to target in batches
 * @param {object} options
 * @param {SourceDB} options.sourceDB
 * @param {TargetDB} options.targetDB
 * @param {string} options.sourceTable
 * @param {string} options.targetTable
 * @param {number} options.idsite
 * @param {string} options.idColumn
 * @param {number} options.startId
 * @param {(msg: string) => void} [options.log]
 * @returns {Promise<number>} The last ID processed
 */
export const copyTableBatch = async ({
  sourceDB,
  targetDB,
  sourceTable,
  targetTable,
  idsite,
  idColumn,
  startId,
  log = console.log,
}) => {
  let lastId = startId;
  let hasRows = true;

  log(`copy ${sourceTable} from ${lastId}...`);

  while (hasRows) {
    const sourceRows = await sourceDB
      // @ts-ignore
      .selectFrom(sourceTable)
      .selectAll()
      .where("idsite", "=", idsite)
      .where(idColumn, ">", lastId)
      .orderBy(idColumn)
      .limit(BATCH_ROWS)
      .execute();

    if (sourceRows.length === 0) {
      log(" - nothing to copy");
      hasRows = false;
      continue;
    }

    lastId = sourceRows[sourceRows.length - 1][idColumn];
    const insertion = await targetDB
      // @ts-ignore
      .insertInto(targetTable)
      .values(sourceRows)
      .executeTakeFirst();
    log(` - inserted ${insertion.numInsertedOrUpdatedRows}`);
  }

  return lastId;
};

/**
 * Fetch valid action IDs for a site
 * @param {SourceDB} sourceDB
 * @param {number} idsite
 * @param {number} [lastActionId]
 * @param {(msg: string) => void} [log]
 * @returns {Promise<Set<number>>}
 */
export const fetchValidActionIds = async (
  sourceDB,
  idsite,
  lastActionId = 0,
  log = console.log,
) => {
  const validActions = new Set();
  let actionOffset = 0;

  log(" - fetching valid action IDs...");

  while (true) {
    const batch = await sourceDB
      .selectFrom("matomo_log_link_visit_action")
      .select(["idaction_name", "idaction_url"])
      .distinct()
      .where("idsite", "=", idsite)
      .where("server_time", ">=", new Date("2025-01-01"))
      .where(({ eb }) =>
        eb.or([
          eb("idaction_name", ">", lastActionId),
          eb("idaction_url", ">", lastActionId),
        ]),
      )
      .limit(ACTION_BATCH)
      .offset(actionOffset)
      .execute();

    if (batch.length === 0) break;

    for (const r of batch) {
      if (r.idaction_name !== null && r.idaction_name > lastActionId)
        validActions.add(r.idaction_name);
      if (r.idaction_url !== null && r.idaction_url > lastActionId)
        validActions.add(r.idaction_url);
    }
    actionOffset += ACTION_BATCH;
    log(` - fetched ${actionOffset} rows, ${validActions.size} unique actions`);
  }

  return validActions;
};

/**
 * Copy actions from source to target
 * @param {object} options
 * @param {SourceDB} options.sourceDB
 * @param {TargetDB} options.targetDB
 * @param {Set<number>} options.validActions
 * @param {number} options.lastActionId
 * @param {(msg: string) => void} [options.log]
 * @returns {Promise<number>} The last action ID processed
 */
export const copyActions = async ({
  sourceDB,
  targetDB,
  validActions,
  lastActionId,
  log = console.log,
}) => {
  const chunkSize = 5000;
  let chunkIndex = 0;
  let currentLastId = lastActionId;

  const validActionsArray = Array.from(validActions)
    .filter((id) => id > lastActionId)
    .sort((a, b) => a - b);

  log(` - total unique actions to process: ${validActionsArray.length}`);

  let hasRows = true;
  while (hasRows) {
    const actionsToProcess = validActionsArray.slice(
      chunkIndex,
      chunkIndex + chunkSize,
    );

    if (actionsToProcess.length === 0) {
      log("nothing to copy");
      hasRows = false;
      continue;
    }

    const sourceRows = await sourceDB
      .selectFrom("matomo_log_action")
      .selectAll()
      .where(({ eb }) => eb("idaction", "in", actionsToProcess))
      .orderBy("idaction")
      .execute();

    chunkIndex += chunkSize;

    if (sourceRows.length === 0) {
      log(` - chunk had no matching actions, continuing...`);
      continue;
    }

    currentLastId = sourceRows[sourceRows.length - 1].idaction;
    const insertion = await targetDB
      .insertInto("matomo.matomo_log_action")
      .values(sourceRows)
      .executeTakeFirst();
    log(
      ` - inserted ${insertion.numInsertedOrUpdatedRows} (processed ${Math.min(chunkIndex, validActionsArray.length)}/${validActionsArray.length})`,
    );
  }

  return currentLastId;
};

/**
 * Import site data from Matomo MySQL to PostgreSQL
 * @param {object} options
 * @param {SourceDB} options.sourceDB
 * @param {TargetDB} options.targetDB
 * @param {number} options.idsite
 * @param {(msg: string) => void} [options.log]
 */
export const importSite = async ({
  sourceDB,
  targetDB,
  idsite,
  log = console.log,
}) => {
  let lastVisitId = await getMaxValue(
    targetDB,
    "matomo.matomo_log_visit",
    "idvisit",
    idsite,
  );
  let lastConversionId = await getMaxValue(
    targetDB,
    "matomo.matomo_log_conversion",
    "idvisit",
    idsite,
  );
  let lastVisitActionId = await getMaxValue(
    targetDB,
    "matomo.matomo_log_link_visit_action",
    "idlink_va",
    idsite,
  );
  let lastActionId = await getMaxValue(
    targetDB,
    "matomo.matomo_log_action",
    "idaction",
  );

  // Copy visits
  lastVisitId = await copyTableBatch({
    sourceDB,
    targetDB,
    sourceTable: "matomo_log_visit",
    targetTable: "matomo.matomo_log_visit",
    idsite,
    idColumn: "idvisit",
    startId: lastVisitId,
    log,
  });
  log("\n");

  // Copy conversions
  lastConversionId = await copyTableBatch({
    sourceDB,
    targetDB,
    sourceTable: "matomo_log_conversion",
    targetTable: "matomo.matomo_log_conversion",
    idsite,
    idColumn: "idvisit",
    startId: lastConversionId,
    log,
  });
  log("\n");

  // Copy link visit actions
  lastVisitActionId = await copyTableBatch({
    sourceDB,
    targetDB,
    sourceTable: "matomo_log_link_visit_action",
    targetTable: "matomo.matomo_log_link_visit_action",
    idsite,
    idColumn: "idlink_va",
    startId: lastVisitActionId,
    log,
  });
  log("\n");

  // Copy actions
  log(`copy matomo_log_action from ${lastActionId}...`);
  const validActions = await fetchValidActionIds(sourceDB, idsite, lastActionId, log);
  await copyActions({
    sourceDB,
    targetDB,
    validActions,
    lastActionId,
    log,
  });

  console.table({
    lastVisitId,
    lastConversionId,
    lastVisitActionId,
  });
};
