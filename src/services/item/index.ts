import { itemsTable } from "@/db/schemas/items.schema";
import { Item, ItemInsert } from "@/models/item.model";
import { createService } from "@/lib/base-service";

export const itemService = createService<Item, ItemInsert>(itemsTable);
