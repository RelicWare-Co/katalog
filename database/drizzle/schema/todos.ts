import {  pgTable, serial, text, uuid } from "drizzle-orm/pg-core";

// Example of defining a schema in Drizzle ORM:
export const todoTable = pgTable("todos", {
  id: uuid("id").defaultRandom().primaryKey(),
  text: text("text").notNull(),
});

// You can then infer the types for selecting and inserting
export type TodoItem = typeof todoTable.$inferSelect;
export type TodoInsert = typeof todoTable.$inferInsert;
