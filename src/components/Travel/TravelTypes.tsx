import { Box, Icon, Image, Text, useBreakpointValue } from "@chakra-ui/react";

interface TravelTypesProps {
  type: string;
  image: string;
}
const CircleIcon = (props) => (
  <Icon viewBox="0 0 200 200" {...props}>
    <path
      fill="currentColor"
      d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
    />
  </Icon>
);
export function TravelTypes({ type, image }: TravelTypesProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <>
      {isWideVersion ? (
        <Box
          w="160px"
          h="160px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <Image src={image} alt={type} />
          <Text fontWeight="semibold" fontSize="14" margin="2">
            {type}
          </Text>
        </Box>
      ) : (
        <Box
          w="160px"
          h="60px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          textAlign="justify"
        >
          <CircleIcon boxSize={3} color="yellow.500" m="5px" />
          <Text fontWeight="semibold" fontSize="14" margin="0">
            {type}
          </Text>
        </Box>
      )}
    </>
  );
}
