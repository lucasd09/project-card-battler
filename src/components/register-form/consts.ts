import z from "zod";

export const registerFormSchema = z
  .object({
    name: z.string().min(3, "Nome muito curto"),
    email: z.string().email(),
    password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
  });
