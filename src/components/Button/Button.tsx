import Text from "../Text/Text";
import styles from "./Button.module.css";
import Link from "next/link";

interface Props {
  type?: "submit" | "button";
  text: string;
  hoverText: string;
  color?: "primary";
  full?: boolean;
  onClick?: () => void;
  href?: string;
}

export default function Button({
  type = "button",
  text,
  hoverText,
  color = "primary",
  full = false,
  onClick,
  href,
}: Props) {
  const longestText = text.length === hoverText.length ? text : hoverText;

  const content = (
    <>
      <Text
        tag="span"
        family="title"
        color="light"
        className={styles.text}
        text={text}
      />

      <Text
        tag="span"
        family="title"
        color="light"
        className={styles.hoverText}
        text={hoverText}
      />
      <Text
        tag="span"
        family="title"
        color="light"
        className={styles.longestText}
        text={longestText}
      />
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={`${styles.button} ${styles[color]} ${full && styles.full}`}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={`${styles.button} ${styles[color]} ${full && styles.full}`}
      onClick={onClick}
    >
      {content}
    </button>
  );
}
