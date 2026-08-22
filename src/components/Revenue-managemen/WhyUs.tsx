export default function WhyPulseWave() {
  const benefits = [
    "Centralized revenue operations",
    "Real-time visibility",
    "Improved collection efficiency",
    "Better citizen experiences",
    "Secure digital payments",
    "Data-driven decision making",
  ];

  return (
    <section className="border-b border-slate-200 bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* HEADER */}
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--blue-brand)]">
            Why PulseWave
          </span>

          <h2 className="mx-auto mt-5 max-w-4xl font-playfair text-4xl font-semibold leading-tight text-[var(--navy)] sm:text-5xl lg:text-6xl">
            Built for smarter
            <br />
            <span className="text-[var(--blue-brand)]">
              revenue operations.
            </span>
          </h2>

          {/* Lime accent */}
          <div className="mx-auto mt-7 h-1 w-12 rounded-full bg-[var(--lime-brand)]" />
        </div>

        {/* BENEFITS */}
        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div
              key={benefit}
              className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_5px_25px_rgba(10,46,115,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--blue-brand)]/30 hover:shadow-[0_15px_35px_rgba(10,46,115,0.08)]"
            >
              {/* NUMBER */}
              <div className="flex items-center justify-between">
                <span className="font-playfair text-sm font-semibold text-[var(--blue-brand)]/60">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Lime dot */}
                <span className="h-2 w-2 rounded-full bg-[var(--lime-brand)] transition-transform duration-300 group-hover:scale-150" />
              </div>

              {/* TITLE */}
              <h3 className="mt-12 text-lg font-semibold leading-7 text-[var(--navy)]">
                {benefit}
              </h3>

              {/* Animated accent */}
              <div className="mt-8 h-1 w-10 rounded-full bg-[var(--lime-brand)] transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}