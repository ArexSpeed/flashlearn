"use client";

import { useParams } from "next/navigation";
import lists from "@/mocks/lists.json";
import { ListAccordion } from "@/components/List/ListAccordion";
import { CardsIcon } from "@/components/Icons";
import Link from "next/link";

export default function CardPage() {
  const params = useParams();
  console.log(params);
  const listElements = lists.find((list) => list.id === +params.id);
  console.log(listElements);

  return (
    <div className="flex flex-col items-center w-full h-full bg-white">
      <div className="flex flex-row w-full justify-between items-center p-2">
        <h3>{listElements?.name}</h3>
        <Link
          href={`/card/${listElements?.id}`}
          className="bg-transparent outline-none flex justify-center"
        >
          Cards
          <CardsIcon className="w-6 h-6 text-black" />
        </Link>
      </div>
      <div className="flex flex-col items-center w-full p-2 gap-2">
        {listElements?.elements?.map((item) => (
          <ListAccordion key={item.id} elements={item} />
        ))}
      </div>
    </div>
  );
}
