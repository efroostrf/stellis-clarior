import ContentBlock from "@/components/content-block";
import StylizedLink from "@/components/link";
import routes from "@/routes";
import Image from "next/image";
import { FC } from "react";

const DogInformationSection: FC = (): JSX.Element => {
  return (
    <section className="w-full bg-brand-700">
      <div className="relative mx-auto flex max-w-screen-xl flex-col items-center justify-around gap-8 bg-brand-50 md:flex-row">
        <svg
          width="100%"
          height="100%"
          id="svg"
          viewBox="0 0 1440 390"
          xmlns="http://www.w3.org/2000/svg"
          className="-mt-32"
        >
          <path
            d="M 0,400 C 0,400 0,200 0,200 C 193.06666666666666,238.66666666666666 386.1333333333333,277.3333333333333 526,274 C 665.8666666666667,270.6666666666667 752.5333333333333,225.33333333333334 896,206 C 1039.4666666666667,186.66666666666666 1239.7333333333333,193.33333333333331 1440,200 C 1440,200 1440,400 1440,400 Z"
            stroke="none"
            strokeWidth="0"
            fillOpacity="1"
            className="path-0 fill-brand-100"
          ></path>
        </svg>
      </div>
      <div className="mx-auto flex max-w-screen-xl flex-col items-center justify-around gap-8 bg-brand-100 px-6 py-14 md:flex-row">
        <ContentBlock subtitle="Моя собака" title="Бордер-колли Руна">
          <p>
            Счистливая бордерица со звездочками в глазах, которая любит бегать,
            прыгать и играть. Родилась 22.12.2022, имя по документам — Istoria
            Gi. Больше информации можно найти по ссылке ниже.
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
      </div>
      <div className="relative mx-auto flex max-w-screen-xl flex-col items-center justify-around gap-8 bg-brand-100 fill-brand-50 md:flex-row">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fillOpacity="1"
            d="M0,64L40,64C80,64,160,64,240,96C320,128,400,192,480,213.3C560,235,640,213,720,181.3C800,149,880,107,960,96C1040,85,1120,107,1200,117.3C1280,128,1360,128,1400,128L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default DogInformationSection;
