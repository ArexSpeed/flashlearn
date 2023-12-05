import React from "react";

import { useForm } from "react-hook-form";
import { Input } from "./Input";
import { useAppDispatch } from "@/context/store";
import { setAddListFormOpen } from "@/context/slices/formSlice";
import { SubmitSection } from "./SubmitSection";

type Inputs = {
  name: string;
};

export const ListForm = ({}) => {
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
      </div>
      <SubmitSection onCancel={() => dispatch(setAddListFormOpen())} />
    </form>
  );
};
