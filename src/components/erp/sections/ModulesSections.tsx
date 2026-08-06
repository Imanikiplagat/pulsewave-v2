import {
  Banknote,
  ShoppingCart,
  Users,
  Wallet,
  Boxes,
  Building2,
  FileText,
  BarChart3,
  Workflow,
  KeyRound,
} from "lucide-react";

import {
  ErpHeading,
  ErpReveal,
  ErpSection,
} from "../ErpPrimitive";

const modules = [
  {
    Icon: Banknote,
    title: "Finance Management",
    body: "Budgets, ledgers, imprest, payments and bank reconciliation in real time.",
  },
  {
    Icon: ShoppingCart,
    title: "Procurement",
    body: "Requisitions, tenders, LPOs and supplier performance with full audit history.",
  },
  {
    Icon: Users,
    title: "Human Resource Management",
    body: "Establishment, contracts, leave, discipline and performance appraisal.",
  },
  {
    Icon: Wallet,
    title: "Payroll",
    body: "Statutory-compliant payroll runs, deductions, payslips and bank files.",
  },
  {
    Icon: Boxes,
    title: "Inventory Management",
    body: "Stores, drug and consumable stock levels with reorder alerts per facility.",
  },
  {
    Icon: Building2,
    title: "Asset Management",
    body: "Asset registers, tagging, depreciation, transfers and disposal workflows.",
  },
  {
    Icon: FileText,
    title: "Document Management",
    body: "Versioned attachments linked to every transaction and approval.",
  },
  {
    Icon: BarChart3,
    title: "Reporting & Analytics",
    body: "Configurable dashboards from facility detail to executive summary.",
  },
  {
    Icon: Workflow,
    title: "Workflow Automation",
    body: "Rule-based routing, thresholds, reminders and automatic escalation.",
  },
  {
    Icon: KeyRound,
    title: "User & Role Management",
    body: "Granular permissions, delegation and segregation of duties.",
  },
];

export function ModulesSection() {
  return (
    <ErpSection id="modules" tone="gray">
      <ErpHeading
        eyebrow="ERP modules"
        title="Ten modules, deployed as you need them"
        description="Start with finance and procurement, then extend across the institution — every module shares the same data model and security."
      />

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {modules.map((m, i) => (
          <ErpReveal key={m.title} delay={(i % 5) * 0.05}>
            <article className="erp-lift group h-full rounded-2xl border border-border bg-card p-6 shadow-card">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-light-gray transition-colors group-hover:bg-lime-brand">
                <m.Icon className="h-5 w-5 text-navy" />
              </span>

              <h3 className="mt-4 text-sm font-bold text-navy">
                {m.title}
              </h3>

              <p className="mt-2 text-xs leading-relaxed text-dark-gray">
                {m.body}
              </p>
            </article>
          </ErpReveal>
        ))}
      </div>
    </ErpSection>
  );
}