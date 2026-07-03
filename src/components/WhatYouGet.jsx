import { motion } from 'framer-motion'
import { useState } from 'react'

const CARDS = [
  {
    number: '01',
    title: 'Social Media System',
    body: 'My exact content playbook for creating videos that go viral, attract clients, and position you as the go-to barber in your market.',
  },
  {
    number: '02',
    title: 'Pricing & Brand Strategy',
    body: "How to confidently raise your prices, communicate your value, and attract clients who don't flinch at premium rates.",
  },
  {
    number: '03',
    title: 'Client Attraction Blueprint',
    body: 'A repeatable system for filling your book with new clients every month, without relying on word of mouth alone.',
  },
  {
    number: '04',
    title: 'How to Monetize Your Social Media',
    body: 'How to generate money from your posts, find other sources of income beyond the chair, just like I did.',
  },
  {
    number: '05',
    title: 'SOB Community + Booking Software',
    body: 'First access and discounts to hands-on events and training for haircuts and content creation.',
  },
  {
    number: '06',
    title: 'Live Coaching Calls',
    body: 'Weekly group calls with me and the full coaching team, David, Nicole, Carlos, and Kenneth. Real answers to real questions.',
  },
]

export default function WhatYouGet() {
  const [activeCard, setActiveCard] = useState(null)

  return (
    <section id="what-you-get" className="bg-[#0a0a0a]/60 px-5 py-16 md:px-8 md:py-20 lg:py-28">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-primary uppercase text-xs md:text-sm font-bold tracking-widest">
            What You Get
          </p>
          <h2 className="mt-3 font-heading uppercase text-3xl md:text-4xl lg:text-5xl text-white">
            Everything You Need to <span className="text-primary">Level Up</span>
          </h2>
          <p className="mt-5 text-muted text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            The School of Barbering is not a YouTube channel. It's a proven
            system with real coaching and a community of barbers on the same
            mission.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {CARDS.map((card, i) => (
            <motion.div
              key={card.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
              whileHover={{ y: -4 }}
              onMouseEnter={() => setActiveCard(i)}
              onMouseLeave={() => setActiveCard(null)}
              onTouchStart={() => setActiveCard(i)}
              onTouchEnd={() => setTimeout(() => setActiveCard(null), 300)}
              className={`group bg-card/80 backdrop-blur-sm border rounded-xl p-5 md:p-6 transition-all duration-150 active:scale-[0.98] cursor-pointer ${
                activeCard === i
                  ? 'border-primary shadow-[0_0_20px_rgba(220,38,38,0.15)]'
                  : 'border-border'
              }`}
            >
              <span className="font-mono text-primary text-xs">
                {card.number}
              </span>
              <h3 className="mt-2 text-white font-bold text-base">
                {card.title}
              </h3>
              <p className="mt-2 text-[#A0A0A0] text-sm leading-relaxed">
                {card.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
