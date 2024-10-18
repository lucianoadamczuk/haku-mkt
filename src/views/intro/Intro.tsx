import { Text } from "@/components";
import styles from "./intro.module.css";

export default function Intro() {
  return (
    <section className={styles.section}>
      <div className={`${styles.triangle} ${styles.triangleLeft}`}></div>
      <div className={`${styles.triangle} ${styles.triangleCenter}`}></div>
      <div className={`${styles.triangle} ${styles.triangleRight}`}></div>

      <Text tag="h1" family="title" size="xxxl" color="light" text="HAKU" />
    </section>
  );
}
