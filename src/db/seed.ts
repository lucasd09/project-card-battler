import { db } from "../db";
import { charactersTable } from "./schemas/characters.schema";

async function seedCharacters() {
  const characters = [
    {
      id: "cmf1lu4gk000008k32dsi3q9a",
      name: "Monkey D. Luffy",
      imgUrl: "",
      element: "fire",
      rarity: "common",
    },
    {
      id: "cmf1luhou000108k3eyxm6ucg",
      name: "Killua",
      imgUrl: "",
      element: "lightning",
      rarity: "rare",
    },
    {
      id: "cmf1lul7m000208k32zfpdezd",
      name: "Uzumaki Naruto",
      imgUrl: "",
      element: "wind",
      rarity: "common",
    },
    {
      id: "cmf1lupgo000308k3ey4s3axs",
      name: "Gyomei",
      imgUrl: "",
      element: "earth",
      rarity: "epic",
    },
    {
      id: "cmf1luuz0000408k3fofu8vdy",
      name: "Vegeta",
      imgUrl: "",
      element: "water",
      rarity: "legendary",
    },
  ];

  console.log("🌱 Iniciando seed da tabela characters...");

  for (const character of characters) {
    await db.insert(charactersTable).values(character);
  }

  console.log("✅ Seed concluído com sucesso!");
}

seedCharacters().catch((err) => {
  console.error("❌ Erro ao rodar seed:", err);
  process.exit(1);
});
