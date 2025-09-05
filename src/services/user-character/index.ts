import { userCharactersTable } from "@/db/schemas/user-characters.schema";
import {
  UserCharacter,
  UserCharacterInsert,
} from "@/models/user-character.model";
import { createService } from "@/lib/base-service";

export const userCharacterService = createService<
  UserCharacter,
  UserCharacterInsert
>(userCharactersTable);
