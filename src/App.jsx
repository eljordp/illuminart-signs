import './App.css'

const phone = '708-386-1485'
const email = 'illuminartsignco@att.net'
const address = '2543 Somerset Way, Yuba City, CA 95993'
const license = '#678750'

const services = [
  {
    title: 'Channel Letters',
    desc: 'Illuminated dimensional letters that make your business impossible to miss — day or night.',
  },
  {
    title: 'Monument Signs',
    desc: 'Freestanding ground-level signs built to last. The first thing customers see when they arrive.',
  },
  {
    title: 'Vinyl Graphics',
    desc: 'Window displays, vehicle wraps, wall murals — precision-cut vinyl for any surface.',
  },
  {
    title: 'Custom Signage',
    desc: 'From concept to installation. If you can imagine it, we can build it and light it up.',
  },
]

function App() {
  return (
    <div className="min-h-screen">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="font-serif text-xl font-semibold tracking-tight text-dark">
            Illumin<span className="text-brand font-bold">Art</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <a href="#services" className="hover:text-dark transition-colors">Services</a>
            <a href="#about" className="hover:text-dark transition-colors">About</a>
            <a href="#contact" className="hover:text-dark transition-colors">Contact</a>
          </div>
          <a
            href={`tel:${phone}`}
            className="text-sm font-medium text-brand hover:text-brand-dark transition-colors"
          >
            {phone}
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-24 md:pt-44 md:pb-36 px-6 bg-warm">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-medium tracking-widest uppercase text-brand mb-6">
            Yuba City, California
          </p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium leading-[1.05] tracking-tight text-dark">
            Signs that speak<br />
            <span className="italic text-brand">before you do.</span>
          </h1>
          <p className="mt-8 text-lg md:text-xl text-gray-500 max-w-2xl leading-relaxed">
            Custom channel letters, monument signs, and vinyl graphics —
            designed, fabricated, and installed by a team that's been doing this for decades.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href={`tel:${phone}`}
              className="inline-flex items-center justify-center px-8 py-4 bg-brand text-white font-medium rounded-none hover:bg-brand-dark transition-colors text-sm tracking-wide uppercase"
            >
              Call for a Free Quote
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-8 py-4 border border-dark text-dark font-medium rounded-none hover:bg-dark hover:text-white transition-colors text-sm tracking-wide uppercase"
            >
              See Our Work
            </a>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gray-200" />

      {/* Services */}
      <section id="services" className="py-24 md:py-36 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-medium tracking-widest uppercase text-brand mb-4">
            What We Do
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight text-dark mb-20">
            Built to be seen.
          </h2>

          <div className="space-y-0">
            {services.map((s, i) => (
              <div
                key={i}
                className="group border-t border-gray-200 py-10 md:py-14 flex flex-col md:flex-row md:items-start gap-4 md:gap-16"
              >
                <span className="text-sm text-gray-400 font-medium tabular-nums md:w-16 shrink-0">
                  0{i + 1}
                </span>
                <div className="flex-1">
                  <h3 className="font-serif text-2xl md:text-3xl font-medium text-dark group-hover:text-brand transition-colors">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-gray-500 leading-relaxed max-w-xl text-base md:text-lg">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
            <div className="border-t border-gray-200" />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 md:py-36 px-6 bg-warm">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-medium tracking-widest uppercase text-brand mb-4">
            About
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight text-dark mb-10">
            Craftsmanship you<br className="hidden md:block" /> can count on.
          </h2>
          <div className="space-y-6 text-gray-600 text-lg leading-relaxed max-w-2xl">
            <p>
              IlluminArt Signs is a licensed sign contractor serving Yuba City
              and the greater Sacramento Valley. We handle every step — design,
              fabrication, permitting, and installation — so you get a sign
              that's built right the first time.
            </p>
            <p>
              From small storefronts to large commercial developments, our work
              is about one thing: making your business visible. We use quality
              materials, proven techniques, and an attention to detail that
              comes from years in the trade.
            </p>
          </div>
          <div className="mt-14 flex flex-col sm:flex-row gap-10 sm:gap-20">
            <div>
              <p className="text-sm text-gray-400 font-medium uppercase tracking-widest mb-2">License</p>
              <p className="font-serif text-2xl text-dark">{license}</p>
            </div>
            <div>
              <p className="text-sm text-gray-400 font-medium uppercase tracking-widest mb-2">Location</p>
              <p className="font-serif text-2xl text-dark">Yuba City, CA</p>
            </div>
            <div>
              <p className="text-sm text-gray-400 font-medium uppercase tracking-widest mb-2">Specialty</p>
              <p className="font-serif text-2xl text-dark">Illuminated Signs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 md:py-36 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-medium tracking-widest uppercase text-brand mb-4">
            Get in Touch
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight text-dark mb-10">
            Ready for a sign<br className="hidden md:block" /> that works?
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed max-w-xl mb-14">
            Call us or send an email. We'll talk through your project,
            give you an honest quote, and get to work.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
            <div>
              <p className="text-sm text-gray-400 font-medium uppercase tracking-widest mb-3">Phone</p>
              <a href={`tel:${phone}`} className="text-xl text-dark hover:text-brand transition-colors font-medium">
                {phone}
              </a>
            </div>
            <div>
              <p className="text-sm text-gray-400 font-medium uppercase tracking-widest mb-3">Email</p>
              <a href={`mailto:${email}`} className="text-lg text-dark hover:text-brand transition-colors font-medium break-all">
                {email}
              </a>
            </div>
            <div>
              <p className="text-sm text-gray-400 font-medium uppercase tracking-widest mb-3">Address</p>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-dark hover:text-brand transition-colors font-medium"
              >
                {address}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-serif text-lg font-semibold tracking-tight">
            Illumin<span className="text-brand font-bold">Art</span> Signs
          </p>
          <p className="text-sm text-gray-400">
            CA Sign Contractor License {license} · Yuba City, CA
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
