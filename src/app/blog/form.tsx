"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import dynamic from "next/dynamic";
import { FC, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { translite } from "@/utils/translite";

const Editor = dynamic(() => import("@/components/editor-js"), {
  ssr: false,
  loading: () => (
    <div className="flex min-h-[40h] w-full animate-pulse bg-brand-800" />
  ),
});

export const blogFormSchema = z.object({
  title: z.string().min(3).max(100),
  tags: z.string().max(100).optional(),
  slug: z.string().max(125),
  content: z.any({}),
  isDraft: z.boolean(),
});

export type BlogFormValues = z.infer<typeof blogFormSchema>;

type Props = {
  onSubmit: (values: BlogFormValues) => void;
};

export const BlogForm: FC<Props> = (props) => {
  const { onSubmit } = props;

  const {
    register,
    formState: { errors, isValid },
    setValue,
    getValues,
    watch,
    handleSubmit,
  } = useForm<BlogFormValues>({
    resolver: zodResolver(blogFormSchema),
  });

  const prevTitle = useRef<string>();

  const title = watch("title");

  useEffect(() => {
    if (prevTitle.current === title) return;

    const slug = getValues("slug");

    if (translite(prevTitle?.current || "") !== slug) return;

    prevTitle.current = title;
    setValue("slug", translite(title));
  }, [title, setValue, getValues]);

  return (
    <form
      className="mx-auto flex w-full max-w-screen-lg flex-col gap-3 py-6"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        className="w-full bg-brand-800 p-2 px-6 text-2xl placeholder-brand-300"
        type="text"
        placeholder="Название поста *"
        required
        {...register("title")}
      />
      <input
        className="w-full bg-brand-800 p-2 px-6 text-lg placeholder-brand-300"
        type="text"
        placeholder="Теги (через запятую)"
        {...register("tags")}
      />
      <Editor
        onChange={(data) => {
          console.log(data);
          setValue("content", data);
        }}
      />
      <div className="flex w-full flex-row bg-brand-800 p-2 px-6">
        <p className="font-bold text-brand-300">www.stellisclarior.com/blog/</p>
        <input
          className="w-full bg-brand-800 pl-1 text-brand-100 placeholder-brand-300"
          type="text"
          placeholder="Ссылка на пост"
          required
          {...register("slug")}
        />
      </div>
      {errors.root && (
        <p className="my-2 text-red-300">{errors.root.message}</p>
      )}
      <div className="flex w-full flex-row bg-brand-800 p-2 px-6">
        <input
          className="mr-2 flex h-4 w-4 flex-row items-center rounded-full border border-brand-500 bg-brand-700 text-brand-700"
          type="checkbox"
          {...register("isDraft")}
        />
        <p className="font-bold text-brand-300">Черновик</p>
      </div>

      <button
        className="rounded-lg border border-brand-500 bg-brand-700 px-4 py-2 text-brand-100 disabled:cursor-not-allowed disabled:opacity-50"
        type="submit"
        disabled={!isValid}
      >
        Сохранить
      </button>
    </form>
  );
};

export default BlogForm;
