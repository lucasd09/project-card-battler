import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { sqliteId } from "./helpers";

export const usersTable = sqliteTable("users", {
  id: sqliteId(),
  email: text().notNull(),
  name: text(),
  password: text(),
  avatar: text(),
});

export const userId = () =>
  integer("user_id")
    .notNull()
    .references(() => usersTable.id);