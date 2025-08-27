import { cn } from "@/lib/utils";
import { FieldValues, FormProvider } from "react-hook-form";
import { FormProps } from "./types";

export const Form = <TForm extends FieldValues>({
  form,
  children,
  onSubmit,
  onError,
  className,
  ...props
}: FormProps<TForm>) => {
  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit, onError)}
        className={cn("space-y-2", className)}
        {...props}
      >
        {children}
      </form>
    </FormProvider>
  );
};
