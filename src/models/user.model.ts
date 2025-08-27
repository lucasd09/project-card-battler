import { usersTable } from "@/db/schemas/users.schema";
import type { InferInsertModel, InferSelectModel } from "drizzle-orm";

export type User = InferSelectModel<typeof usersTable>;
export type UserInsert = InferInsertModel<typeof usersTable>;
