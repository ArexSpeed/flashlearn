"use client";

import { ListBox } from "@/components/List/ListBox";
import { useParams } from "next/navigation";
import lists from "@/mocks/lists.json";
import { useList } from "@/hooks/useList";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

export default function CardPage() {
  const params = useParams();
  const listElements = lists.find((list) => list.id === +params.id);
  return (
    <div className="flex flex-col grow items-center w-full h-full">
      List:
      <div className="flex flex-col grow w-full h-full justify-center items-center px-4 border rounded-lg">
        <div className="flex w-full h-full grow">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            keyboard={{
              enabled: true,
            }}
            pagination={{
              type: "fraction",
            }}
            navigation={true}
            className="flex grow"
            onSlideChange={() => {}}
          >
            {listElements?.elements.map((element) => (
              <SwiperSlide
                key={element.id}
                className="flex flex-col h-full justify-center items-center"
              >
                <div className="flex flex-col h-1/2 justify-center items-center">
                  <p>{element.front}</p>
                  <p>{element.back}</p>
                </div>
                {element.sentences.map((sentence, index) => (
                  <div
                    key={index}
                    className="flex flex-col h-1/2 justify-center items-center bg-gray-100"
                  >
                    <p>{sentence.front}</p>
                    <p>{sentence.back}</p>
                  </div>
                ))}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="w-full h-[48px] bg-blue-200"></div>
    </div>
  );
}
