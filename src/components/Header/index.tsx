"use client";

import { useDispatch } from "react-redux";
import { MenuIcon } from "../Icons";
import { HeaderActions } from "./HeaderActions";
import { Search } from "./Search";
import { setIsOpenSidebar } from "@/context/slices/sidebarSlice";

export const Header = () => {
  const dispatch = useDispatch();
  return (
    <div className="h-[264px] w-full headerBg">
      <header className="flex bg-primaryLight justify-between w-full p-2.5 gap-2 dark:bg-primaryDark">
        <button
          className="flex flex-row items-center"
          onClick={() => dispatch(setIsOpenSidebar())}
        >
          <MenuIcon className="w-6 h-6 text-white" />
        </button>
        <div className="hidden w-full sm:flex">
          <Search />
        </div>
        <div className="flex flex-row items-center">
          <HeaderActions />
        </div>
      </header>
    </div>
  );
};
