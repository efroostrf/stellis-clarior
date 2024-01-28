import { FC, PropsWithChildren } from "react";

import Footer from "./footer";
import Header from "./header";

const DefaultLayout: FC<PropsWithChildren> = ({ children }): JSX.Element => {
  return (
    <>
      <Header />
      <main className="flex select-none flex-col">{children}</main>
      <Footer />
    </>
  );
};

export default DefaultLayout;
