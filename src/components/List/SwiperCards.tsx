"use client";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper/modules";
import { Card, CardAdd } from "./Card";

type Props = {
  data: Array<{
    id: number;
    name: string;
    elements: Array<{}>;
  }>;
};

export const SwiperCards = ({ data }: Props) => {
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
      {data.map((list, index) => (
        <SwiperSlide
          key={index}
          className="bg-transparent max-w-[216px] min-w-[216px] min-h-[264px]"
        >
          <Card id={list.id} name={list.name} quantity={list.elements.length} />
        </SwiperSlide>
      ))}
      <SwiperSlide className="bg-transparent max-w-[216px] min-w-[216px] min-h-[264px]">
        <CardAdd />
      </SwiperSlide>
    </Swiper>
  );
};
