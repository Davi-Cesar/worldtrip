import React from "react";
import {
  Box,
  Flex,
  HStack,
  Image,
  Text,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Travel } from "../components/Travel";

import SwiperComponent from "../components/Swiper";

export default function Home() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <>
      <Header />

      <Flex
        backgroundImage="Background.png"
        bgRepeat="repeat"
        w="100%"
        h="100%"
        objectFit="contain"
        direction="column"
      >
        <HStack
          spacing="24px"
          alignItems="center"
          w="100%"
          justifyContent="center"
        >
          {isWideVersion ? (
            <>
              <Box
                w="100%"
                h="100%"
                padding="10"
                display="flex"
                justifyContent="center"
                alignItems="left"
                flexDirection="column"
                textAlign="justify"
              >
                <Text fontWeight="medium" color="white" fontSize="36px">
                  5 Continentes, <br />
                  infinitas possibilidades.
                </Text>
                <Text
                  fontWeight="normal"
                  color="white"
                  fontSize="20px"
                  opacity="80%"
                  paddingTop="5"
                >
                  Chegou a hora de tirar do papel a viagem que você <br />
                  sempre sonhou.
                </Text>
              </Box>
              <Box
                w="100%"
                h="100%"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Image src="aeroplano.svg" alt="aeroplano" />
              </Box>
            </>
          ) : (
            <>
              <Box
                w="100%"
                h="100%"
                padding="10"
                display="flex"
                justifyContent="center"
                flexDirection="column"
              >
                <Text fontWeight="medium" color="white" fontSize="32">
                  5 Continentes, <br />
                  infinitas possibilidades.
                </Text>
                <Text
                  fontWeight="normal"
                  color="white"
                  fontSize="15"
                  opacity="80%"
                  paddingTop="5"
                >
                  Chegou a hora de tirar do papel a viagem que você <br />{" "}
                  sempre sonhou.
                </Text>
              </Box>
            </>
          )}
        </HStack>
      </Flex>

      <Travel />
      <Flex align="center" justifyContent="center" direction="column">
        <VStack spacing="24px" p="5">
          <VStack
            spacing="24px"
            mx="8"
            pr="8"
            py="1"
            borderBottomWidth={2}
            color="#47585B"
            borderColor="gray.500"
            w={{ base: "", md: "10", lg: "20" }}
          />
          <Text
            fontWeight="medium"
            fontSize={{ base: "18px", md: "24px", lg: "5xl" }}
            textAlign="center"
            padding={{ base: "0px", md: "5px", lg: "10" }}
          >
            Vamos nessa? <br />
            Então escolha seu continente
          </Text>
        </VStack>
      </Flex>

      <Box h="md" padding={{ base: "0px", md: "15px", lg: "25px" }}>
        <SwiperComponent />
      </Box>
    </>
  );
}
