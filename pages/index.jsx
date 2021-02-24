import React from "react";

import About from "../components/sections/About";
import Landing from "../components/sections/Landing";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Landing />
      <About />
    </div>
  );
}
