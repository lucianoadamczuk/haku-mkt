import { Text } from "@/components";
import styles from "./About.module.css";
import { FadeIn } from "@/animations";

export default function About() {
  return (
    <section className={styles.section}>
      {Array.from({ length: 3 }).map((item, index) => (
        <article key={index} className={styles.card}>
          <FadeIn className={styles.contentContainer}>
            <Text
              tag="h5"
              family="title"
              transform="uppercase"
              color="primary"
              text="Title of the card"
            />
            <Text
              tag="h4"
              family="title"
              size="xxl"
              transform="uppercase"
              text="Title of the card"
            />
            <Text
              tag="p"
              text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta, esse sequi voluptatem nemo dolores pariatur voluptate molestiae facilis! Enim, quisquam ex recusandae possimus fuga consequuntur omnis neque ab magnam autem."
            />
          </FadeIn>
        </article>
      ))}
    </section>
  );
}
