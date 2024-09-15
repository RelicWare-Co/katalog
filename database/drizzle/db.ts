import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

export function initDb() {
  const client = postgres(<string>process.env.DATABASE_URL);
  return drizzle(client);
}
