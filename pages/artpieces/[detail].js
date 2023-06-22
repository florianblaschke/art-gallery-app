import { useRouter } from "next/router";
import Detail from "@/components/Detail/Detail";

export default function DetailedView({ picture }) {
  const router = useRouter();
  const { detail } = router.query;
  const detailImage = picture.find((picture) => picture.slug === detail);
  console.log(detail);
  return <Detail picture={detailImage} />;
}
