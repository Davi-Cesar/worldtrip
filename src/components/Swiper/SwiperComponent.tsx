import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Box, color, Flex, Text } from "@chakra-ui/react";

export default function SwiperComponent() {
  return (
    <>
      <Swiper
        style={{ color: "#FFF" }}
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Flex
            direction="column"
            h="100%"
            alignItems="center"
            justifyContent="center"
          >
            <Box
              h="100%"
              w="100%"
              bgImage="url('/Europa.jfif')"
              bgPosition="center"
              bgRepeat="no-repeat"
              filter="auto"
              brightness="80%"
              // filter={grayscale(8)}
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
            >
              <Text fontWeight="bold" fontSize="40">
                Europa
              </Text>
              <Text fontWeight="bold" fontSize="24">
                O continente mais antigo.
              </Text>
            </Box>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex
            direction="column"
            h="100%"
            alignItems="center"
            justifyContent="center"
          >
            <Text fontWeight="bold" fontSize="40">
              América
            </Text>
            <Text fontWeight="bold" fontSize="24">
              O continente mais antigo.
            </Text>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex
            direction="column"
            h="100%"
            alignItems="center"
            justifyContent="center"
          >
            <Text fontWeight="bold" fontSize="40">
              Ásia
            </Text>
            <Text fontWeight="bold" fontSize="24">
              O continente mais antigo.
            </Text>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex
            direction="column"
            h="100%"
            alignItems="center"
            justifyContent="center"
          >
            <Text fontWeight="bold" fontSize="40">
              Oceania
            </Text>
            <Text fontWeight="bold" fontSize="24">
              O continente mais antigo.
            </Text>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex
            direction="column"
            h="100%"
            alignItems="center"
            justifyContent="center"
          >
            <Text fontWeight="bold" fontSize="40">
              África
            </Text>
            <Text fontWeight="bold" fontSize="24">
              O continente mais antigo.
            </Text>
          </Flex>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
