"use client";
import { FC } from "react";

import { insertPostAction } from "@/app/_actions/posts/insert";

import BlogForm, { BlogFormValues } from "../form";

export const NewBlogPostContent: FC = () => {
  const onSubmit = async (values: BlogFormValues) => {
    await insertPostAction(values);
  };

  return (
    <>
      <BlogForm {...{ onSubmit }} />
    </>
  );
};
