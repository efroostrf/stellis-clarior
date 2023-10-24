import { FC, PropsWithChildren } from "react";
import Header from "./header";
import Footer from "./footer";

const DefaultLayout: FC<PropsWithChildren> = ({ children }): JSX.Element => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default DefaultLayout;
