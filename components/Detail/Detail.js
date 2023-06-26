import Image from "next/image";
import Favorite from "../FavoriteButton/FavoriteButton";
import { Container } from "../Spotlight";
import { useRouter } from "next/router";
import Entry from "../Entries/List";
import styled from "styled-components";

const ColorBox = styled.div.attrs((props) => ({
  $color: props.$color || "red",
}))`
  width: 20px;
  height: 20px;
  background-color: ${(props) => props.$color};
`;

const Wrapper = styled.div`
  display: flex;
`;

export default function Detail({
  art,
  picture,
  onToggleFavorite,
  handleThought,
  thoughts,
}) {
  const router = useRouter();

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    handleThought(picture.artist, data);
  }
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
      <Wrapper>
        {picture.colors.map((color) => (
          <ColorBox $color={color} key={color}></ColorBox>
        ))}
      </Wrapper>
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
      <form onSubmit={handleSubmit}>
        <label htmlFor="text">Art or Trash?</label>
        <textarea maxLength={150} id="text" name="text"></textarea>
        <button type="submit">Save thoughts</button>
      </form>
      <Entry entries={thoughts.find((th) => th.artist === picture.artist)} />
    </Container>
  );
}
