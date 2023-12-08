"use client";

import { useParams } from "next/navigation";
import lists from "@/mocks/lists.json";
import { ListAccordion } from "@/components/List/ListAccordion";
import { CardsIcon } from "@/components/Icons";
import Link from "next/link";
import { AddCardDialog } from "@/components/Dialogs/AddCardDialog";
import { useAppDispatch } from "@/context/store";
import { setAddCardFormOpen } from "@/context/slices/formSlice";

export default function CardPage() {
  const dispatch = useAppDispatch();
  const params = useParams();
  console.log(params);
  const listElements = lists.find((list) => list.id === +params.id);
  console.log(listElements);

  return (
    <div className="flex flex-col items-center w-full h-full bg-white dark:bg-primaryDark">
      <div className="flex flex-row w-full justify-between items-center p-2">
        <div className="flex gap-2 justify-center items-center">
          <h3 className="text-black dark:text-white">{listElements?.name}</h3>
          <button
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={() => dispatch(setAddCardFormOpen())}
          >
            Create new
          </button>
        </div>
        <Link
          href={`/card/${listElements?.id}`}
          className="bg-transparent outline-none flex justify-center dark:text-white"
        >
          Cards
          <CardsIcon className="w-6 h-6 text-black dark:text-white" />
        </Link>
      </div>
      <div className="flex flex-col items-center w-full p-2 gap-2">
        {listElements?.elements?.map((item) => (
          <ListAccordion key={item.id} elements={item} />
        ))}
      </div>
      <AddCardDialog listName={listElements?.name} />
    </div>
  );
}
