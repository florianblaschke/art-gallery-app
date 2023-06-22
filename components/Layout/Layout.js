import Link from "next/link";
import styled from "styled-components";

const Header = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 50px;
  color: white;
  width: 100%;
  background-color: red;
`;

const Footer = styled.footer`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: sticky;
  bottom: 0px;
  background-color: red;
  color: white;
  width: 100%;
  height: 50px;
`;

const Main = styled.main`
  position: relative;
`;

export default function Layout({ children }) {
  return (
    <>
      <Header>My Art Gallery</Header>
      <Main>{children}</Main>
      <Footer>
        <Link href="/">Spotlight</Link>
        <Link href="/artpieces/">Artpieces</Link>
      </Footer>
    </>
  );
}
