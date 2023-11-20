"use client";

import React from "react";
import lists from "@/mocks/lists.json";
import { useAppSelector } from "@/context/store";
import { selectedSetData } from "@/context/slices/listSlice";
import { SwiperCards } from "@/components/List/SwiperCards";
import Link from "next/link";
import {
  ArrowRightIcon,
  ChartBarIcon,
  PencilSquareIcon,
} from "@/components/Icons";

export const ListContainer = () => {
  const setData = useAppSelector(selectedSetData);

  const data = lists.filter((list) => list.setId === setData.id);
  return (
    <div className="flex flex-col w-full">
      <div className="flex pb-4 gap-6 justify-center items-center w-full">
        <span className="text-xl">{setData.name}</span>
        <div className="flex flex-row gap-2 items-center">
          <PencilSquareIcon />
          <ChartBarIcon />
          <Link href={`/set/${setData.id}`}>
            <ArrowRightIcon />
          </Link>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <SwiperCards data={data} />
      </div>
    </div>
  );
};
