import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import listReducer from "./slices/listSlice";
import sidebarReducer from "./slices/sidebarSlice";
import formReducer from "./slices/formSlice";
import themeReducer from "./slices/themeSlice";

export const store = configureStore({
  reducer: {
    list: listReducer,
    sidebar: sidebarReducer,
    form: formReducer,
    theme: themeReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
