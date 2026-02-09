import { pgTable, uuid, text, timestamp, boolean } from "drizzle-orm/pg-core";

// Example schema - customize for your app

/**
 * Users table (extends Supabase auth.users)
 * Store additional user profile data here
 */
export const profiles = pgTable("profiles", {
  id: uuid("id").primaryKey(), // References auth.users.id
  username: text("username").unique(),
  fullName: text("full_name"),
  avatarUrl: text("avatar_url"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

/**
 * Example: Items table
 * A simple CRUD resource owned by a user
 */
export const items = pgTable("items", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: uuid("user_id")
    .references(() => profiles.id, { onDelete: "cascade" })
    .notNull(),
  title: text("title").notNull(),
  description: text("description"),
  isCompleted: boolean("is_completed").default(false).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Type exports for use in components
export type Profile = typeof profiles.$inferSelect;
export type NewProfile = typeof profiles.$inferInsert;
export type Item = typeof items.$inferSelect;
export type NewItem = typeof items.$inferInsert;
