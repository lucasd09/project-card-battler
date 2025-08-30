import { verificationsTable } from "@/db/schemas/verifications.schema";
import { Verification, VerificationInsert } from "@/models/verification.model";
import { createService } from "@/lib/base-service";

export const verificationService = createService<Verification, VerificationInsert>(verificationsTable);
