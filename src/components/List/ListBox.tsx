import Link from "next/link";
import React from "react";
import { CardsIcon, ListIcon } from "../Icons";

type ListProps = {
  id: number;
  name: string;
  quantity: number;
};

export const ListBox = ({ id, name, quantity }: ListProps) => {
  return (
    <div className="flex flex-col w-full border rounded-lg p-2">
      <div className="flex flex-row justify-between items-center">
        <span className="whitespace-nowrap">{name}</span>

        <div className="flex flex-row w-full justify-end items-center p-2 gap-2">
          <Link
            href={`/list/${id}`}
            className="bg-transparent outline-none flex justify-center"
          >
            <ListIcon className="w-6 h-6 text-black" />
          </Link>
          <Link
            href={`/card/${id}`}
            className="bg-transparent outline-none flex justify-center"
          >
            <CardsIcon className="w-6 h-6 text-black" />
          </Link>
        </div>
      </div>
      <div className="flex flex-row gap-2 justify-start items-center">
        <div className="flex justify-center items-center w-6 h-6 rounded-[4px] bg-gray-400">
          {quantity}
        </div>
        <div className="flex justify-center items-center w-6 h-6 rounded-[4px] bg-green-400">
          15
        </div>
        <div className="flex justify-center items-center w-6 h-6 rounded-[4px] bg-red-400">
          15
        </div>
        <div className="flex justify-center items-center w-6 h-6 rounded-[4px] bg-gray-400">
          +
        </div>
      </div>
    </div>
  );
};
