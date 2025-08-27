import { Nullable } from "@/lib/types";
import { ZodSchema, z } from "zod";

export type UseZodFormOptions<TSchema extends ZodSchema> = {
  schema: TSchema;
  defaultValues?: Nullable<Partial<z.infer<TSchema>>>;
};
