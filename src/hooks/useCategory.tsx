"use client";

import { selectedCategoryId } from "@/context/slices/listSlice";
import { useAppSelector } from "@/context/store";
import categories from "@/mocks/categories.json";

export const useCategory = () => {
  const categoryId = useAppSelector(selectedCategoryId);

  const data = categories.find((category) => category.id === categoryId);
  return data;
};
