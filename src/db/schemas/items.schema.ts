import { sqliteTable, text } from "drizzle-orm/sqlite-core";

export const itemsTable = sqliteTable("items", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description"),
  imgUrl: text("img_url"),
  rarity: text("rarity").notNull(),
  type: text("type").notNull(),
});
