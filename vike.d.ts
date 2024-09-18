import type { ClerkClient } from "@clerk/backend";
import type { initDb } from "./database/drizzle/db";

declare module "telefunc" {
  namespace Telefunc {
    interface Context {
      db: ReturnType<typeof initDb>;
      clerk: ClerkClient,
      clerkAuth: ReturnType<ReturnType<ClerkClient["authenticateRequest"]>["toAuth"]>;
      honoContext: import("hono").Context;
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

declare module "hono" {
  interface ContextVariableMap {
    db: ReturnType<typeof initDb>;
  }
}
// biome-ignore lint/complexity/noUselessEmptyExport: <explanation>
export type {};
