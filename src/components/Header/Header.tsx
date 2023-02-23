import { Flex, Image } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex
      w="100%"
      as="header"
      maxWidth={1400}
      h="20"
      mx="auto"
      align="center"
      justifyContent="center"
    >
      <Image src="logo.svg" alt="logo" />
    </Flex>
  );
}
