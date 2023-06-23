import Spotlight from "@/components/Spotlight";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: centerM;
`;
export default function HomePage({ picture, onToggleFavorite }) {
  const rdmN = Math.floor(Math.random() * picture.length);
  return (
    <div>
      <Spotlight onToggleFavorite={onToggleFavorite} picture={picture[rdmN]} />
    </div>
  );
}
