import { getAuth } from "@hono/clerk-auth";
import { getContext } from "telefunc";

export async function test() {
  const context = getContext();
  const auth = getAuth(context.honoContext)
  console.log(auth)
}