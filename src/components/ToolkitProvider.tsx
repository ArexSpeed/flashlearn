"use client";

import { Provider } from "react-redux";
import { store } from "@/context/store";

export function ToolkitProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
