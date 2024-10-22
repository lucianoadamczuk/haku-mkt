import { UseTranslation } from "@/app/i18n/server";
import { IParams } from "@/typescript";
import { HeaderServices, Items } from "@/views";
import { notFound } from "next/navigation";

interface Props {
  params: IParams;
}
export default async function page({ params }: Props) {
  const { t } = await UseTranslation(params.lang, "translations");
  const services = t("plans", { ns: "translations", returnObjects: true });
  const serviceFound = services.find((service) => service.slug === params.slug);

  if (!serviceFound) {
    console.log("Service not found, redirecting to 404...");
    return notFound();
  }

  const { slug, inspiration, title, phrase, description, alt, items } =
    serviceFound;

  return (
    <>
      <HeaderServices
        slug={slug}
        inspiration={inspiration}
        title={title}
        phrase={phrase}
        description={description}
        src={`/assets/images/services/${serviceFound.slug}.svg`}
        alt={alt}
      />
      <Items slug={slug} items={items} />
    </>
  );
}
