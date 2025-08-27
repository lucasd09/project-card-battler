import { zodResolver } from "@hookform/resolvers/zod";
import { DefaultValues, useForm } from "react-hook-form";
import { ZodSchema, z } from "zod";
import { UseZodFormOptions } from "./types";
import { zodErrorMap } from "./zod-error-map";

z.setErrorMap(zodErrorMap);

export const useZodForm = <TSchema extends ZodSchema>({
  schema,
  defaultValues,
}: UseZodFormOptions<TSchema>) => {
  return useForm<z.infer<TSchema>>({
    resolver: zodResolver(schema),
    defaultValues: defaultValues as DefaultValues<TSchema>,
  });
};
