import { Text } from "@/components";
import styles from "./Methodology.module.css";
import { FadeIn } from "@/animations";

export default function Methodology() {
  const title = "¿Cómo trabajamos?";
  const text =
    "Realizaremos un análisis profundo del mercado, competidores y audiencia para diseñar una estrategia digital personalizada que impulse tu marca y cumpla tus metas.";
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
          const key = `item-with-index-${index}`;
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
                  text="title"
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
