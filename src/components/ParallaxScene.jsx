import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

// Decorative parallax scene separator with subtle depth
export default function ParallaxScene() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y1 = useTransform(scrollYProgress, [0, 1], ['-10%', '10%'])
  const y2 = useTransform(scrollYProgress, [0, 1], ['-6%', '6%'])
  const y3 = useTransform(scrollYProgress, [0, 1], ['-3%', '3%'])

  return (
    <section ref={ref} className="relative py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="relative h-40 sm:h-48 rounded-3xl overflow-hidden border border-stone-200 bg-amber-50">
          <motion.div style={{ y: y1 }} className="absolute -left-10 -bottom-6 h-40 w-40 rounded-full bg-amber-300/40 blur-2xl" />
          <motion.div style={{ y: y2 }} className="absolute left-10 -top-8 h-28 w-28 rounded-full bg-orange-200/40 blur-2xl" />
          <motion.div style={{ y: y3 }} className="absolute right-10 bottom-4 h-24 w-24 rounded-full bg-amber-200/40 blur-xl" />

          <div className="relative h-full flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <p className="text-sm font-semibold tracking-wide text-amber-800/90">Over 10 years crafting bespoke interiors</p>
              <p className="text-xs text-stone-600 mt-1">Local, licensed, and insured • Transparent pricing • Clean, respectful on-site work</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
