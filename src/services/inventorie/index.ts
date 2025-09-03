import { inventoriesTable } from "@/db/schemas/inventories.schema";
import { Inventorie, InventorieInsert } from "@/models/inventorie.model";
import { createService } from "@/lib/base-service";

export const inventorieService = createService<Inventorie, InventorieInsert>(inventoriesTable);
