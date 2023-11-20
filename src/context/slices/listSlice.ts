import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type listState = {
  categoryId: number;
  setData: {
    id: number;
    name: string;
  };
  listId: number;
};

const initialState: listState = {
  categoryId: 1,
  setData: {
    id: 1,
    name: "set",
  },
  listId: 1,
};

export const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    setCategoryId: (state, action: PayloadAction<number>) => {
      state.categoryId = action.payload;
    },
    setSetData: (
      state,
      action: PayloadAction<{
        id: number;
        name: string;
      }>
    ) => {
      state.setData = action.payload;
    },
    setListId: (state, action: PayloadAction<number>) => {
      state.listId = action.payload;
    },
  },
});

export const { setCategoryId, setSetData, setListId } = listSlice.actions;

export const selectedCategoryId = (state: RootState) => state.list.categoryId;
export const selectedSetData = (state: RootState) => state.list.setData;
export const selectedListId = (state: RootState) => state.list.listId;

export default listSlice.reducer;
