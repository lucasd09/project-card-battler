import { verificationsTable } from "@/db/schemas/verifications.schema";
import type { InferInsertModel, InferSelectModel } from "drizzle-orm";

export type Verification = InferSelectModel<typeof verificationsTable>;
export type VerificationInsert = InferInsertModel<typeof verificationsTable>;
