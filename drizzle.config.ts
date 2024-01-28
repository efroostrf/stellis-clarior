import "dotenv/config";

import type { Config } from "drizzle-kit";
export default {
  schema: "./src/drizzle/schema.ts",
  out: "./src/drizzle/migrations",
  driver: "pg",
  dbCredentials: {
    connectionString: process.env.POSTGRES_URL!,
  },
} satisfies Config;
