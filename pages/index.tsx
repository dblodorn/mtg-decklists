import Head from "../components/head";
import { PageWrapper } from "../styles/components";
import { DeckBuilder } from "../components/deckBuilder";

export default function Home() {
  
  return (
    <PageWrapper fw={true}>
      <Head />
      <DeckBuilder />
    </PageWrapper>
  );
}
