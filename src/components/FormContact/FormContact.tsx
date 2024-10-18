import { ReactNode } from "react";
import Text from "../Text/Text";
import styles from "./FormContact.module.css";
import { FadeIn } from "@/animations";
import Button from "../Button/Button";

interface BoxProps {
  children: ReactNode;
}
const Box = ({ children }: BoxProps) => {
  return (
    <div className={styles.box}>
      <label htmlFor="">label</label>
      {children}
      <Text tag="small" color="primary" size="sm" text="Error de campo" />
    </div>
  );
};

export default function FormContact() {
  return (
    <FadeIn className={styles.form}>
      <Box>
        <input type="text" />
      </Box>
      <Box>
        <input type="text" name="" id="" />
      </Box>
      <Box>
        <input type="text" name="" id="" />
      </Box>
      <Box>
        <select name="" id="">
          <option value="">plan sakura</option>
          <option value="">plan sakura</option>
          <option value="">plan sakura</option>
          <option value="">plan sakura</option>
        </select>
      </Box>
      <Box>
        <textarea name="" id=""></textarea>
      </Box>

      <Button type="submit" text="Enviar" hoverText="Hablemos" full />
    </FadeIn>
  );
}
