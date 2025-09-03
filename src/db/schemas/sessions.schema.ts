import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { sqliteExpiresAt } from "./helpers";
import { userId } from "./users.schema";

export const sessionsTable = sqliteTable("session", {
  id: text("id").primaryKey(),
  expiresAt: sqliteExpiresAt(),
  token: text("token").notNull().unique(),
  createdAt: integer("created_at", { mode: "timestamp" }).notNull(),
  updatedAt: integer("updated_at", { mode: "timestamp" }).notNull(),
  ipAddress: text("ip_address"),
  userAgent: text("user_agent"),
  userId: userId(),
});
