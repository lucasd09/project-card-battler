import z from "zod";
import { signInFormSchema } from "./consts";

export type LoginFormData = z.infer<typeof signInFormSchema>;
