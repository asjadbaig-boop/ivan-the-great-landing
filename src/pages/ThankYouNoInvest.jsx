import { motion } from 'framer-motion'
import { Play } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function ThankYouNoInvest() {
  return (
    <div className="bg-dark min-h-screen overflow-x-hidden">
      <Navbar />

      <section className="px-5 pt-28 pb-16 md:px-8 md:pt-40 md:pb-24">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="font-heading uppercase text-2xl md:text-4xl lg:text-5xl text-white"
          >
            Your Free Tutorial is Here
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="mt-4 text-muted text-sm md:text-lg"
          >
            Watch this short video on editing your barber content like a pro.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="mt-10 mx-4 sm:mx-auto sm:max-w-3xl"
          >
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-border bg-card">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary flex items-center justify-center"
                >
                  <Play size={28} className="text-white fill-white ml-0.5" />
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3, margin: '-50px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mt-12 text-muted italic text-sm md:text-base px-2"
          >
            Come back when you're ready to invest in your brand. We'll be
            here.
          </motion.p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
