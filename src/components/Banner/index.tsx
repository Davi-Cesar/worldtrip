import { Box, Flex, Text, useBreakpointValue } from "@chakra-ui/react";
interface WallpaperProps {
  image: string;
  continente: string;
}
export function Banner({ image, continente }: WallpaperProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <>
      {isWideVersion ? (
        <Box
          w="100%"
          h="500px"
          margin="0 auto"
          bgImage={`url(${image})`}
          backgroundPosition="center"
          backgroundSize="100vw"
        >
          <Box bg="blackAlpha.500" w="100%" h="100%">
            <Flex flex="1" h="100%" alignItems="flex-end">
              <Text color="white" fontWeight="semibold" fontSize={50} ml="400">
                {continente}
              </Text>
            </Flex>
          </Box>
        </Box>
      ) : (
        <Box
          w="100%"
          h="250px"
          margin="0 auto"
          bgImage={`url(${image})`}
          backgroundPosition="center"
          backgroundSize="100vw"
        >
          <Box bg="blackAlpha.500" w="100%" h="100%">
            <Flex h="100%" alignItems="center" justifyContent="center">
              <Text color="white" fontWeight="semibold" fontSize={30}>
                {continente}
              </Text>
            </Flex>
          </Box>
        </Box>
      )}
    </>
  );
}
