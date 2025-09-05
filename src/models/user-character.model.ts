import { userCharactersTable } from "@/db/schemas/user-characters.schema";
import type { InferInsertModel, InferSelectModel } from "drizzle-orm";

export type UserCharacter = InferSelectModel<typeof userCharactersTable>;
export type UserCharacterInsert = InferInsertModel<typeof userCharactersTable>;
