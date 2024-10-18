import styles from "./FadeIn.module.css";
import { ReactNode } from "react";

interface Props {
  className?: string;
  children: ReactNode;
}
export default function FadeIn({ className, children }: Props) {
  return <div className={`${styles.fadeIn} ${className}`}>{children}</div>;
}
