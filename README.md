# matomo-to-pg

![](./logo.png)

Sync some matomo tables from MySQL to PostgreSQL.

For example to create custom metabase dashboards:

![](./shot.png)

The tables currently synced are:

- `matomo_log_visit`
- `matomo_log_conversion`
- `matomo_log_link_visit_action`
- `matomo_log_action`

## Usage

Run with docker:

```bash
docker run \
    -e SOURCE_DATABASE_URL="mysql://user:pass@host:port/database" \
    -e TARGET_DATABASE_URL="postgresql://user:pass@host:port/database" \
    -e SITE_ID="1" \
    ghcr.io/betagouv/matomo-to-pg/sync
```

## Dev

Run from source with `node --env-file=.env src/index.mjs`

To update the source or target database typings, run `yarn kysely-codegen --print` with the `DATABASE_URL` of your choice.

## references

- https://developer.matomo.org/guides/database-schema#log-data-persistence-visits
- http://www.sqlines.com/online
- https://matomo.org/faq/how-to/how-do-i-write-sql-queries-to-select-visitors-list-of-pageviews-searches-events-in-the-matomo-database/#sql-query-to-select-all-visits-and-actions-for-a-specific-website-id

## related

- https://github.com/SocialGouv/matomo-postgres
