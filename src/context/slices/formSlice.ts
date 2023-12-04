import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type formState = {
  addCategoryFormOpen: boolean;
  addSetsFormOpen: boolean;
};

const initialState: formState = {
  addCategoryFormOpen: false,
  addSetsFormOpen: false,
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setAddCategoryFormOpen: (state) => {
      state.addCategoryFormOpen = !state.addCategoryFormOpen;
    },
    setAddSetsFormOpen: (state) => {
      state.addSetsFormOpen = !state.addSetsFormOpen;
    },
  },
});

export const { setAddCategoryFormOpen, setAddSetsFormOpen } = formSlice.actions;

export const selectedAddCategoryFormOpen = (state: RootState) =>
  state.form.addCategoryFormOpen;
export const selectedAddSetsFormOpen = (state: RootState) =>
  state.form.addSetsFormOpen;
export default formSlice.reducer;
