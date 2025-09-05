import { inventoriesTable } from "@/db/schemas/inventories.schema";
import { createService } from "@/lib/base-service";
import { Inventory, InventoryInsert } from "@/models/inventory.model";

export const inventoryService = createService<Inventory, InventoryInsert>(
  inventoriesTable,
);
