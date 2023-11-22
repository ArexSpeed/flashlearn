"use client";

import { useAppDispatch, useAppSelector } from "@/context/store";
import { PlusIcon } from "../Icons";
import { selectedCategoryId, setCategoryId } from "@/context/slices/listSlice";

type CategoryItem = {
  id: number;
  name: string;
};

export const CategoryItem = ({ id, name }: CategoryItem) => {
  const dispatch = useAppDispatch();
  const categoryId = useAppSelector(selectedCategoryId);
  return (
    <button
      className="flex flex-col items-center justify-center outline-none"
      onClick={() => dispatch(setCategoryId(id))}
    >
      <div className="w-10 h-10 rounded-full bg-blue-200" />
      <span className="text-black whitespace-nowrap">{name}</span>
    </button>
  );
};

export const CategoryItemAdd = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-10 h-10 rounded-full bg-blue-200 flex justify-center items-center">
        <PlusIcon className="w-6 h-6 text-black" />
      </div>
      <span className="text-black whitespace-nowrap">Add new</span>
    </div>
  );
};
