import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type formState = {
  addCategoryFormOpen: boolean;
  addSetsFormOpen: boolean;
  addListFormOpen: boolean;
  addCardFormOpen: boolean;
};

const initialState: formState = {
  addCategoryFormOpen: false,
  addSetsFormOpen: false,
  addListFormOpen: false,
  addCardFormOpen: false,
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
    setAddListFormOpen: (state) => {
      state.addListFormOpen = !state.addListFormOpen;
    },
    setAddCardFormOpen: (state) => {
      state.addCardFormOpen = !state.addCardFormOpen;
    },
  },
});

export const {
  setAddCategoryFormOpen,
  setAddSetsFormOpen,
  setAddListFormOpen,
  setAddCardFormOpen,
} = formSlice.actions;

export const selectedAddCategoryFormOpen = (state: RootState) =>
  state.form.addCategoryFormOpen;
export const selectedAddSetsFormOpen = (state: RootState) =>
  state.form.addSetsFormOpen;
export const selectedAddListFormOpen = (state: RootState) =>
  state.form.addListFormOpen;
export const selectedAddCardFormOpen = (state: RootState) =>
  state.form.addCardFormOpen;
export default formSlice.reducer;
