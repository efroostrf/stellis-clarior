import { FC } from "react";

import { translite } from "@/utils/translite";

type Props = {
  data: {
    text: string;
    level: number;
  };
};

const RenderHeader: FC<Props> = (props) => {
  const { level, text } = props.data;

  const anchor = translite(text);

  if (level === 1) return <h1 data-anchor={anchor}>{text}</h1>;
  if (level === 2) return <h2 data-anchor={anchor}>{text}</h2>;
  if (level === 3) return <h3 data-anchor={anchor}>{text}</h3>;
  if (level === 4) return <h4 data-anchor={anchor}>{text}</h4>;
  if (level === 5) return <h5 data-anchor={anchor}>{text}</h5>;
  if (level === 6) return <h6 data-anchor={anchor}>{text}</h6>;

  return <></>;
};

export default RenderHeader;
