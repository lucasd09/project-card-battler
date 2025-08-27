import {
  Controller,
  ControllerProps,
  FieldPath,
  FieldValues,
} from "react-hook-form";
import { formFieldContext } from "../../context/form-field-context";

export const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(
  props: ControllerProps<TFieldValues, TName>,
) => (
  <formFieldContext.Provider value={{ name: props.name }}>
    <Controller {...props} />
  </formFieldContext.Provider>
);
