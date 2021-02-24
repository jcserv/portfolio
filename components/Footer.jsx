import {
  Box,
  Icon,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { VscGithubInverted } from "react-icons/vsc";
import { animateScroll as scroll } from "react-scroll";

export default function Footer() {
  const links = [
    {
      label: "Github",
      icon: VscGithubInverted,
      url: "https://github.com/jcserv/PostureAI/",
    },
  ];

  const color = useColorModeValue("secondary.light", "secondary.dark");
  return (
    <Box as="footer" mt={12} height="100%" textAlign="center" className="app">
      <Text fontSize="sm">
        Made with{" "}
        <span aria-label="heart" role="img">
          &#128153;
        </span>
        {" (and React) by Jarrod Servilla"}
      </Text>
      <Text fontSize="sm" mt={2} onClick={scroll.scrollToTop}>
        <span role="img" aria-label="rocket">
          &#128640;
        </span>{" "}
        Click me to scroll to the top!{" "}
        <span role="img" aria-label="rocket">
          &#128640;
        </span>
      </Text>
      <Stack mt={4} direction="row" spacing="12px" justify="center" mb={10}>
        {links.map((link, index) => (
          <Link
            key={`link-${index}`}
            display="inline-block"
            href={link.url}
            aria-label={link.label}
            isExternal
          >
            <Icon
              as={link.icon}
              fontSize="xl"
              color="gray.400"
              _hover={{ color }}
            />
          </Link>
        ))}
      </Stack>
    </Box>
  );
}
