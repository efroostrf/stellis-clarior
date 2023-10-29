import classNames from "classnames";
import { ComponentProps, FC, HTMLProps, PropsWithChildren } from "react";
import UpsideWave0 from "./components/waves/upsideWave-0";
import DownSideWave0 from "./components/waves/downsideWave-0";

type Props = {
  className?: string;
  withWaves?: boolean;
  contentColor?: string;
  waveColor?: string;
};

const DefaultContentSection: FC<PropsWithChildren<Props>> = (
  props
): JSX.Element => {
  const {
    className,
    children,
    withWaves,
    contentColor = "bg-brand-100",
    waveColor = "fill-brand-100",
  } = props;

  const containerClassName = classNames(
    {
      "bg-brand-100": className?.indexOf("bg-") === -1,
      "max-w-screen-xl": className?.indexOf("max-w-") === -1,
      "mx-auto": className?.indexOf("mx-") === -1,
    },
    "relative",
    className
  );

  const wavesClassName = classNames(
    containerClassName,
    "flex flex-col gap-8 md:flex-row",
    {
      [contentColor]: true,
      [waveColor]: true,
    }
  );

  return (
    <section className="w-full bg-brand-700">
      {withWaves && (
        <div className={classNames(wavesClassName, "items-end justify-end")}>
          <UpsideWave0 />
        </div>
      )}
      <div className={classNames(containerClassName, "px-6 py-12")}>
        {children}
      </div>
      {withWaves && (
        <div
          className={classNames(wavesClassName, "items-center justify-around")}
        >
          <DownSideWave0 />
        </div>
      )}
    </section>
  );
};

export default DefaultContentSection;
