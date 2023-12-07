"use client";

import { setIsOpenSidebar } from "@/context/slices/sidebarSlice";
import { CloseIcon } from "../Icons";
import { useDispatch } from "react-redux";

export const Top = () => {
  const dispatch = useDispatch();

  return (
    <div className="py-2 px-2 flex flex-row justify-between items-center">
      <span>Flashlearn</span>
      <button
        className="flex flex-row items-center"
        onClick={() => dispatch(setIsOpenSidebar())}
      >
        <CloseIcon className="w-6 h-6 text-blue-500" />
      </button>
    </div>
  );
};
