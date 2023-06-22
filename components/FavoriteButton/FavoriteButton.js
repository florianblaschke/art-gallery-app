export default function Favorite({ isFavorite, onToggleFavorite }) {
  return <button onClick={onToggleFavorite}>Mark favorite</button>;
}
