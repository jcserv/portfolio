import {
  GridItem,
  Image,
  SimpleGrid,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React from "react";

import { colors } from "../../theme";
import SectionContainer from "../SectionContainer";

export default function About() {
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
              I&apos;m currently working at Citi Bank as a{" "}
              <strong style={{ color: secondary }}>
                Technology Analyst Intern
              </strong>
              , and was previously at Citylitics Inc. as a{" "}
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
              . I have a{" "}
              <strong style={{ color: secondary }}>passion for teaching</strong>
              , and have worked as a TA in university and highschool CS courses.
              I&apos;m an{" "}
              <strong style={{ color: secondary }}>
                avid hackathon attendee
              </strong>{" "}
              and received numerous awards at hackathons with my amazing teams!
            </Text>
          </VStack>
        </GridItem>
        <GridItem>
          <Image
            m="auto"
            src="/me.jpg"
            alt="Jarrod Servilla"
            zIndex={1}
            className="image"
          />
        </GridItem>
      </SimpleGrid>
    </SectionContainer>
  );
}
