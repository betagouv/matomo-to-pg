// @ts-check
import pg from "pg";
import { createPool } from "mysql2";
import { Kysely, PostgresDialect, MysqlDialect } from "kysely";
import assert from "assert";

const SITE_ID = process.env.SITE_ID;
const SOURCE_DATABASE_URL = process.env.SOURCE_DATABASE_URL;
const TARGET_DATABASE_URL = process.env.TARGET_DATABASE_URL;
const BATCH_ROWS = 500;

assert(!!SITE_ID, "process.env.SITE_ID not found");
assert(!!SOURCE_DATABASE_URL, "process.env.SOURCE_DATABASE_URL not found");
assert(!!TARGET_DATABASE_URL, "process.env.TARGET_DATABASE_URL not found");

/** @type {Kysely<import("./source").DB>} */
const sourceDB = new Kysely({
  dialect: new MysqlDialect({
    pool: createPool({
      uri: SOURCE_DATABASE_URL,
    }),
  }),
});

/** @type {Kysely<import("./target").DB>} */
const targetDB = new Kysely({
  dialect: new PostgresDialect({
    pool: new pg.Pool({
      connectionString: TARGET_DATABASE_URL,
      ssl: { rejectUnauthorized: false },
    }),
  }),
});

/**
 *
 * @param {keyof import("./target").DB} table
 * @param {string} column
 * @param {number?} idsite
 */
const getMaxValue = async (table, column, idsite = null) => {
  const maxRow = await targetDB
    .selectFrom(table)
    .select(
      ({ eb }) =>
        /** @type {import("kysely").AliasedExpression<number, "value">} */ (
          // @ts-ignore
          eb.fn.max(column).as("value")
        )
    )
    .where(
      (eb) => (idsite && eb("idsite", "=", idsite)) || eb(eb.lit(1), "=", 1)
    )
    .executeTakeFirst();
  // @ts-ignore for some reason maxRow.value is a string in the result
  const maxValue = (maxRow && parseInt(maxRow.value)) || 0;
  return maxValue;
};

/**
 *
 * @param {number} idsite
 */
const importSite = async (idsite) => {
  let lastVisitId = await getMaxValue(
    "matomo.matomo_log_visit",
    "idvisit",
    idsite
  );
  let lastConversionId = await getMaxValue(
    "matomo.matomo_log_conversion",
    "idvisit",
    idsite
  );
  let lastVisionActionId = await getMaxValue(
    "matomo.matomo_log_link_visit_action",
    "idlink_va",
    idsite
  );
  let lastActionId = await getMaxValue("matomo.matomo_log_action", "idaction");

  let rows = true;

  console.log(`copy matomo_log_visit from ${lastVisitId}...`);
  rows = true;
  while (rows) {
    const sourceRows = await sourceDB
      .selectFrom("matomo_log_visit")
      .selectAll()
      .where("idsite", "=", idsite)
      .where("idvisit", ">", lastVisitId)
      .orderBy("idvisit")
      .limit(BATCH_ROWS)
      .execute();
    if (sourceRows.length === 0) {
      console.log(" - nothing to copy");
      rows = false;
      continue;
    }
    lastVisitId = sourceRows[sourceRows.length - 1].idvisit;
    const insertion = await targetDB
      .insertInto("matomo.matomo_log_visit")
      .values(sourceRows)
      .executeTakeFirst();
    console.log(` - inserted ${insertion.numInsertedOrUpdatedRows}`);
  }
  console.log("\n");

  console.log(`copy matomo_log_conversion from ${lastConversionId}...`);
  rows = true;
  while (rows) {
    const sourceRows = await sourceDB
      .selectFrom("matomo_log_conversion")
      .selectAll()
      .where("idsite", "=", idsite)
      .where("idvisit", ">", lastConversionId)
      .orderBy("idvisit")
      .limit(BATCH_ROWS)
      .execute();
    if (sourceRows.length === 0) {
      console.log(" - nothing to copy");
      rows = false;
      continue;
    }
    lastConversionId = sourceRows[sourceRows.length - 1].idvisit;
    const insertion = await targetDB
      .insertInto("matomo.matomo_log_conversion")
      .values(sourceRows)
      .executeTakeFirst();
    console.log(` - inserted ${insertion.numInsertedOrUpdatedRows}`);
  }
  console.log("\n");

  console.log(
    `copy matomo_log_link_visit_action from ${lastVisionActionId}...`
  );
  rows = true;
  while (rows) {
    const sourceRows = await sourceDB
      .selectFrom("matomo_log_link_visit_action")
      .selectAll()
      .where("idsite", "=", idsite)
      .where("idlink_va", ">", lastVisionActionId)
      .orderBy("idlink_va")
      .limit(BATCH_ROWS)
      .execute();
    if (sourceRows.length === 0) {
      console.log(" - nothing to copy");
      rows = false;
      continue;
    }
    lastVisionActionId = sourceRows[sourceRows.length - 1].idlink_va;
    const insertion = await targetDB
      .insertInto("matomo.matomo_log_link_visit_action")
      .values(sourceRows)
      .executeTakeFirst();
    console.log(` - inserted ${insertion.numInsertedOrUpdatedRows}`);
  }
  console.log("\n");

  console.log(`copy matomo_log_action from ${lastActionId}...`);

  // we first get a list of possible idaction to optimize the next queries
  // we do this because matomo_log_action table doesnt have site id
  // Use DISTINCT in DB and Set in JS to minimize memory usage
  const validActions = new Set();
  let actionOffset = 0;
  const ACTION_BATCH = 10000;

  console.log(" - fetching valid action IDs...");
  while (true) {
    const batch = await sourceDB
      .selectFrom("matomo_log_link_visit_action")
      .select(["idaction_name", "idaction_url"])
      .distinct()
      .where("idsite", "=", idsite)
      .where("server_time", ">=", new Date("2025-01-01"))
      .limit(ACTION_BATCH)
      .offset(actionOffset)
      .execute();

    if (batch.length === 0) break;

    for (const r of batch) {
      if (r.idaction_name !== null) validActions.add(r.idaction_name);
      if (r.idaction_url !== null) validActions.add(r.idaction_url);
    }
    actionOffset += ACTION_BATCH;
    console.log(` - fetched ${actionOffset} rows, ${validActions.size} unique actions`);
  }

  // Sort once and filter to only IDs we haven't processed yet
  const validActionsArray = Array.from(validActions)
    .filter(id => id > lastActionId)
    .sort((a, b) => a - b);
  console.log(` - total unique actions to process: ${validActionsArray.length}`);

  // Process in chunks to avoid huge IN clauses
  const chunkSize = 5000;
  let chunkIndex = 0;

  rows = true;
  while (rows) {
    const actionsToProcess = validActionsArray.slice(chunkIndex, chunkIndex + chunkSize);

    if (actionsToProcess.length === 0) {
      console.log("nothing to copy");
      rows = false;
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
      console.log(` - chunk had no matching actions, continuing...`);
      continue;
    }
    lastActionId = sourceRows[sourceRows.length - 1].idaction;
    const insertion = await targetDB
      .insertInto("matomo.matomo_log_action")
      .values(sourceRows)
      .executeTakeFirst();
    console.log(` - inserted ${insertion.numInsertedOrUpdatedRows} (processed ${chunkIndex}/${validActionsArray.length})`);
  }

  console.table({
    lastVisitId,
    lastConversionId,
    lastVisionActionId,
  });
};

console.log(`\nExtract matomo data to PG ${process.env.BUILD_VERSION || ""}\n`);

importSite(parseInt(SITE_ID))
  .then(() => {
    console.log("\n✅ Successfully synced\n");
  })
  .catch((e) => {
    console.log(e);
    console.log("\n❌ Error\n");
    throw e;
  })
  .finally(() => {
    targetDB.destroy();
    sourceDB.destroy();
  });
