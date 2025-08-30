import { ComponentProps } from "react";
import { FieldValues } from "react-hook-form";
import { InputDefaultProps } from "@/components/form/types";
import { OmitMerge } from "@/lib/types";

export type InputProps<TForm extends FieldValues> = OmitMerge<
  ComponentProps<"input">,
  InputDefaultProps<TForm>
> & {
  label?: string;
  labelClassName?: string;
};

export type InputRef = HTMLInputElement;
