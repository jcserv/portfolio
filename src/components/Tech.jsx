import { Text } from "@chakra-ui/react";
import { Grid } from "@material-ui/core";
import React from "react";

const Tech = ({ tech, techMr }) => (
  <>
    {tech.map((item, index) => (
      <Grid item key={`${item}-${index}`}>
        <Text as="kbd" mr={techMr}>
          {item}
        </Text>
      </Grid>
    ))}
  </>
);

export default Tech;
