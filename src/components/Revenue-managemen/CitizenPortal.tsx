import {
  Users,
  FileText,
  CreditCard,
  MessageCircle,
} from "lucide-react";

export default function CitizenPortal() {
  return (
    <section
      id="citizen-portal"
      className="scroll-mt-20 border-b border-slate-200 bg-white py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* INTRO */}
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--blue-brand)]">
            03 / Citizens
          </span>

          <h2 className="mt-5 font-playfair text-4xl font-semibold leading-tight text-[var(--navy)] sm:text-5xl">
            A better
            <br />
            <span className="text-[var(--blue-brand)]">
              citizen experience.
            </span>
          </h2>

          <p className="mt-7 max-w-2xl text-base leading-8 text-[var(--dark-gray)]">
            Give citizens a simple digital gateway to services, bills,
            payments, statements and notifications from anywhere.
          </p>
        </div>

        {/* FEATURE CARDS */}
        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Users,
              title: "Citizen Accounts",
              text: "Manage personal information and service access.",
            },
            {
              icon: FileText,
              title: "Statements",
              text: "Access bills, balances and transaction history.",
            },
            {
              icon: CreditCard,
              title: "Online Payments",
              text: "Pay for services through digital channels.",
            },
            {
              icon: MessageCircle,
              title: "Notifications",
              text: "Keep citizens informed throughout the process.",
            },
          ].map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_8px_30px_rgba(10,46,115,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--blue-brand)]/30 hover:shadow-[0_15px_40px_rgba(10,46,115,0.09)]"
            >
              {/* ICON */}
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--lime-brand)]/20 transition-colors group-hover:bg-[var(--lime-brand)]">
                <Icon
                  size={23}
                  className="text-[var(--navy)]"
                  strokeWidth={1.7}
                />
              </div>

              {/* TITLE */}
              <h3 className="mt-8 font-playfair text-lg font-semibold text-[var(--navy)]">
                {title}
              </h3>

              {/* DESCRIPTION */}
              <p className="mt-4 text-sm leading-7 text-[var(--dark-gray)]">
                {text}
              </p>

              {/* LIME ACCENT */}
              <div className="mt-6 h-1 w-8 rounded-full bg-[var(--lime-brand)] transition-all duration-300 group-hover:w-14" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}