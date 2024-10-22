import { IParams } from "@/typescript";
import { NotFound } from "@/views";

interface Props {
  params: IParams;
}
export default function page({ params }: Props) {
  return <NotFound params={params} />;
}
