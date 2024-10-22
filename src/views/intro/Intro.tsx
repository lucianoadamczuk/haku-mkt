"use client";

import { Text } from "@/components";
import styles from "./intro.module.css";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { IParams } from "@/typescript";

interface Props {
  params: IParams;
}
export default function Intro({ params }: Props) {
  const router = useRouter();

  useEffect(() => {
    const handleRedirect = () => {
      setTimeout(() => {
        router.push(`${params.lang}/home`);
      }, 7500);
    };

    handleRedirect();
  }, [params.lang, router]);

  return (
    <section className={styles.section}>
      <div className={`${styles.triangle} ${styles.triangleLeft}`}></div>
      <div className={`${styles.triangle} ${styles.triangleCenter}`}></div>
      <div className={`${styles.triangle} ${styles.triangleRight}`}></div>
      <Text
        tag="h1"
        family="title"
        size="xxl"
        color="light"
        text="HAKU"
        className={styles.title}
      />
      <div className={styles.circle}></div>
    </section>
  );
}
