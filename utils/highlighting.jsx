import { useColorMode } from "@chakra-ui/react";

import { colors } from "../theme";

function emphasisStrong(sentence, strong) {
  const { colorMode } = useColorMode();
  let highlight;
  const regex = Array.isArray(strong)
    ? RegExp(strong.join("|"))
    : RegExp(strong);
  const normal = sentence.split(regex);
  if (Array.isArray(strong)) {
    highlight = strong;
  } else {
    highlight = [strong];
  }
  // isStrong ? (highlight = strong) : (highlight = [strong]);
  const items = [];
  items.push(normal[0]);
  for (let i = 1; i < normal.length; i + 1) {
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
}

export default emphasisStrong;
