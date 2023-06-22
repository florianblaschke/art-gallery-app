import Image from "next/image";
import Favorite from "../FavoriteButton/FavoriteButton";
import Link from "next/link";
import { Container } from "../Spotlight";

export default function Art({ picture }) {
  return (
    <>
      <Container>
        <Link href={`./artpieces/${picture.slug}`}>
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
        </Link>
        <Favorite />
      </Container>
    </>
  );
}
