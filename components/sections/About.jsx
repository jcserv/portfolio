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

import { checkLocale } from "../../utils/checkLanguage";

import styles from "../../styles/sections/Landing.module.css";
import { colors } from "../../theme";
import SectionContainer from "../SectionContainer";
import { useRouter } from "next/router";

const Bio = ({ secondary, t }) => (
  <GridItem className={styles.grid}>
    <VStack
      style={{ textAlign: "justify" }}
      m="auto"
      w="75%"
      spacing="12px"
      pt="5%"
    >
      <Text>{t.about.effect}</Text>
      <Text>{t.about.myself}</Text>
      <Text>
        Estou me formando em{" "}
        <strong style={{ color: secondary }}>Engenharia de Computação</strong>{" "}
        pelo{" "}
        <Link
          href="https://www.bambui.ifmg.edu.br/portal/"
          style={{ color: secondary }}
          isExternal
        >
          IFMG
        </Link>{" "}
        e em busca de novas experiências. Em minha trajetória como desenvolvedor
        fui{" "}
        <strong style={{ color: secondary }}>
          Estagiário em Desenvolvimento Web
        </strong>{" "}
        na{" "}
        <Link
          href="https://www.guaranisistemas.com.br/"
          style={{ color: secondary }}
          isExternal
        >
          Guarani Sistemas
        </Link>{" "}
        e fiz diversos projetos pessoais e acadêmicos.
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
          {t.about.cta}
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

export default function About() {
  const shouldAlternate = useBreakpointValue({ base: false, md: true });
  const secondary = useColorModeValue(
    colors.secondary.light,
    colors.secondary.dark
  );
  const router = useRouter();
  const { locale } = router;
  const t = checkLocale(locale);

  return (
    <SectionContainer
      id="about"
      name="about"
      headerMt="-5%"
      headerText="Sobre Mim"
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
        {shouldAlternate ? <Bio secondary={secondary} t={t} /> : <Headshot />}
        {shouldAlternate ? <Headshot /> : <Bio secondary={secondary} t={t} />}
      </SimpleGrid>
    </SectionContainer>
  );
}
