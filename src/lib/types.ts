export type PublicRoute = {
  path: string;
  whenAuthenticated: "redirect" | "next";
};

export type OmitMerge<T, K extends object> = Omit<T, keyof K> & K;

export type SetState<T> = (value: T | ((oldValue: T) => T)) => void;

export type Nullable<T> = { [key in keyof T]: T[key] | null };

export type Breadcrumb = { name: string; path: string };


