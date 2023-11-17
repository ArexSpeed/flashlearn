import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type listState = {
  categoryId: number;
  setId: number;
  listId: number;
};

const initialState: listState = {
  categoryId: 1,
  setId: 1,
  listId: 1,
};

export const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    setCategoryId: (state, action: PayloadAction<number>) => {
      state.categoryId = action.payload;
    },
    setSetId: (state, action: PayloadAction<number>) => {
      state.setId = action.payload;
    },
    setListId: (state, action: PayloadAction<number>) => {
      state.listId = action.payload;
    },
  },
});

export const { setCategoryId, setSetId, setListId } = listSlice.actions;

export const selectedCategoryId = (state: RootState) => state.list.categoryId;
export const selectedSetId = (state: RootState) => state.list.setId;
export const selectedListId = (state: RootState) => state.list.listId;

export default listSlice.reducer;
