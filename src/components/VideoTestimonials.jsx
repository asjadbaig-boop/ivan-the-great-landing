import { motion } from 'framer-motion'

const VIDEOS = [
  'https://www.youtube.com/embed/cqGhHkj7G1s',
  'https://www.youtube.com/embed/UcP8wALHM4Y',
  'https://www.youtube.com/embed/9Ak__nkTIEY',
  'https://www.youtube.com/embed/ZMyLS6PIB1A',
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
          {VIDEOS.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
              className="relative w-full rounded-2xl overflow-hidden bg-[#111111] border border-[#1f1f1f]"
              style={{ aspectRatio: '16/9' }}
            >
              <iframe
                src={src}
                className="absolute inset-0 w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={`Testimonial video ${i + 1}`}
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
