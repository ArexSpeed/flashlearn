import React from "react";

type Props = {
  onCancel: () => void;
};

export const SubmitSection = ({ onCancel }: Props) => {
  return (
    <section className="flex flex-row items-center justify-center w-full gap-2 pt-4">
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Save
      </button>
      <button type="button" onClick={onCancel}>
        Cancel
      </button>
    </section>
  );
};
