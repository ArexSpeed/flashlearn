import { CategoryItem, CategoryItemAdd } from "@/components/Items/CategoryItem";
import categories from "@/mocks/categories.json";
import { SetsContainer } from "@/containers/SetsContainer";
import { ListContainer } from "@/containers/ListContainer";
import { AddCategoryDialog } from "@/components/Dialogs/AddCategoryDialog";
import { AddSetsDialog } from "@/components/Dialogs/AddSetsDialog";
import { AddListDialog } from "@/components/Dialogs/AddListDialog";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full h-full bg-primaryLight dark:bg-primaryDark">
      <section className="flex flex-col gap-4 py-4 -mt-[125px]">
        <ListContainer />
      </section>
      <div className="flex flex-col w-full px-2 text-black dark:text-white">
        <section className="flex flex-col gap-4 py-2 overflow-hidden">
          <p className="font-semibold text-[20px]">Categories</p>
          <div className="flex flex-row gap-2 pr-4 pb-4 overflow-x-scroll scrollbar-thin scrollbar-track-white scrollbar-thumb-blue-300 dark:scrollbar-track-primaryDark dark:scrollbar-thumb-darkBlue">
            {categories.map((item) => (
              <CategoryItem id={item.id} name={item.name} key={item.id} />
            ))}
            <CategoryItemAdd />
          </div>
        </section>
        <section className="flex flex-col gap-4 py-2 overflow-hidden">
          <SetsContainer />
        </section>
      </div>
      <AddCategoryDialog />
      <AddSetsDialog />
      <AddListDialog />
    </div>
  );
}
