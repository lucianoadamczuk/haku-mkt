"use client";
import { transformString } from "@/utilities";
import Image from "next/image";
import Link from "next/link";
import Text from "../Text/Text";
import styles from "./PlanCard.module.css";

/* ----------------------------- card component ----------------------------- */
interface CardProps {
  href: string;
  bgColor: string;
  title: string;
  japanese: string;
  description: string;
  src: string;
  alt: string;
}
export function PlanCard({
  href,
  bgColor,
  title,
  japanese,
  description,
  src,
  alt,
}: CardProps) {
  return (
    <Link href={href} className={styles.card}>
      {/* -------------------------------- frontside ------------------------------- */}
      <div className={styles.frontside}>
        {/* circle */}
        <div className={styles.circle}></div>

        {/* japanese text */}
        <div className={styles.japanese}>
          {japanese.split("").map((item, index) => (
            <Text
              key={transformString(title + item + index)}
              tag="span"
              size="md"
              family="japanese"
              text={item}
            />
          ))}
        </div>

        {/* text container */}
        <div className={styles.textContainer}>
          <Text
            tag="h5"
            size="xl"
            family="title"
            transform="uppercase"
            text={title}
          />
          <Text tag="p" size="sm" text={description} />
        </div>

        {/* background */}
        <Image src={src} alt={alt} fill className={styles.background} />
      </div>

      {/* -------------------------------- backside -------------------------------- */}
      <div
        className={styles.backside}
        style={{
          background: `linear-gradient(to bottom, var(--color-${bgColor}), var(--color-${bgColor}-dark)`,
        }}
      >
        {/* circle */}
        <div className={styles.circleBack}></div>

        {japanese.split("").map((item, index) => (
          <Text
            key={transformString("back" + title + item + index)}
            tag="span"
            size="xl"
            family="japanese"
            color="light"
            text={item}
          />
        ))}
      </div>
    </Link>
  );
}
