"use client";

import { Dialog } from "@headlessui/react";
import { useAppDispatch, useAppSelector } from "@/context/store";
import {
  selectedAddCardFormOpen,
  setAddCardFormOpen,
} from "@/context/slices/formSlice";
import { selectedSetData } from "@/context/slices/listSlice";
import { CardForm } from "../Forms/CardForm";

export const AddCardDialog = ({ listName }: { listName?: string }) => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector(selectedAddCardFormOpen);

  return (
    <Dialog
      open={isOpen}
      as="div"
      className="relative z-10"
      onClose={() => dispatch(setAddCardFormOpen())}
    >
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-sm rounded bg-white p-4">
          <Dialog.Title className="">
            Add new card to list: {listName}
          </Dialog.Title>
          <CardForm />
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};
