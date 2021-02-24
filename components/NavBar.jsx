import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Spacer,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { animateScroll as scroll, Link } from "react-scroll";

const navBtns = ["About", "Skills", "Work", "Projects", "Contact"];

export default function Navbar() {
  const { toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  const nextMode = useColorModeValue("dark", "light");

  return (
    <Flex w="100%">
      <Box m="2">
        <img
          alt=""
          src="/logo.png"
          width="60"
          height="60"
          onClick={scroll.scrollToTop}
        />
      </Box>
      <Spacer />
      <HStack spacing="24px">
        {navBtns.map((btn) => (
          <Button key={btn} size="sm" variant="link" mb={2}>
            <Link to={btn.toLowerCase()} spy smooth offset={-70} duration={500}>
              {btn}
            </Link>
          </Button>
        ))}
        <IconButton
          size="md"
          fontSize="lg"
          aria-label={`Switch to ${nextMode} mode`}
          variant="ghost"
          color="current"
          margin="1"
          mr="4"
          onClick={toggleColorMode}
          icon={<SwitchIcon />}
        />
      </HStack>
    </Flex>
  );
}
