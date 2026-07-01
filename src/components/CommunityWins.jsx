import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const testimonials = [
  {
    image: '/testimonials/ivan1.jpg',
    name: 'Alexis Hernandez Martinez',
    win: 'Price Raise, $45 to $60 per cut',
  },
  {
    image: '/testimonials/ivan2.jpeg',
    name: 'Jay Soto',
    win: 'Jan. Win, 85% booked all month',
  },
  {
    image: '/testimonials/ivan3.jpg',
    name: 'Kevin Kilby',
    win: '5 months in the program, 100% booked',
  },
  {
    image: '/testimonials/ivan4.jpg',
    name: 'Manny Morales',
    win: 'First SPIKE, 34k views in a day',
  },
]

export default function CommunityWins() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section className="relative py-16 md:py-24 px-5 md:px-8 bg-[#0a0a0a]/60">
      <div className="max-w-6xl mx-auto">

        {/* Section Label */}
        <p className="text-[#DC2626] text-xs font-bold uppercase tracking-widest text-center mb-3">
          INSIDE THE COMMUNITY
        </p>

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-black text-white text-center uppercase mb-12">
          Real Wins. Every Week.
        </h2>

        {/* Image Grid */}
        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8"
        >
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative group rounded-2xl overflow-hidden"
            >
              {/* Gradient border effect, outer glow */}
              <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-[#DC2626]/60 via-[#DC2626]/10 to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-300 z-0" />

              {/* Card inner */}
              <div className="relative z-10 rounded-2xl overflow-hidden bg-[#111111]">

                {/* Fixed height image container */}
                <div className="relative w-full overflow-hidden sm:h-80 h-64">
                  <img
                    src={item.image}
                    alt={`${item.name} testimonial`}
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />

                  {/* Bottom gradient overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/70 to-transparent pt-16 pb-4 px-4">
                    <p className="text-white font-bold text-sm">{item.name}</p>
                    <p className="text-[#DC2626] text-xs font-medium mt-0.5">{item.win}</p>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom text */}
        <p className="text-center text-[#A0A0A0] text-sm italic mt-12 max-w-2xl mx-auto">
          These results came from barbers who joined the community and followed the system. Will you be next?
        </p>

      </div>
    </section>
  )
}
