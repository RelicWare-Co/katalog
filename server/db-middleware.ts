import type { Get, UniversalMiddleware } from "@universal-middleware/core";
import { initDb } from "../database/drizzle/db";

declare global {
  namespace Universal {
    interface Context {
      db: ReturnType<typeof initDb>;
    }
  }
}

// Add `db` to the Context
export const dbMiddleware: Get<[], UniversalMiddleware> = () => async (_request, context, _runtime) => {
  const db = initDb();

  return {
    ...context,
    db: db,
  };
};
