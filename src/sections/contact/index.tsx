import { shantell_sans } from "@/fonts";
import { FC } from "react";
import Background from "./components/background";
import Form from "./components/form";

const ContactSection: FC = (): JSX.Element => {
  return (
    <section className="relative py-28">
      <div className="absolute left-0 top-0 -z-10 h-full w-full overflow-clip bg-brand-600">
        <Background />
      </div>
      <div className="mx-auto flex max-w-screen-xl select-text flex-col gap-8 border-y-2 border-brand-200/50 bg-brand-600 px-12 py-12 sm:rounded-xl sm:border-4 xl:flex-row">
        <div className="flex max-w-xl flex-col gap-2">
          <h3
            className={`text-2xl font-bold text-brand-100 ${shantell_sans.className}`}
          >
            Позвольте своей собаке засиять ярче звёзд!
          </h3>
          <p className="text-brand-100">
            Если у вас существует проблема с собакой, которую вы никак не можете
            решить - вы можете связаться со мной при помощи формы или через
            телеграмм-канал (в нём включены комментарии). <br /> Буду рада
            помочь вам {";)"}
          </p>
        </div>
        <Form />
      </div>
    </section>
  );
};

export default ContactSection;
