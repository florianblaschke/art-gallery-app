import { useRouter } from "next/router";
import Detail from "@/components/Detail/Detail";

export default function DetailedView({
  art,
  picture,
  onToggleFavorite,
  handleThought,
  thoughts,
}) {
  const router = useRouter();
  const { detail } = router.query;
  const detailImage = picture.find((picture) => picture.slug === detail);
  return (
    <Detail
      thoughts={thoughts}
      handleThought={handleThought}
      art={art}
      onToggleFavorite={onToggleFavorite}
      picture={detailImage}
    />
  );
}
