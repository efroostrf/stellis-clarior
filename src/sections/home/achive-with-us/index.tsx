import { FC } from "react";

import DefaultContentSection from "@/sections/default-content-section";

import Card from "./components/Card";

const AchiveWithUsSection: FC = (): JSX.Element => {
  return (
    <DefaultContentSection className="flex flex-col items-center justify-center gap-12 bg-brand-50 py-12">
      <h2 className="text-4xl font-extrabold text-brandDark-600">
        Чего вы можете достичь
      </h2>
      <div className="grid-auto-rows:minmax(100px, auto) grid grid-flow-row grid-cols-2 gap-4">
        <Card
          title="Послушность собаки"
          description="С помощью правильного воспитания, ваша собака станет внимательной к вам и исполнительной, что упростит повседневное взаимодействие."
        />
        <Card
          title="Гармоничные отношения"
          description="Создание крепкой связи между вами и вашей собакой,
          что приведет к гармоничным отношениям и взаимному доверию."
        />
        <Card
          title="Устранение плохих привычек"
          description="Работа с проблемами, например такими как лаем,
          агрессией, разрушением мебели, натягиванием поводка, подбиранием с земли и другими нежелательными поведенческими привычками."
        />
        <Card
          title="Обучение новым командам"
          description="Возможность научить вашу собаку полезным бытовым
          командам и трюкам, что поможет вам укрепить связь с питомцем."
        />
        {/* <AchiveCard
          title="Послушность собаки"
          description="С помощью правильного воспитания, ваша собака станет внимательной к вам и исполнительной, что упростит повседневное взаимодействие."
        />
        <AchiveCard
          title="Послушность собаки"
          description="С помощью правильного воспитания, ваша собака станет внимательной к вам и исполнительной, что упростит повседневное взаимодействие."
        /> */}
      </div>
      <hr className="w-full border-brand-900/20" />

      <h2 className="text-4xl font-extrabold text-brandDark-600">
        С какими проблемами можно справиться
      </h2>
      <div className="grid-auto-rows:minmax(100px, auto) grid grid-flow-row grid-cols-3 gap-4">
        <Card
          title="Агрессия"
          description="Помощь в управлении агрессивным поведением и уменьшении
          конфликтов."
        />
        <Card
          title="Беспокойство"
          description="Работа с нервозностью и беспокойством у собаки, что сделает ее
          более спокойной и уравновешенной."
        />
        <Card
          title="Непослушание"
          description="Решение проблемы с непослушанием и невыполнением команд."
        />
        <Card
          title="Проблемы с приучением"
          description="Обучение собаки основным командам и улучшение ее
          общего поведения."
        />
        <Card
          title="Социализация"
          description="Помощь в социализации собаки, чтобы она чувствовала себя
          комфортно в разных ситуациях."
        />
        <Card
          title="Стресс и тревожность"
          description="Помощь в работе с собачьими стрессами и
          тревожностью."
        />
      </div>
      <hr className="w-full border-brand-900/20" />
    </DefaultContentSection>
  );
};

export default AchiveWithUsSection;
