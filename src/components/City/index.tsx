import { StarIcon } from "@chakra-ui/icons";
import { Box, Badge, Image, Icon, Flex } from "@chakra-ui/react";

interface CityProps {
  image: string;
  name: string;
  country: string;
  icon: string;
}

export function City({ image, name, country, icon }: CityProps) {
  return (
    <>
      <Box
        maxW="279px"
        h="279px"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
      >
        <Image w="256px" h="173px" src={image} alt={name} />

        <Box p="8" bg="white">
          <Flex align="center" justifyContent="space-between">
            <Box>
              <Box
                mt="1"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                noOfLines={1}
              >
                {name}
              </Box>
              {country}
            </Box>

            <Image
              borderRadius="full"
              boxSize="30px"
              src={icon}
              alt="Dan Abramov"
            />
          </Flex>
        </Box>
      </Box>
    </>
  );
}
