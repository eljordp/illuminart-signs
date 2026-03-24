import CallBanner from '../components/CallBanner'

export default function About() {
  return (
    <>
      {/* Header */}
      <section className="pt-28 pb-16 md:pt-40 md:pb-24 px-5 bg-warm">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs sm:text-sm font-medium tracking-widest uppercase text-brand mb-5">
            About Us
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium leading-tight tracking-tight text-dark">
            Craftsmanship you<br className="hidden sm:block" />
            <span className="italic text-brand">can count on.</span>
          </h1>
        </div>
      </section>

      <div className="h-px bg-gray-200" />

      {/* Story */}
      <section className="py-16 md:py-28 px-5">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
            <div>
              <p className="text-xs sm:text-sm font-medium tracking-widest uppercase text-gray-400 mb-4">
                Who We Are
              </p>
              <h2 className="font-serif text-2xl md:text-3xl font-medium text-dark mb-6">
                A sign shop that does things the right way.
              </h2>
            </div>
            <div className="space-y-5 text-gray-600 text-sm md:text-base leading-relaxed">
              <p>
                IlluminArt Signs is a licensed sign contractor serving Yuba City and the
                greater Sacramento Valley. Run by Don De Luze, we handle every step —
                design, fabrication, permitting, and installation — so you get a sign
                that's built right the first time.
              </p>
              <p>
                From small storefronts to large commercial developments, our work is
                about one thing: making your business visible. We use quality materials,
                proven techniques, and an attention to detail that comes from years in
                the trade.
              </p>
              <p>
                We don't cut corners and we don't overpromise. When we say we'll have your
                sign ready, we mean it. That's how we've built our reputation — one sign
                at a time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 md:py-24 px-5 bg-warm">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16">
            {[
              { label: 'License', value: '#678750' },
              { label: 'Location', value: 'Yuba City, CA' },
              { label: 'Specialty', value: 'Illuminated' },
              { label: 'Service Area', value: 'Sacramento Valley' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-xs font-medium uppercase tracking-widest text-gray-400 mb-2">
                  {stat.label}
                </p>
                <p className="font-serif text-lg md:text-2xl text-dark font-medium">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-28 px-5">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs sm:text-sm font-medium tracking-widest uppercase text-brand mb-3">
            How We Work
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-medium tracking-tight text-dark mb-12 md:mb-16">
            What sets us apart.
          </h2>

          <div className="space-y-0">
            {[
              { title: 'Full-Service', desc: 'Design, engineering, fabrication, permitting, and installation — all under one roof.' },
              { title: 'Quality Materials', desc: 'We use commercial-grade components and UL-listed electrical. Your sign is built to last.' },
              { title: 'Code Compliant', desc: 'We know local sign codes and handle all the paperwork so you don\'t have to.' },
              { title: 'Honest Pricing', desc: 'Clear quotes, no hidden fees. We tell you what it costs before we start.' },
            ].map((v, i) => (
              <div key={i} className="border-t border-gray-200 py-8 md:py-10 flex flex-col md:flex-row gap-3 md:gap-16">
                <h3 className="font-serif text-xl md:text-2xl font-medium text-dark md:w-56 shrink-0">
                  {v.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                  {v.desc}
                </p>
              </div>
            ))}
            <div className="border-t border-gray-200" />
          </div>
        </div>
      </section>

      <CallBanner />
    </>
  )
}
