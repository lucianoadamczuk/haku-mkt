import { Text } from "@/components";
import Image from "next/image";
import styles from "./PlanCard.module.css";

export default function PlanCard() {
  const text =
    "Realizaremos un análisis profundo del mercado, competidores y audiencia para diseñar una estrategia digital";
  const japanese = "こんにちは";

  return (
    <article className={styles.card}>
      {/* -------------------------------- frontside ------------------------------- */}
      <div className={styles.frontside}>
        {/* circle */}
        <div className={styles.circle}></div>

        {/* japanese text */}
        <div className={styles.japanese}>
          {japanese.split("").map((item, index) => (
            <Text
              key={`frontside-letter-${index}`}
              tag="span"
              size="md"
              family="japanese"
              color="plan-bushido"
              text={item}
            />
          ))}
        </div>

        {/* text container */}
        <div className={styles.textContainer}>
          <Text
            tag="h5"
            size="xl"
            family="title"
            transform="uppercase"
            text="Bushido"
          />
          <Text tag="p" size="sm" text={text} />
        </div>

        {/* background */}
        <Image
          src="/assets/images/services/plan-bushido.svg"
          alt="plan"
          fill
          className={styles.background}
        />
      </div>

      {/* -------------------------------- backside -------------------------------- */}
      <div className={styles.backside}>
        {japanese.split("").map((item, index) => (
          <Text
            key={`backside-letter-${index}`}
            tag="span"
            size="xl"
            family="japanese"
            color="light"
            text={item}
          />
        ))}
      </div>
    </article>
  );
}
