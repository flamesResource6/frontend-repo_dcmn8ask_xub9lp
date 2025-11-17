import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react'
import { useRef, useState } from 'react'

const images = [
  // Placeholder scenic woodwork-style palettes
  { id: 1, color: 'from-amber-700 to-amber-500', title: 'Walnut cabinetry' },
  { id: 2, color: 'from-stone-500 to-stone-300', title: 'Concrete + oak island' },
  { id: 3, color: 'from-amber-600 to-amber-400', title: 'Decking restoration' },
  { id: 4, color: 'from-stone-600 to-stone-400', title: 'Staircase detail' },
  { id: 5, color: 'from-amber-800 to-amber-600', title: 'Timber framing' },
]

export default function Gallery() {
  const wrapRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: wrapRef, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-6%', '6%'])
  const [index, setIndex] = useState(0)

  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length)
  const next = () => setIndex((i) => (i + 1) % images.length)

  return (
    <section id="gallery" ref={wrapRef} className="relative py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-stone-800">
            <ImageIcon className="h-5 w-5 text-amber-700" />
            <h2 className="text-xl sm:text-2xl font-bold">Recent work</h2>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <button onClick={prev} className="inline-flex items-center justify-center rounded-full h-9 w-9 border border-stone-300 bg-white shadow-sm hover:shadow transition">
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button onClick={next} className="inline-flex items-center justify-center rounded-full h-9 w-9 border border-stone-300 bg-white shadow-sm hover:shadow transition">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Slider */}
        <div className="mt-6 relative">
          <motion.div style={{ y }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {images.map((img, i) => (
              <motion.div
                key={img.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className={`group relative aspect-[4/3] rounded-2xl overflow-hidden border border-stone-200 bg-gradient-to-br ${img.color}`}
              >
                {/* Simulated photo grid card; replace with real <img> src later */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_20%,white,transparent_60%),radial-gradient(circle_at_70%_80%,white,transparent_60%)]" />
                <div className="absolute inset-0 mix-blend-multiply bg-stone-900/10" />
                <div className="absolute inset-0 p-3 flex items-end">
                  <div className="rounded-lg bg-white/85 backdrop-blur px-3 py-1 text-xs font-semibold text-stone-800 shadow">
                    {img.title}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Mobile controls */}
          <div className="mt-4 sm:hidden flex items-center justify-center gap-3">
            <button onClick={prev} className="inline-flex items-center justify-center rounded-full h-10 w-10 border border-stone-300 bg-white shadow-sm">
              <ChevronLeft className="h-4 w-4" />
            </button>
            <div className="text-xs text-stone-500">{index + 1} / {images.length}</div>
            <button onClick={next} className="inline-flex items-center justify-center rounded-full h-10 w-10 border border-stone-300 bg-white shadow-sm">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
