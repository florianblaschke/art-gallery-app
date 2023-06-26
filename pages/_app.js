import GlobalStyle from "../styles";
import Layout from "@/components/Layout/Layout";
import useSWR, { SWRConfig } from "swr";
import { useImmer } from "use-immer";
import { useImmerLocalStorageState } from "@/resources/lib/hook/useImmerLocalStorageState";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const url = "https://example-apis.vercel.app/api/art";
  const { data, isLoading, error } = useSWR(url, fetcher);
  const [art, updateArt] = useImmerLocalStorageState("art", {
    defaultValue: [],
  });
  const [thoughts, updateThoughts] = useImmerLocalStorageState("thoughts", {
    defaultValue: [],
  });
  if (error) return <div>Something bad happened</div>;
  if (!data) return <div>...Loading</div>;

  function toggleFavorite(artist) {
    updateArt((draft) => {
      const picture = draft.find((art) => art.artist === artist);
      if (picture) {
        picture.isFavorite = !picture.isFavorite;
        return;
      }
      draft.push({ artist, isFavorite: true });
    });
  }

  function handleThought(artist, data) {
    const currentDate = new Date().toLocaleDateString("en-us", {
      dateStyle: "medium",
    });
    updateThoughts((draft) => {
      const current = draft.find((th) => th.artist === artist);
      if (current) {
        current.text.push({ ...data, date: currentDate });
        return;
      }
      draft.push({ artist, text: [{ ...data, date: currentDate }] });
    });
  }

  return (
    <>
      <SWRConfig value={{ fetcher }}>
        <Layout>
          <GlobalStyle />
          <Component
            thoughts={thoughts}
            handleThought={handleThought}
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
