import { rarityChances } from "./consts";

export function getRandomRarity() {
  const roll = Math.random() * 100; // 0 ~ 99.999...
  let sum = 0;

  for (const { rarity, chance } of rarityChances) {
    sum += chance;
    if (roll < sum) {
      return rarity;
    }
  }

  return rarityChances[rarityChances.length - 1].rarity;
}
