"use client";

import { Dialog } from "@headlessui/react";
import { useAppDispatch, useAppSelector } from "@/context/store";
import {
  selectedAddCategoryFormOpen,
  selectedAddSetsFormOpen,
  setAddSetsFormOpen,
} from "@/context/slices/formSlice";
import { SetsForm } from "../Forms/SetsForm";
import { useCategory } from "@/hooks/useCategory";

export const AddSetsDialog = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector(selectedAddSetsFormOpen);
  const category = useCategory();

  return (
    <Dialog
      open={isOpen}
      as="div"
      className="relative z-10"
      onClose={() => dispatch(setAddSetsFormOpen())}
    >
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-sm rounded bg-white p-4">
          <Dialog.Title className="">
            Add new set to category: {category?.name}
          </Dialog.Title>
          <SetsForm />
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};
