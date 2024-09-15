import type { initDb } from "./database/drizzle/db";

declare module "telefunc" {
  namespace Telefunc {
    interface Context {
      db: ReturnType<typeof initDb>;
    }
  }
}

declare global {
  namespace Vike {
    interface PageContext {
      db: ReturnType<typeof initDb>;
    }
  }
}

// biome-ignore lint/complexity/noUselessEmptyExport: <explanation>
export type {};
