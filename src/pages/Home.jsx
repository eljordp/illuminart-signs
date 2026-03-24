import { Link } from 'react-router-dom'
import CallBanner from '../components/CallBanner'

const phone = '708-386-1485'

const services = [
  { title: 'Channel Letters', desc: 'Illuminated dimensional letters for maximum visibility.' },
  { title: 'Monument Signs', desc: 'Freestanding ground-level signs built to last.' },
  { title: 'Vinyl Graphics', desc: 'Precision-cut vinyl for windows, vehicles, and walls.' },
  { title: 'Custom Signage', desc: 'From concept to installation — anything you need.' },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-20 md:pt-44 md:pb-36 px-5 bg-warm">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs sm:text-sm font-medium tracking-widest uppercase text-brand mb-5 md:mb-6">
            Yuba City, California
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-medium leading-[1.08] tracking-tight text-dark">
            Signs that speak<br />
            <span className="italic text-brand">before you do.</span>
          </h1>
          <p className="mt-6 md:mt-8 text-base md:text-xl text-gray-500 max-w-2xl leading-relaxed">
            Custom channel letters, monument signs, and vinyl graphics —
            designed, fabricated, and installed by a team that's been doing this for decades.
          </p>
          <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href={`tel:${phone}`}
              className="inline-flex items-center justify-center px-7 py-3.5 md:px-8 md:py-4 bg-brand text-white font-medium text-sm tracking-wide uppercase hover:bg-brand-dark transition-colors"
            >
              Call for a Free Quote
            </a>
            <Link
              to="/services"
              className="inline-flex items-center justify-center px-7 py-3.5 md:px-8 md:py-4 border border-dark text-dark font-medium text-sm tracking-wide uppercase hover:bg-dark hover:text-white transition-colors"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>

      <div className="h-px bg-gray-200" />

      {/* Services preview */}
      <section className="py-20 md:py-32 px-5">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs sm:text-sm font-medium tracking-widest uppercase text-brand mb-3 md:mb-4">
            What We Do
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-medium tracking-tight text-dark mb-12 md:mb-20">
            Built to be seen.
          </h2>

          <div>
            {services.map((s, i) => (
              <div
                key={i}
                className="group border-t border-gray-200 py-8 md:py-14 flex flex-col md:flex-row md:items-start gap-3 md:gap-16"
              >
                <span className="text-xs md:text-sm text-gray-400 font-medium tabular-nums md:w-16 shrink-0">
                  0{i + 1}
                </span>
                <div className="flex-1">
                  <h3 className="font-serif text-xl md:text-3xl font-medium text-dark group-hover:text-brand transition-colors">
                    {s.title}
                  </h3>
                  <p className="mt-2 md:mt-3 text-gray-500 leading-relaxed max-w-xl text-sm md:text-lg">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
            <div className="border-t border-gray-200" />
          </div>

          <Link
            to="/services"
            className="mt-10 md:mt-14 inline-flex items-center gap-2 text-sm font-medium text-brand hover:text-brand-dark transition-colors uppercase tracking-wide"
          >
            View All Services
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </section>

      <CallBanner />
    </>
  )
}
