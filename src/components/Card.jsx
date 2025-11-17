import { motion } from 'framer-motion'
import { Hammer, Phone, Mail, MapPin, Instagram, Globe } from 'lucide-react'

export default function Card() {
  const variants = {
    initial: { rotateX: 8, rotateY: -8, scale: 0.98, opacity: 0 },
    enter: { rotateX: 0, rotateY: 0, scale: 1, opacity: 1 },
  }

  return (
    <div className="px-4 py-16 sm:py-24">
      <motion.div
        initial="initial"
        animate="enter"
        transition={{ duration: 0.8, ease: 'easeOut' }}
        variants={variants}
        whileHover={{ rotateX: 4, rotateY: -4, scale: 1.01 }}
        className="mx-auto w-full max-w-3xl perspective"
      >
        <div className="relative grid grid-cols-1 md:grid-cols-[1.2fr,1fr] gap-6 md:gap-8 bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl border border-stone-200 overflow-hidden">
          {/* Left panel: identity */}
          <div className="relative p-8 md:p-10">
            <div className="absolute inset-0 pointer-events-none" aria-hidden>
              <div className="absolute -top-8 -left-8 h-40 w-40 rounded-full bg-amber-300/40 blur-2xl" />
              <div className="absolute -bottom-10 -right-10 h-48 w-48 rounded-full bg-orange-200/40 blur-2xl" />
            </div>

            <div className="flex items-center gap-3 text-amber-700">
              <Hammer className="h-6 w-6" />
              <span className="tracking-widest text-xs font-semibold uppercase">Carpentry</span>
            </div>

            <h1 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight text-stone-900">
              Oliver Woodwright
            </h1>
            <p className="mt-1 text-stone-600">Custom cabinetry • Renovations • Timber framing</p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href="tel:+1234567890"
                className="group flex items-center gap-3 rounded-xl border border-stone-200 bg-white/60 px-4 py-3 text-stone-800 shadow-sm hover:shadow-md transition-all"
              >
                <Phone className="h-4 w-4 text-amber-600 group-hover:scale-110 transition-transform" />
                <span className="font-medium">+1 (234) 567-890</span>
              </a>
              <a
                href="mailto:hello@woodwright.build"
                className="group flex items-center gap-3 rounded-xl border border-stone-200 bg-white/60 px-4 py-3 text-stone-800 shadow-sm hover:shadow-md transition-all"
              >
                <Mail className="h-4 w-4 text-amber-600 group-hover:scale-110 transition-transform" />
                <span className="font-medium">hello@woodwright.build</span>
              </a>
              <a
                href="https://maps.google.com?q=Woodwright+Carpentry"
                target="_blank" rel="noreferrer"
                className="group flex items-center gap-3 rounded-xl border border-stone-200 bg-white/60 px-4 py-3 text-stone-800 shadow-sm hover:shadow-md transition-all"
              >
                <MapPin className="h-4 w-4 text-amber-600 group-hover:scale-110 transition-transform" />
                <span className="font-medium">Based in Portland, OR</span>
              </a>
              <a
                href="https://instagram.com/woodwright.build"
                target="_blank" rel="noreferrer"
                className="group flex items-center gap-3 rounded-xl border border-stone-200 bg-white/60 px-4 py-3 text-stone-800 shadow-sm hover:shadow-md transition-all"
              >
                <Instagram className="h-4 w-4 text-amber-600 group-hover:scale-110 transition-transform" />
                <span className="font-medium">@woodwright.build</span>
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {['Cabinetry','Decking','Trim','Flooring','Restoration','Design'].map((tag) => (
                <span key={tag} className="inline-flex items-center rounded-full bg-amber-100 text-amber-800 px-3 py-1 text-xs font-semibold">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right panel: hero visual */}
          <div className="relative p-8 md:p-10 bg-gradient-to-b from-stone-50 to-amber-50 border-l border-stone-200">
            <div className="relative h-full flex flex-col">
              <div className="flex items-center gap-2 text-stone-600">
                <Globe className="h-4 w-4" />
                <span className="text-sm">woodwright.build</span>
              </div>

              <div className="mt-6 relative flex-1 rounded-2xl overflow-hidden border border-stone-200 bg-white shadow-inner">
                {/* Animated hero mockup */}
                <motion.div
                  className="absolute inset-0"
                  initial={{ clipPath: 'inset(0 100% 0 0)' }}
                  animate={{ clipPath: 'inset(0 0% 0 0)' }}
                  transition={{ duration: 1.2, ease: 'easeOut' }}
                >
                  <div className="h-full w-full grid grid-rows-3">
                    <div className="bg-amber-600/90" />
                    <div className="bg-amber-500/80" />
                    <div className="bg-amber-400/80" />
                  </div>
                </motion.div>

                {/* Floating chips */}
                <motion.div
                  className="absolute top-4 left-4"
                  animate={{ y: [0, -4, 0], x: [0, 2, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <div className="rounded-xl bg-white/90 px-3 py-1 text-[11px] font-semibold text-stone-700 shadow">
                    Handcrafted quality
                  </div>
                </motion.div>
                <motion.div
                  className="absolute bottom-4 right-4"
                  animate={{ y: [0, 6, 0], x: [0, -3, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <div className="rounded-xl bg-white/90 px-3 py-1 text-[11px] font-semibold text-stone-700 shadow">
                    Free estimates
                  </div>
                </motion.div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <a
                  href="https://woodwright.build/portfolio"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-amber-600 text-white px-4 py-3 font-semibold shadow hover:bg-amber-700 transition-colors"
                >
                  <Hammer className="h-4 w-4" />
                  Portfolio
                </a>
                <a
                  href="https://woodwright.build/contact"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-xl border border-stone-300 bg-white px-4 py-3 font-semibold text-stone-800 shadow-sm hover:shadow transition"
                >
                  Get a quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Footer */}
      <div className="mt-10 text-center text-xs text-stone-500">
        © {new Date().getFullYear()} Woodwright Carpentry. Licensed & Insured.
      </div>
    </div>
  )
}
