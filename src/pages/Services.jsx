import CallBanner from '../components/CallBanner'

const services = [
  {
    title: 'Channel Letters',
    desc: 'Illuminated dimensional letters that make your business impossible to miss — day or night. Front-lit, back-lit, or halo-lit options to match your brand perfectly.',
    details: ['Individual letter fabrication', 'LED illumination', 'Front-lit, back-lit, and halo-lit', 'UL listed components', 'Permit coordination'],
  },
  {
    title: 'Monument Signs',
    desc: 'Freestanding ground-level signs built to last. The first thing customers see when they arrive. Designed to meet local codes while making a strong impression.',
    details: ['Custom base design', 'Illuminated or non-illuminated', 'Multi-tenant configurations', 'Durable materials', 'Foundation and installation'],
  },
  {
    title: 'Vinyl Graphics',
    desc: 'Window displays, vehicle wraps, wall murals — precision-cut vinyl for any surface. High-quality materials that hold up to weather and UV exposure.',
    details: ['Window graphics and lettering', 'Vehicle wraps and fleet graphics', 'Wall murals and displays', 'Floor graphics', 'Cut vinyl and printed vinyl'],
  },
  {
    title: 'Custom Signage',
    desc: 'From concept to installation. If you can imagine it, we can build it and light it up. We work with you from the first sketch through final install.',
    details: ['Pylon and pole signs', 'Blade and projecting signs', 'Wayfinding and directional', 'ADA compliant signage', 'Design and engineering'],
  },
]

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

      {/* Service details */}
      <section className="py-16 md:py-28 px-5">
        <div className="max-w-5xl mx-auto">
          {services.map((s, i) => (
            <div
              key={i}
              className="border-t border-gray-200 py-12 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-20"
            >
              <div>
                <span className="text-xs text-gray-400 font-medium tabular-nums block mb-3">
                  0{i + 1}
                </span>
                <h2 className="font-serif text-2xl md:text-4xl font-medium text-dark mb-4">
                  {s.title}
                </h2>
                <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                  {s.desc}
                </p>
              </div>
              <div className="md:pt-10">
                <p className="text-xs font-medium uppercase tracking-widest text-gray-400 mb-4">Includes</p>
                <ul className="space-y-3">
                  {s.details.map((d, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm md:text-base text-gray-600">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
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
