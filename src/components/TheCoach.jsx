import { motion } from 'framer-motion'
import { Camera } from 'lucide-react'

const SOCIALS = ['TikTok', 'Instagram', 'YouTube', 'Facebook']

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' },
  }),
}

export default function TheCoach() {
  return (
    <section className="relative bg-[#0a0a0a]/70 px-5 py-16 md:px-8 md:py-20 lg:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#DC2626]/3 to-transparent pointer-events-none" />
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="text-white uppercase text-xs md:text-sm font-bold tracking-widest text-center lg:text-left"
        >
          The Coach
        </motion.p>

        <div className="mt-8 flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3, margin: '-50px' }}
            variants={fadeUp}
            className="w-full aspect-[4/3] lg:aspect-[3/4] rounded-xl bg-[#1a1a1a] border border-border flex flex-col items-center justify-center gap-3 max-w-sm mx-auto lg:mx-0 lg:w-1/2"
          >
            <Camera size={36} className="text-muted" />
            <span className="text-muted text-sm">Photo</span>
          </motion.div>

          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3, margin: '-50px' }}
            variants={fadeUp}
            className="w-full lg:w-1/2"
          >
            <p className="text-primary uppercase text-sm font-bold tracking-wide">
              Ivan The Great, Dallas, TX
            </p>

            <p className="mt-5 text-white text-base leading-relaxed">
              <strong>I started at $10 a cut in Wichita, Kansas.</strong> Small
              city. Low population. Not exactly the barbering capital of the
              world.
            </p>

            <p className="mt-5 text-white text-base leading-relaxed">
              I didn't wait for the perfect environment. I built my brand,
              raised my prices to $150+, grew a massive social following, and
              eventually relocated to Dallas, starting from scratch, zero
              clients, and rebuilt faster the second time because I had the
              system.
            </p>

            <p className="mt-5 text-white text-base leading-relaxed">
              <strong>Now I have 400K+ followers on TikTok, 200K+ on Instagram,</strong>{' '}
              consistent brand deals, and{' '}
              <strong>I barely need to cut hair anymore. The brand does the work.</strong>{' '}
              That's what I teach.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {SOCIALS.map((social) => (
                <a
                  key={social}
                  href="#"
                  className="px-4 py-2 rounded-full border border-[#333] text-white text-sm font-medium hover:border-primary hover:text-primary active:border-primary active:text-primary transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
