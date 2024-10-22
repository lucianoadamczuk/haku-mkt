import { PlanCard, Text } from "@/components";
import { UseTranslation } from "@/app/i18n/server";
import { IParams } from "@/typescript";
import { transformString } from "@/utilities";
import styles from "./Plans.module.css";

interface Props {
  params: IParams;
}
export default async function Plans({ params }: Props) {
  /* ------------------------------ translations ------------------------------ */
  const { t } = await UseTranslation(params.lang, "translations");
  const title = t("home.plans.title", { ns: "translations" });
  const htTitle = t("home.plans.htTitle", { ns: "translations" });
  const plans = t("plans", { ns: "translations", returnObjects: true });

  return (
    <section className={styles.section} id="services">
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
        {plans.map((item) => {
          const key = transformString(item.description);
          const href = `services/${item.slug}`;
          const bgColor = item.slug;
          const japanese = item.japanese;
          const title = item.title;
          const description = item.description;
          const src = `/assets/images/services/${item.slug}.svg`;
          const alt = item.alt;
          return (
            <PlanCard
              key={key}
              href={href}
              bgColor={bgColor}
              japanese={japanese}
              title={title}
              description={description}
              src={src}
              alt={alt}
            />
          );
        })}
      </div>
    </section>
  );
}
