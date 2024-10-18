import Text from "../Text/Text";
import styles from "./Button.module.css";
interface Props {
  type?: "submit" | "button";
  text: string;
  hoverText: string;
  color?: "primary";
  full?: boolean;
  onClick?: () => void;
}
export default function Button({
  type = "button",
  text,
  hoverText,
  color = "primary",
  full = false,
  onClick,
}: Props) {
  const longestText = text.length === hoverText.length ? text : hoverText;

  return (
    <button
      type={type}
      className={`${styles.button} ${styles[color]} ${full && styles.full}`}
      onClick={onClick}
    >
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
    </button>
  );
}
