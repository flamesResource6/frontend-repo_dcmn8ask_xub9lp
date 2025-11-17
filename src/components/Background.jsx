import { motion } from 'framer-motion'

function Grain() {
  // Subtle animated grain overlay using SVG noise
  return (
    <svg className="pointer-events-none fixed inset-0 opacity-[0.06] mix-blend-multiply" aria-hidden>
      <filter id="noiseFilter">
        <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#noiseFilter)" />
    </svg>
  )
}

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Warm gradient base */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-stone-50 to-amber-100" />

      {/* Soft animated blobs */}
      <motion.div
        className="absolute -top-32 -left-24 h-80 w-80 rounded-full bg-amber-300/30 blur-3xl"
        animate={{ y: [0, 20, -10, 0], x: [0, 10, 0, -10] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-24 -right-24 h-[28rem] w-[28rem] rounded-full bg-orange-200/30 blur-3xl"
        animate={{ y: [0, -20, 10, 0], x: [0, -10, 0, 10] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Subtle grain noise overlay */}
      <Grain />
    </div>
  )
}
