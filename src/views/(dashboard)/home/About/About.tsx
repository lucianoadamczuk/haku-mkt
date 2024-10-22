import { Text } from "@/components";
import styles from "./About.module.css";
import { FadeIn } from "@/animations";
import { IParams } from "@/typescript";
import { UseTranslation } from "@/app/i18n/server";
import { transformString } from "@/utilities";
import { CSSProperties } from "react";

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
              <Text tag="span" family="title" color="primary" text={pretitle} />
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

      {Array.from({ length: 30 }).map((_, index) => {
        // Generar propiedades aleatorias para cada burbuja
        const key = `bubble-${index}`;
        const delay = `${Math.random() * 5}s`;
        const duration = `${5 + Math.random() * 25}s`;
        const size = `${20 + Math.random() * 80}px`;
        const left = `${Math.random() * 100}%`;
        const top = `${Math.random() * 130 - 15}%`;
        const zIndex = Math.random() > 0.5 ? 1 : 2;

        const bubbleStyle = {
          width: size,
          height: size,
          top,
          left,
          animationDelay: delay,
          animationDuration: duration,
          zIndex,
        } as CSSProperties;

        return (
          <div key={key} className={styles.bubble} style={bubbleStyle}></div>
        );
      })}
    </section>
  );
}
