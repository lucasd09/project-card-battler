import { useContext } from "react";
import { useFormContext } from "react-hook-form";
import { formItemContext } from "../../../form-item-context";
import { formFieldContext } from "../..";

export const useFormField = () => {
  const fieldContext = useContext(formFieldContext);
  const itemContext = useContext(formItemContext);
  const { getFieldState, formState } = useFormContext();

  const fieldState = getFieldState(fieldContext.name, formState);

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>");
  }

  const { id } = itemContext;

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  };
};
