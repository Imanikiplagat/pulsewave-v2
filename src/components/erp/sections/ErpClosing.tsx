import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Search,
  Settings2,
  Database,
  GraduationCap,
  Rocket,
  Award,
  Building2,
  ShieldCheck,
  MapPin,
  Users,
  Plus,
  Minus,
  ArrowRight,
  Mail,
  Phone, 
  Waves,  
} from "lucide-react";
import {
  FaLinkedin,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { ErpHeading, ErpReveal, ErpSection, CountUp } from "@/components/erp/ErpPrimitive";
import { Logo } from "@/components/brand/logo";
import { Link } from "react-router-dom";

/* ── Implementation process ─────────────────────────────────── */

const steps = [
  { Icon: Search, title: "Discovery", body: "Process mapping, gap analysis and success metrics agreed with your team." },
  { Icon: Settings2, title: "Configuration", body: "Modules, workflows, roles and chart of accounts configured to your structure." },
  { Icon: Database, title: "Data Migration", body: "Historical finance, HR and asset data cleansed, mapped and validated." },
  { Icon: GraduationCap, title: "Training", body: "Role-based training for officers, HODs and executives, plus admin enablement." },
  { Icon: Rocket, title: "Go Live & Support", body: "Phased rollout with on-site support, SLAs and continuous improvement." },
];

export function ImplementationProcess() {
  return (
    <ErpSection tone="gray">
      <ErpHeading
        eyebrow="Implementation process"
        title="A structured five-step rollout"
        description="Predictable delivery with clear milestones, sign-offs and knowledge transfer at every stage."
      />
      <ol className="relative mt-16 grid gap-8 md:grid-cols-5">
        <span
          aria-hidden
          className="absolute left-0 right-0 top-6 hidden h-px bg-border md:block"
        />
        {steps.map((s, i) => (
          <ErpReveal key={s.title} delay={i * 0.1}>
            <li className="relative">
              <motion.span
                whileHover={{ scale: 1.08, rotate: -3 }}
                className="relative z-10 grid h-12 w-12 place-items-center rounded-2xl bg-navy-gradient shadow-elegant"
              >
                <s.Icon className="h-5 w-5 text-navy-foreground" aria-hidden />
              </motion.span>
              <p className="mt-4 text-[11px] font-bold uppercase tracking-wider text-blue-brand">
                Step {i + 1}
              </p>
              <h3 className="mt-1 text-base font-bold text-navy">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-dark-gray">{s.body}</p>
            </li>
          </ErpReveal>
        ))}
      </ol>
    </ErpSection>
  );
}

/* ── Case study ─────────────────────────────────────────────── */

export function CaseStudy() {
  return (
    <ErpSection id="case-study">
      <ErpHeading
        eyebrow="Case study"
        title="Kisumu County ERP implementation"
        description="A county-wide rollout across health facilities and departments, delivered in phases with local support."
      />

      <div className="mt-14 grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <ErpReveal>
          <div className="overflow-hidden rounded-3xl border border-border bg-light-gray p-4 shadow-elegant">
            <div className="rounded-2xl border border-border bg-card">
              <div className="flex items-center justify-between gap-3 border-b border-border px-4 py-3">
                <p className="text-xs font-bold text-navy">County Executive Dashboard</p>
                <span className="rounded-full bg-lime-brand px-2 py-0.5 text-[10px] font-bold text-navy">
                  FY 2025/26
                </span>
              </div>
              <div className="grid gap-4 p-4 sm:grid-cols-2">
                <div className="rounded-xl border border-border p-4">
                  <p className="text-[10px] uppercase tracking-wider text-dark-gray">
                    Facility revenue
                  </p>
                  <p className="mt-1 text-xl font-extrabold text-navy">KES 1.42B</p>
                  <div className="mt-4 flex h-20 items-end gap-1.5" aria-hidden>
                    {[40, 55, 48, 62, 70, 66, 81, 88, 92].map((h, i) => (
                      <motion.span
                        key={i}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: i * 0.05 }}
                        className="flex-1 rounded-t bg-navy-gradient"
                      />
                    ))}
                  </div>
                </div>
                <div className="rounded-xl border border-border p-4">
                  <p className="text-[10px] uppercase tracking-wider text-dark-gray">
                    Approvals cycle time
                  </p>
                  <p className="mt-1 text-xl font-extrabold text-navy">1.8 days</p>
                  <ul className="mt-4 space-y-2.5">
                    {[
                      ["Requisitions", 86],
                      ["Imprest", 72],
                      ["Payments", 91],
                    ].map(([l, v]) => (
                      <li key={l as string}>
                        <div className="flex justify-between text-[10px] text-dark-gray">
                          <span>{l}</span>
                          <span className="font-semibold text-navy">{v}%</span>
                        </div>
                        <div className="mt-1 h-1.5 rounded-full bg-light-gray">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${v}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.9 }}
                            className="h-1.5 rounded-full bg-blue-brand"
                          />
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </ErpReveal>

        <div className="min-w-0">
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { Icon: Building2, v: 38, s: "+", l: "Hospitals & facilities onboarded" },
              { Icon: Users, v: 2400, s: "+", l: "Officers trained on the platform" },
              { Icon: ShieldCheck, v: 100, s: "%", l: "Transactions with audit trails" },
              { Icon: Award, v: 12, s: " months", l: "County-wide phased rollout" },
            ].map((m, i) => (
              <ErpReveal key={m.l} delay={i * 0.07}>
                <div className="erp-lift h-full rounded-2xl border border-border bg-card p-5 shadow-card">
                  <m.Icon className="h-5 w-5 text-blue-brand" aria-hidden />
                  <p className="mt-3 text-2xl font-extrabold text-navy">
                    <CountUp value={m.v} suffix={m.s} />
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-dark-gray">{m.l}</p>
                </div>
              </ErpReveal>
            ))}
          </div>
          <ErpReveal delay={0.2}>
            <blockquote className="mt-6 rounded-2xl border border-border bg-light-gray p-6">
              <p className="text-sm leading-relaxed text-foreground">
                “Consolidated reporting that used to take three weeks now takes minutes, and every
                facility works from the same numbers.”
              </p>
              <footer className="mt-3 flex items-center gap-2 text-xs font-semibold text-dark-gray">
                <MapPin className="h-3.5 w-3.5 text-blue-brand" aria-hidden />
                County Department of Finance, Kisumu
              </footer>
            </blockquote>
          </ErpReveal>
        </div>
      </div>
    </ErpSection>
  );
}

/* ── Why PulseWave ──────────────────────────────────────────── */

const why = [
  { Icon: Building2, t: "Government-focused expertise", b: "Built around PFM regulations, county structures and public-sector audit requirements." },
  { Icon: ShieldCheck, t: "Secure & scalable architecture", b: "Encrypted data, granular access control and infrastructure that grows with your institution." },
  { Icon: MapPin, t: "Local implementation & support", b: "Kenyan delivery teams, on-site training and responsive support within your time zone." },
  { Icon: Award, t: "Proven success", b: "Live across counties and referral hospitals with measurable efficiency gains." },
];

export function WhyPulseWave() {
  return (
    <ErpSection tone="gray">
      <ErpHeading eyebrow="Why PulseWave ERP" title="A partner, not just a platform" />
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {why.map((w, i) => (
          <ErpReveal key={w.t} delay={i * 0.07}>
            <article className="erp-lift h-full rounded-3xl border border-border bg-card p-7 shadow-card">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-navy-gradient">
                <w.Icon className="h-5 w-5 text-navy-foreground" aria-hidden />
              </span>
              <h3 className="mt-5 text-base font-bold text-navy">{w.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-dark-gray">{w.b}</p>
            </article>
          </ErpReveal>
        ))}
      </div>
    </ErpSection>
  );
}

/* ── FAQ ────────────────────────────────────────────────────── */

const faqs = [
  {
    q: "How long does a typical ERP implementation take?",
    a: "A focused departmental rollout goes live in 8–12 weeks. A full county-wide or multi-facility programme is usually delivered in phases over 6–12 months, with the first modules live early.",
  },
  {
    q: "Can PulseWave ERP integrate with IFMIS and existing systems?",
    a: "Yes. The platform exposes secure APIs and supports file-based exchange with IFMIS, HMIS, banking partners, payment gateways and revenue systems.",
  },
  {
    q: "Where is our data hosted and how is it secured?",
    a: "Data is encrypted in transit and at rest, with role-based access control, immutable audit logs and hosting options that meet local data residency requirements.",
  },
  {
    q: "Do you migrate our historical records?",
    a: "Migration is a dedicated phase. We cleanse, map and validate finance, HR, payroll and asset records, then reconcile balances with your team before sign-off.",
  },
  {
    q: "What support do we get after go live?",
    a: "Every deployment includes SLA-backed support, a named implementation lead, refresher training and continuous improvement reviews each quarter.",
  },
  {
    q: "Can we start with only a few modules?",
    a: "Absolutely. Most institutions begin with finance and procurement, then add payroll, HR, inventory and assets as adoption grows — all on the same data model.",
  },
];

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <ErpSection id="faq">
      <ErpHeading
        eyebrow="FAQ"
        title="Frequently asked questions"
        description="Answers to what procurement, finance and ICT teams ask most often."
      />
      <div className="mx-auto mt-12 max-w-3xl space-y-3">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <ErpReveal key={f.q} delay={i * 0.04}>
              <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-colors hover:border-blue-brand">
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="min-w-0 text-sm font-semibold text-navy sm:text-base">
                      {f.q}
                    </span>
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-light-gray text-navy">
                      {isOpen ? (
                        <Minus className="h-4 w-4" aria-hidden />
                      ) : (
                        <Plus className="h-4 w-4" aria-hidden />
                      )}
                    </span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <p className="px-6 pb-6 text-sm leading-relaxed text-dark-gray">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </ErpReveal>
          );
        })}
      </div>
    </ErpSection>
  );
}

/* ── CTA ────────────────────────────────────────────────────── */

export function ErpCTA() {
  return (
    <section id="cta" className="scroll-mt-24 bg-[var(--navy)] py-20 sm:py-24">
      <div className="container-page text-center">
        <ErpReveal>
          <h2 className="mx-auto max-w-3xl text-3xl font-extrabold text-navy-foreground sm:text-4xl">
            Ready to Transform Your Operations?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-navy-foreground/80">
            Request a personalized ERP demonstration and see how PulseWave unifies finance,
            procurement, HR and reporting for your institution.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-9">
<Link
  to="/contact"
  className="inline-flex items-center gap-3 rounded-full bg-lime-brand px-12 py-6 text-3xl font-bold text-navy shadow-elegant transition-transform hover:-translate-y-0.5"
>
  Book a Demo
  <ArrowRight className="h-6 w-6" aria-hidden />
</Link>

<Link
  to="/contact"
  className="inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-12 py-6 text-3xl font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/20"
>
  Contact Us
</Link>
          </div>
        </ErpReveal>
      </div>
    </section>
  );
}

/* ── Footer ─────────────────────────────────────────────────── */

const footerCols = [
  {
    title: "Platform",
    links: [
      ["ERP Modules", "#modules"],
      ["Key Features", "#features"],
      ["Benefits", "#benefits"],
    ],
  },
  {
    title: "Company",
    links: [
      ["Case Study", "#case-study"],
      ["Why PulseWave", "#overview"],
      ["FAQ", "#faq"],
    ],
  },
  {
    title: "Support",
    links: [
      ["Book a Demo", "/contact"],
      ["Contact Us", "/contact"],
      ["Implementation", "#overview"],
    ],
  },
] as const;

export function ErpFooter() {
  return (
    <footer className="border-t border-border bg-light-gray">
      <div className="container-page py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div className="min-w-0">
            <div className="flex items-center gap-2.5">
              <Logo className="h-15 w-auto" />
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-navy-gradient">
                
              </span>
              
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-dark-gray">
              Enterprise software for government and healthcare institutions across Kenya.
            </p>
            <ul className="mt-6 space-y-2.5 text-sm text-dark-gray">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-blue-brand" aria-hidden />
                <a className="hover:text-navy" href="mailto:info@pulsewavetechnologies.com">
                  info@pulsewavetechnologies.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-blue-brand" aria-hidden /> +254 796 222 111
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0 text-blue-brand" aria-hidden /> Phileo Arcade
                 <br/> Thika Road, Nairobi, Kenya
              </li>
            </ul>
            <div className="mt-6 flex gap-2">
              {[
                { Icon: FaLinkedin, label: "LinkedIn" },
                { Icon: FaXTwitter, label: "X" },
                { Icon: FaYoutube, label: "YouTube" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#hero"
                  aria-label={`PulseWave on ${label}`}
                  className="grid h-9 w-9 place-items-center rounded-xl border border-border bg-card text-dark-gray transition-colors hover:border-blue-brand hover:text-navy"
                >
                  <Icon className="h-4 w-4" aria-hidden />
                </a>
              ))}
            </div>
          </div>

          {footerCols.map((col) => (
            <nav key={col.title} aria-label={col.title} className="min-w-0">
              <h3 className="text-sm font-bold text-navy">{col.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map(([label, href]) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-sm text-dark-gray transition-colors hover:text-navy"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-border pt-7 sm:flex-row">
          <p className="text-xs text-dark-gray">© 2026 PulseWave Technologies. All rights reserved.</p>
          <p className="text-xs text-dark-gray">Enterprise Resource Planning · Government &amp; Healthcare</p>
        </div>
      </div>
    </footer>
  );
}