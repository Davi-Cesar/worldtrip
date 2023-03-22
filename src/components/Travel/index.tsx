import { Flex, Stack, Wrap, WrapItem } from "@chakra-ui/react";
import { TravelTypes } from "./TravelTypes";

import { useBreakpointValue } from "@chakra-ui/react";

export function Travel() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <>
      {isWideVersion ? (
        <Flex align="center" justify="center" h="250" w="100%">
          <Stack
            spacing="100px"
            h="150px"
            w="100%"
            alignItems="center"
            justifyContent="center"
            direction={["column", "row"]}
          >
            <TravelTypes image="./icons/drinks.svg" type="vida noturna" />
            <TravelTypes image="./icons/praia.svg" type="praia" />
            <TravelTypes image="./icons/moderno.svg" type="moderno" />
            <TravelTypes image="./icons/classico.svg" type="classico" />
            <TravelTypes image="./icons/mais.svg" type=" e mais..." />
          </Stack>
        </Flex>
      ) : (
        <Wrap spacing="20px" justify="center" p="10px">
          <WrapItem>
            <TravelTypes image="./icons/drinks.svg" type="vida noturna" />
          </WrapItem>
          <WrapItem>
            <TravelTypes image="./icons/praia.svg" type="praia" />
          </WrapItem>
          <WrapItem>
            <TravelTypes image="./icons/moderno.svg" type="moderno" />
          </WrapItem>
          <WrapItem>
            <TravelTypes image="./icons/classico.svg" type="classico" />
          </WrapItem>
          <WrapItem>
            <TravelTypes image="./icons/mais.svg" type=" e mais..." />
          </WrapItem>
        </Wrap>
      )}
    </>
  );
}
