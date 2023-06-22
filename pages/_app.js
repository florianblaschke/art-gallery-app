import GlobalStyle from "../styles";
import Layout from "@/components/Layout/Layout";
import useSWR, { SWRConfig } from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const url = "https://example-apis.vercel.app/api/art";
  const { data, isLoading, error } = useSWR(url, fetcher);
  if (error) return <div>Something bad happened</div>;
  if (!data) return <div>...Loading</div>;

  function toggleFavorite() {
    console.log("You are my favorite");
  }
  const isFavorite = false;
  return (
    <>
      <SWRConfig value={{ fetcher }}>
        <Layout>
          <GlobalStyle />
          <Component
            isFavorite={isFavorite}
            onToggleFavorite={toggleFavorite}
            picture={isLoading || error ? [] : data}
            {...pageProps}
          />
        </Layout>
      </SWRConfig>
    </>
  );
}
