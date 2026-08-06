import {
  Banknote,
  ShoppingCart,
  Users,
  Wallet,
  Boxes,
  Building2,
  BarChart3,
  LayoutDashboard,
  Plug,
  ArrowRight,
} from "lucide-react";

import {
  ErpHeading,
  ErpReveal,
  ErpSection,
} from "../ErpPrimitive";

import { SpokeCard } from "../SpokeCard";

const spokes = [
  { label: "Finance", Icon: Banknote },
  { label: "HR", Icon: Users },
  { label: "Procurement", Icon: ShoppingCart },
  { label: "Payroll", Icon: Wallet },
  { label: "Assets", Icon: Building2 },
  { label: "Inventory", Icon: Boxes },
  { label: "Reporting", Icon: BarChart3 },
];

export function UnifiedPlatform() {
  return (
    <ErpSection>
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <ErpReveal>
          <div className="relative rounded-3xl border border-border bg-light-gray p-8 shadow-card">
            <div className="mx-auto grid max-w-md grid-cols-3 gap-4">
              {spokes.slice(0, 3).map((s) => (
                <SpokeCard key={s.label} {...s} />
              ))}

              <SpokeCard {...spokes[3]!} />

              <div className="grid place-items-center rounded-2xl bg-[var(--navy)] p-4 text-center shadow-elegant">
                <LayoutDashboard className="h-6 w-6 text-white" />
                <p className="mt-2 text-[11px] font-bold leading-tight text-white">
                  PulseWave ERP Core
                </p>
              </div>

              <SpokeCard {...spokes[4]!} />

              {spokes.slice(5).map((s) => (
                <SpokeCard key={s.label} {...s} />
              ))}

              <div className="grid place-items-center rounded-2xl border border-dashed border-blue-brand/40 p-4 text-center">
                <Plug className="h-5 w-5 text-blue-brand" />
                <p className="mt-2 text-[11px] font-semibold text-dark-gray">
                  External systems
                </p>
              </div>
            </div>
          </div>
        </ErpReveal>

        <div className="min-w-0">
          <ErpHeading
            align="left"
            eyebrow="Unified ERP platform"
            title="Every department, one connected ecosystem"
            description="PulseWave links each function to a shared ledger, common master data and a single approval engine — so a requisition raised in a hospital store flows straight through procurement, finance and asset registers without re-keying."
          />

          <ul className="mt-8 space-y-4">
            {[
              "Shared chart of accounts and vendor master across all departments",
              "One approval engine with delegation, thresholds and escalation",
              "Consolidated reporting from facility level to executive dashboard",
              "Open APIs for IFMIS, HMIS, banks and payment gateways",
            ].map((t, i) => (
              <ErpReveal
                key={t}
                delay={0.05 * i}
              >
                <li className="flex gap-3 text-sm text-dark-gray">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-lime-brand">
                    <ArrowRight className="h-3 w-3 text-navy" />
                  </span>

                  {t}
                </li>
              </ErpReveal>
            ))}
          </ul>
        </div>
      </div>
    </ErpSection>
  );
}