import { Character } from "@/models/character.model";

export function getRandomCharacter(characters: Character[]) {
  const randomIndex = Math.floor(Math.random() * characters.length);
  return characters[randomIndex];
}
