import { Link } from 'react-router-dom'
import { services } from '../data/services'
import CallBanner from '../components/CallBanner'

export default function Services() {
  return (
    <>
      {/* Header */}
      <section className="pt-28 pb-16 md:pt-40 md:pb-24 px-5 bg-warm">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs sm:text-sm font-medium tracking-widest uppercase text-brand mb-5">
            Our Services
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium leading-tight tracking-tight text-dark">
            Everything your<br className="hidden sm:block" /> business needs to<br className="hidden sm:block" />
            <span className="italic text-brand">stand out.</span>
          </h1>
        </div>
      </section>

      <div className="h-px bg-gray-200" />

      {/* Service list — clickable */}
      <section className="py-16 md:py-28 px-5">
        <div className="max-w-5xl mx-auto">
          {services.map((s, i) => (
            <Link
              key={s.slug}
              to={`/services/${s.slug}`}
              className="group border-t border-gray-200 py-12 md:py-20 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 md:gap-20 items-start"
            >
              <div>
                <span className="text-xs text-gray-400 font-medium tabular-nums block mb-3">
                  0{i + 1}
                </span>
                <h2 className="font-serif text-2xl md:text-4xl font-medium text-dark group-hover:text-brand transition-colors mb-4">
                  {s.title}
                </h2>
                <p className="text-gray-500 leading-relaxed text-sm md:text-base max-w-xl">
                  {s.heroDesc}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-brand group-hover:text-brand-dark transition-colors uppercase tracking-wide">
                  Learn More <span aria-hidden="true">&rarr;</span>
                </span>
              </div>
              <div className="hidden md:flex items-center justify-center w-12 h-12 text-gray-300 group-hover:text-brand transition-colors text-2xl mt-8">
                &rarr;
              </div>
            </Link>
          ))}
          <div className="border-t border-gray-200" />
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-28 px-5 bg-warm">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs sm:text-sm font-medium tracking-widest uppercase text-brand mb-3">
            Our Process
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-medium tracking-tight text-dark mb-12 md:mb-20">
            Simple start to finish.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-16">
            {[
              { num: '01', title: 'Consult', desc: 'We talk through your needs, site, and budget. No pressure, just honest advice.' },
              { num: '02', title: 'Design', desc: 'We create proofs and handle all permits and engineering.' },
              { num: '03', title: 'Install', desc: 'We fabricate in-house and install on schedule. Done right the first time.' },
            ].map((step) => (
              <div key={step.num}>
                <span className="text-xs text-brand font-medium">{step.num}</span>
                <h3 className="font-serif text-xl md:text-2xl font-medium text-dark mt-2 mb-3">
                  {step.title}
                </h3>
                <p className="text-sm md:text-base text-gray-500 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CallBanner />
    </>
  )
}
