"use client";

import { Dialog } from "@headlessui/react";
import { useAppDispatch, useAppSelector } from "@/context/store";
import {
  selectedAddListFormOpen,
  setAddListFormOpen,
} from "@/context/slices/formSlice";
import { selectedSetData } from "@/context/slices/listSlice";
import { ListForm } from "../Forms/ListForm";

export const AddListDialog = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector(selectedAddListFormOpen);
  const setData = useAppSelector(selectedSetData);

  return (
    <Dialog
      open={isOpen}
      as="div"
      className="relative z-10"
      onClose={() => dispatch(setAddListFormOpen())}
    >
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-sm rounded bg-white dark:bg-black p-4">
          <Dialog.Title className="text-black dark:text-white">
            Add new list to set: {setData?.name}
          </Dialog.Title>
          <ListForm />
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};
