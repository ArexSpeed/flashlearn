import { SearchIcon } from "@/components/Icons";
import React from "react";

export const Search = () => {
  return (
    <form className="flex items-center w-full mx-6 grow lg:mx-40 glass">
      <label htmlFor="voice-search" className="sr-only">
        Search
      </label>
      <div className="relative w-full">
        <button
          type="submit"
          className="absolute top-0 left-0 flex items-center justify-center h-full px-2 text-sm font-medium focus:outline-none"
        >
          <SearchIcon className="w-6 h-6 text-black dark:text-gray-300" />
          <span className="sr-only">Search</span>
        </button>
        <input
          type="text"
          id="voice-search"
          className="text-gray-900 dark:text-gray-300 text-sm rounded-lg focus:ring-primaryBlue focus:border-primaryBlue bg-transparent block w-full pl-12 p-2.5 outline-none placeholder:text-gray-600 dark:placeholder:text-gray-400"
          placeholder="Find your list"
          required
        />
      </div>
    </form>
  );
};
