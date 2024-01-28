import { Metadata } from "next";
import { notFound } from "next/navigation";
import { FC } from "react";

import { isAdminAction } from "@/app/_actions/auth/isAdmin";

import { NewBlogPostContent } from "./content";

export const metadata: Metadata = {
  title: "Новый пост - Ярче звезд",
  robots: "noindex",
};

const NewBlogPostPage: FC = async () => {
  const isAdmin = await isAdminAction();

  if (!isAdmin) return notFound();

  return (
    <>
      <section className="relative left-0 top-0 flex min-h-[80vh] w-full bg-brand-900 pt-header">
        <NewBlogPostContent />
      </section>
    </>
  );
};

export default NewBlogPostPage;
