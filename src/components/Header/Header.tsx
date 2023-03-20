import { Box, Flex, Grid, Image, Spacer } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Icon } from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";

export function Header() {
  const router = useRouter();

  return (
    <>
      {router.asPath !== "/" ? (
        <>
          <Flex
            w="100%"
            as="header"
            maxWidth={1400}
            h="20"
            mx="auto"
            align="center"
            justifyContent="center"
          >
            <Grid templateColumns="repeat(5, 1fr)" gap={6} w="100%">
              <Flex
                w="100%"
                h="100%"
                justifyContent="center"
                alignItems="center"
              >
                <Icon
                  as={ChevronLeftIcon}
                  w={7}
                  h={7}
                  color="gray.600"
                  cursor="pointer"
                />
              </Flex>
              <Box />
              <Image src="logo.svg" alt="logo" margin="0 auto" />
            </Grid>
          </Flex>
        </>
      ) : (
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
      )}
    </>
  );
}
