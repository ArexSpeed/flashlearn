"use client";
import Link from "next/link";
import { CardsIcon, ListIcon } from "../Icons";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useAppDispatch } from "@/context/store";
import { setAddListFormOpen } from "@/context/slices/formSlice";

type CardProps = {
  id: number;
  name: string;
  quantity: number;
};

export const Card = ({ id, name, quantity }: CardProps) => {
  return (
    <div className="glass flex flex-col items-center justify-between w-[216px] h-[250px] p-2 rounded-2xl">
      <div className="flex flex-col items-center">
        <span className="text-black text-xl">{name}</span>
        <span className="text-gray-700 text-base">Last seen: 2 days ago</span>
      </div>
      <div style={{ width: 90, height: 90 }}>
        <CircularProgressbar
          value={60}
          text={quantity.toString()}
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
        <Link
          href={`/list/${id}`}
          className="bg-transparent outline-none w-1/2 flex justify-center"
        >
          <ListIcon className="w-6 h-6 text-black" />
        </Link>
        <Link
          href={`/card/${id}`}
          className="bg-transparent outline-none w-1/2 flex justify-center"
        >
          <CardsIcon className="w-6 h-6 text-black" />
        </Link>
      </div>
    </div>
  );
};

export const CardAdd = () => {
  const dispatch = useAppDispatch();
  return (
    <div className="glass flex flex-col items-center justify-between w-[216px] h-[250px] p-2 rounded-2xl">
      <div className="flex flex-col items-center">
        <span className="text-black text-xl">Add new</span>
        <span className="text-gray-700 text-base"></span>
      </div>
      <button
        style={{ width: 90, height: 90 }}
        className="outline-none"
        onClick={() => dispatch(setAddListFormOpen())}
      >
        <CircularProgressbar
          value={100}
          text="+"
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
      </button>
      <div className="flex flex-row w-full justify-between items-center p-2"></div>
    </div>
  );
};
