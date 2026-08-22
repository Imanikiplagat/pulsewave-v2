import { Receipt, Check } from "lucide-react";

export default function BillingInvoicing() {
  return (
    <section
      id="billing-invoicing"
      className="scroll-mt-20 border-b border-slate-200 bg-white py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* BILLING CARD */}
          <div className="order-2 lg:order-1">
            <div className="rounded-3xl border border-slate-200 bg-[var(--light-gray)] p-6 shadow-[0_15px_45px_rgba(10,46,115,0.08)]">

              {/* Invoice header */}
              <div className="flex items-center justify-between border-b border-slate-200 pb-5">
                <div className="flex items-center gap-3">

                  <div className="rounded-xl bg-[var(--lime-brand)]/20 p-3 text-[var(--navy)]">
                    <Receipt size={20} />
                  </div>

                  <div>
                    <p className="text-xs font-medium text-[var(--dark-gray)]">
                      Revenue invoice
                    </p>

                    <p className="mt-1 font-semibold text-[var(--navy)]">
                      INV-2026-00482
                    </p>
                  </div>
                </div>

                {/* Paid badge */}
                <span className="rounded-full bg-[var(--lime-brand)]/20 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-[var(--navy)]">
                  Paid
                </span>
              </div>

              {/* Invoice details */}
              <div className="space-y-5 py-6">
                {[
                  ["Service", "Business Permit"],
                  ["Amount", "KES 25,000"],
                  ["Payment", "Digital"],
                  ["Status", "Confirmed"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="flex items-center justify-between text-sm"
                  >
                    <span className="text-[var(--dark-gray)]">
                      {label}
                    </span>

                    <span className="font-semibold text-[var(--navy)]">
                      {value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Bottom status */}
              <div className="flex items-center gap-2 border-t border-slate-200 pt-5">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[var(--lime-brand)]">
                  <Check
                    size={12}
                    className="text-[var(--navy)]"
                  />
                </span>

                <span className="text-xs font-medium text-[var(--dark-gray)]">
                  Payment successfully processed
                </span>
              </div>
            </div>
          </div>

          {/* CONTENT */}
          <div className="order-1 lg:order-2">

            {/* Section label */}
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--blue-brand)]">
              02 / Billing
            </span>

            {/* Heading */}
            <h2 className="mt-5 font-playfair text-4xl font-semibold leading-tight text-[var(--navy)] sm:text-5xl">
              Billing &amp;
              <br />
              <span className="text-[var(--blue-brand)]">
                Invoicing
              </span>
            </h2>

            {/* Description */}
            <p className="mt-7 max-w-xl text-base leading-8 text-[var(--dark-gray)]">
              Simplify the entire billing lifecycle. Generate invoices,
              monitor outstanding balances, track payments and provide
              citizens with transparent digital records.
            </p>

            {/* Features */}
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "Automated billing",
                "Invoice generation",
                "Payment tracking",
                "Digital receipts",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-sm font-medium text-[var(--navy)]"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--lime-brand)]/20">
                    <Check
                      size={14}
                      className="text-[var(--navy)]"
                    />
                  </span>

                  {item}
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}