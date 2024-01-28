import { OutputData } from "@editorjs/editorjs";
import {
  boolean,
  json,
  pgTable,
  serial,
  text,
  timestamp,
} from "drizzle-orm/pg-core";

export const posts = pgTable("posts", {
  id: serial("id").unique().primaryKey(),
  title: text("title").notNull().unique(),
  slug: text("slug").notNull().unique(),
  isDraft: boolean("is_draft").notNull().default(false),
  content: json("content").$type<OutputData>(),
  author: text("author"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});
