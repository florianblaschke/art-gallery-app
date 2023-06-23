import Art from "@/components/Artpieces";

export default function List({ picture, onToggleFavorite }) {
  return (
    <ul>
      {picture.map((pic) => (
        <Art onToggleFavorite={onToggleFavorite} picture={pic} key={pic.slug} />
      ))}
    </ul>
  );
}
