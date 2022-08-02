// import { EmailIcon } from "@chakra-ui/icons";
import { Flex, Text } from "@chakra-ui/react";
import { Grid } from "@material-ui/core";
import { useRouter } from "next/router";
import React from "react";

import links from "../../data/contactLinks";
import checkLocale from "../../utils/checkLanguage";
import LinkIconBar from "../LinkIconBar";
import SectionContainer from "../SectionContainer";

export default function Contact() {
  const router = useRouter();
  const { locale } = router;
  const t = checkLocale(locale);
  return (
    <SectionContainer
      id="contact"
      name="contact"
      headerText={t.contact.title}
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
          {t.contact.main}
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
