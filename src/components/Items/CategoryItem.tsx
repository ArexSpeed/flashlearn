"use client";

import { useAppDispatch, useAppSelector } from "@/context/store";
import { PlusIcon } from "../Icons";
import { selectedCategoryId, setCategoryId } from "@/context/slices/listSlice";
import { setAddCategoryFormOpen } from "@/context/slices/formSlice";

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
      <span className="text-black dark:text-white whitespace-nowrap">
        {name}
      </span>
    </button>
  );
};

export const CategoryItemAdd = () => {
  const dispatch = useAppDispatch();

  return (
    <button
      className="flex flex-col items-center justify-center outline-none"
      onClick={() => dispatch(setAddCategoryFormOpen())}
    >
      <div className="w-10 h-10 rounded-full bg-transparent flex justify-center items-center">
        <PlusIcon className="w-6 h-6 text-black dark:text-white" />
      </div>
      <span className="text-black dark:text-white whitespace-nowrap">
        Add new
      </span>
    </button>
  );
};
