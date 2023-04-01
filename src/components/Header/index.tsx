import {
  Box,
  Flex,
  Grid,
  Image,
  Spacer,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Icon } from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import Link from "next/link";

export function Header() {
  const router = useRouter();

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <>
      {router.asPath !== "/" && isWideVersion ? (
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
                <Link href="/">
                  <Icon
                    as={ChevronLeftIcon}
                    w={7}
                    h={7}
                    color="gray.600"
                    cursor="pointer"
                  />
                </Link>
              </Flex>
              <Box />
              <Image src="logo.svg" alt="logo" margin="0 auto" />
            </Grid>
          </Flex>
        </>
      ) : !isWideVersion && router.asPath !== "/" ? (
        <>
          <Flex
            w="100%"
            as="header"
            maxWidth={1400}
            h="20"
            margin="0 auto"
            align="center"
            justifyContent="center"
            textAlign="center"
          >
            <Grid
              templateColumns="repeat(3, 1fr)"
              gap={2}
              w="100%"
              h="100%"
              alignItems="center"
              justifyContent="center"
            >
              <Link href="/">
                <Icon
                  as={ChevronLeftIcon}
                  w={7}
                  h={7}
                  color="gray.600"
                  cursor="pointer"
                />
              </Link>
              <Image src="logo.svg" alt="worldtrip" />
              <Box />
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
