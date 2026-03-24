const phone = '708-386-1485'
const email = 'illuminartsignco@att.net'
const address = '2543 Somerset Way, Yuba City, CA 95993'

export default function Contact() {
  return (
    <>
      {/* Header */}
      <section className="pt-28 pb-16 md:pt-40 md:pb-24 px-5 bg-warm">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs sm:text-sm font-medium tracking-widest uppercase text-brand mb-5">
            Get in Touch
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium leading-tight tracking-tight text-dark">
            Ready for a sign<br className="hidden sm:block" />
            <span className="italic text-brand">that works?</span>
          </h1>
          <p className="mt-6 text-base md:text-lg text-gray-500 max-w-xl leading-relaxed">
            Call us or send an email. We'll talk through your project, give you
            an honest quote, and get to work.
          </p>
        </div>
      </section>

      <div className="h-px bg-gray-200" />

      {/* Contact info */}
      <section className="py-16 md:py-28 px-5">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-gray-400 mb-3">Phone</p>
              <a
                href={`tel:${phone}`}
                className="text-lg md:text-xl text-dark hover:text-brand transition-colors font-medium"
              >
                {phone}
              </a>
              <p className="mt-2 text-sm text-gray-400">Call anytime for a free quote</p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-gray-400 mb-3">Email</p>
              <a
                href={`mailto:${email}`}
                className="text-base md:text-lg text-dark hover:text-brand transition-colors font-medium break-all"
              >
                {email}
              </a>
              <p className="mt-2 text-sm text-gray-400">We reply within 24 hours</p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-gray-400 mb-3">Address</p>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base md:text-lg text-dark hover:text-brand transition-colors font-medium"
              >
                2543 Somerset Way<br />
                Yuba City, CA 95993
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Map embed */}
      <section className="px-5 pb-16 md:pb-28">
        <div className="max-w-4xl mx-auto">
          <div className="w-full aspect-[16/9] md:aspect-[21/9] bg-warm-dark overflow-hidden">
            <iframe
              title="IlluminArt Signs location"
              src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(address)}`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark py-16 md:py-24 px-5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-white mb-4">
            Don't wait on your sign.
          </h2>
          <p className="text-gray-400 text-base md:text-lg mb-8 max-w-lg mx-auto">
            Every day without a sign is a day customers drive right past.
            Let's fix that.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`tel:${phone}`}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-brand text-white font-medium text-sm tracking-wide uppercase hover:bg-brand-dark transition-colors"
            >
              Call Now
            </a>
            <a
              href={`mailto:${email}`}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border border-gray-600 text-white font-medium text-sm tracking-wide uppercase hover:bg-white hover:text-dark transition-colors"
            >
              Send an Email
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
