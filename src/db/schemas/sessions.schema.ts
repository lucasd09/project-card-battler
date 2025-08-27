import { sqliteTable, text } from "drizzle-orm/sqlite-core";
import { sqliteExpiresAt } from "./helpers";
import { userId } from "./users.schema";

export const sessionsTable = sqliteTable("sessions", {
  id: text("id").primaryKey(),
  userId: userId(),
  expiresAt: sqliteExpiresAt(),
});