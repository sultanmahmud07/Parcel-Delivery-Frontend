import { ReactNode } from "react";
import Footer from "./Footer";
import NavbarNew from "./NavbarNew";

interface IProps {
  children: ReactNode;
}

export default function CommonLayout({ children }: IProps) {
  return (
    <div className=" min-h-screen flex flex-col">
      <NavbarNew />
      <div className="grow-1 pt-24">{children}</div>
      <Footer />
    </div>
  );
}
