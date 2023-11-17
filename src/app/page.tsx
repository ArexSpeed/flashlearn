import { CategoryItem, CategoryItemAdd } from "@/components/Items/CategoryItem";
import { SetItem, SetItemAdd } from "@/components/Items/SetItem";
import { SwiperCards } from "@/components/List/SwiperCards";
import categories from "@/mocks/categories.json";
import sets from "@/mocks/sets.json";
import lists from "@/mocks/lists.json";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full h-full bg-white">
      <section className="flex flex-col gap-4 py-4 -mt-[125px]">
        <div className="flex justify-center items-center">
          <SwiperCards />
        </div>
      </section>
      <div className="flex flex-col w-full px-2">
        <section className="flex flex-col gap-4 py-2 overflow-hidden">
          <p className="font-semibold text-[20px] text-black">Categories</p>
          <div className="flex flex-row gap-2 pr-4 pb-4 overflow-x-scroll scrollbar-thin scrollbar-track-white scrollbar-thumb-blue-300 dark:scrollbar-track-primaryDark dark:scrollbar-thumb-darkBlue">
            {categories.map((item) => (
              <CategoryItem id={item.id} name={item.name} key={item.id} />
            ))}
            <CategoryItemAdd />
          </div>
        </section>
        <section className="flex flex-col gap-4 py-2 overflow-hidden">
          <p className="font-semibold text-[20px] text-black">Sets</p>
          <div className="flex flex-row gap-2">
            <span className="text-gray-500">All</span>
            <span className="text-gray-500">Private</span>
            <span className="text-gray-500">Shared</span>
            <span className="text-gray-500">Public</span>
          </div>
          <div className="flex flex-row gap-2 pr-4 pb-4 overflow-x-scroll scrollbar-thin scrollbar-track-white scrollbar-thumb-blue-300 dark:scrollbar-track-primaryDark dark:scrollbar-thumb-darkBlue">
            {sets.map((_, index) => (
              <SetItem key={index} />
            ))}
            <SetItemAdd />
          </div>
        </section>
      </div>
    </div>
  );
}
