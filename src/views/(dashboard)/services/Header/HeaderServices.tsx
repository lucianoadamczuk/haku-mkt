import { Text } from "@/components";
import styles from "./HeaderServices.module.css";
import Image from "next/image";

interface PartialProps {
  text: string;
  slug?: string;
}

/* ---------------------------------- title --------------------------------- */
const Title = ({ text, slug }: PartialProps) => {
  const splitedText = text.split(" ");
  return (
    <h1 className={styles.title}>
      {splitedText[0]} <br />
      <span
        style={{
          padding: "0 20px",
          backgroundColor: "var(--color-light)",
          color: `var(--color-${slug})`,
        }}
      >
        {splitedText[1]}
      </span>
    </h1>
  );
};

/* --------------------------------- phrase --------------------------------- */
const Phrase = ({ text }: PartialProps) => {
  return (
    <Text
      tag="h2"
      family="title"
      color="light"
      size="lg"
      transform="uppercase"
      className={styles.phrase}
      text={text}
    />
  );
};

/* -------------------------------- inspiration -------------------------------- */
const Inspiration = ({ text }: PartialProps) => {
  return (
    <Text
      tag="span"
      size="sm"
      color="light"
      transform="uppercase"
      className={styles.inspiration}
      text={text}
    />
  );
};

/* ------------------------------- description ------------------------------ */
const Description = ({ text }: PartialProps) => {
  return (
    <Text tag="p" size="md" color="light" transform="uppercase" text={text} />
  );
};

interface Props {
  slug: string;
  inspiration: string;
  title: string;
  phrase: string;
  description: string;
  src: string;
  alt: string;
}

export default function HeaderServices({
  slug,
  inspiration,
  title,
  phrase,
  description,
  src,
  alt,
}: Props) {
  return (
    <header className={styles.header}>
      <div
        className={styles.contentContainer}
        style={{
          background: `linear-gradient(to bottom , var(--color-${slug}), var(--color-${slug}-dark)`,
        }}
      >
        <Title text={title} slug={slug} />
        <Phrase text={phrase} />
        <Inspiration text={inspiration} />
        <Description text={description} />
      </div>

      <Image
        src={src}
        alt={alt}
        width={100}
        height={100}
        priority
        className={styles.image}
      />
    </header>
  );
}
