import { FC, forwardRef, useId } from "react";
import { cn } from "@/lib/utils";
import { formItemContext } from "../../context/form-item-context";
import { FormItemProps, FormItemRef } from "./types";

export const FormItem = forwardRef<FormItemRef, FormItemProps>(
  ({ className, ...props }, ref) => {
    const id = useId();

    return (
      <formItemContext.Provider value={{ id }}>
        <div
          ref={ref}
          className={cn(
            "space-y-2 p-px grow w-full overflow-hidden",
            className,
          )}
          {...props}
        />
      </formItemContext.Provider>
    );
  },
);
(FormItem as FC).displayName = "FormItem";
