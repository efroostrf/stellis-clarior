import { FC } from "react";

type Props = {
  data: {
    url: string;
    caption?: string;
    withBorder: boolean;
    withBackground: boolean;
    stretched: boolean;
  };
};

const RenderImage: FC<Props> = (props) => {
  const { url, caption } = props.data;

  return (
    <div className="w-full">
      <img width="100%" src={url} alt={caption} />
    </div>
  );
};

export default RenderImage;
