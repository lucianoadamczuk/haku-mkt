import Text from "../Text/Text";
import styles from "./Logo.module.css";
export default function Logo() {
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
        size="xxl"
      />
      <div className={styles.circle}></div>
    </div>
  );
}
