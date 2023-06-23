import Art from "@/components/Artpieces";

export default function Favorites({ art, onToggleFavorite, picture }) {
  const favorites = picture.filter((pic) =>
    art.find((ar) => ar.artist === pic.artist)
  );
  console.log("hello", favorites);
  return (
    <ul>
      {favorites.map((pic) => (
        <Art onToggleFavorite={onToggleFavorite} picture={pic} key={pic.Slug} />
      ))}
    </ul>
  );
}

/* const favorites = pieces.filter((piece) =>
  artPiecesInfo.find(
    (artPiece) => artPiece.slug === piece.slug && artPiece.isFavorite
  )
); */
