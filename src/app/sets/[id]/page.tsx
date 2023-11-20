"use client";

import { ListBox } from "@/components/List/ListBox";
import { useParams } from "next/navigation";
import sets from "@/mocks/sets.json";
import { useList } from "@/hooks/useList";

export default function SetPage() {
  const params = useParams();
  console.log(params);
  const findSet = sets.find((set) => set.id === +params.id);
  console.log(findSet);
  const list = useList();
  return (
    <div className="flex flex-col items-center w-full h-full bg-white">
      List: {findSet?.name}
      <div className="flex flex-col items-center w-full p-2 gap-2">
        {list?.data?.map((item) => (
          <ListBox
            key={item.id}
            id={item.id}
            name={item.name}
            quantity={item.elements.length}
          />
        ))}
      </div>
    </div>
  );
}
