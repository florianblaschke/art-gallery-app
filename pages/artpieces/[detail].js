import { useRouter } from "next/router";
import Detail from "@/components/Detail/Detail";

export default function DetailedView({
  picture,
  onToggleFavorite,
  isFavorite,
}) {
  const router = useRouter();
  const { detail } = router.query;
  const detailImage = picture.find((picture) => picture.slug === detail);
  console.log(detail);
  return (
    <Detail
      isFavorite={isFavorite}
      onToggleFavorite={onToggleFavorite}
      picture={detailImage}
    />
  );
}
