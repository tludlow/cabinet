import { pgTable, varchar } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: varchar("id", { length: 24 }).primaryKey(),
  email: varchar("email", { length: 256 }),
  hashedPassword: varchar("hashedPassword", { length: 256 }),
});
