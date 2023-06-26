import Art from "@/components/Artpieces";

export default function List({ picture, onToggleFavorite, art }) {
  return (
    <ul>
      {picture.map((pic) => (
        <Art
          art={art}
          onToggleFavorite={onToggleFavorite}
          picture={pic}
          key={pic.slug}
        />
      ))}
    </ul>
  );
}
