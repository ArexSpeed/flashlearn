import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type sidebarState = {
  isOpen: boolean;
};

const initialState: sidebarState = {
  isOpen: false,
};

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    setIsOpenSidebar: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { setIsOpenSidebar } = sidebarSlice.actions;

export const selectedIsOpenSidebar = (state: RootState) => state.sidebar.isOpen;

export default sidebarSlice.reducer;
