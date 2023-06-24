import Art from "@/components/Artpieces";

export default function Favorites({ art, onToggleFavorite, picture }) {
  console.log("picture is", picture);
  console.log("art is", art);
  const favorites = picture.filter((pic) =>
    art.find((ar) => ar.artist === pic.artist && ar.isFavorite)
  );
  console.log("favorites is", favorites);
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
