import { Button, Text } from "@/components";
import styles from "./NotFound.module.css";
import { UseTranslation } from "@/app/i18n/server";
import { IParams } from "@/typescript";

interface Props {
  params: IParams;
}
export default async function NotFound({ params }: Props) {
  /* ------------------------------ translations ------------------------------ */
  const { t } = await UseTranslation(params.lang, "translations", {
    keyPrefix: "notFound",
  });
  const title = t("title", { ns: "translations" });
  const text = t("text", { ns: "translations" });
  const btn = t("btn", { ns: "translations" });
  const btnHover = t("btnHover", { ns: "translations" });

  return (
    <section className={styles.section}>
      <Text
        tag="h1"
        size="xxl"
        family="title"
        transform="uppercase"
        text={title}
      />

      <Text tag="h1" size="lg" transform="uppercase" text={text} />

      <Button text={btn} hoverText={btnHover} href={`/${params.lang}/home`} />
    </section>
  );
}
