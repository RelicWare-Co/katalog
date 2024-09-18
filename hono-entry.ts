import "dotenv/config";

import { Hono } from "hono";
import { serveStatic } from "hono/bun";
import { clerkMiddleware } from "@hono/clerk-auth";
import { initDb } from "./database/drizzle/db";
import { telefunc } from "telefunc";
import { renderPage } from "vike/server";
const app = new Hono();
const db = initDb();
app.use(
  "*",
  clerkMiddleware({
    secretKey: process.env.CLERK_SECRET_KEY,
    publishableKey: process.env.VITE_CLERK_PUBLISHABLE_KEY,
  })
);

app.use("*", async (c, next) => {
  return next();
});

app.use((c, next) => {
  c.set("db", db);
  return next();
});

app.post("/_telefunc", async (c) => {
  const httpResponse = await telefunc({
    url: c.req.url.toString(),
    method: c.req.method,
    body: await c.req.text(),
    context: {
      db: c.get("db"),
      clerk: c.get("clerk"),
      clerkAuth: c.get("clerkAuth"),
      honoContext: c,
    },
  });
  const { body, statusCode, contentType } = httpResponse;
  return new Response(body, {
    status: statusCode,
    headers: {
      "content-type": contentType,
    },
  });
});

app.use(
  "/assets/*",
  serveStatic({
    root: "./dist/client/",
  })
);

/**
 * Vike route
 *
 * @link {@see https://vike.dev}
 **/
app.all("*", async (c) => {
  const pageContextInit = {
    ...c,
    urlOriginal: c.req.url,
    headersOriginal: c.req.header(),
  };
  const pageContext = await renderPage(pageContextInit);
  const response = pageContext.httpResponse;
  const { readable, writable } = new TransformStream();
  response.pipe(writable);
  return new Response(readable, {
    status: response.statusCode,
    headers: response.headers,
  });
});

export default app;
