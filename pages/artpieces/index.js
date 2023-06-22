import Art from "@/components/Artpieces";
import Link from "next/link";

export default function List({ picture }) {
  return (
    <ul>
      {picture.map((pic) => (
        <Link key={pic.slug} href={`./artpieces/${pic.slug}`}>
          <Art picture={pic} />
        </Link>
      ))}
    </ul>
  );
}
