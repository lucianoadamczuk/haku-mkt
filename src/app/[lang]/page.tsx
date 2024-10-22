import { IParams } from "@/typescript";
import { Intro } from "@/views";

interface Props {
  params: IParams;
}
export default function PageIntro({ params }: Props) {
  return <Intro params={params} />;
}
