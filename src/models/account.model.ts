import { accountsTable } from "@/db/schemas/accounts.schema";
import type { InferInsertModel, InferSelectModel } from "drizzle-orm";

export type Account = InferSelectModel<typeof accountsTable>;
export type AccountInsert = InferInsertModel<typeof accountsTable>;
