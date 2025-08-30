import { accountsTable } from "@/db/schemas/accounts.schema";
import { Account, AccountInsert } from "@/models/account.model";
import { createService } from "@/lib/base-service";

export const accountService = createService<Account, AccountInsert>(accountsTable);
