import Art from "@/components/Artpieces";

export default function List({ picture }) {
  return (
    <ul>
      {picture.map((pic) => (
        <Art picture={pic} key={pic.slug} />
      ))}
    </ul>
  );
}
