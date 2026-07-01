import { motion } from 'framer-motion'
import { Users, Video, DollarSign, Map } from 'lucide-react'

const CARDS = [
  {
    icon: Users,
    title: 'Slow Client Growth',
    body: "You rely on word of mouth and hope, but there's no system bringing new clients in consistently every month.",
  },
  {
    icon: Video,
    title: 'Posting Without Results',
    body: "You post videos and reels but they don't blow up. You're creating content but it's not converting to money.",
  },
  {
    icon: DollarSign,
    title: 'Undercharging for Your Work',
    body: 'You know you should raise your prices but you\'re scared to lose clients, so you stay stuck at the same rate.',
  },
  {
    icon: Map,
    title: 'No Clear Path Forward',
    body: "You want brand deals, a bigger following, more income, but nobody's shown you the roadmap to get there.",
  },
]

export default function PainPoints() {
  return (
    <section id="about" className="bg-[#0a0a0a]/60 px-5 py-16 md:px-8 md:py-20 lg:py-28">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-primary uppercase text-xs md:text-sm font-bold tracking-widest">
            Sound Familiar?
          </p>
          <h2 className="mt-3 font-heading uppercase text-3xl md:text-4xl lg:text-5xl text-white">
            Most Barbers Are <span className="text-primary">Stuck</span> in the Same Loop
          </h2>
          <p className="mt-5 text-muted text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            You're talented, but talent alone doesn't fill chairs or build a
            following. Here's what's keeping you from the next level:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
          {CARDS.map((card, i) => {
            const Icon = card.icon
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
                whileHover={{ y: -4 }}
                className="group bg-card/80 backdrop-blur-sm border border-border rounded-xl p-5 md:p-6 transition-all duration-150 hover:border-primary active:border-primary active:scale-[0.98] cursor-pointer"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 transition-colors duration-200 group-hover:bg-primary/20">
                  <Icon size={20} className="text-primary" />
                </div>
                <h3 className="font-heading uppercase text-sm md:text-xl tracking-wide text-white">
                  {card.title}
                </h3>
                <p className="mt-2 text-muted text-sm leading-relaxed">
                  {card.body}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
