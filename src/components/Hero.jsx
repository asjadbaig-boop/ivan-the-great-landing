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
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 px-5 md:pt-32 md:pb-24 md:px-8 overflow-hidden">
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1920&q=80&auto=format&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#1a0a0a',
        }}
      />
      <div className="absolute inset-0 bg-[#0a0a0a]/80" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0a0a0a] to-transparent" />

      <div className="relative z-10 flex flex-col items-center text-center w-full max-w-4xl mx-auto">
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

        {/* Video Placeholder */}
        <div className="w-full max-w-3xl mx-auto mt-10 px-4">
          <div className="relative w-full rounded-2xl overflow-hidden bg-[#111111]/80 backdrop-blur-sm border border-[#1f1f1f]" style={{ aspectRatio: '16/9' }}>

            {/* Play button centered */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#DC2626] flex items-center justify-center cursor-pointer hover:bg-[#b91c1c] hover:scale-110 active:scale-95 transition-all duration-200 shadow-lg shadow-[#DC2626]/30">
                <Play className="w-7 h-7 md:w-8 md:h-8 text-white ml-1" fill="white" />
              </div>
            </div>

            {/* Video label */}
            <div className="absolute bottom-4 left-0 right-0 text-center">
              <span className="text-[#A0A0A0] text-sm">Watch Ivan's Story</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
