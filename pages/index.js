import Spotlight from "@/components/Spotlight";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: centerM;
`;
export default function HomePage({ picture }) {
  const rdmN = Math.floor(Math.random() * picture.length);
  return (
    <div>
      <Spotlight picture={picture[rdmN]} />
    </div>
  );
}
