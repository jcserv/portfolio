import { useRouter } from "next/router";
import React from "react";

import About from "../components/sections/About";
import Contact from "../components/sections/Contact";
// import Certificates from "../components/sections/Certificates";
import Experience from "../components/sections/Experience";
import Landing from "../components/sections/Landing";
import MoreProjects from "../components/sections/MoreProjects";
import Projects from "../components/sections/Projects";
import styles from "../styles/Home.module.css";
import checkLocale from "../utils/checkLanguage";

export default function Home() {
  const router = useRouter();
  const { locale } = router;
  const t = checkLocale(locale);
  return (
    <div className={styles.container}>
      <Landing translationFile={t} />
      <About translationFile={t} />
      <Experience locale={locale} translationFile={t} />
      <Projects translationFile={t} />
      <MoreProjects translationFile={t} />
      {/* <Certificates /> */}
      <Contact />
    </div>
  );
}
