import { FC, PropsWithChildren } from "react";
import Header from "./header";
import Footer from "./footer";

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
