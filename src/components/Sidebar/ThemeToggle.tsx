import { MoonIcon, SunIcon } from "@/components/Icons";
import { selectedTheme, setTheme } from "@/context/slices/themeSlice";
import { useAppDispatch, useAppSelector } from "@/context/store";

export const ThemeToggle = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(selectedTheme);

  return (
    <div className="flex flex-row items-center justify-center w-full text-black rounded-lg bg-secondaryLight dark:text-white dark:bg-secondaryDark">
      <button
        type="button"
        className={`flex flex-row flex-1 w-full items-center justify-start gap-1 m-1 p-1 font-medium rounded-md ${
          theme === "light" && "bg-white "
        }`}
        onClick={() => dispatch(setTheme("light"))}
      >
        <SunIcon className="w-6 h-6 text-blue-500" />
        Light
      </button>
      <button
        type="button"
        className={`flex flex-row flex-1 w-full items-center justify-start gap-1 m-1 p-1 font-medium rounded-md  ${
          theme === "dark" && "bg-primaryDark"
        }`}
        onClick={() => dispatch(setTheme("dark"))}
      >
        <MoonIcon className="w-6 h-6 text-blue-500" />
        Dark
      </button>
    </div>
  );
};
