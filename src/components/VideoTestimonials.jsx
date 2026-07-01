import { motion } from 'framer-motion'
import { Play } from 'lucide-react'

const VIDEOS = [
  'From 4k per month to 15k per month',
  'From $6k to $20k per month',
  '$4k per month to $25k per month',
  'From burnt out to $100 per cut',
]

export default function VideoTestimonials() {
  return (
    <section className="bg-[#0a0a0a]/60 px-5 py-16 md:px-8 md:py-20 lg:py-28">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-primary uppercase text-xs md:text-sm font-bold tracking-widest">
            Real Results
          </p>
          <h2 className="mt-3 font-heading uppercase text-3xl md:text-4xl lg:text-5xl text-white">
            Hear It From the Barbers Themselves
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {VIDEOS.map((title, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
              whileHover={{ boxShadow: '0 0 24px rgba(220,38,38,0.25)' }}
              className="bg-card/80 backdrop-blur-sm rounded-xl overflow-hidden group active:scale-[0.98] transition-transform duration-150 cursor-pointer"
            >
              <div className="relative aspect-video bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary flex items-center justify-center"
                >
                  <Play size={22} className="text-white fill-white ml-0.5" />
                </motion.div>
              </div>
              <p className="px-4 py-4 text-white font-bold text-sm md:text-base">{title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
