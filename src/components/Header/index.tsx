import { MenuIcon } from "../Icons";
import { HeaderActions } from "./HeaderActions";
import { Search } from "./Search";

export const Header = () => {
  return (
    <div className="h-[264px] w-full headerBg">
      <header className="flex bg-primaryLight justify-between w-full p-2.5 gap-2 dark:bg-primaryDark">
        <div className="flex flex-row items-center">
          <MenuIcon />
        </div>
        <div className="hidden w-full sm:flex">
          <Search />
        </div>
        <div className="flex flex-row items-center">
          <HeaderActions />
        </div>
      </header>
    </div>
  );
};
