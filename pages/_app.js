import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta property="og:image" content="https://personal-site-nimapourjafar.vercel.app/thumbnail.png" />
        <meta property="author" content="Nima Pourjafar" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:site" content="@PourjafarNima"/>
      </Head>
      <Navbar />
      <Component {...pageProps} />
      {/* <Footer/> */}
    </>
  );
}

export default MyApp;
