"use client";
import { CardsIcon, ListIcon } from "../Icons";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export const Card = () => {
  const percentage = 60;
  return (
    <div className="glass flex flex-col items-center justify-between w-[216px] h-[250px] p-2 rounded-2xl">
      <div className="flex flex-col items-center">
        <span className="text-black text-xl">Basic</span>
        <span className="text-gray-700 text-base">Last seen: 2 days ago</span>
      </div>
      <div style={{ width: 90, height: 90 }}>
        <CircularProgressbar
          value={60}
          text="60"
          styles={buildStyles({
            rotation: 0,
            strokeLinecap: "butt",
            textSize: "24px",
            pathTransitionDuration: 0.5,
            pathColor: "#34D231",
            textColor: "#000000",
            trailColor: "#EA2626",
            backgroundColor: "FFFFFF",
          })}
        />
      </div>
      <div className="flex flex-row w-full justify-between items-center p-2">
        <button className="bg-transparent outline-none w-1/2 flex justify-center">
          <ListIcon />
        </button>
        <button className="bg-transparent outline-none w-1/2 flex justify-center">
          <CardsIcon />
        </button>
      </div>
    </div>
  );
};
