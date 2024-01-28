import { FC, ReactNode } from "react";

import PawFootPrint from "@/components/icons/paw-footprint";

type Props = {
  title: string;
  subtitle?: string;
  children: string | ReactNode;
  icon?: ReactNode;
};

const ContentBlock: FC<Props> = (props): JSX.Element => {
  const { title, subtitle, children, icon } = props;

  return (
    <div className="flex max-w-md flex-col gap-2">
      <div className="flex flex-row items-center gap-3 fill-brandDark-900/50">
        {subtitle && !icon && <PawFootPrint size={24} />}
        {subtitle && icon && icon}
        {subtitle && (
          <p className="text-2xl font-bold uppercase text-brandDark-900 text-opacity-50">
            {subtitle}
          </p>
        )}
      </div>
      <h2 className="text-4xl font-extrabold text-brandDark-700">{title}</h2>
      <hr className="border-brandDark-700 border-opacity-20" />
      <div className="flex flex-col gap-2 text-xl">{children}</div>
    </div>
  );
};

export default ContentBlock;
