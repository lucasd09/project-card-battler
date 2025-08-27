import { sessionsTable } from "@/db/schemas/sessions.schema";
import type { InferInsertModel, InferSelectModel } from "drizzle-orm";

export type Session = InferSelectModel<typeof sessionsTable>;
export type SessionInsert = InferInsertModel<typeof sessionsTable>;
