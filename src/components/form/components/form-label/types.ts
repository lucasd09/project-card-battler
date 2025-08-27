import * as LabelPrimitive from "@radix-ui/react-label";
import { ComponentPropsWithoutRef, ComponentRef } from "react";

export type FormLabelProps = ComponentPropsWithoutRef<
  typeof LabelPrimitive.Root
>;
export type FormLabelRef = ComponentRef<typeof LabelPrimitive.Root>;
