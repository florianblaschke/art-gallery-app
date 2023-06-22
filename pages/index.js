import Spotlight from "@/components/Spotlight";
import useSWR from "swr";
export default function HomePage() {
  const url = "https://example-apis.vercel.app/api/art";
  const { data, error } = useSWR(url);
  if (error) return <div>Something bad happened</div>;
  if (!data) return <div>...Loading</div>;
  const rdmN = Math.floor(Math.random() * data.length);
  return (
    <div>
      <Spotlight picture={data[rdmN]} />
    </div>
  );
}
