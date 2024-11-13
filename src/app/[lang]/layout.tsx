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
    icon: "/assets/images/logo.png",
  };

  return {
    title,
    description,
    icons,
  };
}

/* ------------------------------ fonts import ------------------------------ */
import localFont from "next/font/local";

const fontTitle = localFont({
  src: "./fonts/Anton-Regular.ttf",
  variable: "--font-family-title",
  display: "swap",
});

const fontBase = localFont({
  src: "./fonts/NotoSans-Regular.ttf",
  variable: "--font-family-base",
  display: "swap",
});

const fontJapanese = localFont({
  src: "./fonts/NotoSansJP-Regular.ttf",
  variable: "--font-family-japanese",
  display: "swap",
});

/* -------------------------------------------------------------------------- */
/*                               root component                               */
/* -------------------------------------------------------------------------- */

interface Props {
  params: IParams;
  children: ReactNode;
}

export default function RootLayout({ children, params }: Props) {
  return (
    <html lang={params.lang} dir={dir(params.lang)}>
      <body
        className={`${fontTitle.variable} ${fontBase.variable} ${fontJapanese.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
