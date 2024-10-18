import Image from "next/image";
import styles from "./Header.module.css";
import { Button, Text } from "@/components";
import { FadeIn } from "@/animations";

export default function Header() {
  const title = "Revoluciona tu estrategia digital";
  const subtitle = "Aplica el método kaizen y comienza a destacar";
  const button = "Contacto";
  const buttonHover = "¡Vamos!";

  return (
    <header className={styles.header}>
      <Image
        src="/assets/images/logo.svg"
        alt="logo"
        width={100}
        height={100}
        className={styles.image}
      />

      <FadeIn className={styles.contentContainer}>
        <Text
          tag="h1"
          family="title"
          size="xxl"
          transform="uppercase"
          text={title}
        />
        <Text tag="h2" size="lg" transform="uppercase" text={subtitle} />

        <Button text={button} hoverText={buttonHover} />
      </FadeIn>
    </header>
  );
}
