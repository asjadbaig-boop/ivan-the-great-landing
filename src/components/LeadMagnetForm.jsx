import { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function LeadMagnetForm() {
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [readyToInvest, setReadyToInvest] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!firstName || !email || !readyToInvest) return
    if (readyToInvest === 'yes') {
      navigate('/thank-you-invest')
    } else {
      navigate('/thank-you-no-invest')
    }
  }

  return (
    <section id="playbook" className="px-5 py-16 md:px-8 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3, margin: '-50px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="mx-4 sm:mx-auto max-w-lg bg-card border border-border rounded-2xl px-6 py-8 md:px-10 md:py-12"
      >
        <h2 className="font-heading uppercase text-xl md:text-2xl lg:text-4xl text-center text-white leading-tight">
          Get a Free <span className="text-primary">Consultation Editing Tutorial</span>
        </h2>

        <p className="mt-4 text-center text-muted text-sm md:text-base leading-relaxed">
          Tell us a bit about yourself and we'll send you a free editing
          tutorial to help level up your content game.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
          <input
            type="text"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Your First Name"
            className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl px-4 py-4 text-white text-base placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
          />
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Best Email"
            className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl px-4 py-4 text-white text-base placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
          />

          <div>
            <p className="text-white text-sm font-medium mb-3">
              Are you ready to invest in your barber brand?
            </p>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setReadyToInvest('yes')}
                className={`flex-1 min-h-[48px] py-3 rounded-xl border font-bold text-sm transition-all duration-150 active:scale-[0.97] ${
                  readyToInvest === 'yes'
                    ? 'bg-primary border-primary text-white'
                    : 'bg-transparent border-[#333] text-white hover:border-primary active:border-primary'
                }`}
              >
                Yes, I'm ready
              </button>
              <button
                type="button"
                onClick={() => setReadyToInvest('no')}
                className={`flex-1 min-h-[48px] py-3 rounded-xl border font-bold text-sm transition-all duration-150 active:scale-[0.97] ${
                  readyToInvest === 'no'
                    ? 'bg-[#333] border-[#333] text-white'
                    : 'bg-transparent border-[#333] text-white hover:border-[#555] active:border-[#555]'
                }`}
              >
                Not yet
              </button>
            </div>
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="w-full min-h-[48px] bg-primary hover:bg-primary-dark text-white font-bold text-base py-4 rounded-lg flex items-center justify-center gap-2 transition-colors mt-2"
          >
            SEND ME THE TUTORIAL <ArrowRight size={18} />
          </motion.button>
        </form>

        <p className="mt-5 text-center text-xs text-muted">
          No spam. Unsubscribe anytime. 100% free.
        </p>
      </motion.div>
    </section>
  )
}
