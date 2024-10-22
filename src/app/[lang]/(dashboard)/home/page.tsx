import { IParams } from "@/typescript";
import { About, CallToActionBanner, Header, Methodology, Plans } from "@/views";

interface Props {
  params: IParams;
}

export default function page({ params }: Props) {
  return (
    <>
      <Header params={params} />
      <About params={params} />
      <Methodology params={params} />
      <Plans params={params} />
      <CallToActionBanner params={params} />
    </>
  );
}
