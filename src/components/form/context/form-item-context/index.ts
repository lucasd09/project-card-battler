import { createContext } from "react";
import { FormItemContextValue } from "./types";

export const formItemContext = createContext<FormItemContextValue>(
  {} as FormItemContextValue,
);
