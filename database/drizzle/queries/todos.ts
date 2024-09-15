import { todoTable } from "../schema/todos";
import type { initDb } from "../db";

export function insertTodo(db: ReturnType<typeof initDb>, text: string) {
  return db.insert(todoTable).values({ text });
}

export function getAllTodos(db: ReturnType<typeof initDb>) {
  return db.select().from(todoTable);
}
