export default function RevenueOverview() {
  return (
    <section className="border-b border-slate-200 bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">

          {/* HEADING */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--blue-brand)]">
              One ecosystem
            </span>

            <h2 className="mt-5 font-playfair text-3xl font-semibold leading-tight text-[var(--navy)] sm:text-4xl lg:text-5xl">
              Revenue operations,
              <br />
              <span className="text-[var(--blue-brand)]">
                reimagined.
              </span>
            </h2>
          </div>

          {/* DESCRIPTION */}
          <div>
            <p className="text-lg leading-8 text-[var(--navy)]">
              PulseWave Technologies provides an integrated digital
              revenue management ecosystem that brings together collection,
              billing, payments, citizen services and reporting.
            </p>

            <p className="mt-6 leading-7 text-[var(--dark-gray)]">
              Instead of managing disconnected systems, organizations can
              gain a unified view of revenue activity and deliver better
              digital services to the people they serve.
            </p>

            {/* Lime accent */}
            <div className="mt-8 h-1 w-12 rounded-full bg-[var(--lime-brand)]" />
          </div>

        </div>
      </div>
    </section>
  );
}