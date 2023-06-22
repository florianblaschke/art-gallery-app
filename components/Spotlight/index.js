import Image from "next/image";

export default function Spotlight({ picture }) {
  return (
    <div>
      <p>{picture.artist}</p>
      <p>{picture.name}</p>
      <Image
        src={picture.imageSource}
        alt={picture.name}
        width={300}
        height={500}
      ></Image>
    </div>
  );
}
