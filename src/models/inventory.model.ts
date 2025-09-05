import { inventoriesTable } from "@/db/schemas/inventories.schema";
import type { InferInsertModel, InferSelectModel } from "drizzle-orm";

export type Inventory = InferSelectModel<typeof inventoriesTable>;
export type InventoryInsert = InferInsertModel<typeof inventoriesTable>;
