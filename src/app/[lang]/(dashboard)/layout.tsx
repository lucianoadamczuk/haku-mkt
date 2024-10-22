import { ViewTransition } from "@/animations";
import { Contact, Footer, Navbar } from "@/layouts";
import { IParams } from "@/typescript";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  params: IParams;
}
export default function DashboardLayout({ children, params }: Props) {
  return (
    <>
      <Navbar params={params} />
      <ViewTransition>
        {children}
        <Contact params={params} />
        <Footer params={params} />
      </ViewTransition>
    </>
  );
}