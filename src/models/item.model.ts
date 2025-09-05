import { itemsTable } from "@/db/schemas/items.schema";
import type { InferInsertModel, InferSelectModel } from "drizzle-orm";

export type Item = InferSelectModel<typeof itemsTable>;
export type ItemInsert = InferInsertModel<typeof itemsTable>;
