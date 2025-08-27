import { HTMLAttributes } from "react";
import { FieldErrors, FieldValues, UseFormReturn } from "react-hook-form";

export type InputDefaultProps<TForm extends FieldValues> = {
  label?: string;
  name: NoInfer<keyof TForm>;
  description?: string;
  form?: UseFormReturn<TForm>;
  isSkeleton?: boolean;
};

type FormCustomProps<TForm extends FieldValues> = {
  form: UseFormReturn<TForm>;
  onSubmit: (data: TForm) => void;
  onError?: (errors: FieldErrors<TForm>) => void;
};

export type FormProps<TForm extends FieldValues> = Omit<
  HTMLAttributes<HTMLFormElement>,
  keyof FormCustomProps<TForm>
> &
  FormCustomProps<TForm>;
