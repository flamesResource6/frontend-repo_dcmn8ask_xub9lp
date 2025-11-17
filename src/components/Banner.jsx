import { motion, useScroll, useTransform } from 'framer-motion'
import { Hammer, Phone, ArrowDown, Sparkles } from 'lucide-react'
import { useRef } from 'react'

export default function Banner() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })

  // Parallax transforms
  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '-20%'])
  const yMid = useTransform(scrollYProgress, [0, 1], ['0%', '-12%'])
  const yFg = useTransform(scrollYProgress, [0, 1], ['0%', '-6%'])
  const scaleTitle = useTransform(scrollYProgress, [0, 1], [1, 0.95])
  const fade = useTransform(scrollYProgress, [0, 1], [1, 0])

  return (
    <section ref={ref} className="relative overflow-hidden">
      {/* Height gives room for parallax */}
      <div className="relative h-[70vh] sm:h-[78vh] md:h-[85vh]">
        {/* Background gradient wood tone */}
        <motion.div style={{ y: yBg }} className="absolute inset-0 -z-10 bg-gradient-to-b from-amber-100 via-amber-50 to-stone-50" />

        {/* Soft blobs & textured rings */}
        <motion.div style={{ y: yMid }} className="absolute -top-24 -left-24 h-[28rem] w-[28rem] rounded-full bg-amber-300/25 blur-3xl" />
        <motion.div style={{ y: yMid }} className="absolute -bottom-20 -right-20 h-[26rem] w-[26rem] rounded-full bg-orange-200/25 blur-3xl" />

        {/* Concentric rings for craftsmanship motif */}
        <motion.div style={{ y: yMid }} aria-hidden className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="h-96 w-96 rounded-full border border-amber-300/30" />
          <div className="absolute inset-6 rounded-full border border-amber-300/25" />
          <div className="absolute inset-12 rounded-full border border-amber-300/20" />
        </motion.div>

        {/* Foreground chips */}
        <motion.div style={{ y: yFg }} className="absolute top-10 left-6 sm:left-12">
          <div className="rounded-full bg-white/80 backdrop-blur px-3 py-1 text-[11px] font-semibold text-stone-700 shadow border border-stone-200 inline-flex items-center gap-1">
            <Sparkles className="h-3.5 w-3.5 text-amber-600" />
            Fine joinery • Built to last
          </div>
        </motion.div>

        {/* Content */}
        <div className="relative h-full mx-auto max-w-6xl px-4 flex items-center">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center w-full">
            <motion.div style={{ scale: scaleTitle, opacity: fade }} className="">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur px-3 py-1 border border-stone-200 text-stone-700 shadow-sm">
                <Hammer className="h-4 w-4 text-amber-700" />
                Bespoke Carpentry Studio
              </div>
              <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-stone-900">
                Timeless woodwork. Modern precision.
              </h1>
              <p className="mt-3 max-w-xl text-stone-600">
                Custom cabinetry, renovation, and structural woodwork crafted with care. From sketch to installation, we handle every detail.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#gallery" className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-600 text-white px-5 py-3 font-semibold shadow hover:bg-amber-700 transition-colors">
                  View gallery
                </a>
                <a href="tel:+1234567890" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white border border-stone-300 text-stone-900 px-5 py-3 font-semibold shadow-sm hover:shadow transition">
                  <Phone className="h-4 w-4 text-amber-700" />
                  Call now
                </a>
              </div>
            </motion.div>

            {/* Mock hero with layered parallax */}
            <div className="relative hidden md:block">
              <motion.div style={{ y: yMid }} className="relative h-[360px] rounded-3xl border border-stone-200 bg-white/70 backdrop-blur overflow-hidden shadow-2xl">
                {/* Layered boards */}
                <motion.div
                  style={{ y: yFg }}
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="absolute left-0 right-0 top-0 h-24 bg-gradient-to-b from-amber-600/90 to-amber-500/80" />
                  <div className="absolute left-0 right-0 top-24 h-24 bg-gradient-to-b from-amber-500/90 to-amber-400/80" />
                  <div className="absolute left-0 right-0 top-48 h-24 bg-gradient-to-b from-amber-400/90 to-amber-300/80" />
                  <div className="absolute left-0 right-0 top-72 h-24 bg-gradient-to-b from-amber-300/90 to-amber-200/80" />
                </motion.div>

                {/* Floating badges */}
                <motion.div
                  className="absolute top-6 left-6"
                  animate={{ y: [0, -6, 0], x: [0, 3, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <div className="rounded-xl bg-white/90 px-3 py-1 text-[11px] font-semibold text-stone-700 shadow">
                    Solid hardwoods
                  </div>
                </motion.div>
                <motion.div
                  className="absolute bottom-6 right-6"
                  animate={{ y: [0, 8, 0], x: [0, -4, 0] }}
                  transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <div className="rounded-xl bg-white/90 px-3 py-1 text-[11px] font-semibold text-stone-700 shadow">
                    Precision joinery
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <motion.div
          style={{ opacity: fade }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center text-stone-600"
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        >
          <ArrowDown className="h-5 w-5" />
          <span className="text-xs">Scroll</span>
        </motion.div>
      </div>
    </section>
  )
}
