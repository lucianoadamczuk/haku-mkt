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
  const keywords = t("metadata.keywords");
  const icons = {
    icon: "/assets/images/logo.png",
  };
  const authors = [
    {
      name: "Luciano Adamczuk",
      url: "https://www.linkedin.com/in/luciano-adamczuk-5255431a8/",
    },
  ];
  const openGraph = {
    type: "website",
    images: [
      {
        url: "/assets/images/logo-1200x630.png",
        width: 1200,
        height: 630,
      },
    ],
  };

  const twitter = {
    card: "summary_large_image",
    images: [
      {
        url: "/assets/images/logo-1200x600.png",
        width: 1200,
        height: 600,
      },
    ],
  };

  const robots = {
    index: false,
    follow: true,
  };

  return {
    title,
    description,
    keywords,
    icons,
    authors,
    openGraph,
    twitter,
    robots,
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
