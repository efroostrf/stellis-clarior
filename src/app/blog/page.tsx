import { eq } from "drizzle-orm";
import { PlusCircle } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import { FC } from "react";

import { db } from "@/drizzle/db";
import { posts } from "@/drizzle/schema";

import { isAdminAction } from "../_actions/auth/isAdmin";
import { BlogPost } from "./_components/BlogPost";

export const metadata: Metadata = {
  title: "Блог Даны Фалевой - Кинолог Таллин",
  description: `Мой личный кинологический блог посвященный моей бордер-колли Руне. Тут вы сможете найти конкретные способы и приемы воспитания собаки читая уникальные авторские статьи.`,
  keywords: [
    "кинолог таллин",
    "дана фалева",
    "бытовое послушание",
    "подчинение собаки",
    "воспитание пса",
    "секреты кинологии",
    "ярче звезд",
    "бордер-колли руна",
  ],
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Блог Даны Фалевой - Кинолог Таллин",
    description: `Мой личный кинологический блог посвященный моей бордер-колли Руне. Тут вы сможете найти конкретные способы и приемы воспитания собаки читая уникальные авторские статьи.`,
    type: "website",
    url: "https://stellisclarior.com/blog",
    locale: "ru_RU",
    siteName: "Ярче звезд - Дана Фалева",
  },
};

const BlogPage: FC = async () => {
  const isAdmin = await isAdminAction();

  const data = await db.query.posts.findMany({
    ...(isAdmin
      ? {}
      : {
          where: eq(posts.isDraft, false),
        }),
  });

  return (
    <>
      <section className="relative left-0 top-0 min-h-[80vh] w-full bg-brand-900 pt-header">
        <div className="mx-auto flex w-full max-w-screen-xl flex-col gap-8 pb-4 pt-8">
          <h1 className="mx-auto font-shantell text-4xl font-extrabold text-brand-100">
            Кинологический блог
          </h1>
          <ul className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {data.map((data) => (
              <li key={data.id}>
                <BlogPost data={data} />
              </li>
            ))}
            {isAdmin && (
              <Link
                href="/blog/new"
                className="flex cursor-pointer flex-col items-center justify-center gap-3 bg-brand-500/50 px-6 py-3 transition-all hover:bg-brand-500/80 active:scale-95"
              >
                <PlusCircle className="h-10 w-10 stroke-brand-300" />
                <h2 className="text-2xl font-bold text-brand-100">
                  Создать пост
                </h2>
              </Link>
            )}
          </ul>
        </div>
      </section>
    </>
  );
};

export default BlogPage;
