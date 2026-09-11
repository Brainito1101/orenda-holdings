/**
 * Creates the tables the two site forms write to.
 *
 * Idempotent - every statement is `if not exists`, so it is safe to re-run.
 *
 *   npm run db:migrate
 */
import { neon } from "@neondatabase/serverless";

const url = process.env.DATABASE_URL;
if (!url) {
  console.error(
    "DATABASE_URL is not set.\n" +
      "Expected it in .env - run via `npm run db:migrate`, which passes --env-file=.env."
  );
  process.exit(1);
}

const sql = neon(url);

// One statement per call: the HTTP driver does not take multi-statement strings.
const STATEMENTS = [
  // Contact form on the home page (#contact).
  `create table if not exists enquiries (
     id         bigserial   primary key,
     name       text        not null,
     email      text        not null,
     message    text        not null,
     created_at timestamptz not null default now()
   )`,
  `create index if not exists enquiries_created_at_idx on enquiries (created_at desc)`,

  // Which vertical the enquiry is about. Nullable, so rows captured before the
  // dropdown existed stay valid. Stores the slug from verticals.ts (or
  // 'general'), which is stable if a company is ever renamed.
  `alter table enquiries add column if not exists vertical text`,
  `create index if not exists enquiries_vertical_idx on enquiries (vertical)`,

  // Newsletter field in the footer.
  `create table if not exists newsletter_subscribers (
     id         bigserial   primary key,
     email      text        not null unique,
     created_at timestamptz not null default now()
   )`,
];

try {
  for (const statement of STATEMENTS) {
    await sql.query(statement);
    console.log("  ok  " + statement.split("\n")[0].trim());
  }

  const tables = await sql`
    select table_name, (select count(*) from information_schema.columns c
                        where c.table_name = t.table_name) as columns
    from information_schema.tables t
    where table_schema = 'public' and table_name in ('enquiries', 'newsletter_subscribers')
    order by table_name
  `;
  console.log("\nTables ready:");
  for (const t of tables) console.log(`  ${t.table_name}  (${t.columns} columns)`);
  console.log("\nMigration complete.");
} catch (err) {
  console.error("\nMigration failed:", err.message);
  process.exit(1);
}
