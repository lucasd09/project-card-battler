import { sqliteTable, text } from "drizzle-orm/sqlite-core";

export const charactersTable = sqliteTable("characters", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  imgUrl: text("img_url").notNull(),
  element: text("element").notNull(),
  rarity: text("rarity").notNull(),
});
