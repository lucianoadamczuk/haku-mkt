import { Button, Logo, Text } from "@/components";

import { UseTranslation } from "@/app/i18n/server";
import { IParams } from "@/typescript";
import styles from "./Header.module.css";

interface Props {
  params: IParams;
}
export default async function Header({ params }: Props) {
  const { t } = await UseTranslation(params.lang, "translations", {
    keyPrefix: "home.header",
  });
  const title = t("title");
  const htTitle = t("htTitle");
  const subtitle = t("subtitle");
  const button = t("btn");
  const buttonHover = t("btnHover");

  return (
    <header className={styles.header} id="home">
      <Logo />

      <div className={styles.contentContainer}>
        <Text
          tag="h1"
          family="title"
          size="xxl"
          transform="uppercase"
          htText={htTitle}
          text={title}
        />
        <Text tag="h2" size="md" transform="uppercase" text={subtitle} />

        <Button text={button} hoverText={buttonHover} href="#contact" />
      </div>
    </header>
  );
}
