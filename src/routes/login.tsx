import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { createFileRoute } from '@tanstack/react-router'


export const Route = createFileRoute('/login')({
  component: RouteComponent,
})

function RouteComponent() {
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


      <div className="relative z-10 w-[420px] rounded-2xl border-[6px] border-[#6b3c1d] bg-[#3d2411] shadow-2xl p-6">
        <h2 className="text-center text-3xl font-bold text-[#f8e4b2] mb-6 tracking-wide">
          LOGIN
        </h2>
        <form className="flex flex-col gap-5">

          <div className="bg-[#2a1a0f] border-2 border-[#5c3a23] rounded-lg px-3 py-2">
            <input
              placeholder="USERNAME"
              className="w-full bg-transparent text-[#f8e4b2] placeholder:text-[#c1a97d] border-none focus:outline-none"
            />
          </div>



          <div className="bg-[#2a1a0f] border-2 border-[#5c3a23] rounded-lg px-3 py-2">
            <input
              type="password"
              placeholder="PASSWORD"
              className="w-full bg-transparent text-[#f8e4b2] placeholder:text-[#c1a97d] border-none focus:outline-none"
            />
          </div>



          <button className="bg-gradient-to-b from-[#ff7a1c] to-[#d94c00] border-2 border-[#8c2f00] rounded-lg py-3 text-lg font-extrabold text-[#fff4d7] shadow-md hover:brightness-110">
            LOGIN
          </button>



          <p className="text-center text-sm text-[#f8e4b2] hover:underline cursor-pointer mt-2">
            Forgot Password?
          </p>
        </form>
      </div>
    </div>
  )
}
