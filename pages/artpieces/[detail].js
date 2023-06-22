import { useRouter } from "next/router";
import useSWR from "swr";
import Detail from "@/components/Detail/Detail";

export default function DetailedView() {
  const url = "https://example-apis.vercel.app/api/art";
  const { data, error } = useSWR(url);
  if (error) return <div>Something bad happened</div>;
  if (!data) return <div>...Loading</div>;
  const router = useRouter();
  const { detail } = router.query;
  const detailImage = data.find((picture) => picture.slug === detail);
  console.log(detail);
  return <Detail picture={detailImage} />;
}
