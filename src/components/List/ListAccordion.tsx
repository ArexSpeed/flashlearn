import { useEffect, useRef, useState } from "react";
import { ChevronDownIcon, ChevronUpIcon, PencilSquareIcon } from "../Icons";

type Elements = {
  id: number;
  listId: number;
  front: string;
  back: string;
  sentences: { front: string; back: string }[];
};

type Props = {
  elements: Elements;
};

export const ListAccordion = ({ elements }: Props) => {
  const [open, setOpen] = useState(false);
  const ordersRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (ordersRef.current) {
      ordersRef.current.style.maxHeight = open
        ? `${ordersRef.current.scrollHeight}px`
        : "0px";
    }
  }, [open]);

  const toogleOpen = () => {
    setOpen((prev) => !prev);
  };
  return (
    <div className="flex flex-col w-full gap-4 px-4 py-2 rounded-md bg-gray-100 md:rounded-lg">
      <div
        className="flex flex-col items-start justify-between md:flex-row md:items-center"
        onClick={toogleOpen}
      >
        <div className="flex flex-row items-center justify-between flex-1 w-full">
          <div className="flex items-center">
            <div className="flex flex-col items-start">
              <p className="font-semibold">{elements.front}</p>
              <p className="">{elements.back}</p>
            </div>
          </div>
          <div className="bg-transparent md:hidden">
            {open ? <ChevronUpIcon /> : <ChevronDownIcon />}
          </div>
        </div>
        <div className="flex flex-row gap-2">
          <button
            type="button"
            className="outline-none bg-transparent"
            onClick={() => console.log(`Edit card: ${elements.id}`)}
          >
            <PencilSquareIcon />
          </button>
          <div className="hidden bg-transparent md:flex">
            {open ? <ChevronUpIcon /> : <ChevronDownIcon />}
          </div>
        </div>
      </div>
      <section
        ref={ordersRef}
        className="flex flex-col h-auto gap-1 overflow-hidden transition-all ease-in"
      >
        {elements.sentences.map((sentence, index) => (
          <div className="flex flex-col items-start" key={index}>
            <p className="font-semibold">{sentence.front}</p>
            <p>{sentence.back}</p>
          </div>
        ))}
      </section>
    </div>
  );
};
