import { Roboto, Shantell_Sans } from "next/font/google";

export const roboto = Roboto({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "700"],
});

export const shantell_sans = Shantell_Sans({
  subsets: ["cyrillic", "latin"],
  weight: ["400"],
});
