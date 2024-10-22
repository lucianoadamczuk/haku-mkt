import { UseTranslation } from "@/app/i18n/server";
import { IParams } from "@/typescript";
import { ReactNode } from "react";

/* ----------------------- generate static slug params ---------------------- */
interface SharedProps {
  params: IParams;
}
export async function generateStaticParams({ params }: SharedProps) {
  const { t } = await UseTranslation(params.lang, "translations");
  const services = t("plans", { ns: "translations", returnObjects: true });

  return services.map((service) => ({ slug: service.slug }));
}

/* -------------------------------- metadata -------------------------------- */
export async function generateMetadata({ params }: SharedProps) {
  const { t } = await UseTranslation(params.lang, "translations");
  const services = t("plans", { ns: "translations", returnObjects: true });
  const serviceFound = services.find((service) => service.slug === params.slug);

  const title = `HAKU - ${serviceFound?.title}`;
  const description = serviceFound?.description;

  return { title, description };
}

interface Props {
  children: ReactNode;
}

export default async function layout({ children }: Props) {
  return children;
}
