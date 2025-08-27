import * as pg from "drizzle-orm/pg-core";
import * as sqlite from "drizzle-orm/sqlite-core";

export const sqliteId = () => sqlite.integer("id").primaryKey();

export const pgId = () => pg.serial("id").primaryKey();

export const sqliteCreatedAt = () =>
  sqlite.text("created_at").notNull().default(new Date().toISOString());

export const pgCreatedAt = () =>
  pg.timestamp("created_at").notNull().defaultNow();

export const sqliteUpdatedAt = () =>
  sqlite
    .text("updated_at")
    .notNull()
    .default(new Date().toISOString())
    .$onUpdate(() => new Date().toISOString());

export const pgUpdatedAt = () =>
  pg
    .timestamp("updated_at")
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date());

export const sqliteExpiresAt = () =>
  sqlite
    .integer("expires_at", {
      mode: "timestamp",
    })
    .notNull();

export const pgExpiresAt = () =>
  pg
    .timestamp("expires_at", {
      withTimezone: true,
      mode: "date",
    })
    .notNull();