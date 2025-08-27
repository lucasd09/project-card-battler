import { sessionsTable } from "@/db/schemas/sessions.schema";
import { Session, SessionInsert } from "@/models/session.model";
import { createService } from "@/lib/base-service";

export const sessionService = createService<Session, SessionInsert, string>(sessionsTable);
