import Image from "next/image";
import { FC } from "react";

import ContentBlock from "@/components/content-block";
import DefaultContentSection from "@/sections/default-content-section";

const ObidienceInfo: FC = (): JSX.Element => {
  return (
    <DefaultContentSection
      className="flex flex-col items-center justify-around gap-8 bg-brand-100 md:flex-row"
      withWaves={{ top: true }}
      waveColor="fill-brand-100"
      contentColor="bg-brand-50"
    >
      <ContentBlock title="Что такое бытовое послушание?">
        <p>
          Бытовое послушание - это ключевой элемент укрепления связи между вами
          и вашей собакой. Это не просто обучение командам, это понимание
          потребностей и желаний вашего друга. Эти навыки позволят вашей собаке
          вести себя спокойно и внимательно к вам в повседневных ситуациях,
          делая ее приятной компанией.
        </p>
      </ContentBlock>
      <div
        className="relative aspect-video w-full overflow-clip rounded-3xl  md:w-1/2"
        style={{ minWidth: 200 }}
      >
        <Image
          src="/images/content/runa-about.jpg"
          placeholder="blur"
          blurDataURL="/images/content/runa-about-blur.jpg"
          fill
          style={{ objectFit: "cover" }}
          alt=""
        />
      </div>
    </DefaultContentSection>
  );
};

export default ObidienceInfo;
