import { Link } from 'react-router-dom'

const phone = '708-386-1485'
const email = 'illuminartsignco@att.net'

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-warm">
      <div className="max-w-6xl mx-auto px-5 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
          {/* Brand */}
          <div>
            <p className="font-serif text-xl font-semibold tracking-tight mb-3">
              Illumin<span className="text-brand font-bold">Art</span> Signs
            </p>
            <p className="text-sm text-gray-500 leading-relaxed">
              Custom signage for businesses across <br className="hidden md:block" />
              the Sacramento Valley.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-gray-400 mb-4">Pages</p>
            <div className="flex flex-col gap-2.5">
              <Link to="/" className="text-sm text-gray-600 hover:text-dark transition-colors">Home</Link>
              <Link to="/services" className="text-sm text-gray-600 hover:text-dark transition-colors">Services</Link>
              <Link to="/about" className="text-sm text-gray-600 hover:text-dark transition-colors">About</Link>
              <Link to="/contact" className="text-sm text-gray-600 hover:text-dark transition-colors">Contact</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-gray-400 mb-4">Contact</p>
            <div className="flex flex-col gap-2.5">
              <a href={`tel:${phone}`} className="text-sm text-gray-600 hover:text-dark transition-colors">{phone}</a>
              <a href={`mailto:${email}`} className="text-sm text-gray-600 hover:text-dark transition-colors break-all">{email}</a>
              <p className="text-sm text-gray-600">Yuba City, CA 95993</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-400">
            CA Sign Contractor License #678750
          </p>
          <p className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} IlluminArt Signs
          </p>
        </div>
      </div>
    </footer>
  )
}
