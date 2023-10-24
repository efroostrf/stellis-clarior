import { shantell_sans } from "@/fonts";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const DefaultHeader: FC = (): JSX.Element => {
  return (
    <header>
      <nav className="fixed z-20 w-full border-b border-brandDark-700 bg-brandDark-800 px-6 py-2 shadow">
        <div className="mx-auto flex max-w-screen-xl flex-row">
          <Link className="inline-flex select-none items-center gap-4" href="/">
            <Image
              className="rounded-full"
              src="/images/logo.jpg"
              width={40}
              height={40}
              priority
              alt="Stellis Clarior Logo"
            />
            <span
              className={`text-xl font-bold tracking-widest text-brand-100 ${shantell_sans.className}`}
            >
              Ярче звёзд / Дана Фалёва
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default DefaultHeader;
