import { Link } from "@tanstack/react-router";
import { Form } from "@/components/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useZodForm } from "@/lib/hooks/use-zod-form";
import { LoginFormData } from "./types";
import { signInFormSchema } from "./consts";
import { authClient } from "@/lib/auth-client";
import { BASE_URL } from "@/lib/utils";

export const LoginForm = () => {
  const form = useZodForm({ schema: signInFormSchema });

  const handleSubmit = async (formData: LoginFormData) => {
    const { data, error } = await authClient.signIn.email({ email: formData.email, password: formData.password, callbackURL: `${BASE_URL}/` });

    if (error) {
      console.log(error);
      return;
    }
  };

  return (
    <Form
      form={form}
      onSubmit={handleSubmit}
      className="flex flex-col"
    >
      <Input
        name="email"
        type="email"
        form={form}
        placeholder="E-mail"
        className="bg-[#2a1a0f] border-2 border-[#5c3a23] text-[#f8e4b2] placeholder:text-[#c1a97d] focus:outline-none"
        labelClassName="text-white"
      />
      <Input
        name="password"
        type="password"
        form={form}
        placeholder="Senha"
        className="bg-[#2a1a0f] border-2 border-[#5c3a23] text-[#f8e4b2] placeholder:text-[#c1a97d] focus:outline-none"
        labelClassName="text-white"
      />

      <Button
        className="bg-gradient-to-b from-[#ff7a1c] to-[#d94c00] border-2 border-[#8c2f00] rounded-lg py-3 text-lg font-extrabold text-[#fff4d7] shadow-md hover:brightness-110"
        type="submit"
      >
        LOGIN
      </Button>

      <p className="text-center text-sm text-[#f8e4b2] mt-2">
        Não tem conta?{" "}
        <Link
          to="/register"
          className="hover:underline text-yellow-300 cursor-pointer"
        >
          Registrar
        </Link>
      </p>
    </Form>
  )
}