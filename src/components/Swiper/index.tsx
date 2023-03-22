import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Continent from "./SwiperContinent";

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
          <Continent
            name="Europa"
            description="O continente mais antigo."
            image="./Europa.jfif"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Continent
            name="América"
            description="É o segundo maior e mais comprido do mundo."
            image="https://www.dicasdeviagem.com/wp-content/uploads/2022/04/gugelmim-rio-de-janeiro-por-do-sol-pixabay.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Continent
            name="Ásia"
            description="Maior continente em extensão territorial."
            image="https://img.freepik.com/fotos-gratis/pagode-vermelho-de-chureito-no-japao-com-o-monte-fuji-atras_181624-4668.jpg?w=1380&t=st=1677249326~exp=1677249926~hmac=fe1502b7c02fec7df2484b5ec4d4ba2630f85e9882ce851523e2f6fb22659505"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Continent
            name="Oceania"
            description="É formada por 19 territórios"
            image="https://img.freepik.com/fotos-gratis/bela-foto-da-ponte-do-porto-de-sydney-com-um-ceu-rosa-e-azul-claro_181624-16041.jpg?w=1380&t=st=1677250833~exp=1677251433~hmac=128f76d6a0a26a711a34a1ba945462f206adc982dfd9430582ca194a9e0be4fd"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Continent
            name="África"
            description="Os maiores animais do mundo vivem na África!"
            image="https://img.freepik.com/fotos-gratis/campo-coberto-de-grama-e-arvores-cercado-por-zebras-sob-a-luz-do-sol-durante-o-por-do-sol_181624-18641.jpg?w=1380&t=st=1677250045~exp=1677250645~hmac=9af5526f7345c536d432cadd19486c7bc919a3e244cd2401569d001e027c0491"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
