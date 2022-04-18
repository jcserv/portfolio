import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  IconButton,
  Stack,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tooltip,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import { Grid } from "@material-ui/core";
import React, { useState } from "react";
import { BsGridFill } from "react-icons/bs";
import { FaListUl } from "react-icons/fa";
import { HiCode } from "react-icons/hi";
import Fade from "react-reveal/Fade";

import { extraProjects } from "../data/projects";
import { colors } from "../theme";
import LinkIconBar from "./LinkIconBar";
import Tech from "./Tech";

const DisplayBar = ({ showGridView, setShowGridView }) => (
  <Stack
    mt={4}
    direction="row"
    spacing="12px"
    justifyContent="center"
    mb={10}
    float="right"
  >
    <Tooltip label="Grid View">
      <IconButton
        aria-label="Display Grid View"
        icon={<BsGridFill />}
        isActive={showGridView}
        onClick={() => setShowGridView(true)}
      />
    </Tooltip>
    <Tooltip label="List View">
      <IconButton
        aria-label="Display List View"
        icon={<FaListUl />}
        isActive={!showGridView}
        onClick={() => setShowGridView(false)}
      />
    </Tooltip>
  </Stack>
);

const ProjectCard = ({ name, description, links, tech }) => {
  const secondary = useColorModeValue(
    colors.secondary.light,
    colors.secondary.dark
  );
  const bg = useColorModeValue(colors.bg.light, colors.bg.dark);
  return (
    <Box
      as={Grid}
      container
      item
      xs={9}
      sm={6}
      md={3}
      bgColor={bg}
      borderRadius="lg"
      borderWidth={bg === colors.bg.light ? "1px" : ""}
      direction="column"
      rounded="md"
      shadow="lg"
      textAlign="start"
      style={{ margin: "24px" }}
    >
      <Grid container item direction="row">
        <Grid container item xs={6}>
          <Icon
            as={HiCode}
            boxSize="3em"
            color={secondary}
            m="auto"
            marginLeft="10px"
          />
        </Grid>
        <Grid container item xs={6} justifyContent="flex-end">
          <LinkIconBar links={links} mr="24px" />
        </Grid>
      </Grid>
      <Grid container item direction="row" style={{ marginTop: "-24px" }}>
        <Heading as="h1" size="md" m={2} p={1} pt={6}>
          {name}
        </Heading>
      </Grid>
      <Grid container item direction="row">
        <Text fontSize="md" m={2} p={1}>
          {description}
        </Text>
      </Grid>
      <Grid
        container
        item
        direction="row"
        justifyContent="space-evenly"
        style={{ marginBottom: "12px" }}
      >
        <Tech tech={tech} />
      </Grid>
    </Box>
  );
};

const ProjectRow = ({ name, type, description, tech, links }) => (
  <Tr>
    <Td>{name}</Td>
    <Td>{type}</Td>
    <Td>{description}</Td>
    <Td>
      <Grid container item direction="row">
        <Tech tech={tech} techMr={2} />
      </Grid>
    </Td>
    <Td>
      <Grid container>
        <LinkIconBar links={links} />
      </Grid>
    </Td>
  </Tr>
);

const ProjectTable = ({ projs }) => (
  <Fade>
    <div style={{ overflowX: "auto" }}>
      <Table size="md" w="100%">
        <Thead>
          <Tr>
            <Th w="10%">Name</Th>
            <Th w="10%">Type</Th>
            <Th w="25%">Description</Th>
            <Th w="20%">Technologies</Th>
            <Th w="15%">Links</Th>
          </Tr>
        </Thead>
        <Tbody>
          {projs.map((project) => (
            <ProjectRow key={project.name} {...project} />
          ))}
        </Tbody>
      </Table>
    </div>
  </Fade>
);

export default function MoreProjectsGrid() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showGridView, setShowGridView] = useState(true);

  const projects = isExpanded ? extraProjects : extraProjects.slice(0, 3);

  return (
    <>
      <Flex justifyContent="flex-end" pl="15%" pr="15%" w="100vw">
        <DisplayBar
          showGridView={showGridView}
          setShowGridView={setShowGridView}
        />
      </Flex>
      <Flex justifyContent="center" w="100vw">
        <Grid container item xs={12} sm={9} md={9} justifyContent="center">
          {showGridView ? (
            projects.map((project) => (
              <ProjectCard key={project.name} {...project} />
            ))
          ) : (
            <ProjectTable projs={projects} />
          )}
        </Grid>
      </Flex>
      <Flex justifyContent="center" w="100vw">
        <Button
          mt={6}
          leftIcon={isExpanded ? <ChevronUpIcon /> : <ChevronDownIcon />}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {`Show ${isExpanded ? "Less" : "More"}`}
        </Button>
      </Flex>
    </>
  );
}
