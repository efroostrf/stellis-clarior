import { FC } from "react";

type Props = {
  index: number;
  title: string;
};

const SectionHeader: FC<Props> = (props): JSX.Element => {
  const { index = 0, title } = props;

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row items-center justify-between text-xl font-extrabold uppercase text-brandDark-700">
        <p>{title}</p>
        <p>{index < 10 ? `0${index}` : index}</p>
      </div>
      <hr className="border-2 border-brandDark-700 border-opacity-20" />
    </div>
  );
};

export default SectionHeader;
