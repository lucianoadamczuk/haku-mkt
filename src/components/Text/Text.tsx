import { TColors } from "@/typescript";
import { CSSProperties } from "react";
import styles from "./Text.module.css";

interface Props {
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "small";
  family?: "base" | "title" | "japanese";
  size?: "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl";
  color?: TColors;
  transform?: "uppercase" | "none";
  text: string;
  htText?: string;
  className?: string;
}
export default function Text({
  tag: Tag,
  family = "base",
  text,
  size = "md",
  color = "dark",
  transform = "none",
  htText,
  className,
}: Props) {
  // styles
  const style = {
    fontFamily: `var(--font-family-${family})`,
    fontSize: `var(--font-size-${size})`,
    color: `var(--color-${color})`,
    textTransform: transform,
    overflow: "clip",
  } as CSSProperties;

  const parts = text.split(new RegExp(`(${htText})`, "gi"));
  // component
  return (
    <Tag className={className} style={style}>
      {parts.map((part, index) => {
        const key = `part-${part}-of-text-${text}-${index}`;
        return part.toLocaleLowerCase() === htText?.toLocaleLowerCase() ? (
          <span key={key} style={{ lineHeight: "normal" }}>
            <span className={styles.htTextHidden}>{htText}</span>
            <span className={styles.htText}>{htText}</span>
          </span>
        ) : (
          part
        );
      })}
    </Tag>
  );
}
