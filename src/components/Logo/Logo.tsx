import Text from "../Text/Text";
import styles from "./Logo.module.css";
interface Props {
  size?: "sm" | "md";
}
export default function Logo({ size = "md" }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.triangle}></div>
      <div className={styles.triangle}></div>
      <div className={styles.triangle}></div>
      <Text
        tag="span"
        text="HAKU"
        color="light"
        family="title"
        transform="uppercase"
        size={size === "sm" ? "lg" : "xxl"}
      />
      <div
        className={`${styles.circle} ${size === "sm" && styles.circleSmall}`}
      ></div>
    </div>
  );
}
