"use client";
import LogoImage from "@/components/logo-image";
import { shantell_sans } from "@/fonts";
import useScrollDirection from "@/hooks/useScrollDirection";
import Link from "next/link";
import { FC } from "react";

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
            <span
              className={`text-xl font-bold tracking-widest text-brand-100 ${shantell_sans.className}`}
            >
              Ярче звезд / Дана Фалева
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default DefaultHeader;
