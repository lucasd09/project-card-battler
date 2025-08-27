import { Skeleton } from "@/components/ui/skeleton";
import { uppercaseFirstLetter } from "@/lib/utils";
import { FieldValues, Path } from "react-hook-form";
import { FormControl } from "../form-control";
import { FormDescription } from "../form-description";
import { FormField } from "../form-field";
import { FormItem } from "../form-item";
import { FormLabel } from "../form-label";
import { FormMessage } from "../form-message";
import { FormInputBaseProps } from "./types";

export const FormInputBase = <TForm extends FieldValues>({
  form,
  name,
  description,
  label,
  isSkeleton,
  children,
}: FormInputBaseProps<TForm>) => {
  if (!form) {
    return children({});
  }

  return (
    <FormField
      name={name as Path<TForm>}
      control={form.control}
      render={(renderParams) => (
        <FormItem>
          <FormLabel>{label ?? uppercaseFirstLetter(name as string)}</FormLabel>

          {isSkeleton ? (
            <Skeleton className="w-full h-8" />
          ) : (
            <FormControl>{children(renderParams)}</FormControl>
          )}

          {!!description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
