import { charactersTable } from "@/db/schemas/characters.schema";
import { Character, CharacterInsert } from "@/models/character.model";
import { createService } from "@/lib/base-service";

export const characterService = createService<Character, CharacterInsert>(charactersTable);
