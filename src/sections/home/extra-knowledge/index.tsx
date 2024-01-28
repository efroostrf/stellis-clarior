import Image from "next/image";
import { FC } from "react";

import ContentBlock from "@/components/content-block";
import DefaultContentSection from "@/sections/default-content-section";

const ExtraKnowledgeSection: FC = (): JSX.Element => {
  return (
    <DefaultContentSection
      className="flex flex-col items-center justify-around gap-8 bg-brand-100 md:flex-row"
      withHr
      withWaves={{ bottom: true }}
      waveColor="fill-brand-100"
      contentColor="bg-brand-50"
    >
      <ContentBlock title="Нужны ли для занятий дополнительные знания?">
        <p>
          Вам не нужны специальные знания. Вместо этого, я предоставлю вам все
          необходимые знания и методы для успешного обучения вашей собаки. Наши
          занятия - это совместное путешествие в мире воспитания, где и вы, и
          ваша собака учитесь и растете вместе.
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

export default ExtraKnowledgeSection;
