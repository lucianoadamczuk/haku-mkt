import { Icon, Text } from "@/components";
import styles from "./Footer.module.css";
import { ReactNode } from "react";
import Image from "next/image";
import { FadeIn } from "@/animations";

interface BoxProps {
  title: string;
  children: ReactNode;
}
const Box = ({ title, children }: BoxProps) => {
  return (
    <div>
      <Text
        tag="h6"
        family="title"
        color="light"
        transform="uppercase"
        text={title}
      />
      {children}
    </div>
  );
};

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <FadeIn>
        <Image
          src="/assets/images/logo.svg"
          alt="logo"
          width={200}
          height={200}
        />
      </FadeIn>
      <div className={styles.contentContainer}>
        <Box title="Descripción">
          <Text
            tag="small"
            size="sm"
            color="light"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore beatae
          obcaecati nisi reiciendis veritatis corporis, eveniet laboriosam
          quaerat architecto, unde deserunt adipisci ea inventore fuga quo
          molestiae. Modi, reiciendis? Quasi."
          />
        </Box>

        <Box title="Contacto">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Text
              tag="small"
              color="light"
              size="sm"
              text="+54 9 11 5337 6931"
            />
            <Text tag="small" color="light" size="sm" text="haku@haku.com" />
          </div>
        </Box>

        <Box title="Redes Sociales">
          <div style={{ display: "flex", gap: "var(--space-sm)" }}>
            <Icon as="instagram" />
            <Icon as="facebook" />
            <Icon as="linkedIn" />
          </div>
        </Box>

        <div>
          <Text
            tag="small"
            color="light"
            size="sm"
            text="HAKU | todos los derechos reservados"
          />
        </div>
      </div>
    </footer>
  );
}
