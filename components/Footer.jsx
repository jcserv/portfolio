/* eslint-disable no-console */
import { Box, Text, useColorModeValue, VStack } from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";
import Jump from "react-reveal/Jump";
import { animateScroll as scroll } from "react-scroll";

import links from "../data/footerLinks";
import styles from "../styles/sections/Footer.module.css";
import { colors } from "../theme";
import LinkIconBar from "./LinkIconBar";

export default function Footer() {
  const secondary = useColorModeValue(
    colors.secondary.light,
    colors.secondary.dark
  );

  return (
    <Box as="footer" mt={12} height="100%" textAlign="center" className="app">
      <Box onClick={scroll.scrollToTop}>
        <VStack className={styles.reverse}>
          <Jump forever duration={1500}>
            <BsChevronDown />
          </Jump>
        </VStack>
        <Text
          mt={2}
          as="strong"
          _hover={{
            color: secondary,
            cursor: "pointer",
            transition: "all 0.2s ease-in-out",
          }}
        >
          Voltar para o topo{" "}
        </Text>
      </Box>
      <LinkIconBar links={links} />
    </Box>
  );
}
