import Art from "@/components/Artpieces";
import useSWR from "swr";
import Link from "next/link";

export default function List({}) {
  const url = "https://example-apis.vercel.app/api/art";
  const { data, error } = useSWR(url);
  if (error) return <div>Something bad happened</div>;
  if (!data) return <div>...Loading</div>;
  return (
    <ul>
      {data.map((picture) => (
        <Link key={picture.slug} href={`./artpieces/${picture.slug}`}>
          <Art picture={picture} />
        </Link>
      ))}
    </ul>
  );
}
