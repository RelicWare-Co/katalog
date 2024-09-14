import { telefunc } from "telefunc";
import type { Get, UniversalHandler } from "@universal-middleware/core";
import type { dbSqlite } from "../database/drizzle/db";

export const telefuncHandler: Get<[], UniversalHandler> = () => async (request, context, runtime) => {
  const httpResponse = await telefunc({
    url: request.url.toString(),
    method: request.method,
    body: await request.text(),
    context: {
      ...(context as { db: ReturnType<typeof dbSqlite> }),
      ...runtime,
    },
  });
  const { body, statusCode, contentType } = httpResponse;
  return new Response(body, {
    status: statusCode,
    headers: {
      "content-type": contentType,
    },
  });
};
