import { eq } from "drizzle-orm";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { FC } from "react";

import { isAdminAction } from "@/app/_actions/auth/isAdmin";
import { db } from "@/drizzle/db";
import { posts } from "@/drizzle/schema";

import { UpdateBlogPostContent } from "./content";

export const metadata: Metadata = {
  title: "Редактирование поста - Ярче звезд",
  robots: "noindex",
};

const EditBlogPostPage: FC<{ params: { slug: string } }> = async (props) => {
  const slug = props.params.slug;

  const isAdmin = await isAdminAction();

  if (!isAdmin) return notFound();

  const post = await db.query.posts.findFirst({
    where: eq(posts.slug, slug),
  });

  if (!post) return notFound();

  return (
    <section className="relative left-0 top-0 flex min-h-[80vh] w-full bg-brand-900 pt-header">
      <UpdateBlogPostContent data={post} />
    </section>
  );
};

export default EditBlogPostPage;
