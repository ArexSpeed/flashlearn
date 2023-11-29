"use client";

import React from "react";
import { Li } from "./Li";
import { HomeIcon } from "../Icons";
import { useAppSelector } from "@/context/store";
import { selectedIsOpenSidebar } from "@/context/slices/sidebarSlice";

export const Sidebar = () => {
  const openSidebar = useAppSelector(selectedIsOpenSidebar);

  return (
    <nav
      className={`absolute top-0 left-0 mt-[64px] bg-blue-400 w-full md:w-[256px] ${
        !openSidebar && "hidden"
      }`}
    >
      {/* <div
        className={`bg-primary justify-between flex flex-col p-4 w-full h-[calc(100vh_-_64px)] fixed t-10 transition-transform duration-300 bg-primaryLight dark:bg-primaryDark ${
          !openSidebar && "-translate-x-full"
        } md:sticky md:w-[256px] md:translate-x-0`}
      > */}
      <ul className="flex flex-col gap-2">
        <Li
          title="Home"
          icon={<HomeIcon className="w-6 h-6 text-blue-500" />}
          pathname="/"
        />
        <Li
          title="Calendar"
          icon={<HomeIcon className="w-6 h-6 text-blue-500" />}
          pathname="/calendar"
        />
        <Li
          title="Quiz"
          icon={<HomeIcon className="w-6 h-6 text-blue-500" />}
          pathname="/quiz"
        />
        <Li
          title="Settings"
          icon={<HomeIcon className="w-6 h-6 text-blue-500" />}
          pathname="/settings"
        />
      </ul>
      {/* <div className="flex flex-col w-full gap-4 py-4">
          <ThemeToggle />
          {session.status === "authenticated" ? (
            <UserBox session={session.data} />
          ) : (
            <LinkButton href="/auth/signin">
              <p className="text-center">Signin</p>
            </LinkButton>
          )}
        </div> */}
      {/* </div> */}
    </nav>
  );
};
