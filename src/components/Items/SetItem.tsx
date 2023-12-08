"use client";

import { useAppDispatch, useAppSelector } from "@/context/store";
import { PlusIcon } from "../Icons";
import {
  selectedCategoryId,
  selectedSetData,
  setSetData,
} from "@/context/slices/listSlice";
import { setAddSetsFormOpen } from "@/context/slices/formSlice";

type SetItem = {
  id: number;
  name: string;
};

export const SetItem = ({ id, name }: SetItem) => {
  const dispatch = useAppDispatch();
  const categoryId = useAppSelector(selectedCategoryId);
  const setData = useAppSelector(selectedSetData);
  return (
    <button
      className="flex flex-col items-center justify-center outline-none"
      onClick={() => dispatch(setSetData({ id, name }))}
    >
      <div className="w-10 h-10 rounded-md bg-blue-200" />
      <span className="text-black dark:text-white whitespace-nowrap">
        {name}
      </span>
    </button>
  );
};

export const SetItemAdd = () => {
  const dispatch = useAppDispatch();

  return (
    <button
      className="flex flex-col items-center justify-center outline-none"
      onClick={() => dispatch(setAddSetsFormOpen())}
    >
      <div className="w-10 h-10 rounded-md bg-transparent flex justify-center items-center">
        <PlusIcon className="w-6 h-6 text-black dark:text-white" />
      </div>
      <span className="text-black dark:text-white whitespace-nowrap">
        Add new
      </span>
    </button>
  );
};
