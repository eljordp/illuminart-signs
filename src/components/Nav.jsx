import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const phone = '708-386-1485'

const links = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
        <Link to="/" className="font-serif text-xl font-semibold tracking-tight text-dark">
          Illumin<span className="text-brand font-bold">Art</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`hover:text-dark transition-colors ${pathname === l.to ? 'text-dark' : ''}`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a
            href={`tel:${phone}`}
            className="hidden sm:block text-sm font-medium text-brand hover:text-brand-dark transition-colors"
          >
            {phone}
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-dark transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-dark transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-dark transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${open ? 'max-h-80' : 'max-h-0'}`}
      >
        <div className="px-5 pb-6 pt-2 flex flex-col gap-1 border-t border-gray-100 bg-white">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={`py-3 text-base font-medium transition-colors ${pathname === l.to ? 'text-brand' : 'text-gray-600 hover:text-dark'}`}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={`tel:${phone}`}
            className="mt-3 flex items-center justify-center py-3.5 bg-brand text-white font-medium text-sm tracking-wide uppercase"
          >
            Call {phone}
          </a>
        </div>
      </div>
    </nav>
  )
}
