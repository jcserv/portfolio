import {
  Text,
  useColorModeValue,
  VStack,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { BsChevronDown } from "react-icons/bs";
import Jump from "react-reveal/Jump";
import { Link } from "react-scroll";

import { emphasisStrong } from "../../utils/highlighting";
import { checkLocale } from "../../utils/checkLanguage";

import links from "../../data/footerLinks";
import styles from "../../styles/sections/Landing.module.css";
import { colors } from "../../theme";
import LinkIconBar from "../LinkIconBar";
import SectionContainer from "../SectionContainer";

export default function Landing() {
  const primary = useColorModeValue(colors.primary.dark, colors.primary.light);
  const secondary = useColorModeValue(
    colors.secondary.light,
    colors.secondary.dark
  );
  const router = useRouter();
  const { locale } = router;
  // console.log(locale);
  const t = checkLocale(locale);
  // console.log(t.landing);

  const header = (
    <div className={styles.center}>
      <h1 className={styles.tagline} style={{ color: primary }}>
        <h1 className={styles.tagline} style={{ color: primary }}>
          {emphasisStrong(t.landing.title, t.landing.strong)}
        </h1>
      </h1>
    </div>
  );

  return (
    <SectionContainer
      id="landing"
      name="landing"
      display="flex"
      justify="center"
      headerText={header}
    >
      <LinkIconBar links={links} />

      <Link
        activeClass="active"
        to="about"
        spy
        smooth
        offset={-70}
        duration={500}
      >
        <VStack>
          <Text
            as="strong"
            _hover={{ color: secondary, cursor: "pointer" }}
            className={styles.learn}
          >
            {t.landing.about}
          </Text>
          <VStack>
            <Jump forever duration={1500}>
              <BsChevronDown />
            </Jump>
          </VStack>
        </VStack>
      </Link>
    </SectionContainer>
  );
}
