import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";
import { userId } from "./users.schema";

export const inventoriesTable = sqliteTable("inventory", {
  id: text("id").primaryKey(),
  userId: userId(),
  itemId: text("item_id").notNull(),
  quantity: integer("quantity").notNull().default(1),
  createdAt: integer("created_at", { mode: "timestamp" })
    .$defaultFn(() => new Date())
    .notNull(),
  updatedAt: integer("updated_at", { mode: "timestamp" })
    .$defaultFn(() => new Date())
    .notNull(),
});
