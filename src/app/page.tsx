import { Metadata } from "next";
import { FC } from "react";

import ContactSection from "@/sections/contact";
import AchiveWithUsSection from "@/sections/home/achive-with-us";
import BiographySection from "@/sections/home/biography";
import DogCareSection from "@/sections/home/dog-care";
import ExtraKnowledgeSection from "@/sections/home/extra-knowledge";
import IntroducingSection from "@/sections/home/introducing";
import ObidienceInfo from "@/sections/home/obidience-info";
import OurValuesSection from "@/sections/home/our-values";

export const metadata: Metadata = {
  title: "Ярче Звезд - Дана Фалева - Кинолог Таллин",
  description: `Добро пожаловать на "Ярче звёзд" - блог, где вы научитесь бытовому послушанию своего пса. Узнайте секреты кинологии, подчинения и гармонии с вашим пушистым другом!`,
  keywords: [
    "кинолог таллин",
    "дана фалева",
    "бытовое послушание",
    "подчинение собаки",
    "воспитание пса",
    "секреты кинологии",
    "ярче звезд",
    "бордер-колли руна",
  ],
  openGraph: {
    title: "Освоение бытового послушания - Ярче звезд - Дана Фалева",
    description:
      "Познакомьтесь с секретами бытового послушания на страницах нашего кинологического блога. Учитеся воспитывать своего пушистого друга с нами.",
    type: "website",
    url: "https://stellisclarior.com/",
    locale: "ru_RU",
    siteName: "Ярче звезд - Дана Фалева",
  },
  robots: "index, follow",
  alternates: {
    canonical: "/",
  },
};

const HomePage: FC = () => {
  return (
    <>
      <IntroducingSection />
      <svg
        viewBox="0 0 960 100"
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      >
        <path
          d="M0 16L26.7 14.8C53.3 13.7 106.7 11.3 160 13.2C213.3 15 266.7 21 320 26.3C373.3 31.7 426.7 36.3 480 36.3C533.3 36.3 586.7 31.7 640 32.2C693.3 32.7 746.7 38.3 800 40.2C853.3 42 906.7 40 933.3 39L960 38L960 0L933.3 0C906.7 0 853.3 0 800 0C746.7 0 693.3 0 640 0C586.7 0 533.3 0 480 0C426.7 0 373.3 0 320 0C266.7 0 213.3 0 160 0C106.7 0 53.3 0 26.7 0L0 0Z"
          fill="#682bd7"
        ></path>
        <path
          d="M0 21L26.7 21C53.3 21 106.7 21 160 24.5C213.3 28 266.7 35 320 41.3C373.3 47.7 426.7 53.3 480 52.2C533.3 51 586.7 43 640 42.3C693.3 41.7 746.7 48.3 800 52.3C853.3 56.3 906.7 57.7 933.3 58.3L960 59L960 36L933.3 37C906.7 38 853.3 40 800 38.2C746.7 36.3 693.3 30.7 640 30.2C586.7 29.7 533.3 34.3 480 34.3C426.7 34.3 373.3 29.7 320 24.3C266.7 19 213.3 13 160 11.2C106.7 9.3 53.3 11.7 26.7 12.8L0 14Z"
          fill="#8d5de6"
        ></path>
        <path
          d="M0 49L26.7 46.2C53.3 43.3 106.7 37.7 160 38.5C213.3 39.3 266.7 46.7 320 52C373.3 57.3 426.7 60.7 480 61.3C533.3 62 586.7 60 640 60C693.3 60 746.7 62 800 64.2C853.3 66.3 906.7 68.7 933.3 69.8L960 71L960 57L933.3 56.3C906.7 55.7 853.3 54.3 800 50.3C746.7 46.3 693.3 39.7 640 40.3C586.7 41 533.3 49 480 50.2C426.7 51.3 373.3 45.7 320 39.3C266.7 33 213.3 26 160 22.5C106.7 19 53.3 19 26.7 19L0 19Z"
          fill="#a279ee"
        ></path>
        <path
          d="M0 53L26.7 52.3C53.3 51.7 106.7 50.3 160 53.3C213.3 56.3 266.7 63.7 320 69.3C373.3 75 426.7 79 480 79.8C533.3 80.7 586.7 78.3 640 77.2C693.3 76 746.7 76 800 77.7C853.3 79.3 906.7 82.7 933.3 84.3L960 86L960 69L933.3 67.8C906.7 66.7 853.3 64.3 800 62.2C746.7 60 693.3 58 640 58C586.7 58 533.3 60 480 59.3C426.7 58.7 373.3 55.3 320 50C266.7 44.7 213.3 37.3 160 36.5C106.7 35.7 53.3 41.3 26.7 44.2L0 47Z"
          fill="#8d5de6"
        ></path>
        <path
          d="M0 101L26.7 101C53.3 101 106.7 101 160 101C213.3 101 266.7 101 320 101C373.3 101 426.7 101 480 101C533.3 101 586.7 101 640 101C693.3 101 746.7 101 800 101C853.3 101 906.7 101 933.3 101L960 101L960 84L933.3 82.3C906.7 80.7 853.3 77.3 800 75.7C746.7 74 693.3 74 640 75.2C586.7 76.3 533.3 78.7 480 77.8C426.7 77 373.3 73 320 67.3C266.7 61.7 213.3 54.3 160 51.3C106.7 48.3 53.3 49.7 26.7 50.3L0 51Z"
          fill="#682bd7"
        ></path>
      </svg>
      <BiographySection className="overflow-clip sm:rounded-t-lg" />
      <ObidienceInfo />
      <DogCareSection />
      <ExtraKnowledgeSection />
      <AchiveWithUsSection />
      <OurValuesSection className="overflow-clip pb-20 sm:rounded-b-xl" />
      {/* <ObidienceSection className="overflow-clip sm:rounded-b-xl" /> */}
      <ContactSection />
      <hr className="w-full border-brand-700" />
    </>
  );
};

export default HomePage;
