import { PlusIcon } from "../Icons";

export const SetItem = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-10 h-10 rounded-md bg-blue-200" />
      <span className="text-black whitespace-nowrap">Set</span>
    </div>
  );
};

export const SetItemAdd = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-10 h-10 rounded-md bg-blue-200 flex justify-center items-center">
        <PlusIcon />
      </div>
      <span className="text-black whitespace-nowrap">Add new</span>
    </div>
  );
};
