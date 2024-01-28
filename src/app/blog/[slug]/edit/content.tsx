"use client";

import { FC } from "react";

import { insertPostAction } from "@/app/_actions/posts/insert";
import { posts } from "@/drizzle/schema";

import BlogForm, { BlogFormValues } from "../../form";

type Props = {
  data: typeof posts.$inferSelect;
};

export const UpdateBlogPostContent: FC<Props> = (props) => {
  const { data } = props;

  const onSubmit = async (values: BlogFormValues) => {
    const edited = await insertPostAction({
      ...values,
      id: data.id,
    });

    window.location.href = `/blog/${edited.slug}`;
  };

  return (
    <>
      <BlogForm
        {...{
          onSubmit,
          initialData: {
            title: data.title,
            shortDescription: data.shortDescription,
            tags: data.tags,
            slug: data.slug,
            content: data.content,
            isDraft: data.isDraft,
          },
        }}
      />
    </>
  );
};
