import '../styles/reset.css'
import '../styles/global.css'
import type { AppProps } from 'next/app'
import GlobalStyles from '../styles/GlobalStyles'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

export default function CreateAuctionHouseApp({
  Component,
  pageProps
}: AppProps) {
  return (
    <>
      <GlobalStyles />
        <Header />
        <main>
          <Component {...pageProps} />
        </main>
      <Footer />
    </>
  );
}
