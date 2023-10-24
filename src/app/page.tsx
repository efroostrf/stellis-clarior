import { shantell_sans } from "@/fonts";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="absolute left-0 top-0 z-10 h-screen w-full overflow-clip bg-brand-900">
      <Image
        className="absolute -z-20 opacity-10"
        src="/images/background.jpg"
        layout="fill"
        objectFit="cover"
        alt="Stellis Clarior Background"
        priority
      />
      <div className="z-10 mx-auto flex h-full max-w-screen-xl items-center justify-center py-24 pt-16">
        <div className="relative flex flex-col items-center justify-center gap-8 px-2">
          <h1
            className={`max-w-screen-sm text-center text-6xl font-bold text-brand-200 ${shantell_sans.className}`}
          >
            Задача организации, в особенности же
          </h1>
          <p className="text-md max-w-lg text-center text-brand-200">
            Значимость этих проблем настолько очевидна, что понимание сущности
            ресурсосберегающих технологий обеспечивает широкому кругу
            специалистов новых принципов формирования материально-технической и
            кадровой базы.
          </p>
          <div className="flex flex-row items-center gap-12">
            <button className="rounded-md bg-brandDark-900 px-8 py-3 text-brandDark-100 transition-all duration-100 hover:bg-brandDark-800 active:scale-95 active:bg-brandDark-900 active:outline-none">
              Кнопка
            </button>
            <Link
              className="group flex flex-row gap-4 stroke-brandDark-100 transition-all duration-100 active:scale-95"
              href="#"
            >
              <p className="font-bold text-brandDark-100">Ссылка на что-то</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                />
              </svg>
            </Link>
          </div>
          <div className="absolute -left-96 -top-32 -z-10">
            <Image
              src="/images/content/runa_running.png"
              width={400}
              height={700}
              priority
              alt=""
            />
          </div>
          <div className="absolute -right-96 -z-10 row-span-6 grid w-full max-w-md columns-md overflow-clip">
            <div
              className="relative"
              style={{ minWidth: 200, minHeight: 200, aspectRatio: "1/2" }}
            >
              <Image
                src="/images/content/agiliti-1.png"
                objectFit="cover"
                layout="fill"
                priority
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
