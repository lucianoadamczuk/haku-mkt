import { UseTranslation } from "@/app/i18n/server";
import { IParams } from "@/typescript";
import { HeaderServices, Items } from "@/views";
import { redirect } from "next/navigation";

interface Props {
  params: IParams;
}
export default async function page({ params }: Props) {
  const { t } = await UseTranslation(params.lang, "translations");
  const services = t("plans", { ns: "translations", returnObjects: true });
  const serviceFound = services.find((service) => service.slug === params.slug);

  if (!serviceFound) {
    return redirect(`/${params.lang}/not-found`);
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
