import { OutputData } from "@editorjs/editorjs";
import { FC, Fragment } from "react";

import RenderHeader from "./components/header";
import RenderImage from "./components/image";

type Props = {
  data: OutputData;
};

export const BlogPostRenderer: FC<Props> = (props) => {
  const { data } = props;
  const { blocks } = data;

  return (
    <div className="content-renderer flex w-full flex-col gap-2">
      {(blocks || []).map(({ id, type, data }) => {
        if (type === "header") {
          return (
            <Fragment key={id}>
              <div />
              <RenderHeader data={data} />
            </Fragment>
          );
        }

        if (type === "paragraph") {
          return (
            <p
              className="text-brand-300"
              dangerouslySetInnerHTML={{
                __html: data.text,
              }}
              key={id}
            ></p>
          );
        }

        if (type === "image") {
          return <RenderImage data={data} key={id} />;
        }

        if (type === "delimiter") {
          return (
            <div
              className="flex flex-row items-center justify-center py-4"
              key={id}
            >
              <p className="text-4xl font-bold tracking-widest text-zinc-400">
                ***
              </p>
            </div>
          );
        }

        return <></>;
      })}
    </div>
  );
};
