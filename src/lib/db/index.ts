import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

// For use in server-side code only
const connectionString = process.env.DATABASE_URL;

export const hasDatabase = !!connectionString;

// Disable prefetch as it is not supported for "Transaction" pool mode
export const db = connectionString
  ? drizzle(postgres(connectionString, { prepare: false }), { schema })
  : null;

// Re-export schema for convenience
export * from "./schema";
