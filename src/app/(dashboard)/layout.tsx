import { Contact, Footer, Navbar } from "@/layouts";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
export default function DashboardLayout({ children }: Props) {
  return (
    <>
      <Navbar />
      {children}
      <Contact />
      <Footer />
    </>
  );
}
