import { Check, CreditCard } from "lucide-react";

export default function DigitalPayments() {
  return (
    <section
      id="digital-payments"
      className="scroll-mt-20 border-b border-slate-200 bg-white py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* CONTENT */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--blue-brand)]">
              04 / Payments
            </span>

            <h2 className="mt-5 font-playfair text-4xl font-semibold leading-tight text-[var(--navy)] sm:text-5xl">
              Digital
              <br />
              <span className="text-[var(--blue-brand)]">
                Payments
              </span>
            </h2>

            <p className="mt-7 max-w-xl text-base leading-8 text-[var(--dark-gray)]">
              Make payments faster, more accessible and easier to reconcile
              through integrated digital payment channels.
            </p>

            {/* FEATURES */}
            <div className="mt-9 space-y-4">
              {[
                "Secure digital transactions",
                "Real-time payment confirmation",
                "Digital receipts",
                "Payment reconciliation",
                "Transaction tracking",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-sm font-medium text-[var(--navy)]"
                >
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--lime-brand)]/20">
                    <Check
                      size={14}
                      className="text-[var(--navy)]"
                    />
                  </div>

                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* PAYMENT CARD */}
          <div className="relative">

            {/* Decorative lime glow */}
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[var(--lime-brand)]/20 blur-3xl" />

            <div className="relative rounded-[2rem] border border-slate-200 bg-[var(--light-gray)] p-8 shadow-[0_15px_45px_rgba(10,46,115,0.08)]">

              {/* Card header */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-[var(--dark-gray)]">
                  Payment Overview
                </span>

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--lime-brand)]/20">
                  <CreditCard
                    size={20}
                    className="text-[var(--navy)]"
                  />
                </div>
              </div>

              {/* Amount */}
              <div className="mt-10">
                <p className="text-xs font-medium text-[var(--dark-gray)]">
                  Total processed
                </p>

                <p className="mt-2 font-playfair text-4xl font-semibold text-[var(--navy)]">
                  KES 4.82M
                </p>
              </div>

              {/* Progress */}
              <div className="mt-10">
                <div className="h-2 overflow-hidden rounded-full bg-slate-200">
                  <div className="h-full w-[78%] rounded-full bg-[var(--lime-brand)]" />
                </div>
              </div>

              {/* Footer */}
              <div className="mt-4 flex items-center justify-between text-xs">
                <span className="font-medium text-[var(--dark-gray)]">
                  Transactions
                </span>

                <span className="font-semibold text-[var(--blue-brand)]">
                  Real-time
                </span>
              </div>

              {/* Status */}
              <div className="mt-8 flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3">
                <div className="h-2.5 w-2.5 rounded-full bg-[var(--lime-brand)]" />

                <span className="text-xs font-medium text-[var(--navy)]">
                  Payment systems operational
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}