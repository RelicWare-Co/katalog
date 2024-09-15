import { defineConfig } from "drizzle-kit";

if (!process.env.DATABASE_URL) {
  throw new Error("Missing DATABASE_URL in .env file");
}

export default defineConfig({
  dialect: "postgresql",
  schema: "./database/drizzle/schema/*",
  out: "./database/migrations",
  dbCredentials: {
    url: <string> process.env.DATABASE_URL,
  },
});
