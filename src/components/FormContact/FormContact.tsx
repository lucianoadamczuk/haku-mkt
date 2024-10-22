"use client";
import { UseTranslation } from "@/app/i18n/client";
import { PERSONAL_INFO } from "@/constants";
import { IParams } from "@/typescript";
import { ReactNode } from "react";
import { useForm } from "react-hook-form";
import Button from "../Button/Button";
import Text from "../Text/Text";
import styles from "./FormContact.module.css";
import { FadeIn } from "@/animations";

/* ------------------------------ Box component ----------------------------- */
interface BoxProps {
  labelText: string;
  title: string;
  children: ReactNode;
  error?: string;
}
const Box = ({ labelText, title, children, error }: BoxProps) => {
  return (
    <div className={styles.box}>
      <label htmlFor={labelText}> {title} </label>
      {children}
      {error && <Text tag="small" color="primary" size="sm" text={error} />}
    </div>
  );
};

/* ----------------------------- form component ----------------------------- */
interface Props {
  params: IParams;
}

interface FormData {
  fullName: string;
  socialMedia: string;
  company: string;
  reason: string;
  comment?: string;
}

export default function FormContact({ params }: Props) {
  /* ------------------------------ translations ------------------------------ */
  const { t } = UseTranslation(params.lang, "translations", {
    keyPrefix: "contact.form",
  });

  const {
    fullName,
    company,
    socialMedia,
    reason,
    comment,
    error,
    errorURL,
    btn,
    btnHover,
  } = {
    fullName: t("fullName"),
    socialMedia: t("socialMedia"),
    company: t("company"),
    reason: {
      text: t("reason.text"),
      items: t("reason.items", { returnObjects: true }),
    },
    comment: t("comment"),
    error: t("error"),
    errorURL: t("errorURL"),
    btn: t("btn"),
    btnHover: t("btnHover"),
  };

  /* ----------------------------- submit handler ----------------------------- */
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  function onSubmit(data: FormData) {
    const { fullName, company, socialMedia, reason, comment } = data;
    const phone = PERSONAL_INFO.phone.replace(/\s+/g, "");
    const message = t("messageTemplate", {
      fullName: fullName,
      company: company,
      socialMedia: socialMedia && "🌐 " + encodeURIComponent(socialMedia),
      reason: reason,
      comment: comment && "📝 " + encodeURIComponent(comment),
    }).replace(/\(-JUMP-\)/g, "%0A");

    const whatsappURL = `https://api.whatsapp.com/send?phone=${phone}&text=${message}`;
    window.open(whatsappURL, "_blank");
  }

  /* -------------------------------------------------------------------------- */
  /*                                  component                                 */
  /* -------------------------------------------------------------------------- */

  return (
    <FadeIn>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        {/* -------------------------------- fullName -------------------------------- */}
        <Box
          title={fullName}
          error={errors.fullName && error}
          labelText="fullName"
        >
          <input type="text" {...register("fullName", { required: true })} />
        </Box>

        {/* --------------------------------- company -------------------------------- */}
        <Box
          title={company}
          error={errors.company && error}
          labelText="company"
        >
          <input type="text" {...register("company", { required: true })} />
        </Box>

        {/* ------------------------------- socialMedia ------------------------------ */}
        <Box
          title={socialMedia}
          error={errors.socialMedia && errorURL}
          labelText="socialMedia"
        >
          <input
            type="text"
            {...register("socialMedia", {
              pattern: { value: /^(http|https):\/\//i, message: errorURL },
            })}
          />
        </Box>

        {/* --------------------------------- reason --------------------------------- */}
        <Box title={reason.text} labelText="reason">
          <select {...register("reason")}>
            {reason.items.map((item: string) => {
              const key = `reason-item-${item}`;
              return (
                <option key={key} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </Box>

        {/* --------------------------------- comment -------------------------------- */}
        <Box title={comment} labelText="comment">
          <textarea {...register("comment")}></textarea>
        </Box>

        {/* --------------------------------- button --------------------------------- */}
        <Button type="submit" text={btn} hoverText={btnHover} full />
      </form>
    </FadeIn>
  );
}
