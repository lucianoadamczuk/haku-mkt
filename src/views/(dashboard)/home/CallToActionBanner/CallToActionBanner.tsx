import { Text } from "@/components";
import styles from "./CallToActionBanner.module.css";
import { IParams } from "@/typescript";
import { UseTranslation } from "@/app/i18n/server";
interface Props {
  params: IParams;
}
export default async function CallToActionBanner({ params }: Props) {
  /* ------------------------------ translations ------------------------------ */
  const { t } = await UseTranslation(params.lang);
  const text = t("home.callToActionBanner", { ns: "translations" });

  return (
    <section className={styles.callToActionBanner}>
      <div className={styles.circle}></div>
      <Text
        tag="span"
        color="light"
        size="xxxl"
        transform="uppercase"
        family="title"
        className={styles.text}
        text={text}
      />
    </section>
  );
}
