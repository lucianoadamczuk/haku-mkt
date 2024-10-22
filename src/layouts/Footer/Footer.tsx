import { UseTranslation } from "@/app/i18n/server";
import { Icon, Logo, Text } from "@/components";
import { PERSONAL_INFO } from "@/constants";
import { IParams } from "@/typescript";
import Link from "next/link";
import { ReactNode } from "react";
import styles from "./Footer.module.css";
import { FadeIn } from "@/animations";

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
      {children}
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
  const socialMedias = t("footer.socialMedias", { ns: "translations" });
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
            <Text
              tag="small"
              color="light"
              size="sm"
              text="+54 9 11 5337 6931"
            />
            <Text tag="small" color="light" size="sm" text="haku@haku.com" />
          </div>
        </Box>
        {/* ------------------------------ socialMedias ------------------------------ */}{" "}
        <Box title={socialMedias}>
          <div style={{ display: "flex", gap: "var(--space-sm)" }}>
            <Link href={PERSONAL_INFO.socialMedias.instagram} target="_blank">
              <Icon as="instagram" />
            </Link>
            <Link href={PERSONAL_INFO.socialMedias.facebook} target="_blank">
              <Icon as="facebook" />
            </Link>
            <Link href={PERSONAL_INFO.socialMedias.linkedIn} target="_blank">
              <Icon as="linkedIn" />
            </Link>
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
