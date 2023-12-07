"use client";

import {
  selectedIsOpenSidebar,
  setIsOpenSidebar,
} from "@/context/slices/sidebarSlice";
import { useAppDispatch, useAppSelector } from "@/context/store";

export const useSidebar = () => {
  const openSidebar = useAppSelector(selectedIsOpenSidebar);
  const dispatch = useAppDispatch();

  const toggleSidebar = () => dispatch(setIsOpenSidebar());
  return { openSidebar, toggleSidebar };
};
