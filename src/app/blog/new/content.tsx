"use client";
import { FC } from "react";

import { insertPostAction } from "@/app/_actions/posts/insert";

import BlogForm, { BlogFormValues } from "../form";

export const NewBlogPostContent: FC = () => {
  const onSubmit = async (values: BlogFormValues) => {
    const post = await insertPostAction(values);

    window.location.href = `/blog/${post.slug}`;
  };

  return (
    <>
      <BlogForm {...{ onSubmit }} />
    </>
  );
};
