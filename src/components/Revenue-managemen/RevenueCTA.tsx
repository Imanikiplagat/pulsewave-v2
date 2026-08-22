import { ArrowRight } from "lucide-react";

export default function RevenueCTA() {
  return (
    <section className="relative overflow-hidden bg-white py-28 lg:py-36">

      {/* Soft lime glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--lime-brand)]/15 blur-[120px]" />

      {/* Soft blue glow */}
      <div className="pointer-events-none absolute -right-32 top-0 h-[350px] w-[350px] rounded-full bg-[var(--blue-brand)]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-5xl px-6 text-center">

        {/* Eyebrow */}
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--blue-brand)]">
          Start the conversation
        </span>

        {/* Heading */}
        <h2 className="mt-6 font-playfair text-4xl font-semibold leading-tight text-[var(--navy)] sm:text-5xl lg:text-6xl">
          Ready to transform
          <br />
          <span className="text-[var(--blue-brand)]">
            your revenue operations?
          </span>
        </h2>

        {/* Description */}
        <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-[var(--dark-gray)]">
          Talk to the PulseWave team about building a smarter, more
          connected revenue ecosystem for your organization.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">

          {/* BOOK DEMO */}
          <a
            href="/contact?subject=Revenue%20Management%20Demo"
            className="group inline-flex items-center gap-3 rounded-full bg-[var(--lime-brand)] px-7 py-4 text-sm font-bold text-[var(--navy)] shadow-[0_8px_25px_rgba(215,242,58,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(215,242,58,0.35)]"
          >
            Book a Demo

            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>

          {/* REQUEST QUOTE */}
          <a
            href="/contact?subject=Revenue%20Management%20Quote"
            className="inline-flex items-center gap-3 rounded-full border border-[var(--navy)]/20 bg-white px-7 py-4 text-sm font-semibold text-[var(--navy)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--blue-brand)] hover:bg-[var(--light-gray)] hover:text-[var(--blue-brand)]"
          >
            Request a Quote
          </a>

        </div>
      </div>
    </section>
  );
}