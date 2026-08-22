export default function ValuedClients() {
  const clients = [
    {
      name: "Kisumu County",
      src: "/kisumu.png",
    },
    {
      name: "Embu County",
      src: "/embu.png",
    },
    {
      name: "Murang'a County",
      src: "/muranga.png",
    },
    {
      name: "Wajir County",
      src: "/wajir.png",
    },
    {
      name: "JOOTRH",
      src: "/jaramogi.png",
    },
  ];

  return (
    <section className="border-b border-slate-200 bg-white py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* HEADER */}
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--blue-brand)]">
            Valued Clients
          </span>

          <h2 className="mt-5 font-playfair text-3xl font-semibold text-[var(--navy)] sm:text-4xl">
            Trusted to{" "}
            <span className="text-[var(--blue-brand)]">
              transform.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[var(--dark-gray)]">
            PulseWave works with institutions and organizations to
            deliver meaningful digital transformation.
          </p>

          {/* Lime accent */}
          <div className="mx-auto mt-6 h-1 w-10 rounded-full bg-[var(--lime-brand)]" />
        </div>

        {/* CLIENT LOGOS */}
        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {clients.map((client) => (
            <div
              key={client.name}
              className="group flex h-32 items-center justify-center rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_5px_20px_rgba(10,46,115,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--blue-brand)]/30 hover:shadow-[0_12px_30px_rgba(10,46,115,0.08)]"
            >
              <img
                src={client.src}
                alt={client.name}
                className="max-h-16 max-w-[120px] object-contain opacity-70 grayscale transition-all duration-300 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}