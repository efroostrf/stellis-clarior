import Image from "next/image";
import { FC } from "react";

import ContentBlock from "@/components/content-block";
import StylizedLink from "@/components/link";
import routes from "@/routes";
import DefaultContentSection from "@/sections/default-content-section";

const DogInformationSection: FC = (): JSX.Element => {
  return (
    <DefaultContentSection
      withWaves={{ top: true, bottom: true }}
      waveColor="fill-brand-100"
      contentColor="bg-brand-50"
      className="flex flex-col items-center justify-around gap-8 md:flex-row"
    >
      <ContentBlock subtitle="Моя собака" title="Бордер-колли Руна">
        <p>
          Счистливая бордерица со звездочками в глазах, которая любит бегать,
          прыгать и играть. Родилась 22.12.2022, имя по документам — Istoria Gi.
          Больше информации можно найти по ссылке ниже.
        </p>
        <StylizedLink href={routes.runaInDb()} variant="dark" target="_blank">
          Руна в бордерячей базе
        </StylizedLink>
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

export default DogInformationSection;
