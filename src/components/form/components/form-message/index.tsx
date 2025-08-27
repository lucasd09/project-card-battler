import { cn } from "@/lib/utils";
import { forwardRef } from "react";
import { useFormField } from "../../context/form-field-context/hooks/use-form-field";
import { FormMessageProps, FormMessageRef } from "./types";

export const FormMessage = forwardRef<FormMessageRef, FormMessageProps>(
  ({ className, children, ...props }, ref) => {
    const { error, formMessageId } = useFormField();
    const body = error ? String(error?.message) : children;

    return (
      <p
        ref={ref}
        id={formMessageId}
        className={cn(
          "text-[0.8rem] text-destructive font-semibold h-5",
          className,
        )}
        {...props}
      >
        {body}
      </p>
    );
  },
);
FormMessage.displayName = "FormMessage";
