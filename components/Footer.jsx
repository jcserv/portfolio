/* eslint-disable no-console */
import {
  Box,
  // Link,
  // Stack,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
// import { GoRepoForked, GoStar } from "react-icons/go";
import { BsChevronDown } from "react-icons/bs";
import { colors } from "../theme";
import Jump from "react-reveal/Jump";
import { animateScroll as scroll } from "react-scroll";

import links from "../data/footerLinks";
import LinkIconBar from "./LinkIconBar";
import styles from "../styles/sections/Footer.module.css";

// const GITHUB_URL = "https://github.com/jcserv/portfolio";

export default function Footer() {
  // const [forks, setForks] = useState(0);
  // const [stars, setStars] = useState(0);

  // useEffect(() => {
  //   fetch("https://api.github.com/repos/jcserv/portfolio")
  //     .then((response) => response.json()) // Converting the response to a JSON object
  //     .then((data) => {
  //       setForks(data.forks);
  //       setStars(data.stargazers_count);
  //     })
  //     .catch((error) => console.error(error));
  // }, []);

  const secondary = useColorModeValue(
    colors.secondary.light,
    colors.secondary.dark
  );

  return (
    <Box as="footer" mt={12} height="100%" textAlign="center" className="app">
      {/* <Link href={GITHUB_URL} isExternal>
        <Text fontSize="sm">
          Made with{" "}
          <span aria-label="heart" role="img">
            &#128153;
          </span>
          {" (and React) by Jarrod Servilla"}
        </Text>
      </Link>
      <Stack direction="row" alignItems="center" justify="center">
        <GoRepoForked /> <Text size="xs">{forks}</Text>
        <GoStar /> <Text size="xs">{stars}</Text>
      </Stack> */}

      <Box onClick={scroll.scrollToTop}>
        <VStack className={styles.reverse}>
          <Jump forever duration={1500}>
            <BsChevronDown />
          </Jump>
        </VStack>
        <Text
          // fontSize="sm"
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
