import { Button, Link, Text } from "@chakra-ui/react";
import React from "react";

import SectionContainer from "../SectionContainer";

export default function Contact() {
  return (
    <SectionContainer
      id="contact"
      name="contact"
      headerText="Contact Me"
      useHeaderStyle
    >
      <Text fontSize="xl" mt={6}>
        Whether it&apos;s a job opportunity, an invite to coffee,
      </Text>
      <Text fontSize="xl">or feedback on my portfolio, my inbox is open!</Text>
      <Button as={Link} href="mailto:jarrod.servilla@gmail.com" mt={6}>
        Send Email
      </Button>
    </SectionContainer>
  );
}
