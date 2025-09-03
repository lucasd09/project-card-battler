import { Character } from "@/models/character.model";
import { UserCharacter } from "@/models/user-character.model";

type OmittedCharacter = Omit<Character, 'id'>

export type DataCharacter = UserCharacter & OmittedCharacter

export type UnitProps = {
	data: DataCharacter;
	size?: "md" | "lg";
};
