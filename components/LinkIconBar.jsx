import {
  Icon,
  Link,
  Stack,
  Tooltip,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

const LinkIcon = ({ index, color, url, label, icon }) => (
  <Tooltip label={label} aria-label={`${label}-tooltip`} key={`link-${index}`}>
    <Link display="inline-block" href={url} aria-label={label} isExternal>
      <Icon as={icon} fontSize="xl" color="gray.400" _hover={{ color }} />
    </Link>
  </Tooltip>
);

const LinkIconBar = ({ links }) => {
  const color = useColorModeValue("secondary.light", "secondary.dark");
  return (
    <Stack mt={4} direction="row" spacing="12px" justify="center" mb={10}>
      {links.map((link, index) => (
        <LinkIcon index={index} color={color} {...link} />
      ))}
    </Stack>
  );
};

export default LinkIconBar;
