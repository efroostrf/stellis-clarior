import { format } from "date-fns";
import { eq } from "drizzle-orm";
import { notFound } from "next/navigation";
import { FC } from "react";

import { isAdminAction } from "@/app/_actions/auth/isAdmin";
import { db } from "@/drizzle/db";
import { posts } from "@/drizzle/schema";

import { BlogPostRenderer } from "./_components/renderer";

const BlogPostPage: FC<{ params: { slug: string } }> = async (props) => {
  const slug = props.params.slug;

  const isAdmin = await isAdminAction();
  const post = await db.query.posts.findFirst({
    where: eq(posts.slug, slug),
  });

  if (!post || (post.isDraft && !isAdmin)) {
    return notFound();
  }

  return (
    <>
      <section className="relative left-0 top-0 flex min-h-[80vh] w-full bg-brand-900 pt-header">
        <div className="blog-content mx-auto flex w-full max-w-screen-lg flex-col gap-3 py-12 pb-8">
          <h1>{post.title}</h1>
          <time className="text-sm text-brand-400">
            {format(new Date(post.updatedAt), "dd.MM.yyyy")}
          </time>
          <BlogPostRenderer
            data={
              post.content || {
                blocks: [],
              }
            }
          />
        </div>
      </section>
    </>
  );
};

export default BlogPostPage;
