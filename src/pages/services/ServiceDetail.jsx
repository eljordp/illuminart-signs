import { useParams, Link, Navigate } from 'react-router-dom'
import { services } from '../../data/services'
import CallBanner from '../../components/CallBanner'

const phone = '708-386-1485'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = services.find((s) => s.slug === slug)

  if (!service) return <Navigate to="/services" replace />

  const otherServices = services.filter((s) => s.slug !== slug)

  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 md:pt-40 md:pb-24 px-5 bg-warm">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-gray-400 hover:text-brand transition-colors mb-6"
          >
            <span aria-hidden="true">&larr;</span> All Services
          </Link>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-tight tracking-tight text-dark">
            {service.title}
          </h1>
          <p className="mt-3 font-serif text-xl md:text-2xl italic text-brand">
            {service.tagline}
          </p>
          <p className="mt-6 text-base md:text-lg text-gray-500 max-w-2xl leading-relaxed">
            {service.heroDesc}
          </p>
          <a
            href={`tel:${phone}`}
            className="mt-8 inline-flex items-center justify-center px-7 py-3.5 md:px-8 md:py-4 bg-brand text-white font-medium text-sm tracking-wide uppercase hover:bg-brand-dark transition-colors"
          >
            Get a Free Quote
          </a>
        </div>
      </section>

      <div className="h-px bg-gray-200" />

      {/* Detail sections */}
      {service.sections.map((section, si) => (
        <section
          key={si}
          className={`py-16 md:py-28 px-5 ${si % 2 === 1 ? 'bg-warm' : ''}`}
        >
          <div className="max-w-5xl mx-auto">
            <p className="text-xs sm:text-sm font-medium tracking-widest uppercase text-brand mb-3">
              {service.title}
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-medium tracking-tight text-dark mb-12 md:mb-16">
              {section.heading}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 md:gap-y-14">
              {section.items.map((item, ii) => (
                <div key={ii}>
                  <h3 className="font-serif text-xl md:text-2xl font-medium text-dark mb-2">
                    {item.name}
                  </h3>
                  <p className="text-sm md:text-base text-gray-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* FAQ */}
      {service.faq && service.faq.length > 0 && (
        <section className="py-16 md:py-28 px-5">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs sm:text-sm font-medium tracking-widest uppercase text-brand mb-3">
              Common Questions
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-medium tracking-tight text-dark mb-12 md:mb-16">
              FAQ
            </h2>

            <div>
              {service.faq.map((f, fi) => (
                <div key={fi} className="border-t border-gray-200 py-8 md:py-10">
                  <h3 className="font-serif text-lg md:text-xl font-medium text-dark mb-3">
                    {f.q}
                  </h3>
                  <p className="text-sm md:text-base text-gray-500 leading-relaxed max-w-2xl">
                    {f.a}
                  </p>
                </div>
              ))}
              <div className="border-t border-gray-200" />
            </div>
          </div>
        </section>
      )}

      {/* Other services */}
      <section className="py-16 md:py-24 px-5 bg-warm">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs sm:text-sm font-medium tracking-widest uppercase text-gray-400 mb-3">
            Explore More
          </p>
          <h2 className="font-serif text-2xl md:text-3xl font-medium tracking-tight text-dark mb-10 md:mb-14">
            Other services
          </h2>

          <div>
            {otherServices.map((s, i) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="group border-t border-gray-300/50 py-6 md:py-8 flex items-center justify-between gap-4"
              >
                <div>
                  <span className="text-xs text-gray-400 font-medium tabular-nums">
                    0{i + 1}
                  </span>
                  <h3 className="font-serif text-lg md:text-2xl font-medium text-dark group-hover:text-brand transition-colors">
                    {s.title}
                  </h3>
                </div>
                <span className="text-gray-400 group-hover:text-brand transition-colors text-lg" aria-hidden="true">
                  &rarr;
                </span>
              </Link>
            ))}
            <div className="border-t border-gray-300/50" />
          </div>
        </div>
      </section>

      <CallBanner />
    </>
  )
}
