import Image from "next/image";
import Favorite from "../FavoriteButton/FavoriteButton";
import { Container } from "../Spotlight";
import { useRouter } from "next/router";

export default function Detail({ art, picture, onToggleFavorite }) {
  const router = useRouter();
  console.log(picture.isFavorite);
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
      <Favorite
        id={picture.artist}
        isFavorite={
          art.find((ar) => ar.artist === picture.artist)?.isFavorite
            ? true
            : false
        }
        onToggleFavorite={onToggleFavorite}
      />
      <button onClick={() => router.push("/artpieces")}>Back</button>
    </Container>
  );
}
