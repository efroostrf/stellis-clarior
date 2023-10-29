import Link from "next/link";
import { ComponentProps, FC, PropsWithChildren } from "react";

type Props = {
  variant: "bright" | "dark";
  href: string;
  target?: ComponentProps<typeof Link>["target"];
} & PropsWithChildren;

const StylizedLink: FC<Props> = (props): JSX.Element => {
  const { variant = "bright", children, href, target } = props;
  const textClassName =
    variant === "bright"
      ? "text-brandDark-100 stroke-brandDark-100"
      : "text-brand-800 stroke-brand-800";

  return (
    <Link
      className={
        "z-20 inline-flex w-fit flex-row items-center gap-4 font-bold transition-all duration-100 hover:underline active:scale-95 " +
        textClassName
      }
      href={href}
      target={target}
    >
      <p className={textClassName}>{children}</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        className="h-5 w-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
        />
      </svg>
    </Link>
  );
};

export default StylizedLink;
