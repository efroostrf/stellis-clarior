import type { Metadata } from "next";
import DefaultLayout from "@/layouts/default";
import { roboto } from "@/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stellis Clarior",
  description: "Stellis Clarior",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={roboto.className}>
        <DefaultLayout>{children}</DefaultLayout>
      </body>
    </html>
  );
}
