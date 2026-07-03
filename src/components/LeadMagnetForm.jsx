import { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function LeadMagnetForm() {
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [avgPrice, setAvgPrice] = useState('')
  const [situation, setSituation] = useState('')
  const [state, setState] = useState('')
  const [city, setCity] = useState('')
  const [readyToInvest, setReadyToInvest] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!firstName || !email || !avgPrice || !situation || !state || !city || !readyToInvest) {
      setError('Please fill out all fields before continuing.')
      return
    }
    setError('')
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

          <input
            type="number"
            placeholder="Your Average Haircut Price ($)"
            value={avgPrice}
            onChange={(e) => setAvgPrice(e.target.value)}
            className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl px-4 py-4 text-white text-base placeholder-gray-500 focus:outline-none focus:border-[#DC2626] transition"
          />

          <div className="relative">
            <select
              value={situation}
              onChange={(e) => setSituation(e.target.value)}
              className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl px-4 py-4 text-base focus:outline-none focus:border-[#DC2626] transition appearance-none cursor-pointer"
              style={{ color: situation ? 'white' : '#6b7280' }}
            >
              <option value="" disabled>What is your current situation?</option>
              <option value="cutting-from-home">Cutting from Home</option>
              <option value="barber-school">In Barber School</option>
              <option value="working-in-shop">Working in a Barber Shop</option>
              <option value="booth-rental">Booth Rental</option>
              <option value="shop-owner">Shop Owner</option>
              <option value="freelance">Freelancing / Mobile Barber</option>
            </select>

            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          <div className="flex flex-col xs:flex-row gap-3">
            <input
              type="text"
              placeholder="Your State"
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="w-full xs:w-1/2 bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl px-4 py-4 text-white text-base placeholder-gray-500 focus:outline-none focus:border-[#DC2626] transition"
            />
            <input
              type="text"
              placeholder="Your City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full xs:w-1/2 bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl px-4 py-4 text-white text-base placeholder-gray-500 focus:outline-none focus:border-[#DC2626] transition"
            />
          </div>

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

          {error && (
            <p className="text-[#DC2626] text-sm text-center">{error}</p>
          )}

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
