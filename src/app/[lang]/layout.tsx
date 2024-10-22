import { IParams } from "@/typescript";
import { dir } from "i18next";
import { ReactNode } from "react";
import "../../styles/index.css";
import { UseTranslation } from "../i18n/server";
import { languages } from "../i18n/settings";

/* ------------------------------- lang params ------------------------------ */
export async function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

/* -------------------------------- metadata -------------------------------- */
interface MetadataProps {
  params: IParams;
}
export async function generateMetadata({ params }: MetadataProps) {
  const { t } = await UseTranslation(params.lang);
  const title = t("metadata.title");
  const description = t("metadata.description");
  const icons = {
    icon: "/assets/images/logo.svg",
  };

  return { title, description, icons };
}

interface Props {
  params: IParams;
  children: ReactNode;
}

export default function RootLayout({ children, params }: Props) {
  return (
    <html lang={params.lang} dir={dir(params.lang)}>
      <body>{children}</body>
    </html>
  );
}
