import {
  Gauge,
  Workflow,
  ShieldCheck,
  History,
  Paperclip,
  Layers,
  Lock,
  Plug,
  FileCheck2,
} from "lucide-react";

import {
  ErpHeading,
  ErpReveal,
  ErpSection,
} from "../ErpPrimitive";

import { FeatureVisual } from "@/components/erp/FeatureVisual";

const features = [
  {
    Icon: Gauge,
    title: "Real-time Dashboards",
    body: "Executive, departmental and facility views refresh as transactions post — no month-end wait for numbers.",
    points: ["Budget absorption tracking", "Revenue vs. expenditure trends", "Drill-down to source documents"],
    visual: "chart" as const,
  },
  {
    Icon: Workflow,
    title: "Automated Approval Workflows",
    body: "Configurable routing moves requisitions, imprests and LPOs through the right officers with thresholds and escalation.",
    points: ["Multi-level routing rules", "Delegation while on leave", "Automatic reminders"],
    visual: "flow" as const,
  },
  {
    Icon: ShieldCheck,
    title: "Role-Based Access Control",
    body: "Permissions map to your establishment so officers see only what their role requires, with clean segregation of duties.",
    points: ["Granular module permissions", "Segregation of duties checks", "Single sign-on ready"],
    visual: "roles" as const,
  },
  {
    Icon: History,
    title: "Audit Trails & Compliance",
    body: "Every create, edit and approval is stamped and immutable, giving auditors a complete evidence chain on demand.",
    points: ["Immutable transaction logs", "Attachment provenance", "Exportable audit packs"],
    visual: "audit" as const,
  },
];

const extraFeatures = [
  { Icon: Paperclip, t: "Document Attachments" },
  { Icon: Layers, t: "Multi-level Reporting" },
  { Icon: Lock, t: "Data Security" },
  { Icon: Plug, t: "External System Integration" },
];

export function FeaturesSection() {
  return (
    <ErpSection id="features">
      <ErpHeading
        eyebrow="Key features"
        title="Built for accountability at institutional scale"
      />
      <div className="mt-16 space-y-16">
        {features.map((f, i) => (
          <div
            key={f.title}
            className="grid items-center gap-10 lg:grid-cols-2"
          >
            <ErpReveal className={i % 2 === 1 ? "lg:order-2" : ""}>
              <FeatureVisual kind={f.visual} />
            </ErpReveal>
            <ErpReveal delay={0.08} className="min-w-0">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-navy-gradient">
                <f.Icon className="h-5 w-5 text-navy-foreground" aria-hidden />
              </span>
              <h3 className="mt-5 text-2xl font-extrabold text-navy">{f.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-dark-gray">{f.body}</p>
              <ul className="mt-5 space-y-2.5">
                {f.points.map((p) => (
                  <li key={p} className="flex items-center gap-2.5 text-sm text-foreground">
                    <FileCheck2 className="h-4 w-4 shrink-0 text-blue-brand" aria-hidden />
                    {p}
                  </li>
                ))}
              </ul>
            </ErpReveal>
          </div>
        ))}
      </div>

      <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {extraFeatures.map((f, i) => (
          <ErpReveal key={f.t} delay={i * 0.05}>
            <div className="erp-lift flex h-full items-center gap-3 rounded-2xl border border-border bg-card p-5 shadow-card">
              <f.Icon className="h-5 w-5 shrink-0 text-blue-brand" aria-hidden />
              <p className="min-w-0 text-sm font-semibold text-navy">{f.t}</p>
            </div>
          </ErpReveal>
        ))}
      </div>
    </ErpSection>
  );
}