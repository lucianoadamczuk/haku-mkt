import { PlanCard, Text } from "@/components";

import styles from "./Plans.module.css";
export default function Plans() {
  const title = "Conoce nuestros planes";

  return (
    <section className={styles.section}>
      <div>
        <Text
          tag="h3"
          family="title"
          size="xxl"
          transform="uppercase"
          text={title}
        />
      </div>

      <div className={styles.contentContainer}>
        {Array.from({ length: 4 }).map((item, index) => {
          const key = `card-${index}`;

          return <PlanCard key={key} />;
        })}
      </div>
    </section>
  );
}
