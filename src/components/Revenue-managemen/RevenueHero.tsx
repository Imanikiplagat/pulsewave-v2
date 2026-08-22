import { ArrowRight } from "lucide-react";

export default function RevenueHero() {
  return (
    <section className="relative min-h-[760px] overflow-hidden bg-[var(--navy)]">

      {/* Background image */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/rev.jpeg"
          alt=""
          className="h-full w-full scale-105 object-cover blur-[3px]"
        />

        {/* Navy overlay for readability */}
        <div className="absolute inset-0 bg-[var(--navy)]/55" />

        {/* Soft blue overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--navy)]/80 via-[var(--navy)]/55 to-[var(--blue-brand)]/30" />

        {/* Lime glow */}
        <div className="absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-[var(--lime-brand)]/10 blur-[120px]" />
      </div>

      {/* Content */}
      <div className="container-page relative z-10">
        <div className="flex min-h-[760px] items-center py-32 lg:py-36">
          <div className="max-w-4xl">

            {/* Eyebrow */}
            <div className="mb-7 flex items-center gap-3">
              <span className="h-1 w-12 rounded-full bg-[var(--lime-brand)]" />

              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--lime-brand)]">
                Revenue Management
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-display text-5xl font-semibold leading-[1.08] text-white sm:text-6xl lg:text-7xl">
              Transform the way

              <span className="block text-[var(--lime-brand)]">
                you manage revenue.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/85">
              An integrated digital ecosystem that helps organizations
              simplify revenue collection, streamline billing, enable
              digital payments and deliver better citizen services.
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-wrap gap-4">

              <a
                href="#revenue-collection"
                className="group inline-flex items-center gap-3 rounded-full bg-[var(--lime-brand)] px-7 py-4 text-sm font-bold text-[var(--navy)] shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(215,242,58,0.3)]"
              >
                Explore Solutions

                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

              <a
                href="/contact?subject=Revenue%20Management%20Quote"
                className="inline-flex items-center rounded-full border border-white/40 bg-white/10 px-7 py-4 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-[var(--lime-brand)] hover:bg-[var(--lime-brand)] hover:text-[var(--navy)]"
              >
                Request a Quote
              </a>

            </div>

            {/* Features */}
            <div className="mt-14 flex flex-wrap gap-x-8 gap-y-4">
              {[
                "Revenue Collection",
                "Digital Payments",
                "Citizen Services",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm text-white/80"
                >
                  <span className="h-2 w-2 rounded-full bg-[var(--lime-brand)]" />

                  {item}
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* Bottom transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--navy)]/60 to-transparent" />

    </section>
  );
}