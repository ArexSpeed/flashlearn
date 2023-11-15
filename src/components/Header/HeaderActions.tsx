import React from "react";
import { NotificationIcon, UserCircleIcon } from "../Icons";

export const HeaderActions = () => {
  return (
    <div className="flex items-center justify-end w-full gap-2">
      <button className="bg-transparent outline-none">
        <NotificationIcon />
      </button>
      <button className="bg-transparent outline-none flex flex-row gap-1 justify-center items-center">
        <span>User Name</span>
        <UserCircleIcon />
      </button>
    </div>
  );
};
