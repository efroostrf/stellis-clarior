import { boolean, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const post = pgTable("post", {
  id: serial("id").unique().primaryKey(),
  name: text("name").notNull().unique(),
  url: text("url").notNull().unique(),
  isDraft: boolean("is_draft").notNull().default(false),
  author: text("author"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});
