import ContentBlock from "@/components/content-block";
import StylizedLink from "@/components/link";
import routes from "@/routes";
import Image from "next/image";
import { FC } from "react";

const BiographySection: FC<{
  className?: string;
}> = ({ className }): JSX.Element => {
  return (
    <section className="w-full bg-brand-700">
      <div
        className={`mx-auto flex max-w-screen-xl flex-col items-center justify-around gap-8 bg-brand-50 px-6 py-14 md:flex-row ${
          className || ""
        }`}
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
            Добро пожаловать в мир Ярче Звёзд ⭐️ <br />
            Меня зовут Дана, и я — начинающий кинолог, специализирующийся на
            бытовом послушании собак. В настоящее время я активно повышаю свою
            квалификацию в областях аджилити и обидиенс. Кроме того, помимо
            моего среднего специального образования, я постоянно обучаюсь
            самостоятельно, посещая курсы, семинары и онлайн-вебинары. У меня
            также есть значительный опыт волонтерской работы, включая
            социализацию дворняг и коррекцию сложного поведения у собак.
            <br /> Больше вы можете прочитать ниже а также по ссылке в телеграмм
            канале.
          </p>
          <StylizedLink href={routes.telegram()} target="_blank" variant="dark">
            Телеграмм канал
          </StylizedLink>
        </ContentBlock>
      </div>
    </section>
  );
};

export default BiographySection;
