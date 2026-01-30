// @ts-check
import pg from "pg";
import { createPool } from "mysql2";
import { Kysely, PostgresDialect, MysqlDialect } from "kysely";
import assert from "assert";
import { importSite } from "./lib.mjs";

const SITE_ID = process.env.SITE_ID;
const SOURCE_DATABASE_URL = process.env.SOURCE_DATABASE_URL;
const TARGET_DATABASE_URL = process.env.TARGET_DATABASE_URL;

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

console.log(`\nExtract matomo data to PG ${process.env.BUILD_VERSION || ""}\n`);

importSite({ sourceDB, targetDB, idsite: parseInt(SITE_ID) })
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
