import { Check, ArrowRight } from "lucide-react";

export default function RevenueCollection() {
  const features = [
    "Revenue source management",
    "Automated revenue collection",
    "Real-time transaction tracking",
    "Collection-point management",
    "Revenue reconciliation",
    "Revenue monitoring",
    "Reporting and analytics",
    "Reduced revenue leakage",
  ];

  return (
    <section
      id="revenue-collection"
      className="scroll-mt-20 border-b border-slate-200 bg-white py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-[.9fr_1.1fr]">

          {/* CONTENT */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--blue-brand)]">
              01 / Revenue
            </span>

            <h2 className="mt-5 font-playfair text-4xl font-semibold leading-tight text-[var(--navy)] sm:text-5xl">
              Revenue
              <br />
              <span className="text-[var(--blue-brand)]">
                Collection
              </span>
            </h2>

            <p className="mt-7 max-w-xl text-base leading-8 text-[var(--dark-gray)]">
              Centralize and digitize revenue collection with real-time
              visibility across revenue streams, collection points and
              transactions.
            </p>

            {/* CTA */}
            <a
              href="/contact?subject=Revenue%20Collection"
              className="group mt-8 inline-flex items-center gap-3 text-sm font-semibold text-[var(--navy)] transition-colors hover:text-[var(--blue-brand)]"
            >
              Talk to our team

              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--lime-brand)] transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRight
                  size={16}
                  className="text-[var(--navy)]"
                />
              </span>
            </a>
          </div>

          {/* FEATURES */}
          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((feature, index) => (
              <div
                key={feature}
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_6px_25px_rgba(10,46,115,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--blue-brand)]/30 hover:shadow-[0_15px_35px_rgba(10,46,115,0.08)]"
              >
                {/* NUMBER + CHECK */}
                <div className="mb-6 flex items-center justify-between">
                  <span className="font-playfair text-sm font-semibold text-[var(--blue-brand)]/60">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--lime-brand)]/20 transition-colors group-hover:bg-[var(--lime-brand)]">
                    <Check
                      size={16}
                      className="text-[var(--navy)]"
                    />
                  </div>
                </div>

                {/* FEATURE */}
                <p className="text-sm font-semibold leading-6 text-[var(--navy)]">
                  {feature}
                </p>

                {/* LIME ACCENT */}
                <div className="mt-5 h-1 w-6 rounded-full bg-[var(--lime-brand)] transition-all duration-300 group-hover:w-12" />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}