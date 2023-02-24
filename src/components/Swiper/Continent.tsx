import { Box, Flex, Text } from "@chakra-ui/react";
interface ContinentProps {
  name: string;
  image: string;
  description: string;
}
export default function Continent({
  name,
  image,
  description,
}: ContinentProps) {
  return (
    <Flex
      direction="column"
      h="100%"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        h="100%"
        w="100%"
        bgImg={`url(${image})`}
        bgPosition="center"
        bgRepeat="no-repeat"
        filter="auto"
        brightness="80%"
      />
      <Box
        position="absolute"
        width="100%"
        height="100px"
        top="0"
        bottom="0"
        left="0"
        right="0"
        margin="auto"
        filter="auto"
        brightness="80%"
      >
        <Text fontWeight="bold" fontSize="40">
          {name}
        </Text>
        <Text fontWeight="bold" fontSize="24">
          {description}
        </Text>
      </Box>
    </Flex>
  );
}
