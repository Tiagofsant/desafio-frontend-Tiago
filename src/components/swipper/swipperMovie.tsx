import React, { useEffect, useState } from "react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwipperMovieProps } from "../../types";
import CardMovies from "../cardMovies";

// ------------------------------------------------------------------------------------

export default function SwipperMovie({ itemsMov }: SwipperMovieProps) {
  const [slidesPerView, setSlidesPerView] = useState<number>(4);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 720) {
        setSlidesPerView(1);
      } else {
        setSlidesPerView(4);
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  //  ESTRUTURA CRIADA ABAIXO COM O AUXILIO DE CHAT GPT

  return (
    <Swiper
      spaceBetween={10}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      slidesPerView={slidesPerView}
      navigation
    >
      {itemsMov.map((item, index) => (
        <SwiperSlide key={index}>
          <CardMovies content={[item]} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
