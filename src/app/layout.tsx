import type { Metadata, Viewport } from "next";
import DefaultLayout from "@/layouts/default";
import { roboto } from "@/fonts";
import "./globals.css";

// TODO: delete ignore after next.js official fix
// @ts-ignore
export const viewport: Viewport = {
  themeColor: "#3d2e7c",
};

export const metadata: Metadata = {
  title: "Ярче Звезд - Дана Фалева - Кинолог",
  description: `Добро пожаловать на "Ярче звёзд" - блог, где вы научитесь бытовому послушанию своего пса. Узнайте секреты кинологии, подчинения и гармонии с вашим пушистым другом!`,
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
      url: "https://github.com/efroostrf/",
    },
  ],
  metadataBase: new URL("https://stellisclarior.com/"),
  category: "Pets",
  openGraph: {
    title: "Освоение бытового послушания - Ярче звезд - Дана Фалева",
    description:
      "Познакомьтесь с секретами бытового послушания на страницах нашего кинологического блога. Учитеся воспитывать своего пушистого друга с нами.",
    type: "website",
    url: "https://stellisclarior.com/",
    locale: "ru_RU",
    siteName: "Ярче звезд - Дана Фалева",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
      <body className={roboto.className}>
        <DefaultLayout>{children}</DefaultLayout>
      </body>
    </html>
  );
}
