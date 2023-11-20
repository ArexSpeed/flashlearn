"use client";

import { selectedSetData } from "@/context/slices/listSlice";
import { useAppSelector } from "@/context/store";
import lists from "@/mocks/lists.json";

export const useList = () => {
  const setData = useAppSelector(selectedSetData);

  const data = lists.filter((list) => list.setId === setData.id);
  return {
    data,
    setData,
  };
};
