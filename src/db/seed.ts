import { Character } from "@/models/character.model";
import { db } from "../db";
import { charactersTable } from "./schemas/characters.schema";

export async function seedCharacters() {
  const characters: Character[] = [
    {
      id: "cmf1lu4gk000008k32dsi3q9a",
      name: "Monkey D. Luffy",
      imgUrl: "",
      element: "fire",
      rarity: "common",
      baseDamage: 10,
      baseHealth: 100,
      baseSpeed: 10,
    },
    {
      id: "cmf1luhou000108k3eyxm6ucg",
      name: "Killua",
      imgUrl: "",
      element: "lightning",
      rarity: "rare",
      baseDamage: 10,
      baseHealth: 100,
      baseSpeed: 10,
    },
    {
      id: "cmf1lul7m000208k32zfpdezd",
      name: "Uzumaki Naruto",
      imgUrl: "",
      element: "wind",
      rarity: "common",
      baseDamage: 10,
      baseHealth: 100,
      baseSpeed: 10,
    },
    {
      id: "cmf1lupgo000308k3ey4s3axs",
      name: "Gyomei",
      imgUrl: "",
      element: "earth",
      rarity: "epic",
      baseDamage: 10,
      baseHealth: 100,
      baseSpeed: 10,
    },
    {
      id: "cmf1luuz0000408k3fofu8vdy",
      name: "Vegeta",
      imgUrl: "",
      element: "water",
      rarity: "legendary",
      baseDamage: 10,
      baseHealth: 100,
      baseSpeed: 10,
    },
  ];

  console.log("🌱 Iniciando seed da tabela characters...");

  for (const character of characters) {
    await db.insert(charactersTable).values(character);
  }

  console.log("✅ Seed concluído com sucesso!");
}
