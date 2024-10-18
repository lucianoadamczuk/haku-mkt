import { TColors } from "@/typescript";
import { CSSProperties } from "react";

interface Props {
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "small";
  family?: "base" | "title" | "japanese";
  size?: "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl";
  color?: TColors;
  transform?: "uppercase" | "none";
  text: string;
  className?: string;
}
export default function Text({
  tag: Tag,
  family = "base",
  text,
  size = "md",
  color = "dark",
  transform = "none",
  className,
}: Props) {
  // styles
  const style = {
    fontFamily: `var(--font-family-${family})`,
    fontSize: `var(--font-size-${size})`,
    color: `var(--color-${color})`,
    textTransform: transform,
  } as CSSProperties;

  // component
  return (
    <Tag className={className} style={style}>
      {text}
    </Tag>
  );
}
