import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'שירותים', href: '#services'  },
  { label: 'ארכיטקטורה', href: '#architecture' },
  { label: 'תהליך',   href: '#process'   },
  { label: 'צור קשר', href: '#contact'   },
]

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1,  y: 0   }}
        transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-700 ${
          scrolled
            ? 'bg-space-900/80 backdrop-blur-md border-b border-white/[0.05] py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-8 md:px-14 flex items-center justify-between">

          {/* Logo */}
          <a href="#" className="text-base font-black tracking-tight">
            <span className="text-stone-100">NEXUS</span>
            <span className="text-purple-400">.</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-normal text-white/45 hover:text-white/80
                           transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <motion.a
              href="#contact"
              whileHover={{ opacity: 0.8 }}
              whileTap={{ scale: 0.97 }}
              className="btn-primary px-5 py-2.5 rounded-xl text-sm cursor-pointer"
            >
              התחל פרויקט
            </motion.a>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden text-white/50 hover:text-white/80 transition-colors"
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0  }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 bg-space-900/95 backdrop-blur-md
                       border-b border-white/[0.05] px-8 py-8 flex flex-col gap-5 md:hidden"
          >
            {links.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-lg font-light text-white/60 hover:text-white/90
                           transition-colors pb-4 border-b border-white/[0.05] last:border-0"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="btn-primary mt-2 py-3 rounded-xl text-center text-sm font-semibold"
            >
              התחל פרויקט
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
