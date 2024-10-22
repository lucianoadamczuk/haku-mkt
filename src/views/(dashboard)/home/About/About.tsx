import { Text } from "@/components";
import styles from "./About.module.css";
import { FadeIn } from "@/animations";
import { IParams } from "@/typescript";
import { UseTranslation } from "@/app/i18n/server";
import { transformString } from "@/utilities";

interface Props {
  params: IParams;
}
export default async function About({ params }: Props) {
  /* ------------------------------ translations ------------------------------ */
  const { t } = await UseTranslation(params.lang, "translations", {
    keyPrefix: "home",
  });
  const slides = t("about.slides", { ns: "translations", returnObjects: true });

  /* -------------------------------------------------------------------------- */
  /*                                  component                                 */
  /* -------------------------------------------------------------------------- */
  return (
    <section className={styles.section} id="about">
      {slides.map((item) => {
        const key = transformString(item.pretitle);
        const pretitle = item.pretitle;
        const title = item.title;
        const text = item.text;

        return (
          <article key={key} className={styles.card}>
            <FadeIn className={styles.contentContainer}>
              <Text
                tag="h5"
                family="title"
                transform="uppercase"
                color="primary"
                text={pretitle}
              />
              <Text
                tag="h4"
                family="title"
                size="xxl"
                transform="uppercase"
                text={title}
              />
              <Text tag="p" text={text} />
            </FadeIn>
          </article>
        );
      })}
    </section>
  );
}
