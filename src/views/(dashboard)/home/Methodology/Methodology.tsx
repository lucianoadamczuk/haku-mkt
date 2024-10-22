import { Text } from "@/components";
import styles from "./Methodology.module.css";
import { FadeIn } from "@/animations";
import { UseTranslation } from "@/app/i18n/server";
import { IParams } from "@/typescript";
import { transformString } from "@/utilities";

interface Props {
  params: IParams;
}
export default async function Methodology({ params }: Props) {
  /* ------------------------------ translations ------------------------------ */
  const { t } = await UseTranslation(params.lang, "translations", {
    keyPrefix: "home.methodology",
  });

  const title = t("title", { ns: "translations" });
  const htTitle = t("htTitle", { ns: "translations" });
  const items = t("items", { ns: "translations", returnObjects: true });

  return (
    <section className={styles.section} id="methodology">
      <div>
        <Text
          tag="h3"
          family="title"
          size="xxl"
          transform="uppercase"
          htText={htTitle}
          text={title}
        />
      </div>

      <div className={styles.contentContainer}>
        {items.map((item, index) => {
          const key = transformString(item.text);
          const title = item.title;
          const text = item.text;
          const number = (index + 1).toString();

          return (
            <FadeIn key={key} className={styles.card}>
              <div className={styles.circle}>
                <Text
                  tag="h5"
                  family="title"
                  size="xxxl"
                  color="light"
                  text={number}
                />
              </div>
              <div>
                <Text
                  tag="h5"
                  family="title"
                  size="xl"
                  transform="uppercase"
                  color="primary"
                  text={title}
                />
                <Text tag="p" text={text} />
              </div>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}
