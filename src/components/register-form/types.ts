import z from "zod";
import { registerFormSchema } from "./consts";

export type RegisterFormData = z.infer<typeof registerFormSchema>;
