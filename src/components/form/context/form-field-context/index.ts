import { createContext } from "react";
import { FormFieldContextValue } from "./types";

export const formFieldContext = createContext<FormFieldContextValue>(
  {} as FormFieldContextValue,
);
