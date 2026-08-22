export default function USSDServices() {
  const steps = [
    "Dial *123#",
    "Select a service",
    "Check bill or initiate payment",
    "Receive confirmation",
  ];

  return (
    <section
      id="ussd"
      className="scroll-mt-20 border-b border-slate-200 bg-white py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-[.8fr_1.2fr]">

          {/* PHONE MOCKUP */}
          <div className="mx-auto w-full max-w-[300px]">

            {/* Phone outer body */}
            <div className="rounded-[2.5rem] border border-slate-200 bg-[var(--navy)] p-3 shadow-[0_20px_50px_rgba(10,46,115,0.15)]">

              {/* Phone screen */}
              <div className="rounded-[2rem] border border-white/10 bg-white p-6">

                {/* Status bar */}
                <div className="mb-12 flex items-center justify-between text-[10px] font-medium text-[var(--dark-gray)]">
                  <span>PulseWave</span>
                  <span>23:41</span>
                </div>

                <div className="min-h-[300px] text-sm text-[var(--navy)]">

                  {/* USSD heading */}
                  <p className="font-semibold tracking-wide text-[var(--blue-brand)]">
                    PULSEWAVE SERVICES
                  </p>

                  <div className="mt-6 space-y-4">
                    <p>
                      <span className="font-semibold text-[var(--blue-brand)]">
                        1.
                      </span>{" "}
                      Revenue Services
                    </p>

                    <p>
                      <span className="font-semibold text-[var(--blue-brand)]">
                        2.
                      </span>{" "}
                      Check Bill
                    </p>

                    <p>
                      <span className="font-semibold text-[var(--blue-brand)]">
                        3.
                      </span>{" "}
                      Make Payment
                    </p>

                    <p>
                      <span className="font-semibold text-[var(--blue-brand)]">
                        4.
                      </span>{" "}
                      Account
                    </p>
                  </div>

                  {/* Reply */}
                  <div className="mt-10 border-t border-slate-200 pt-5">
                    <span className="font-semibold text-[var(--navy)]">
                      Reply:
                    </span>{" "}
                    <span className="font-bold text-[var(--blue-brand)]">
                      1
                    </span>
                  </div>
                </div>

                {/* Session */}
                <div className="mt-8 rounded-xl bg-[var(--light-gray)] px-4 py-3 text-center text-[10px] font-semibold tracking-wider text-[var(--dark-gray)]">
                  USSD SESSION
                </div>

                {/* Lime accent */}
                <div className="mx-auto mt-5 h-1 w-10 rounded-full bg-[var(--lime-brand)]" />
              </div>
            </div>
          </div>

          {/* CONTENT */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--blue-brand)]">
              05 / Accessibility
            </span>

            <h2 className="mt-5 font-playfair text-4xl font-semibold leading-tight text-[var(--navy)] sm:text-5xl">
              Revenue
              <br />
              <span className="text-[var(--blue-brand)]">
                anywhere.
              </span>
            </h2>

            <p className="mt-7 max-w-xl text-base leading-8 text-[var(--dark-gray)]">
              Extend digital revenue services to users who may not have
              access to smartphones or reliable internet connectivity.
            </p>

            {/* STEPS */}
            <div className="mt-10 space-y-5">
              {steps.map((step, index) => (
                <div
                  key={step}
                  className="group flex items-center gap-5"
                >
                  {/* Number */}
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--lime-brand)]/20 font-playfair text-sm font-semibold text-[var(--navy)] transition-colors group-hover:bg-[var(--lime-brand)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Step */}
                  <span className="text-sm font-medium text-[var(--navy)]">
                    {step}
                  </span>
                </div>
              ))}
            </div>

            {/* Accessibility note */}
            <div className="mt-10 rounded-2xl border border-slate-200 bg-[var(--light-gray)] p-5">
              <p className="text-sm leading-7 text-[var(--dark-gray)]">
                USSD enables citizens to access essential revenue services
                using any mobile phone, without requiring mobile data or a
                smartphone.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}