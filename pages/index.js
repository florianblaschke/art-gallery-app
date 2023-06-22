import Spotlight from "@/components/Spotlight";
import useSWR from "swr";
export default function HomePage({ picture }) {
  const rdmN = Math.floor(Math.random() * picture.length);
  return (
    <div>
      <Spotlight picture={picture[rdmN]} />
    </div>
  );
}
