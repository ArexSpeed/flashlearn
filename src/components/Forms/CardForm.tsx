import React from "react";

import { useForm } from "react-hook-form";
import { Input } from "./Input";
import { useAppDispatch } from "@/context/store";
import { setAddCardFormOpen } from "@/context/slices/formSlice";
import { SubmitSection } from "./SubmitSection";
import { StringValidation } from "zod";
import { CardInput } from "./CardInput";

type Inputs = {
  front: string;
  back: string;
  sentence1: string;
  sentence2: string;
};

export const CardForm = ({}) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const dispatch = useAppDispatch();
  const onSubmit = () => {
    console.log("Save card");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-2">
        <CardInput
          label="Name"
          type="text"
          placeholder="front"
          register={register}
          name="front"
          errorMsg={errors.front?.message}
        />
        <CardInput
          label="Name"
          type="text"
          placeholder="back"
          register={register}
          name="back"
          errorMsg={errors.back?.message}
        />
        <CardInput
          label="Name"
          type="text"
          placeholder="sentence1 front"
          register={register}
          name="sentence1"
          errorMsg={errors.sentence1?.message}
        />
        <CardInput
          label="Name"
          type="text"
          placeholder="sentence2 back"
          register={register}
          name="sentence2"
          errorMsg={errors.sentence2?.message}
        />
      </div>
      <SubmitSection onCancel={() => dispatch(setAddCardFormOpen())} />
    </form>
  );
};
