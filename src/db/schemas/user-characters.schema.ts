import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";
import { userId } from "./users.schema";
import { charactersTable } from "./characters.schema";

export const userCharactersTable = sqliteTable("user_characters", {
  id: text("id").primaryKey(),
  userId: userId(),
  characterId: text("character_id")
    .notNull()
    .references(() => charactersTable.id),
  level: integer("level").notNull().default(1),
  health: integer("health").notNull().default(100),
  damage: integer("damage").notNull().default(10),
  speed: integer("speed").notNull().default(10),
  createdAt: integer("created_at", { mode: "timestamp" })
    .$defaultFn(() => new Date())
    .notNull(),
  updatedAt: integer("updated_at", { mode: "timestamp" })
    .$defaultFn(() => new Date())
    .notNull(),
});
