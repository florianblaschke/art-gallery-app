import Image from "next/image";
import Favorite from "../FavoriteButton/FavoriteButton";
import { Container } from "../Spotlight";
import { useRouter } from "next/router";

export default function Detail({ picture, onToggleFavorite, isFavorite }) {
  const router = useRouter();
  return (
    <Container>
      <p>{picture.artist}</p>
      <p>
        {picture.name} {""} {picture.year}
      </p>
      <Image
        src={picture.imageSource}
        alt={picture.name}
        width={300}
        height={500}
      ></Image>
      <p>{picture.genre}</p>
      <Favorite isFavorite={isFavorite} onToggleFavorite={onToggleFavorite} />
      <button onClick={() => router.push("/artpieces")}>Back</button>
    </Container>
  );
}
