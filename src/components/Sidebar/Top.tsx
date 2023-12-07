"use client";

import { CloseIcon } from "../Icons";
import { useSidebar } from "@/hooks/useSidebar";

export const Top = () => {
  const { toggleSidebar } = useSidebar();

  return (
    <div className="py-2 px-2 flex flex-row justify-between items-center">
      <span>Flashlearn</span>
      <button className="flex flex-row items-center" onClick={toggleSidebar}>
        <CloseIcon className="w-6 h-6 text-blue-500" />
      </button>
    </div>
  );
};
