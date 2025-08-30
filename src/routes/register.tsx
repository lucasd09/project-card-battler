import { createFileRoute } from "@tanstack/react-router";
import { RegisterForm } from "@/components/register-form";

export const Route = createFileRoute("/register")({
  component: RouteComponent,
});

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

      <div className="relative z-10 w-[420px] rounded-2xl border-[6px] border-yellow-700 bg-[#3d2412] shadow-2xl p-6">
        <h2 className="text-center text-3xl font-bold text-[#f8e4b2] mb-6 tracking-wide">
          REGISTER
        </h2>
        <RegisterForm />
      </div>
    </div>
  );
}
