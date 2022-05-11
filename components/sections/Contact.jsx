// import { EmailIcon } from "@chakra-ui/icons";
import { Button, Flex, Link, Text } from "@chakra-ui/react";
import { Grid } from "@material-ui/core";

import React from "react";

import links from "../../data/contactLinks";
import LinkIconBar from "../LinkIconBar";
import SectionContainer from "../SectionContainer";

export default function Contact() {
  return (
    <SectionContainer
      id="contact"
      name="contact"
      headerText="Entre em Contato"
      useHeaderStyle
    >
      <Flex
        as={Grid}
        container
        item
        xs={9}
        sm={6}
        justify="center"
        textAlign="center"
        pl={4}
        pr={4}
      >
        <Text fontSize="xl" m="auto" mt={3}>
          Seja uma oportunidade de trabalho, sugestões ou feedback, seu contato será bem vindo!
        </Text>
        {/* <Text fontSize="xl" m="auto">
          
        </Text> */}
        <LinkIconBar mt={8} links={links} />
        {/* <Button
          as={Link}
          leftIcon={<EmailIcon />}
          href="mailto:filipelehmannp@gmail.com"
          m="auto"
          mt={6}
        >
          Email
        </Button> */}
      </Flex>
    </SectionContainer>
  );
}
