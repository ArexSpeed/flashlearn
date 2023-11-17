import { PlusIcon } from "../Icons";

type CategoryItem = {
  id: number;
  name: string;
};

export const CategoryItem = ({ id, name }: CategoryItem) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-10 h-10 rounded-full bg-blue-200" />
      <span className="text-black whitespace-nowrap">{name}</span>
    </div>
  );
};

export const CategoryItemAdd = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-10 h-10 rounded-full bg-blue-200 flex justify-center items-center">
        <PlusIcon />
      </div>
      <span className="text-black whitespace-nowrap">Add new</span>
    </div>
  );
};
