import { FadeIn } from "@/animations";
import { UseTranslation } from "@/app/i18n/server";
import { Icon, Logo, Text } from "@/components";
import { PERSONAL_INFO } from "@/constants";
import { IParams } from "@/typescript";
import { ReactNode } from "react";
import styles from "./Footer.module.css";

interface BoxProps {
  title: string;
  children: ReactNode;
}
const Box = ({ title, children }: BoxProps) => {
  return (
    <div>
      <Text
        tag="h6"
        family="title"
        color="light"
        transform="uppercase"
        text={title}
      />
      <div style={{ marginTop: "var(--space-sm)", opacity: 0.6 }}>
        {children}
      </div>
    </div>
  );
};

interface Props {
  params: IParams;
}

export default async function Footer({ params }: Props) {
  const { t } = await UseTranslation(params.lang, "translations");

  const description = t("footer.description", { ns: "translations" });
  const metadataDescription = t("metadata.description", { ns: "translations" });
  const contact = t("footer.contact", { ns: "translations" });
  const socialMedia = t("footer.socialMedia", { ns: "translations" });
  const copyright = t("footer.copyright", { ns: "translations" });

  return (
    <footer className={styles.footer}>
      {/* ---------------------------------- logo ---------------------------------- */}
      <FadeIn>
        <Logo size="sm" />
      </FadeIn>

      {/* ------------------------------- description ------------------------------ */}
      <div className={styles.contentContainer}>
        <Box title={description}>
          <Text
            tag="small"
            size="sm"
            color="light"
            text={metadataDescription}
          />
        </Box>
        {/* --------------------------------- contact -------------------------------- */}
        <Box title={contact}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <a
              href={`https://api.whatsapp.com/send?phone=${PERSONAL_INFO.phone.replace(/\s/g, "").replace("+", "%2B")}`}
              className={styles.link}
            >
              <Text
                tag="small"
                color="light"
                size="sm"
                text="+54 9 11 5337 6931"
              />
            </a>
            <a href={`mailto:${PERSONAL_INFO.email}`} className={styles.link}>
              <Text tag="small" color="light" size="sm" text="haku@haku.com" />
            </a>
          </div>
        </Box>
        {/* ------------------------------ socialMedia ------------------------------ */}{" "}
        <Box title={socialMedia}>
          <div style={{ display: "flex", gap: "var(--space-sm)" }}>
            <a
              href={PERSONAL_INFO.socialMedia.instagram}
              target="_blank"
              className={styles.link}
            >
              <Icon as="instagram" />
            </a>
            <a
              href={PERSONAL_INFO.socialMedia.facebook}
              target="_blank"
              className={styles.link}
            >
              <Icon as="facebook" />
            </a>
            <a
              href={PERSONAL_INFO.socialMedia.linkedIn}
              target="_blank"
              className={styles.link}
            >
              <Icon as="linkedIn" />
            </a>
          </div>
        </Box>
        {/* -------------------------------- copyright ------------------------------- */}{" "}
        <div>
          <Text tag="small" color="light" size="sm" text={copyright} />
        </div>
      </div>
    </footer>
  );
}
