"use client";

import { selectedTheme } from "@/context/slices/themeSlice";
import { useAppSelector } from "@/context/store";
import React from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const Body = ({ children }: { children: React.ReactNode }) => {
  const theme = useAppSelector(selectedTheme);
  return (
    <body className={`${inter.className} ${theme === "dark" && "dark"}`}>
      <main className="flex flex-col overflow-y-auto overflow-x-hidden w-screen min-h-screen bg-white dark:bg-primaryDark text-primary">
        {children}
      </main>
    </body>
  );
};
