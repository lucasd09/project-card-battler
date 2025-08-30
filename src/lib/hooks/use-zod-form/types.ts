import { ZodSchema, z } from "zod";
import { Nullable } from "@/lib/types";

export type UseZodFormOptions<TSchema extends ZodSchema> = {
  schema: TSchema;
  defaultValues?: Nullable<Partial<z.infer<TSchema>>>;
};
