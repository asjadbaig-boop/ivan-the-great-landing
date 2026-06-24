import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '#about' },
  { label: 'What You Get', href: '#what-you-get' },
  { label: 'Results', href: '#stats' },
  { label: 'Join', href: '#playbook' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-dark/95 backdrop-blur-md border-b border-border'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:px-8 md:py-4">
        <span className="font-heading text-sm md:text-base tracking-wide text-white">
          IVAN THE GREAT
        </span>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-muted hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <motion.a
            href="#playbook"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="inline-block min-h-[48px] flex items-center bg-primary hover:bg-primary-dark text-white text-sm font-bold px-5 rounded-full transition-colors"
          >
            JOIN FOR $99/MO →
          </motion.a>
        </div>

        <div className="flex md:hidden items-center gap-2">
          <a
            href="#playbook"
            className="inline-flex items-center bg-primary hover:bg-primary-dark text-white text-xs font-bold px-3 py-2 rounded-full transition-colors active:scale-[0.97]"
          >
            JOIN $99/MO
          </a>
          <button
            className="text-white p-2 active:scale-[0.97] transition-transform"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="md:hidden bg-dark border-b border-border overflow-hidden"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-4 px-6 text-lg text-white border-b border-border active:bg-white/5 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#playbook"
              onClick={() => setMenuOpen(false)}
              className="block text-center min-h-[48px] flex items-center justify-center bg-primary hover:bg-primary-dark text-white text-base font-bold px-5 py-4 transition-colors active:scale-[0.98]"
            >
              JOIN FOR $99/MO →
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
