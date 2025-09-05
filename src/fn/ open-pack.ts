import { createServerFn } from "@tanstack/react-start";
import { requireAuth } from "./require-auth";
import { getRandomRarity } from "@/lib/gacha/get-random-rarity";
import { characterService } from "@/services/character";
import { getRandomCharacter } from "@/lib/gacha/get-random-character";
import { userCharacterService } from "@/services/user-character";
import { createId } from "@paralleldrive/cuid2";

export const openPack = createServerFn({
  method: "POST",
  response: "data",
}).handler(async () => {
  const data = await requireAuth();

  if (!data) {
    throw Error("unauthenticated");
  }

  const rarity = getRandomRarity();

  const characterPool = await characterService.getByColumn("rarity", rarity);

  const selectedCharacter = getRandomCharacter(characterPool);

  const createdUserCharacter = await userCharacterService.create({
    id: createId(),
    userId: data.user.id,
    characterId: selectedCharacter.id,
    level: 1,
    damage: selectedCharacter.baseDamage,
    health: selectedCharacter.baseHealth,
    speed: selectedCharacter.baseSpeed,
  });

  return createdUserCharacter;
});
