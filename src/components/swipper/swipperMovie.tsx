import { useEffect, useState } from "react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import CardMovies from "../cardMovies";

// ------------------------------------------------------------------------------------

interface CardMovie {
  score: number;
  title: string;
  imageUrl: string;
}

interface SwipperMovieProps {
  items: CardMovie[];
}

// ------------------------------------------------------------------------------------

export default function SwipperMovie({ items }: SwipperMovieProps) {
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

  return (
    <Swiper
      spaceBetween={10}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      slidesPerView={slidesPerView}
      navigation
    >
      {items.map((item, index) => (
        <SwiperSlide key={index}>
          <CardMovies content={[item]} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
