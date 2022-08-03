import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import { Grid } from "@material-ui/core";
import React from "react";
import Fade from "react-reveal/Fade";

// import projects from "../data/projects";
import { colors } from "../theme";
import LinkIconBar from "./LinkIconBar";
import Tech from "./Tech";

const Card = ({ name, subtitle, description, links }) => {
  const bg = useColorModeValue(colors.bg.light, colors.bg.dark);

  return (
    <Box
      bgColor={bg}
      borderRadius="lg"
      borderWidth={bg === colors.bg.light ? "1px" : ""}
      rounded="md"
      shadow="lg"
      mt={20}
      m="auto"
      mb={3}
      w="75%"
      textAlign="start"
    >
      <Heading as="h1" size="lg" m={2} p={2} pt={6}>
        {name}
      </Heading>
      <Text hidden={!subtitle} size="sm" as="strong" m={2} p={2} pb={6}>
        {subtitle}
      </Text>
      <Text m={2} p={2} pb={6} textAlign="justify">
        {description}
      </Text>
      <LinkIconBar links={links} float="right" mt={0} mr={4} mb={4} />
    </Box>
  );
};

const ProjectContent = ({
  alternate,
  name,
  subtitle,
  description,
  pic,
  tech,
  links,
}) => {
  if (alternate) {
    return (
      <>
        <Card
          name={name}
          subtitle={subtitle}
          description={description}
          links={links}
        />
        <Grid container direction="row" justifyContent="center" spacing={2}>
          <Tech tech={tech} />
        </Grid>
      </>
    );
  }
  return (
    <Image
      m="auto"
      p="auto"
      src={pic}
      alt={`${name} picture`}
      className="image"
      maxHeight="90%"
      onClick={() => {
        window.open(links[0].url);
      }}
    />
  );
};

const Project = ({ index, shouldAlternate, ...props }) => (
  <Fade>
    <Grid container direction="row">
      <Grid container item xs={12} sm={6} className="projects-correction">
        <ProjectContent
          alternate={shouldAlternate ? index % 2 === 0 : false}
          {...props}
        />
      </Grid>
      <Grid container item xs={12} sm={6} className="projects-correction">
        <ProjectContent
          alternate={shouldAlternate ? index % 2 === 1 : true}
          {...props}
        />
      </Grid>
    </Grid>
  </Fade>
);

export default function ProjectsOverview({ translationFile }) {
  const shouldAlternate = useBreakpointValue({ base: false, md: true });
  return (
    <Flex pt={12}>
      <Grid container direction="column" justifyContent="center">
        {translationFile.projects.list.map((project, index) => (
          <Project
            key={project.name}
            index={index}
            shouldAlternate={shouldAlternate}
            {...project}
          />
        ))}
      </Grid>
    </Flex>
  );
}
