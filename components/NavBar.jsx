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
  Spacer,
  Stack,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { animateScroll as scroll, Link as ScrollLink } from "react-scroll";

const navBtns = [
  {
    label: "About",
  },
  {
    label: "Skills",
  },
  {
    label: "Work",
  },
  {
    label: "Projects",
  },
  {
    label: "Blog",
    href: "https://jarrod-servilla.medium.com/",
  },
  {
    label: "Contact",
  },
];

const Logo = () => {
  const logo = useColorModeValue("/logo.png", "/logo-dark.png");
  return (
    <Box m="2">
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
  <Box display={{ base: "block", md: "none" }}>
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
          to={btn.label.toLowerCase()}
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

const MenuLinks = ({ onClose }) => {
  const { toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  const nextMode = useColorModeValue("dark", "light");
  return (
    <Stack
      display={{ sm: "none", md: "block" }}
      width={{ sm: "full", md: "auto" }}
      spacing="24px"
      direction={["column", "row", "row", "row"]}
      alignItems="center"
    >
      <NavButtons size="sm" onClose={onClose} />
      <IconButton
        size="md"
        fontSize="lg"
        aria-label={`Switch to ${nextMode} mode`}
        variant="ghost"
        color="current"
        margin="2"
        pt="1"
        mr="4"
        onClick={toggleColorMode}
        icon={<SwitchIcon />}
      />
    </Stack>
  );
};

const NavMenu = ({ isOpen, onClose }) => (
  <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
    <DrawerOverlay>
      <DrawerContent>
        <DrawerBody>
          <Stack
            alignItems="center"
            direction={["column"]}
            spacing="24px"
            mt="20vh"
          >
            <NavButtons size="lg" onClose={onClose} />
          </Stack>
        </DrawerBody>
      </DrawerContent>
    </DrawerOverlay>
  </Drawer>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Stack
      w="100%"
      direction={["column", "row", "row", "row"]}
      alignItems="center"
      justifyContent="center"
    >
      <Logo />
      <Spacer />
      <MenuLinks onClose={onClose} />
      <NavMenu isOpen={isOpen} onClose={onClose} />
      <MenuToggle isOpen={isOpen} onOpen={onOpen} />
    </Stack>
  );
}
