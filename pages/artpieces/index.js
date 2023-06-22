import Art from "@/components/Artpieces";

export default function List({ picture, isFavorite, onToggleFavorite }) {
  return (
    <ul>
      {picture.map((pic) => (
        <Art
          isFavorite={isFavorite}
          onToggleFavorite={onToggleFavorite}
          picture={pic}
          key={pic.slug}
        />
      ))}
    </ul>
  );
}
