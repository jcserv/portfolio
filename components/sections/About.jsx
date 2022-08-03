import {
  GridItem,
  Image,
  Link,
  SimpleGrid,
  Text,
  useBreakpointValue,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { Link as LinkScroll } from "react-scroll";

import styles from "../../styles/sections/Landing.module.css";
import { colors } from "../../theme";
import emphasisStrong from "../../utils/highlighting";
import SectionContainer from "../SectionContainer";

const Bio = ({ secondary, translationFile }) => (
  <GridItem className={styles.grid}>
    <VStack
      style={{ textAlign: "justify" }}
      m="auto"
      w="75%"
      spacing="12px"
      pt="5%"
    >
      <Text>{translationFile.about.effect}</Text>
      <Text>{translationFile.about.myself}</Text>
      <Text>
        {emphasisStrong(
          translationFile.about.main1,
          translationFile.about.strong.s1
        )}
        {/* {" "} */}
        <Link
          href="https://www.bambui.ifmg.edu.br/portal/"
          style={{ color: secondary }}
          isExternal
        >
          IFMG
        </Link>{" "}
        {emphasisStrong(
          translationFile.about.main2,
          translationFile.about.strong.s2
        )}{" "}
        <Link
          href="https://www.guaranisistemas.com.br/"
          style={{ color: secondary }}
          isExternal
        >
          Guarani Sistemas
        </Link>{" "}
        {translationFile.about.main3}
      </Text>
      <LinkScroll
        to="contact"
        spy
        smooth
        offset={-50}
        duration={1500}
        activeClass="active"
        style={{ fontSize: "14px", opacity: 0.7 }}
      >
        <Text
          as="strong"
          className={`${styles.learn}`}
          _hover={{ cursor: "pointer", color: secondary }}
        >
          {translationFile.about.cta}
        </Text>
      </LinkScroll>
    </VStack>
  </GridItem>
);

const Headshot = () => (
  <GridItem className={styles.grid}>
    <Image
      m="auto"
      src="/me.jpg"
      alt="Filipe Lehmann"
      zIndex={1}
      className="image"
      onClick={() => {
        window.open("http://linkedin.com/in/filipe-lehmann-pereira/");
      }}
    />
  </GridItem>
);

export default function About({ translationFile }) {
  const shouldAlternate = useBreakpointValue({ base: false, md: true });
  const secondary = useColorModeValue(
    colors.secondary.light,
    colors.secondary.dark
  );

  return (
    <SectionContainer
      id="about"
      name="about"
      headerMt="-5%"
      headerText={translationFile.about.title}
      useHeaderStyle
    >
      <SimpleGrid
        pl="10%"
        pt="5%"
        pr="10%"
        spacing={12}
        columns={[1, null, 2]}
        justifyContent="center"
      >
        {shouldAlternate ? (
          <Bio secondary={secondary} translationFile={translationFile} />
        ) : (
          <Headshot />
        )}
        {shouldAlternate ? (
          <Headshot />
        ) : (
          <Bio secondary={secondary} translationFile={translationFile} />
        )}
      </SimpleGrid>
    </SectionContainer>
  );
}
