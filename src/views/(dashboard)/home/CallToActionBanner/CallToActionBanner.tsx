import { Text } from "@/components";
import styles from "./CallToActionBanner.module.css";
export default function CallToActionBanner() {
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
        text="¡Vamos!"
      />
    </section>
  );
}
