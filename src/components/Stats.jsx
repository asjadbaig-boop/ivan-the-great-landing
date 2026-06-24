import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const STATS = [
  { value: 1, suffix: 'M+', label: 'Followers' },
  { value: 150, suffix: '+', label: 'Barbers Enrolled' },
  { value: 9, suffix: '', label: 'Years Cutting' },
  { value: 150, suffix: '+', prefix: '$', label: 'Per Cut (Was $10)' },
]

function CountUpNumber({ value, prefix = '', suffix = '', inView }) {
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    let frame
    const duration = 1400
    const start = performance.now()

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(Math.round(eased * value))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, value])

  return (
    <span>
      {prefix}
      {display}
      {suffix}
    </span>
  )
}

export default function Stats() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.4 })

  return (
    <section id="stats" ref={ref} className="px-5 py-16 md:px-8 md:py-24">
      <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4, margin: '-50px' }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
            className={`flex flex-col items-center text-center px-4 ${
              i < 2 ? 'border-b border-border pb-6 lg:border-b-0 lg:pb-0' : ''
            } ${i !== 0 ? 'lg:border-l lg:border-border' : ''}`}
          >
            <span className="font-heading text-4xl sm:text-5xl text-primary">
              <CountUpNumber
                value={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
                inView={inView}
              />
            </span>
            <span className="mt-2 text-xs sm:text-sm uppercase tracking-widest text-white font-medium">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
