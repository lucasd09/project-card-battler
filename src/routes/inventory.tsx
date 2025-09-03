import { InventoryContent } from '@/components/inventory-content';
import { DataCharacter } from '@/components/unit-card/types';
import { getUserCharacter } from '@/fn/get-user-character';
import { requireAuth } from '@/fn/require-auth';
import { createFileRoute, redirect } from '@tanstack/react-router'
import { motion } from 'framer-motion'

export const Route = createFileRoute('/inventory')({
  component: RouteComponent,
  beforeLoad: async () => {
    const data = await requireAuth();

    if (!data) {
      throw redirect({ to: '/login' })
    }

    return data;
  },
  loader: async () => {

    const data = await getUserCharacter()

    return data

  }
})

function RouteComponent() {
  const data = Route.useLoaderData()

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-tr from-[#5c3317] via-[#4a2c1a] to-[#2e1a0e]text-foreground">

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 12 }).map((_, index) => (
          <motion.div
            key={index}
            className="absolute w-24 h-36 bg-card/20 border border-border rounded-xl shadow-lg"
            initial={{ y: "100vh", x: Math.random() * window.innerWidth, opacity: 0 }}
            animate={{
              y: ["100vh", "-20vh"],
              opacity: [0, 0.6, 0],
              rotate: [0, Math.random() * 45 - 22],
            }}
            transition={{
              duration: 12 + Math.random() * 8,
              repeat: Infinity,
              delay: Math.random() * 10,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      <InventoryContent data={data as DataCharacter[]} />
    </div>
  )
}
