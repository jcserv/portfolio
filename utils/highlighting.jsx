import { colors } from "../theme";
import { useColorMode } from "@chakra-ui/react";

export const emphasisStrong = (sentence, strong) => {
  // TODO
	// ! Melhor opção para resolução em uma função é "Array de objetos ao invés de 'strong"
  const { colorMode } = useColorMode();
  console.log(colorMode);
  const aux = sentence.split(strong);
  return (
    <div>
      {aux[0]}
      <strong
        color={
          colorMode === "light" ? colors.secondary.light : colors.secondary.dark
        }
      >
        {strong}
      </strong>
      {aux[1]}
    </div>
  );
};
