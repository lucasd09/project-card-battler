import { inventoriesTable } from "@/db/schemas/inventories.schema";
import type { InferInsertModel, InferSelectModel } from "drizzle-orm";

export type Inventorie = InferSelectModel<typeof inventoriesTable>;
export type InventorieInsert = InferInsertModel<typeof inventoriesTable>;
