import { Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import Fade from "react-reveal/Fade";

import styles from "../styles/components/SectionContainer.module.css";

export default function SectionContainer({
  children,
  headerText = "",
  useHeaderStyle,
  ...props
}) {
  const color = useColorModeValue("secondary.light", "secondary.dark");
  return (
    <div className={styles.container} {...props}>
      <Fade>
        <div>
          <Text
            as="h1"
            className={useHeaderStyle ? styles.header : ""}
            color={color}
          >
            {headerText}
          </Text>
          {children}
        </div>
      </Fade>
    </div>
  );
}
