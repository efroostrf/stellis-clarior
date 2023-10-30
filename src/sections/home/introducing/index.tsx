import StylizedLink from "@/components/link";
import { shantell_sans } from "@/fonts";
import Image from "next/image";
import { FC } from "react";

const IntroducingSection: FC = (): JSX.Element => {
  return (
    <section className="relative left-0 top-0 z-10 h-screen w-full overflow-clip bg-brand-900">
      <Image
        className="absolute -z-20 opacity-10"
        src="/images/background.jpg"
        placeholder="blur"
        blurDataURL="/images/background-blur.jpg"
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        style={{ objectFit: "cover" }}
        alt="Stellis Clarior Background"
      />
      <div className="z-10 mx-auto flex h-full max-w-screen-xl items-center justify-center py-24 pt-16">
        <div className="relative flex flex-col items-center justify-center gap-8 px-2">
          <h1
            className={`max-w-screen-sm text-center text-4xl font-bold text-brand-100 sm:text-6xl ${shantell_sans.className}`}
          >
            Обучаем Собаку Вашей Мечты
          </h1>
          <p className="text-md max-w-lg text-center text-brand-200">
            Мой личный кинологический блог посвященный моей черно-белой
            бордерице по имени Руна, нашему совместному росту и развитию. Тут вы
            сможете узнать конкретные способы и приемы воспитания собаки читая
            уникальные авторские статьи. <br />
            <br /> Следите за полезными статьями и мнением здесь!
          </p>
          {/* <div className="flex flex-row items-center gap-12">
            <button className="rounded-md bg-brandDark-900 px-8 py-3 text-brandDark-100 transition-all duration-100 hover:bg-brandDark-800 active:scale-95 active:bg-brandDark-900 active:outline-none">
              Кнопка
            </button>
            <StylizedLink href="#" variant="bright">
              Ссылка на что-то
            </StylizedLink>
          </div> */}
          <div className="absolute -left-96 -top-32 -z-10 hidden sm:flex">
            <Image
              src="/images/content/runa_running.png"
              placeholder="blur"
              blurDataURL="/images/content/runa_running-blur.png"
              width={400}
              height={700}
              sizes="(max-width: 768px) 100vw, 33vw"
              alt=""
            />
          </div>
          <div className="absolute -right-96 -z-10 row-span-6 hidden w-full max-w-md columns-md overflow-clip sm:grid">
            <div
              className="relative"
              style={{ minWidth: 200, minHeight: 200, aspectRatio: "1/2" }}
            >
              <Image
                src="/images/content/agiliti-1.png"
                placeholder="blur"
                blurDataURL="/images/content/agiliti-1-blur.png"
                fill
                style={{ objectFit: "cover" }}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroducingSection;
