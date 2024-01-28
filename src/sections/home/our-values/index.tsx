import { FC } from "react";
import DefaultContentSection from "@/sections/default-content-section";
import ValueCard from "./components/ValueCard";
import EducationIcon from "@/components/icons/education";
import LabIcon from "@/components/icons/lab";
import SparklesIcon from "@/components/icons/sparkles";
import NoteCheckedIcon from "@/components/icons/note-checked";
import ListUpArrowIcon from "@/components/icons/list-up-arrow";
import TwoChatBubblesIcon from "@/components/icons/two-chat-bubbles";
import clsx from "clsx";

type Props = {
  className?: string;
};

const OurValuesSection: FC<Props> = ({ className }): JSX.Element => {
  return (
    <DefaultContentSection
      className={clsx(
        "flex flex-col items-center justify-around gap-8 bg-brand-50 py-2 md:flex-row",
        className
      )}
    >
      <div className="grid-auto-rows:minmax(100px, auto) grid grid-flow-row grid-cols-1 gap-2 sm:grid-cols-2 xl:grid-cols-3">
        <ValueCard
          title="Профессионализм"
          description="Постоянное обучение и развитие"
          icon={<EducationIcon />}
        />
        <ValueCard
          title="Баланс в методах"
          description="Понимание индивидуальных потребностей"
          icon={<LabIcon />}
        />
        <ValueCard
          title="Взаимное доверие"
          description="Доверие хозяев и собак"
          icon={<SparklesIcon />}
        />
        <ValueCard
          title="Индивидуальный подход"
          description="Адаптация к потребностям каждой собаки"
          icon={<NoteCheckedIcon />}
        />
        <ValueCard
          title="Последовательность и структурированность"
          description="Учет характера и особенностей"
          icon={<ListUpArrowIcon />}
        />
        <ValueCard
          title="Поддержка до и после консультации"
          description="Непрерывная поддержка хозяев"
          icon={<TwoChatBubblesIcon />}
        />
      </div>
    </DefaultContentSection>
  );
};

export default OurValuesSection;
