import { FC } from "react";

export const BlogPost: FC = async () => {
  return (
    <li className="flex cursor-pointer flex-col gap-1 bg-brand-800/70 px-6 py-3 transition-all hover:bg-brand-700/50 active:scale-95">
      <h2 className="text-2xl font-bold text-brand-100">Заголовок поста </h2>
      <p className="text-brand-200">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
        voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Quisquam, voluptatibus. Lorem ipsum dolor sit amet consectetur
        adipisicing elit.
      </p>
      <time
        className="mt-2 text-sm uppercase text-brand-300"
        dateTime="2021-09-01"
      >
        01.09.2021
      </time>
    </li>
  );
};
