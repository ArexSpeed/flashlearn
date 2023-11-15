import { CategoryItem } from "@/components/Items/CategoryItem";
import { SetItem } from "@/components/Items/SetItem";
import { Card } from "@/components/List/Card";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full h-full bg-white">
      <section className="flex flex-col gap-4 py-4 -mt-[125px]">
        <div className="flex flex-row gap-4">
          {Array.of(1, 2, 3, 4, 5).map((_, index) => (
            <Card key={index} />
          ))}
        </div>
      </section>
      <div className="flex flex-col">
        <section className="flex flex-col gap-4 py-4">
          <p className="font-semibold text-[20px] text-black">Categories</p>
          <div className="flex flex-row gap-2">
            {Array.of(1, 2, 3, 4, 5).map((_, index) => (
              <CategoryItem key={index} />
            ))}
          </div>
        </section>
        <section className="flex flex-col gap-4 py-4">
          <p className="font-semibold text-[20px] text-black">Sets</p>
          <div className="flex flex-row gap-2">
            <span className="text-gray-500">All</span>
            <span className="text-gray-500">Private</span>
            <span className="text-gray-500">Shared</span>
            <span className="text-gray-500">Public</span>
          </div>
          <div className="flex flex-row gap-2">
            {Array.of(1, 2, 3, 4, 5).map((_, index) => (
              <SetItem key={index} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
