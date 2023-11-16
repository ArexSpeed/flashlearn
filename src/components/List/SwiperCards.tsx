"use client";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper/modules";
import { Card } from "./Card";

export const SwiperCards = () => {
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 10,
        stretch: 0,
        depth: 300,
        modifier: 1,
        slideShadows: false,
      }}
      pagination={false}
      modules={[EffectCoverflow, Pagination]}
      observer={true}
      observeParents={true}
      className="w-screen"
    >
      {Array.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4).map((_, index) => (
        <SwiperSlide
          key={index}
          className="bg-transparent max-w-[216px] min-w-[216px] min-h-[264px]"
        >
          <Card />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
