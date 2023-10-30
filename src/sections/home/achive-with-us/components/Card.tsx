import { FC } from "react";

type Props = {
  title: string;
  description: string;
  link?: string;
};

const Card: FC<Props> = (props): JSX.Element => {
  const { title, description, link } = props;

  return (
    <div className="flex max-w-md flex-col items-center justify-center gap-2 rounded-lg border border-brand-900/20 p-4 text-center">
      <h3 className="text-xl font-bold text-brand-800">{title}</h3>
      <p className="text-brand-900">{description}</p>
    </div>
  );
};

export default Card;
