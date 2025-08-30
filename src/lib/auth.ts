import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/db";
import { reactStartCookies } from "better-auth/react-start";
import { usersTable } from "@/db/schemas/users.schema";
import { sessionsTable } from "@/db/schemas/sessions.schema";
import { verificationsTable } from "@/db/schemas/verifications.schema";
import { accountsTable } from "@/db/schemas/accounts.schema";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "sqlite",
    schema: {
      user: usersTable,
      session: sessionsTable,
      verification: verificationsTable,
      account: accountsTable,
    },
  }),
  session: {
    expiresIn: 60 * 60 * 24 * 7, // 7 days
    updateAge: 60 * 60 * 24, // 1 day
    cookieCache: {
      enabled: true,
      maxAge: 5 * 60,
    },
  },
  emailAndPassword: {
    enabled: true,
  },
  plugins: [reactStartCookies()],
});
