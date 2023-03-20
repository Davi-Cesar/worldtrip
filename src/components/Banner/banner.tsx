import { Box, Flex, Text } from "@chakra-ui/react";
interface WallpaperProps {
  image: string;
  continente: string;
}
export function Banner({ image, continente }: WallpaperProps) {
  return (
    <>
      <Box
        w="100%"
        h="500px"
        margin="0 auto"
        bgImage={`url(${image})`}
        backgroundPosition="center"
        backgroundSize="100vw"
      >
        <Box backdropFilter="brightness(70%)" w="100%" h="100%">
          <Flex flex="1" h="100%" alignItems="flex-end">
            <Text color="white" fontWeight="semibold" fontSize={50} ml="400">
              Europa
            </Text>
          </Flex>
        </Box>
      </Box>
    </>
  );
}
