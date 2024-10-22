import { Text } from "@/components";
import styles from "./Items.module.css";
import { FadeIn } from "@/animations";
import { transformString } from "@/utilities";

interface Props {
  slug: string;
  items: { title: string; description: string }[];
}
export default function Items({ slug, items }: Props) {
  return (
    <section className={styles.section}>
      {items.map((item) => {
        const key = transformString("item" + item.title);
        const title = item.title;
        const description = item.description;
        const key2 = transformString("empty" + item.title);
        return (
          <>
            <FadeIn key={key}>
              <Text
                tag="h5"
                size="lg"
                family="title"
                transform="uppercase"
                color={
                  slug as
                    | "plan-sakura"
                    | "plan-fuji"
                    | "plan-bushido"
                    | "plan-tenka"
                }
                text={title}
              />
              <Text tag="p" text={description} />
            </FadeIn>
            <div key={key2} className={styles.emptyDiv}></div>
          </>
        );
      })}
    </section>
  );
}
