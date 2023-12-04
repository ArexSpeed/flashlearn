import React from "react";

import { useForm } from "react-hook-form";
import { Input } from "./Input";
import { useAppDispatch } from "@/context/store";
import {
  setAddCategoryFormOpen,
  setAddSetsFormOpen,
} from "@/context/slices/formSlice";
import { SubmitSection } from "./SubmitSection";

type Inputs = {
  name: string;
};

export const SetsForm = ({}) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const dispatch = useAppDispatch();
  const onSubmit = () => {
    console.log("Save set");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-2">
        <Input
          label="Name"
          type="text"
          placeholder="set name"
          register={register}
          name="name"
          errorMsg={errors.name?.message}
        />
        <div>
          <label className="relative inline-flex items-center mb-5 cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              Private
            </span>
          </label>
        </div>
      </div>
      <SubmitSection onCancel={() => dispatch(setAddSetsFormOpen())} />
    </form>
  );
};
