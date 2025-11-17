import { Menu, Hammer } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Header() {
  return (
    <header className="pt-6 px-4">
      <div className="mx-auto max-w-5xl flex items-center justify-between">
        <motion.a
          href="#"
          initial={{ y: -12, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur px-3 py-2 text-stone-800 shadow-sm border border-stone-200"
        >
          <Hammer className="h-4 w-4 text-amber-700" />
          <span className="text-sm font-semibold">Woodwright</span>
        </motion.a>

        <motion.button
          initial={{ y: -12, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur px-3 py-2 text-stone-800 shadow-sm border border-stone-200"
        >
          <Menu className="h-4 w-4" />
          <span className="text-sm font-medium">Menu</span>
        </motion.button>
      </div>
    </header>
  )
}
