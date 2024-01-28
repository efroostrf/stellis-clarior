import Link from "next/link";
import { FC } from "react";

import InstagramIcon from "@/components/icons/instagram";
import TelegramIcon from "@/components/icons/telegram";
import TiktokIcon from "@/components/icons/tiktok";
import VkIcon from "@/components/icons/vk";
import LogoImage from "@/components/logo-image";
import routes from "@/routes";

const DefaultFooter: FC = (): JSX.Element => {
  return (
    <footer className="w-full bg-brandDark-900 px-6 py-12">
      <div className="mx-auto flex max-w-screen-xl flex-col gap-4">
        <div className="flex w-full flex-row items-center justify-between p-2">
          <LogoImage width={60} height={60} />
          <div className="flex flex-row items-center gap-4">
            <Link
              className="fill-brand-200 transition-all duration-300 hover:fill-brand-400"
              target="_blank"
              href={routes.vk()}
            >
              <VkIcon size={36} />
            </Link>
            <Link
              className="fill-brand-200 transition-all duration-300 hover:fill-brand-400"
              target="_blank"
              href={routes.tiktok()}
            >
              <TiktokIcon size={42} />
            </Link>
            <Link
              className="fill-brand-200 transition-all duration-300 hover:fill-brand-400"
              target="_blank"
              href={routes.instagram()}
            >
              <InstagramIcon size={40} />
            </Link>
            <Link
              className="overflow-clip rounded-lg fill-brand-200 transition-all duration-300 hover:fill-brand-400"
              target="_blank"
              href={routes.telegram()}
            >
              <TelegramIcon size={32} />
            </Link>
          </div>
        </div>
        <p className="text-brand-300/70">
          ©Copyright 2023 Stellis Clarior (Ярче Звезд). Unauthorised
          reproduction of text and images from this website is strictly
          prohibited.
        </p>
      </div>
    </footer>
  );
};

export default DefaultFooter;
