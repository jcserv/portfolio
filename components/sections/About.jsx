import {
  GridItem,
  Image,
  SimpleGrid,
  Text,
  useBreakpointValue,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React from "react";

import { colors } from "../../theme";
import SectionContainer from "../SectionContainer";

const Bio = ({ secondary }) => (
  <GridItem>
    <VStack m="auto" w="75%" spacing="12px" pt="5%">
      <Text>
        Hi, I&apos;m Jarrod! I am a fourth year{" "}
        <strong style={{ color: secondary }}>
          Computer Science Specialist
        </strong>{" "}
        at the University of Toronto Mississauga.
      </Text>
      <Text>
        I&apos;ve previously worked at{" "}
        <a href="https://www.citigroup.com/citi/" target="_rel noopener">
          CitiGroup
        </a>{" "}
        as a{" "}
        <strong style={{ color: secondary }}>Technology Analyst Intern</strong>,
        and was previously at{" "}
        <a href="https://citylitics.com/" target="_rel noopener">
          Citylitics Inc.
        </a>{" "}
        as a{" "}
        <strong style={{ color: secondary }}>
          Full Stack & Data Developer Intern
        </strong>{" "}
        for 9 months prior.
      </Text>
      <Text>
        I enjoy designing & engineering{" "}
        <strong style={{ color: secondary }}>
          efficient full stack and mobile applications
        </strong>
        . I&apos;m also an{" "}
        <strong style={{ color: secondary }}>avid hackathon attendee</strong>{" "}
        and received numerous awards at hackathons with my amazing teams!
      </Text>
    </VStack>
  </GridItem>
);

const Headshot = () => (
  <GridItem>
    <Image
      m="auto"
      src="/me.jpg"
      alt="Jarrod Servilla"
      zIndex={1}
      className="image"
      onClick={() => {
        window.open("http://linkedin.com/in/jarrod-servilla");
      }}
    />
  </GridItem>
);

export default function About() {
  const shouldAlternate = useBreakpointValue({ base: false, md: true });
  const secondary = useColorModeValue(
    colors.secondary.light,
    colors.secondary.dark
  );
  return (
    <SectionContainer
      id="about"
      name="about"
      headerMt="-5%"
      headerText="About Me"
      useHeaderStyle
    >
      <SimpleGrid
        pl="10%"
        pt="5%"
        pr="10%"
        spacing={12}
        columns={[1, null, 2]}
        justifyContent="center"
      >
        {shouldAlternate ? <Bio secondary={secondary} /> : <Headshot />}
        {shouldAlternate ? <Headshot /> : <Bio secondary={secondary} />}
      </SimpleGrid>
    </SectionContainer>
  );
}
