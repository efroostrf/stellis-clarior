import { FC, ReactNode } from "react";

type Props = {
  title: string;
  description?: string;
  icon: ReactNode;
};

const ValueCard: FC<Props> = (props): JSX.Element => {
  const { title, description, icon } = props;

  return (
    <div className="flex flex-col items-center gap-4 rounded-md bg-brand-800 p-6 xs:flex-row">
      <div className="flex h-12 w-12 fill-brand-100 stroke-brand-100">
        {icon}
      </div>
      <div className="flex flex-col items-center justify-center text-center xs:items-start xs:text-start">
        <h2 className="text-xl font-extrabold text-brand-50">{title}</h2>
        <p className="text-brand-100">{description}</p>
      </div>
    </div>
  );
};

export default ValueCard;
