import { Text } from "@/components";
import styles from "./Items.module.css";
import { FadeIn } from "@/animations";
export default function Items() {
  return (
    <section className={styles.section}>
      {Array.from({ length: 10 }).map((item) => {
        return (
          <>
            <FadeIn>
              <Text
                tag="h5"
                size="lg"
                family="title"
                transform="uppercase"
                color="primary"
                text="Title"
              />
              <Text
                tag="p"
                text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti inventore nulla quae fugit. Laboriosam earum, delectus molestiae facere nobis illo odit ipsam placeat deleniti magnam totam a veritatis quia sed."
              />
            </FadeIn>
            <div className={styles.emptyDiv}></div>
          </>
        );
      })}
    </section>
  );
}
