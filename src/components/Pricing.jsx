import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const POPULAR_FEATURES = [
  "Ivan's Full Content Library, learn how to record, edit and post",
  'SOB Community (150+ active barbers)',
  'SOB OS + Free Booking Software',
  'Weekly group coaching content',
]

const MENTORSHIP_FEATURES = [
  'Hands on in person training with Ivan',
  '4 weekly calls with full coaching team',
  'Private communication channel with Ivan',
  'Full ELITE Course + Content Playbook',
  'Accelerated results, guaranteed focus',
]

export default function Pricing() {
  return (
    <section className="relative bg-[#0a0a0a]/60 px-5 py-16 md:px-8 md:py-20 lg:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#DC2626]/3 to-transparent pointer-events-none" />
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 md:mb-14">
          <p className="text-primary uppercase text-xs md:text-sm font-bold tracking-widest">
            Make Your Move
          </p>
          <h2 className="mt-3 font-heading uppercase text-3xl md:text-4xl lg:text-5xl text-white">
            Choose Your <span className="text-primary">Path</span>
          </h2>
          <p className="mt-5 text-muted text-sm md:text-base lg:text-lg max-w-xl mx-auto">
            Both options include the full SOB community and curriculum. Pick
            the level of support that fits where you're at.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3, margin: '-50px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="relative w-full md:flex-1 bg-card border border-primary rounded-2xl p-6 md:p-8 md:pt-10"
          >
            <span className="static md:absolute mb-4 md:mb-0 md:-top-3.5 md:left-1/2 md:-translate-x-1/2 block md:inline-block text-center bg-card border border-primary text-primary text-xs font-bold uppercase px-4 py-1 rounded-full whitespace-nowrap w-fit mx-auto md:w-auto">
              Most Popular
            </span>

            <p className="text-primary uppercase text-xs font-bold tracking-widest">
              🎯 Community + Curriculum
            </p>
            <div className="mt-4 flex items-baseline gap-2">
              <span className="font-heading text-white text-5xl md:text-6xl">$99</span>
            </div>
            <p className="mt-1 text-muted text-sm">per month · cancel anytime</p>

            <div className="mt-6 border-t border-border" />

            <ul className="mt-6 flex flex-col gap-3">
              {POPULAR_FEATURES.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-white text-sm">
                  <Check size={18} className="text-primary mt-0.5 shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>

            <motion.a
              href="#"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.15, ease: 'easeOut' }}
              className="mt-8 block min-h-[48px] flex items-center justify-center text-center bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-xl transition-colors"
            >
              START FOR $99/MONTH →
            </motion.a>
            <p className="mt-3 text-center text-primary text-sm">
              🔥 Spots are limited each month
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
            className="w-full md:flex-1 bg-card border border-border rounded-2xl p-6 md:p-8"
          >
            <p className="text-muted uppercase text-xs font-bold tracking-widest">
              🚀 Serious Barbers Only
            </p>
            <div className="mt-4">
              <span className="font-heading text-white text-3xl md:text-5xl">1:1 With Ivan</span>
            </div>
            <p className="mt-2 text-muted text-sm">
              6-month mentorship · Apply to qualify
            </p>

            <div className="mt-6 border-t border-border" />

            <ul className="mt-6 flex flex-col gap-3">
              {MENTORSHIP_FEATURES.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-white text-sm">
                  <Check size={18} className="text-primary mt-0.5 shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>

            <motion.a
              href="#"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.15, ease: 'easeOut' }}
              className="mt-8 block min-h-[48px] flex items-center justify-center text-center bg-transparent border border-white text-white font-bold py-4 rounded-xl hover:border-primary hover:text-primary transition-colors"
            >
              APPLY TO WORK WITH ME →
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
