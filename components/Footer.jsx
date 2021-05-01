import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { FaDev, FaLinkedin } from "react-icons/fa";
import { IoMdDocument } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { VscGithubInverted } from "react-icons/vsc";
import { animateScroll as scroll } from "react-scroll";

import LinkIconBar from "./LinkIconBar";

const links = [
  {
    label: "Github",
    icon: VscGithubInverted,
    url: "https://github.com/jcserv/",
  },
  {
    label: "LinkedIn",
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/jarrod-servilla/",
  },
  {
    label: "Devpost",
    icon: FaDev,
    url: "https://devpost.com/jcserv",
  },
  {
    label: "Email",
    icon: MdEmail,
    url: "mailto:jarrod.servilla@gmail.com",
  },
  {
    label: "Resume",
    icon: IoMdDocument,
    url: "/resume.pdf",
  },
];

export default function Footer() {
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
      <LinkIconBar links={links} />
    </Box>
  );
}
