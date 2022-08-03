import "../styles/globals.css";

import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
// import Script from "next/script";
import React from "react";

import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import theme from "../theme";
import checkLocale from "../utils/checkLanguage";

const SiteHead = ({ title }) => (
  <Head>
    <title>{title}</title>
    <meta name="title" content="Filipe Lehmann - Front End Developer" />
    <meta name="description" content="Filipe Lehmann - Portfolio" />
    <link rel="icon" href="/favicon.ico" />
    <link rel="apple-touch-icon" href="/logo192.png" />
    <link rel="manifest" href="/manifest.json" />
    <meta name="theme-color" content="#252934" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://filipelehmann.vercel.app/" />
    <meta property="og:title" content="Filipe Lehmann - Front End Developer" />
    <meta
      property="og:description"
      content="Filipe Lehmann's personal portfolio"
    />
    <meta property="og:image" content="/logo512.png" />
    <noscript>
      <img
        src="https://queue.simpleanalyticscdn.com/noscript.gif"
        alt=""
        referrerPolicy="no-referrer-when-downgrade"
      />
    </noscript>
  </Head>
);

const PageWrapper = ({ children, title }) => {
  const router = useRouter();
  const { locale } = router;
  const t = checkLocale(locale);
  return (
    <div className="container">
      <SiteHead title={title} />
      <NavBar locale={locale} router={router} translationFile={t} />
      <main className="main">{children}</main>
      <Footer translationFile={t} />
    </div>
  );
};

function App({ Component, pageProps }) {
  const { pathname } = useRouter();

  const pathToTitle = {
    "/": "Filipe Lehmann - Front End Developer",
  };

  return (
    <ChakraProvider theme={theme}>
      <PageWrapper title={pathToTitle[pathname]}>
        <Component {...pageProps} />
      </PageWrapper>
    </ChakraProvider>
  );
}

export default App;
