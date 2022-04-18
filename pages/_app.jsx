import "../styles/globals.css";

import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import Script from "next/script";
import React from "react";

import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import theme from "../theme";

const SiteHead = ({ title }) => (
  <Head>
    <title>{title}</title>
    <meta name="title" content="Jarrod Servilla - Full Stack Developer" />
    <meta name="description" content="Jarrod Servilla - Portfolio" />
    <link rel="icon" href="/favicon.ico" />
    <link rel="apple-touch-icon" href="/logo192.png" />
    <link rel="manifest" href="/manifest.json" />
    <meta name="theme-color" content="#252934" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://www.jarrodservilla.com/" />
    <meta
      property="og:title"
      content="Jarrod Servilla - Full Stack Developer"
    />
    <meta
      property="og:description"
      content="Jarrod Servilla's personal portfolio"
    />
    <meta property="og:image" content="/logo512.png" />
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="http://www.jarrodservilla.com/" />
    <meta
      property="twitter:title"
      content="Jarrod Servilla - Full Stack Developer"
    />
    <meta
      property="twitter:description"
      content="Jarrod Servilla's personal portfolio"
    />
    <meta property="twitter:image" content="/logo512.png" />
    <Script
      async
      defer
      src="https://scripts.simpleanalyticscdn.com/latest.js"
    />
    <noscript>
      <img
        src="https://queue.simpleanalyticscdn.com/noscript.gif"
        alt=""
        referrerPolicy="no-referrer-when-downgrade"
      />
    </noscript>
  </Head>
);

const PageWrapper = ({ children, title }) => (
  <div className="container">
    <SiteHead title={title} />
    <NavBar />
    <main className="main">{children}</main>
    <Footer />
  </div>
);

function App({ Component, pageProps }) {
  const { pathname } = useRouter();

  const pathToTitle = {
    "/": "Jarrod Servilla - Full Stack Developer",
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
