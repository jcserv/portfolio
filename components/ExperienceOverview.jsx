import {
  Button,
  Flex,
  Heading,
  Link,
  ListItem,
  Select,
  Text,
  UnorderedList,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import { Grid } from "@material-ui/core";
import React, { useState } from "react";

import jobs from "../data/jobs";
import { colors } from "../theme";

const ExperienceSelect = ({ setIndex }) => (
  <Select onChange={(e) => setIndex(e.target.value)}>
    {jobs.map((job, index) => (
      <option key={`${job.workplace}-select-option`} value={index}>
        {job.workplace}
      </option>
    ))}
  </Select>
);

const ExperienceButtons = ({ expIndex, setIndex }) => (
  <Grid
    container
    item
    xs={9}
    spacing={2}
    justify="center"
    style={{ margin: "auto", overflowX: "auto" }}
  >
    {jobs.map((job, index) => (
      <Grid container item key={`${job.workplace}-btn`}>
        <Button
          isActive={expIndex === index}
          isFullWidth
          onClick={() => setIndex(index)}
        >
          {job.workplace}
        </Button>
      </Grid>
    ))}
  </Grid>
);

const ExperienceDetails = ({ index }) => {
  const job = jobs[index];
  const secondary = useColorModeValue(
    colors.secondary.light,
    colors.secondary.dark
  );
  return (
    <Flex direction="column" m="auto" overflowWrap="break-word" p={3} pr={6}>
      <Heading as="h1" size="md">
        {job.position} @{" "}
        <Link href={job.url} isExternal color={secondary}>
          {job.workplace}
        </Link>
      </Heading>
      <Text mt={2}>{job.duration}</Text>
      <UnorderedList mt={2}>
        {job.description.map((desc) => (
          <ListItem key={desc}>{desc}</ListItem>
        ))}
      </UnorderedList>
    </Flex>
  );
};

export default function ExperienceOverview() {
  const [index, setIndex] = useState(0);
  const showSelect = useBreakpointValue({ base: false, md: true });
  const bg = useColorModeValue(colors.bg.light, colors.bg.dark);
  return (
    <Flex
      as={Grid}
      container
      item
      direction="row"
      justify="center"
      xs={9}
      sm={6}
      bgColor={bg}
      borderRadius="lg"
      borderWidth={bg === colors.bg.light ? "1px" : ""}
      rounded="md"
      shadow="lg"
      margin="24px"
      style={{ marginTop: "3vh" }}
    >
      <Grid
        container
        direction="column"
        item
        xs={9}
        sm={3}
        alignItems="center"
        justify="center"
      >
        {showSelect ? (
          <ExperienceButtons expIndex={index} setIndex={setIndex} />
        ) : (
          <ExperienceSelect setIndex={setIndex} />
        )}
      </Grid>
      <Grid container item xs={9} sm={7}>
        <ExperienceDetails index={index} />
      </Grid>
    </Flex>
  );
}
