import GlobalStyle from "../styles";
import Layout from "@/components/Layout/Layout";
import useSWR, { SWRConfig } from "swr";
import { useImmer } from "use-immer";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const url = "https://example-apis.vercel.app/api/art";
  const { data, isLoading, error } = useSWR(url, fetcher);
  const [art, updateArt] = useImmer([]);
  if (error) return <div>Something bad happened</div>;
  if (!data) return <div>...Loading</div>;

  function toggleFavorite(artist) {
    updateArt((draft) => {
      const picture = draft.find((art) => art.artist === artist);
      if (picture) {
        console.log("picture", picture.artist);
        picture.isFavorite = !picture.isFavorite;
        return;
      }
      draft.push({ artist, isFavorite: true });
    });
  }

  // const favorites = art.filter((pic) => (pic.isFavorite ? true : false));

  // console.log("favorites are", favorites);

  return (
    <>
      <SWRConfig value={{ fetcher }}>
        <Layout>
          <GlobalStyle />
          <Component
            art={art}
            onToggleFavorite={toggleFavorite}
            picture={isLoading || error ? [] : data}
            {...pageProps}
          />
        </Layout>
      </SWRConfig>
    </>
  );
}
