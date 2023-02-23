import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";

export function Travel() {
  return (
    <Flex align="center" justify="center" h="250" w="100%">
      <Stack
        direction={["column", "row"]}
        spacing="100px"
        h="50%"
        w="100%"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          w="160px"
          h="160px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <Image src="./icons/drinks.svg" alt="vida noturna" />
          <Text fontWeight="semibold" fontSize="14" margin="2">
            vida noturna
          </Text>
        </Box>
        <Box
          w="160px"
          h="160px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <Image src="./icons/praia.svg" alt="praia" />
          <Text fontWeight="semibold" fontSize="14" margin="2">
            praia
          </Text>
        </Box>
        <Box
          w="160px"
          h="160px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <Image src="./icons/moderno.svg" alt="moderno" />
          <Text fontWeight="semibold" fontSize="14" margin="2">
            moderno
          </Text>
        </Box>
        <Box
          w="160px"
          h="160px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <Image src="./icons/classico.svg" alt="clássico" />
          <Text fontWeight="semibold" fontSize="14" margin="2">
            clássico
          </Text>
        </Box>
        <Box
          w="160px"
          h="160px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <Image src="./icons/mais.svg" alt="e mais..." />
          <Text fontWeight="semibold" fontSize="14" margin="2">
            e mais...
          </Text>
        </Box>
      </Stack>
    </Flex>
  );
}
