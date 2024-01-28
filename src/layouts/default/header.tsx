"use client";
import Link from "next/link";
import { FC } from "react";

import LogoImage from "@/components/logo-image";
import useScrollDirection from "@/hooks/useScrollDirection";

const DefaultHeader: FC = (): JSX.Element => {
  const direction = useScrollDirection();

  return (
    <header>
      <nav
        data-direction={direction}
        className="fixed z-40 w-full border-b border-brandDark-700 bg-brandDark-800 px-6 py-2 shadow transition-all duration-300 data-[direction=down]:-top-36 data-[direction=up]:top-0"
      >
        <div className="mx-auto flex max-w-screen-xl flex-row">
          <Link className="inline-flex select-none items-center gap-4" href="/">
            <LogoImage />
            <span className="font-shantell text-xl font-bold tracking-widest text-brand-100">
              Ярче звезд / Дана Фалева
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default DefaultHeader;
