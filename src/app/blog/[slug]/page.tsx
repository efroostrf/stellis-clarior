import { format } from "date-fns";
import { eq } from "drizzle-orm";
import { Pencil } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FC } from "react";

import { isAdminAction } from "@/app/_actions/auth/isAdmin";
import { db } from "@/drizzle/db";
import { posts } from "@/drizzle/schema";

import { BlogPostRenderer } from "./_components/renderer";

type Props = { params: { slug: string } };

export const generateMetadata = async (props: Props): Promise<Metadata> => {
  const slug = props.params.slug;

  const isAdmin = await isAdminAction();
  const post = await db.query.posts.findFirst({
    where: eq(posts.slug, slug),
  });

  if (!post || (post.isDraft && !isAdmin)) {
    return notFound();
  }

  return {
    title: `${post.title} - Блог Даны Фалевой - Кинолог`,
    description: post.shortDescription,
    keywords: post.tags.split(","),
    openGraph: {
      title: `${post.title} - Блог Даны Фалевой - Кинолог`,
      description: post.shortDescription,
      type: "website",
      url: `https://stellisclarior.com/blog/${post.slug}`,
      locale: "ru_RU",
      siteName: "Ярче звезд - Дана Фалева",
    },
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
  };
};

const BlogPostPage: FC<Props> = async (props) => {
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
        <div className="blog-content mx-auto flex w-full max-w-screen-lg flex-col gap-3 py-12 pb-20">
          {isAdmin && (
            <Link
              href={`/blog/${post.slug}/edit`}
              className="flex flex-row items-center gap-2"
            >
              <Pencil className="h-5 w-5 stroke-brand-400" />
              <p className="text-lg text-brand-400">Редактировать</p>
            </Link>
          )}
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
