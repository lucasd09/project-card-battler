import { Button } from '@/components/ui/button'
import { createFileRoute, Link } from '@tanstack/react-router'
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { motion } from 'framer-motion'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-primary-800 via-primary-700 to-secondary-600 text-foreground">

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

      <motion.img
        src="logo.png"
        alt="Card Battle Logo"
        className="h-auto w-64 object-fill"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />


      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.7 }}
      >
        <Card className="bg-card/80 backdrop-blur-md shadow-xl rounded-2xl p-6 w-72 space-y-4 text-center">
          <CardContent className="flex flex-col gap-4">
            <motion.div whileHover={{ scale: 1.05 }}>
              <Button asChild className="w-full text-lg">
                <Link to="/login">Jogar</Link>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }}>
              <Button asChild variant="secondary" className="w-full text-lg">
                <Link to="/">Loja</Link>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }}>
              <Button asChild variant="secondary" className="w-full text-lg">
                <Link to="/">Arena</Link>
              </Button>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>


      <motion.p
        className="absolute bottom-4 text-sm text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        © 2025 Card Battler
      </motion.p>
    </div>
  )
}
