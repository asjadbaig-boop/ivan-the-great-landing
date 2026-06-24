import { motion } from 'framer-motion'
import { Play } from 'lucide-react'

const lineVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.15 * i, ease: 'easeOut' },
  }),
}

const AVATAR_INITIALS = ['JD', 'MK', 'TR']

export default function Hero() {
  return (
    <section className="relative pt-24 pb-16 px-5 md:pt-32 md:pb-24 md:px-8 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#1a0a0a] via-dark to-dark" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/20 rounded-full blur-[120px] -z-10" />

      <div className="max-w-4xl mx-auto text-center">
        <h1 className="font-heading uppercase text-4xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight tracking-tight text-white">
          <motion.span
            className="block"
            custom={0}
            initial="hidden"
            animate="visible"
            variants={lineVariants}
          >
            Stop <span className="text-primary">Struggling</span> for Clients.
          </motion.span>
          <motion.span
            className="block"
            custom={1}
            initial="hidden"
            animate="visible"
            variants={lineVariants}
          >
            Start Building a <span className="text-primary">Brand</span> That
            Pays You.
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
          className="mt-6 text-base md:text-lg xl:text-xl font-medium text-white max-w-2xl mx-auto px-2"
        >
          I went from $35 cuts in Wichita to $150+ cuts, brand deals and 500K+
          followers - without moving to a big city first. I'll show you
          exactly how.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65, ease: 'easeOut' }}
          className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3"
        >
          <div className="flex -space-x-3">
            {AVATAR_INITIALS.map((initials, i) => (
              <div
                key={initials}
                className="w-7 h-7 sm:w-9 sm:h-9 rounded-full border-2 border-dark bg-gradient-to-br from-primary to-[#7f1d1d] flex items-center justify-center text-[10px] sm:text-xs font-bold text-white"
                style={{ zIndex: AVATAR_INITIALS.length - i }}
              >
                {initials}
              </div>
            ))}
          </div>
          <p className="text-sm text-muted">
            Joined by <span className="text-primary font-semibold">200+ barbers</span>{' '}
            leveling up their brand
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8, ease: 'easeOut' }}
          className="mt-10 mx-4 sm:mx-auto sm:max-w-2xl"
        >
          <div className="relative aspect-video rounded-2xl overflow-hidden border border-border bg-card group cursor-pointer active:scale-[0.99] transition-transform duration-150">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.15 }}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/40"
              >
                <Play size={28} className="text-white fill-white ml-0.5" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
