import { useRouter } from "next/router";
import Detail from "@/components/Detail/Detail";

export default function DetailedView({ art, picture, onToggleFavorite }) {
  const router = useRouter();
  const { detail } = router.query;
  const detailImage = picture.find((picture) => picture.slug === detail);
  return (
    <Detail
      art={art}
      onToggleFavorite={onToggleFavorite}
      picture={detailImage}
    />
  );
}
