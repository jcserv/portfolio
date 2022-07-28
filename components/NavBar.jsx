import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  IconButton,
  Link,
  Select,
  Spacer,
  Stack,
  Tooltip,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

import { FaMoon, FaSun } from "react-icons/fa";
import { AiFillFlag } from "react-icons/ai";

import { animateScroll as scroll, Link as ScrollLink } from "react-scroll";
import Sticky from "react-stickynode";

import { colors } from "../theme";
import { useRouter } from "next/router";

const navBtns = [
  {
    label: "Sobre",
    section: "About",
  },
  {
    label: "Experiência",
    section: "Experience",
  },
  {
    label: "Projetos",
    section: "Projects",
  },
  {
    label: "Contato",
    section: "Contact",
  },
  // {
  //   label: "Blog",
  //   href: "https://google.com/",
  // },
];

const Logo = () => {
  const logo = useColorModeValue("/logo.png", "/logo-dark.png");
  return (
    <Box m="2" cursor="pointer">
      <img
        alt=""
        src={logo}
        width="60"
        height="60"
        onClick={scroll.scrollToTop}
      />
    </Box>
  );
};

const MenuToggle = ({ isOpen, onOpen }) => (
  <Box display={{ base: "block", md: "none" }} pr={4}>
    <Button onClick={onOpen}>
      {isOpen ? <CloseIcon /> : <HamburgerIcon />}
    </Button>
  </Box>
);

const NavButtons = ({ size, onClose }) => {
  const btns = navBtns.map((btn) => (
    <Button key={btn.label} size={size} variant="link" mb={2} onClick={onClose}>
      {btn.href ? (
        <Link href={btn.href} isExternal>
          {btn.label}
        </Link>
      ) : (
        <ScrollLink
          to={btn.section.toLowerCase()}
          href={btn.href}
          spy
          smooth
          offset={-70}
          duration={500}
          onClick={onClose}
        >
          {btn.label}
        </ScrollLink>
      )}
    </Button>
  ));
  return <>{btns}</>;
};

// * Recebe a constante local - não variavel, constante
const LanguageSelector = (localization) => {
  return (
    <Box>
      <Tooltip
        label={`Switch languages`} // TODO put custom tooltip by const 'local'
        // aria-label={`Toggle ${nextMode} mode`}
      >
        <Select
          icon={<AiFillFlag />}
          variant="ghost"
          fontWeight={"bold"}
          color={"current"}
          height="24px"
          cursor={"pointer"}
          bg="transparent"
          onChange={localization.localization.function}
          defaultValue={localization.localization.language}
        >
          <option value="pt">Português</option>
          <option value="en">English</option>
          <option value="de">Deutsch</option>
        </Select>
      </Tooltip>
    </Box>
  );
};

const ColorModeButton = ({ mr }) => {
  const { toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  const nextMode = useColorModeValue("dark", "light");
  return (
    <Tooltip
      label={`Toggle ${nextMode} mode`}
      aria-label={`Toggle ${nextMode} mode`}
    >
      <IconButton
        size="md"
        fontSize="lg"
        aria-label={`Toggle ${nextMode} mode`}
        variant="ghost"
        color="current"
        onClick={toggleColorMode}
        icon={<SwitchIcon />}
        style={{ marginRight: mr }}
      />
    </Tooltip>
  );
};

const MenuLinks = ({ onClose, localization }) => (
  <Stack
    display={{ base: "none", sm: "none", md: "flex" }}
    width={{ sm: "full", md: "auto" }}
    spacing="16px"
    direction={["column", "row", "row", "row"]}
    alignItems="center"
  >
    <LanguageSelector localization={localization} />
    <NavButtons size="sm" onClose={onClose} />
    <ColorModeButton mr="12px" />
  </Stack>
);

const NavMenu = ({ isOpen, onClose, localization }) => (
  <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
    <DrawerOverlay>
      <DrawerContent>
        <DrawerBody>
          <Stack
            alignItems="center"
            justifyContent="center"
            direction={["column"]}
            spacing="24px"
            mt="20vh"
          >
            <LanguageSelector localization={localization} />
            <NavButtons size="lg" onClose={onClose} />
            <ColorModeButton />
          </Stack>
        </DrawerBody>
      </DrawerContent>
    </DrawerOverlay>
  </Drawer>
);

export default function Navbar() {
  const router = useRouter();
  const { locale } = router;
  const changeLanguage = (e) => {
    const lang = e.target.value; // console.log("TROCA", lang);
    router.push(router.pathname, lang);
  };
  const localization = { language: locale, function: changeLanguage };
  const primary = useColorModeValue(colors.primary.light, colors.primary.dark);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Sticky enabled innerZ={99}>
      <Stack
        as="header"
        w="100%"
        direction={["row", "row", "row", "row"]}
        alignItems="center"
        justifyContent="center"
        bg={primary}
      >
        <Logo />
        <Spacer />
        <MenuLinks onClose={onClose} localization={localization} />
        <NavMenu
          isOpen={isOpen}
          onClose={onClose}
          localization={localization}
        />
        <MenuToggle isOpen={isOpen} onOpen={onOpen} />
      </Stack>
    </Sticky>
  );
}
