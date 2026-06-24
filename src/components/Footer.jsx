import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="px-5 py-12 md:px-8 md:py-16 border-t border-border flex flex-col items-center text-center">
      <span className="font-heading uppercase text-lg md:text-2xl text-white">
        IVAN THE GREAT
      </span>
      <p className="mt-2 text-muted text-sm">Building barbers into brands.</p>

      <motion.a
        href="#playbook"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        transition={{ duration: 0.15, ease: 'easeOut' }}
        className="w-full max-w-xs sm:w-auto mt-6 min-h-[48px] flex items-center justify-center bg-primary hover:bg-primary-dark text-white text-sm font-bold px-6 py-3 rounded-full transition-colors"
      >
        JOIN FOR $99/MO →
      </motion.a>

      <p className="mt-6 text-xs text-muted">
        © 2025 Ivan The Great. All rights reserved.
      </p>
    </footer>
  )
}
