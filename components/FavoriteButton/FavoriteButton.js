export default function Favorite({ id, isFavorite, onToggleFavorite }) {
  return (
    <button onClick={() => onToggleFavorite(id)}>
      {isFavorite ? "Unmark Favorite" : "MarkFavorite"}
    </button>
  );
}
