import { loadEnvConfig } from "@next/env";
import { sql } from "@vercel/postgres";
import { drizzle } from "drizzle-orm/vercel-postgres";
import { migrate } from "drizzle-orm/vercel-postgres/migrator";

const dev = process.env.NODE_ENV !== "production";
loadEnvConfig("./", dev);

export const db = drizzle(sql);

migrate(db, {
  migrationsFolder: "./src/drizzle/migrations",
});
