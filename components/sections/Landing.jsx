import { useColorModeValue, VStack } from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";
import Jump from "react-reveal/Jump";
import { Link } from "react-scroll";

import styles from "../../styles/sections/Landing.module.css";
import { colors } from "../../theme";
import SectionContainer from "../SectionContainer";

export default function Landing() {
  const primary = useColorModeValue(colors.primary.dark, colors.primary.light);
  const secondary = useColorModeValue(
    colors.secondary.dark,
    colors.secondary.light
  );

  const header = (
    <div className={styles.center}>
      <h1 className={styles.tagline} style={{ color: primary }}>
        Hi, I&apos;m Jarrod Servilla,{" "}
      </h1>
      <h1 className={styles.tagline} style={{ color: primary }}>
        {" "}
        a <strong style={{ color: secondary }}>full stack developer.</strong>
      </h1>
    </div>
  );

  return (
    <SectionContainer id="landing" name="landing" headerText={header}>
      <Link
        activeClass="active"
        to="about"
        spy
        smooth
        offset={-70}
        duration={500}
      >
        <VStack>
          <h5 className={styles.learn}>Learn More</h5>
          <Jump forever duration={1500}>
            <BsChevronDown />
          </Jump>
        </VStack>
      </Link>
    </SectionContainer>
  );
}
