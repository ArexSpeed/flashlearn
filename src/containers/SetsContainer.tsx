"use client";

import { SetItem, SetItemAdd } from "@/components/Items/SetItem";
import sets from "@/mocks/sets.json";
import { useAppSelector } from "@/context/store";
import { selectedCategoryId } from "@/context/slices/listSlice";

export const SetsContainer = () => {
  const categoryId = useAppSelector(selectedCategoryId);

  return (
    <>
      <p className="font-semibold text-[20px] text-black">Sets</p>
      <div className="flex flex-row gap-2">
        <span className="text-gray-500">All</span>
        <span className="text-gray-500">Private</span>
        <span className="text-gray-500">Shared</span>
        <span className="text-gray-500">Public</span>
      </div>
      <div className="flex flex-row gap-2 pr-4 pb-4 overflow-x-scroll scrollbar-thin scrollbar-track-white scrollbar-thumb-blue-300 dark:scrollbar-track-primaryDark dark:scrollbar-thumb-darkBlue">
        {sets
          .filter((item) => item.categoryId === categoryId)
          .map((item, index) => (
            <SetItem id={item.id} name={item.name} key={index} />
          ))}
        <SetItemAdd />
      </div>
    </>
  );
};
