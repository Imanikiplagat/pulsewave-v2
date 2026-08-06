import {
  Zap,
  FileText,
  Clock,
  BarChart3,
  ShieldCheck,
  Gauge,
} from "lucide-react";

import {
  CountUp,
  ErpHeading,
  ErpReveal,
  ErpSection,
} from "../ErpPrimitive";

const benefits = [
  {
    Icon: Zap,
    value: 42,
    suffix: "%",
    label: "Improved operational efficiency",
    note: "Less duplicate data entry across departments",
  },
  {
    Icon: FileText,
    value: 76,
    suffix: "%",
    label: "Reduced paperwork",
    note: "Digital requisitions, vouchers and approvals",
  },
  {
    Icon: Clock,
    value: 64,
    suffix: "%",
    label: "Faster approvals",
    note: "Automated routing and escalation",
  },
  {
    Icon: BarChart3,
    value: 100,
    suffix: "%",
    label: "Better financial transparency",
    note: "Every shilling traceable to source",
  },
  {
    Icon: ShieldCheck,
    value: 3,
    suffix: "x",
    label: "Increased accountability",
    note: "Complete audit evidence on demand",
  },
  {
    Icon: Gauge,
    value: 24,
    suffix: "/7",
    label: "Real-time decision making",
    note: "Live dashboards for leadership",
  },
];

export function BenefitsSection() {
  return (
    <ErpSection id="benefits" tone="gray">
      <ErpHeading
        eyebrow="Benefits"
        title="Measurable impact from the first quarter"
        description="Typical results reported by institutions after their first two quarters on PulseWave ERP."
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {benefits.map((b, i) => (
          <ErpReveal key={b.label} delay={(i % 3) * 0.08}>
            <article className="erp-lift h-full rounded-3xl border border-border bg-card p-7 shadow-card">
              <div className="flex items-center justify-between gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-light-gray">
                  <b.Icon
                    className="h-5 w-5 text-blue-brand"
                    aria-hidden
                  />
                </span>

                <p className="text-3xl font-extrabold text-navy">
                  <CountUp value={b.value} suffix={b.suffix} />
                </p>
              </div>

              <h3 className="mt-5 text-base font-bold text-navy">
                {b.label}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-dark-gray">
                {b.note}
              </p>
            </article>
          </ErpReveal>
        ))}
      </div>
    </ErpSection>
  );
}