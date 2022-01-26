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
        Hi, I&apos;m Jarrod! I am a{" "}
        <strong style={{ color: secondary }}>full stack developer</strong> that
        studied computer science and mathematics at the University of Toronto.
      </Text>
      <Text>
        I&apos;m currently working at SailPoint as a{" "}
        <strong style={{ color: secondary }}>Software Engineer</strong> on the
        Data Presentation team. Prior to that, I was at Citi Bank as a{" "}
        <strong style={{ color: secondary }}>Software Developer Intern</strong>,
        and at Citylitics Inc. as a{" "}
        <strong style={{ color: secondary }}>
          Full Stack Developer Intern
        </strong>
        .
      </Text>
      <Text>
        I enjoy creating{" "}
        <strong style={{ color: secondary }}>
          scalable & elegant web/mobile applications
        </strong>{" "}
        that have a real world impact. I also have a{" "}
        <strong style={{ color: secondary }}>passion for teaching</strong>, and
        have worked as a TA in university and highschool CS courses. I&apos;m an{" "}
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
