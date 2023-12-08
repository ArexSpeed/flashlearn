"use client";

import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { useAppDispatch, useAppSelector } from "@/context/store";
import {
  selectedAddCategoryFormOpen,
  setAddCategoryFormOpen,
} from "@/context/slices/formSlice";
import { CategoryForm } from "../Forms/CategoryForm";

export const AddCategoryDialog = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector(selectedAddCategoryFormOpen);

  return (
    <Dialog
      open={isOpen}
      as="div"
      className="relative z-10"
      onClose={() => dispatch(setAddCategoryFormOpen())}
    >
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-sm rounded bg-white dark:bg-black p-4">
          <Dialog.Title className="text-black dark:text-white">
            Add new category
          </Dialog.Title>
          <CategoryForm />
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};
