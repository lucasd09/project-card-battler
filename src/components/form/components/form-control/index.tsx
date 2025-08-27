import { Slot } from "@radix-ui/react-slot";
import { forwardRef } from "react";
import { useFormField } from "../../context/form-field-context/hooks/use-form-field";
import { FormControlProps, FormControlRef } from "./types";

export const FormControl = forwardRef<FormControlRef, FormControlProps>(
  (props, ref) => {
    const { error, formItemId, formDescriptionId, formMessageId } =
      useFormField();

    return (
      <Slot
        ref={ref}
        id={formItemId}
        aria-describedby={
          !error ? formDescriptionId : `${formDescriptionId} ${formMessageId}`
        }
        aria-invalid={!!error}
        {...props}
      />
    );
  },
);
FormControl.displayName = "FormControl";
