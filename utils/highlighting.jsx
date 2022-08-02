import { colors } from "../theme";
import { useColorMode } from "@chakra-ui/react";

export const emphasisStrong = (sentence, strong) => {
  const { colorMode } = useColorMode();
  var highlight = [];
  const regex = Array.isArray(strong)
    ? RegExp(strong.join("|"))
    : RegExp(strong);
  const normal = sentence.split(regex);
  Array.isArray(strong) ? (highlight = strong) : (highlight = [strong]);
  const items = [];
  items.push(normal[0]);
  for (let i = 1; i < normal.length; i++) {
    items.push(
      <>
        <strong
          style={{
            color:
              colorMode === "light"
                ? colors.secondary.light
                : colors.secondary.dark,
          }}
        >
          {highlight[i - 1]}
        </strong>
        {normal[i]}
      </>
    );
  }

  return <>{items}</>;
};
