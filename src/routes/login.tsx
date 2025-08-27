import { Form } from '@/components/form'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useZodForm } from '@/lib/hooks/use-zod-form'
import { createFileRoute, Link } from '@tanstack/react-router'
import { z } from 'zod'


export const Route = createFileRoute('/login')({
  component: RouteComponent,
})

function RouteComponent() {

  const signInFormSchema = z.object({
    email: z.string().email(),
    password: z.string(),

  });

  const form = useZodForm({ schema: signInFormSchema });

  const handleSubmit = (data: z.infer<typeof signInFormSchema>) => {
    console.log(data)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">

      <img
        src="fundo.png"
        alt="background"
        className="absolute inset-0 w-full h-full object-fill opacity-80"
      />

      <div className="relative z-10 flex flex-col items-center">
        <img
          src="logo.png"
          alt="Card Battle Logo"
          className="w-[250px] h-auto"
        />
      </div>

      <div className="relative z-10 w-[420px] rounded-2xl border-[6px] border-yellow-700 bg-[#3d2412] shadow-2xl p-6">
        <h2 className="text-center text-3xl font-bold text-[#f8e4b2] mb-6 tracking-wide">
          LOGIN
        </h2>
        <Form
          form={form}
          onSubmit={handleSubmit}
          className='flex flex-col'
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
            className='bg-gradient-to-b from-[#ff7a1c] to-[#d94c00] border-2 border-[#8c2f00] rounded-lg py-3 text-lg font-extrabold text-[#fff4d7] shadow-md hover:brightness-110'
            type='submit'
          >
            LOGIN
          </Button>

          <p className="text-center text-sm text-[#f8e4b2] mt-2">
            Não tem conta?{' '}
            <Link
              to="/register"
              className="hover:underline text-yellow-300 cursor-pointer"
            >
              Registrar
            </Link>
          </p>

        </Form>

      </div>
    </div>
  )
}
