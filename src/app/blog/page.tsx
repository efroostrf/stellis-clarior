import { Metadata } from "next";
import { FC } from "react";

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
  return (
    <>
      <section className="relative left-0 top-0 min-h-[80vh] w-full bg-brand-900 pt-header">
        <div className="mx-auto flex w-full max-w-screen-xl flex-col gap-8 pb-4 pt-8">
          <h1 className="mx-auto font-shantell text-4xl font-extrabold text-brand-100">
            Кинологический блог
          </h1>
          <ul className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <BlogPost />
            <BlogPost />
            <BlogPost />
            <BlogPost />
            <BlogPost />
          </ul>
        </div>
      </section>
    </>
  );
};

export default BlogPage;
