"use client";

import { useAppDispatch, useAppSelector } from "@/context/store";
import { PlusIcon } from "../Icons";
import {
  selectedCategoryId,
  selectedSetId,
  setSetId,
} from "@/context/slices/listSlice";

type SetItem = {
  id: number;
  name: string;
};

export const SetItem = ({ id, name }: SetItem) => {
  const dispatch = useAppDispatch();
  const categoryId = useAppSelector(selectedCategoryId);
  const setId = useAppSelector(selectedSetId);
  return (
    <button
      className="flex flex-col items-center justify-center outline-none"
      onClick={() => dispatch(setSetId(id))}
    >
      <div className="w-10 h-10 rounded-md bg-blue-200" />
      <span className="text-black whitespace-nowrap">{name}</span>
    </button>
  );
};

export const SetItemAdd = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-10 h-10 rounded-md bg-blue-200 flex justify-center items-center">
        <PlusIcon />
      </div>
      <span className="text-black whitespace-nowrap">Add new</span>
    </div>
  );
};
