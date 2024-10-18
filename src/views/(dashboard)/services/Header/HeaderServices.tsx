import { Text } from "@/components";
import styles from "./HeaderServices.module.css";
import Image from "next/image";

interface Props {
  text: string;
}

/* -------------------------------- pretitle -------------------------------- */
const PreTitle = ({ text }: Props) => {
  return (
    <Text
      tag="span"
      size="md"
      color="light"
      transform="uppercase"
      text={text}
    />
  );
};

/* ---------------------------------- title --------------------------------- */
const Title = ({ text }: Props) => {
  return (
    <Text
      tag="h1"
      family="title"
      color="light"
      size="xxxl"
      transform="uppercase"
      text={text}
    />
  );
};

/* --------------------------------- phrase --------------------------------- */
const Phrase = ({ text }: Props) => {
  return (
    <Text
      tag="h2"
      family="title"
      color="light"
      size="xl"
      transform="uppercase"
      text={text}
    />
  );
};

/* ------------------------------- description ------------------------------ */
const Description = ({ text }: Props) => {
  return (
    <Text tag="p" size="md" color="light" transform="uppercase" text={text} />
  );
};

export default function HeaderServices() {
  return (
    <header className={styles.header}>
      <div className={styles.contentContainer}>
        <PreTitle text="Lorem ipsum dolor" />
        <Title text="plan sakura" />
        <Phrase text="Florece y renace" />
        <Description text='"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, aliquid?' />
      </div>

      <Image
        src="/assets/images/services/plan-sakura.svg"
        alt="image"
        width={100}
        height={100}
        className={styles.image}
      />
    </header>
  );
}
