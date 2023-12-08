"use client";

import { Li } from "./Li";
import {
  CalendarBoldIcon,
  CalendarIcon,
  HomeIcon,
  HomeBoldIcon,
  QuizIcon,
  SettingsBoldIcon,
  SettingsIcon,
  QuizBoldIcon,
} from "../Icons";
import { ThemeToggle } from "./ThemeToggle";
import { Top } from "./Top";
import { Dialog } from "@headlessui/react";
import { useSidebar } from "@/hooks/useSidebar";

export const Sidebar = () => {
  const { openSidebar, toggleSidebar } = useSidebar();

  return (
    <Dialog open={openSidebar} as="div" onClose={toggleSidebar}>
      <nav
        className={`absolute top-0 left-0 bg-transparent w-full h-screen md:w-[256px] ${
          !openSidebar && "hidden"
        }`}
      >
        <div
          className={`justify-between flex flex-col p-4 w-full h-full fixed transition-transform duration-300 bg-primaryLight dark:bg-primaryDark z-50 ${
            !openSidebar && "-translate-x-full"
          } md:w-[256px] md:translate-x-0`}
        >
          <Top />
          <ul className="flex flex-col gap-2">
            <Li
              title="Home"
              icon={<HomeIcon className="w-6 h-6 text-blue-500" />}
              iconActive={<HomeBoldIcon className="w-6 h-6 text-blue-500" />}
              href="/"
            />
            <Li
              title="Calendar"
              icon={<CalendarIcon className="w-6 h-6 text-blue-500" />}
              iconActive={
                <CalendarBoldIcon className="w-6 h-6 text-blue-500" />
              }
              href="/calendar"
            />
            <Li
              title="Quiz"
              icon={<QuizIcon className="w-6 h-6 text-blue-500" />}
              iconActive={<QuizBoldIcon className="w-6 h-6 text-blue-500" />}
              href="/quiz"
            />
            <Li
              title="Settings"
              icon={<SettingsIcon className="w-6 h-6 text-blue-500" />}
              iconActive={
                <SettingsBoldIcon className="w-6 h-6 text-blue-500" />
              }
              href="/settings"
            />
          </ul>
          <div className="flex flex-col w-full gap-4 py-4">
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </Dialog>
  );
};
