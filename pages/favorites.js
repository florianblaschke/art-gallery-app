import Art from "@/components/Artpieces";

export default function Favorites({ art, onToggleFavorite, picture }) {
  const favorites = picture.filter((pic) =>
    art.find((ar) => ar.artist === pic.artist && ar.isFavorite)
  );
  return (
    <ul>
      {favorites.map((pic) => (
        <Art
          art={art}
          onToggleFavorite={onToggleFavorite}
          picture={pic}
          key={pic.artist}
        />
      ))}
    </ul>
  );
}

/* const favorites = pieces.filter((piece) =>
  artPiecesInfo.find(
    (artPiece) => artPiece.slug === piece.slug && artPiece.isFavorite
  )
); */
