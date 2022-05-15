import {
  Icon,
  Link,
  Stack,
  Tooltip,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { BiLink } from "react-icons/bi";
import { FaDev, FaLinkedin, FaYoutube, FaTelegram } from "react-icons/fa";
import { IoMdDocument } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { VscGithubInverted } from "react-icons/vsc";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoLogoFigma } from "react-icons/io5";

import { colors } from "../theme";

// import styles from "../styles/components/SectionContainer.module.css";

const icons = {
  github: VscGithubInverted,
  linkedin: FaLinkedin,
  devpost: FaDev,
  email: MdEmail,
  document: IoMdDocument,
  youtube: FaYoutube,
  link: BiLink,
  whatsapp: IoLogoWhatsapp,
  telegram: FaTelegram,
  figma: IoLogoFigma,
};

const LinkIcon = ({ index, color, onHoverColor, url, label, icon }) => (
  <Tooltip label={label} aria-label={`${label}-tooltip`} key={`link-${index}`}>
    <div style={{ cursor: (!url ? "not-allowed" : "pointer") }}>
      <Link
        aria-label={`Open link to ${url}`}
        display="inline-block"
        href={url}
        // href={!url ? url : null}
        disabled={!url}
        _disabled={{
          opacity: 0.5,
          textDecoration: "none",
          pointerEvents: "none",
        }}
        isExternal
      >
        <Icon
          as={icons[icon]}
          fontSize="xl"
          color={color}
          _hover={{ color: onHoverColor }}
        />
      </Link>
    </div>
  </Tooltip>
);

const LinkIconBar = ({ links, color, onHoverColor, ...props }) => {
  const iconColor =
    color || useColorModeValue(colors.subtle.light, colors.subtle.dark);
  const hoverColor =
    onHoverColor ||
    useColorModeValue(colors.secondary.light, colors.secondary.dark);
  return (
    <Stack
      mt={4}
      direction="row"
      spacing="22px"
      justify="center"
      mb={10}
      transform={"scale(1.2)"}
      {...props}
    >
      {links.map((link, index) => (
        <LinkIcon
          key={link.label}
          index={index}
          color={iconColor}
          onHoverColor={hoverColor}
          {...link}
        />
      ))}
    </Stack>
  );
};

export default LinkIconBar;
