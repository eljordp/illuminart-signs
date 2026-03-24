const phone = '708-386-1485'

export default function CallBanner() {
  return (
    <section className="bg-dark py-16 md:py-24 px-5">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-medium text-white mb-4">
          Let's build your sign.
        </h2>
        <p className="text-gray-400 text-base md:text-lg mb-8 max-w-lg mx-auto">
          Call us for a free consultation and quote. No pressure, just honest advice.
        </p>
        <a
          href={`tel:${phone}`}
          className="inline-flex items-center justify-center px-8 py-4 bg-brand text-white font-medium text-sm tracking-wide uppercase hover:bg-brand-dark transition-colors"
        >
          Call {phone}
        </a>
      </div>
    </section>
  )
}
