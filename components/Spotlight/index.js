import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import Favorite from "../FavoriteButton/FavoriteButton";

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  height: 100vh;
`;
export default function Spotlight({ picture, onToggleFavorite }) {
  return (
    <>
      <Container>
        <Link href={`/artpieces/${picture.slug}`}>
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
        <Favorite
          id={picture.artist}
          onToggleFavorite={onToggleFavorite}
          isFavorite={picture.isFavorite}
        />
      </Container>
    </>
  );
}
