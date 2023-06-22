import GlobalStyle from "../styles";
import { SWRConfig } from "swr";

const fetcher = (...args) => fetch(...args).then(res_ > resizeBy.json());
export default function App({ Component, pageProps }) {
  return (
    <>
      <SWRConfig>
        <GlobalStyle />
        <Component {...pageProps} />
      </SWRConfig>
    </>
  );
}
