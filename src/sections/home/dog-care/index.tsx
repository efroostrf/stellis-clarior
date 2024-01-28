import Image from "next/image";
import { FC } from "react";

import ContentBlock from "@/components/content-block";
import DefaultContentSection from "@/sections/default-content-section";

const DogCareSection: FC = (): JSX.Element => {
  return (
    <DefaultContentSection
      className="flex flex-col items-center justify-around gap-8 bg-brand-100 md:flex-row"
      withHr
      // withWaves
      // waveColor="fill-brand-100"
      // contentColor="bg-brand-50"
    >
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
      <ContentBlock title="Почему важно заниматься с любой собакой?">
        <p>
          Без разницы, какой породы ваша собака или сколько ей лет - обучение и
          воспитание необходимо для каждой собаки. Ведь даже самая маленькая
          собачка может принести радость и счастье в вашу жизнь, если она
          воспитана правильно. Я помогу вам развивать потенциал вашей собаки и
          сделать из нее надежного партнера.
        </p>
      </ContentBlock>
    </DefaultContentSection>
  );
};

export default DogCareSection;
