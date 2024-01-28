import "./globals.css";

import type { Metadata, Viewport } from "next";
import { Roboto, Shantell_Sans } from "next/font/google";
import { FC, PropsWithChildren } from "react";
import { Provider } from "react-wrap-balancer";

import AnchorScroller from "@/components/anchor-scroller";
import DefaultLayout from "@/layouts/default";

const roboto = Roboto({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "700", "900"],
  display: "swap",
});

const shantell_sans = Shantell_Sans({
  subsets: ["cyrillic", "latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-shantell",
});

export const viewport: Viewport = {
  themeColor: "#3d2e7c",
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
};

export const metadata: Metadata = {
  keywords: [
    "бытовое послушание",
    "кинологический блог",
    "подчинение собаки",
    "воспитание пса",
    "секреты кинологии",
    "ярче звезд",
    "дана фалева",
  ],
  creator: "Дана Фалева",
  authors: [
    {
      name: "Дана Фалева",
      url: "https://stellisclarior.com/",
    },
    {
      name: "Yefrosynii Kolenko",
      url: "https://www.yefro.dev/",
    },
  ],
  metadataBase: new URL("https://stellisclarior.com/"),
  category: "Pets",
};

const RootLayout: FC<PropsWithChildren> = async ({ children }) => {
  return (
    <html lang="ru">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#3d2e7c" />
        <meta name="color-scheme" content="dark" />
      </head>
      <body className={`${roboto.className} ${shantell_sans.variable}`}>
        <Provider>
          <DefaultLayout>{children}</DefaultLayout>
        </Provider>
        <AnchorScroller />
      </body>
    </html>
  );
};

export default RootLayout;
