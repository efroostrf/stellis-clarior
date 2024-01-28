"use server";

import { BlogFormValues } from "@/app/blog/form";
import { db } from "@/drizzle/db";
import { posts } from "@/drizzle/schema";

export const insertPostAction = async (values: BlogFormValues) => {
  const result = await db
    .insert(posts)
    .values({
      title: values.title,
      slug: values.slug,
      content: values.content,
      isDraft: values.isDraft,
    })
    .returning();

  const post = result[0];

  return post;
};
