"use server";

import { eq } from "drizzle-orm";

import { BlogFormValues } from "@/app/blog/form";
import { db } from "@/drizzle/db";
import { posts } from "@/drizzle/schema";

export const insertPostAction = async (
  values: BlogFormValues & { id?: number }
) => {
  const existingPost = values?.id
    ? await db.query.posts.findFirst({
        where: eq(posts.id, values.id),
      })
    : undefined;

  if (existingPost) {
    const result = await db
      .update(posts)
      .set(values)
      .where(eq(posts.id, existingPost.id))
      .returning();

    return result[0];
  }

  const result = await db.insert(posts).values(values).returning();

  return result[0];
};
