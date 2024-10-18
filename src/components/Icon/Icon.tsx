import { BiMenuAltRight } from "react-icons/bi";
import {
  AiOutlineClose,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillFacebook,
} from "react-icons/ai";

import styles from "./Icon.module.css";

interface Props {
  as: "menu" | "close" | "instagram" | "linkedIn" | "facebook";
  color?: "light" | "dark";
}

const iconMap = {
  menu: BiMenuAltRight,
  close: AiOutlineClose,
  instagram: AiFillInstagram,
  linkedIn: AiFillLinkedin,
  facebook: AiFillFacebook,
};

export default function Icon({ as, color = "light" }: Props) {
  const IconComponent = iconMap[as];

  return IconComponent ? (
    <IconComponent
      className={styles.icon}
      style={{ color: `var(--color-${color})` }}
    />
  ) : null;
}
