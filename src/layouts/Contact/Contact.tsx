import { FormContact, Text } from "@/components";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section className={styles.section}>
      <Text
        tag="h3"
        family="title"
        size="xxl"
        transform="uppercase"
        text="Pongamonos en contacto"
      />
      <FormContact />
    </section>
  );
}
