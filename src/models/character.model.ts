import { charactersTable } from "@/db/schemas/characters.schema";
import type { InferInsertModel, InferSelectModel } from "drizzle-orm";

export type Character = InferSelectModel<typeof charactersTable>;
export type CharacterInsert = InferInsertModel<typeof charactersTable>;
