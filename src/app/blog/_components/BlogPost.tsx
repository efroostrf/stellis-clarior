import { format } from "date-fns";
import { Eye } from "lucide-react";
import Link from "next/link";
import { FC } from "react";

import { posts } from "@/drizzle/schema";

type Props = {
  data: typeof posts.$inferSelect;
};

export const BlogPost: FC<Props> = async (props) => {
  const {
    data: { title, shortDescription, createdAt, slug, isDraft, content },
  } = props;

  const imageUrl = (content?.blocks || []).find(({ type }) => type === "image")
    ?.data?.url;

  return (
    <Link
      href={`/blog/${slug}`}
      className="flex cursor-pointer flex-col gap-1  bg-brand-800/70  transition-all hover:bg-brand-700/50 active:scale-95"
    >
      {imageUrl && <img src={imageUrl} alt={title} />}
      <div className="flex flex-col gap-1 px-6 py-3">
        {isDraft && (
          <div className="flex flex-row items-center gap-2">
            <Eye className="h-5 w-5 stroke-brand-400" />
            <p className="text-brand-400">Черновик (не публикуется)</p>
          </div>
        )}
        <h2 className="text-2xl font-bold text-brand-100">{title}</h2>
        <p className="text-brand-200">{shortDescription}</p>
        <time
          className="mt-2 text-sm uppercase text-brand-300"
          dateTime={createdAt as unknown as string}
        >
          {format(new Date(createdAt), "dd.MM.yyyy")}
        </time>
      </div>
    </Link>
  );
};
