import { usersTable } from "@/db/schemas/users.schema";
import { User, UserInsert } from "@/models/user.model";
import { createService } from "@/lib/base-service";

export const userService = createService<User, UserInsert>(usersTable);
