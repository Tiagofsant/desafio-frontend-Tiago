import React, { useEffect, useState } from "react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwipperPictureProps } from "../../types";
import CardPicture from "../cardPicture";

// ------------------------------------------------------------------------------------

export default function SwipperPicture({ itemsPic }: SwipperPictureProps) {
  const [slidesPerView, setSlidesPerView] = useState<number>(6);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 720) {
        setSlidesPerView(1);
      } else {
        setSlidesPerView(6);
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
      {itemsPic.map((item, index) => (
        <SwiperSlide key={index}>
          <CardPicture content={[item]} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
