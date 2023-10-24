import Image from "next/image";
import { FC } from "react";

type Props = {
  width?: number;
  height?: number;
};

const LogoImage: FC<Props> = ({ width, height }): JSX.Element => {
  return (
    <Image
      className="rounded-full"
      src="/images/logo.jpg"
      width={width || 40}
      height={height || 40}
      priority
      alt="Stellis Clarior Logo"
    />
  );
};

export default LogoImage;
