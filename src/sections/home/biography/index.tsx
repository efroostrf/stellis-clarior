import ContentBlock from "@/components/content-block";
// import StylizedLink from "@/components/link";
// import routes from "@/routes";
import DefaultContentSection from "@/sections/default-content-section";
import clsx from "clsx";
import Image from "next/image";
import { FC } from "react";

const BiographySection: FC<{
  className?: string;
}> = ({ className }): JSX.Element => {
  return (
    <DefaultContentSection
      className={clsx(
        "flex flex-col items-center justify-around gap-8 bg-brand-50 md:flex-row",
        className
      )}
    >
      <div
        className="relative aspect-video w-full overflow-clip rounded-3xl rounded-br-full rounded-tl-full md:w-1/2"
        style={{ minWidth: 200 }}
      >
        <Image
          src="/images/content/dana-and-runa.jpg"
          placeholder="blur"
          blurDataURL="/images/content/dana-and-runa-blur.jpg"
          fill
          style={{ objectFit: "cover" }}
          alt=""
        />
      </div>
      <ContentBlock
        subtitle="Обо мне"
        title="Дана Фалева — кинолог по бытовому послушанию"
      >
        <p>
          Привет, я Дана, кинолог, преданный искусству воспитания собак. Мое
          путешествие началось с глубокой страсти к умению объяснять владельцам
          как найти общий язык с их питомцем, и с годами опыта, я стала
          специалистом в области бытового послушания. Считаю, что собака - не
          просто животное, а часть нашего общества и моя цель - помочь вам и
          вашей собаке обрести взаимопонимание и гармонию.
        </p>
        {/* <StylizedLink href={routes.telegram()} target="_blank" variant="dark">
          Телеграмм канал
        </StylizedLink> */}
      </ContentBlock>
    </DefaultContentSection>
  );
};

export default BiographySection;
