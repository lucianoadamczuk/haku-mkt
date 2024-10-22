import { FormContact, Text } from "@/components";
import styles from "./Contact.module.css";
import { IParams } from "@/typescript";
import { UseTranslation } from "@/app/i18n/server";

interface Props {
  params: IParams;
}
export default async function Contact({ params }: Props) {
  /* ------------------------------ translations ------------------------------ */
  const { t } = await UseTranslation(params.lang, "translations", {
    keyPrefix: "contact",
  });
  const title = t("title");
  const htTitle = t("htTitle");
  return (
    <section className={styles.section} id="contact">
      <Text
        tag="h3"
        family="title"
        size="xxl"
        transform="uppercase"
        text={title}
        htText={htTitle}
      />
      <FormContact params={params} />
    </section>
  );
}
