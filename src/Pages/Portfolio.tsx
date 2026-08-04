import { Link } from "react-router-dom";
import {
  ArrowRight,
  Quote,
  TrendingUp,
  Building2,
  Award,
  Server,
} from "lucide-react";

import { FadeIn, SectionHeader } from "@/layouts/Section";

const stats = [
  {
    icon: Building2,
    value: "6+",
    label:
      "County governments & national/teaching referral hospitals served",
  },
  {
    icon: TrendingUp,
    value: "7×",
    label:
      "Wajir County revenue growth — KES 46M (FY22/23) → KES 331M (FY24/25)",
  },
  {
    icon: TrendingUp,
    value: "4×+",
    label:
      "Embu County revenue growth — KES 400M → KES 1.68B (FY25/26)",
  },
  {
    icon: TrendingUp,
    value: "+23%",
    label:
      "Murang'a County revenue — KES 746M (FY24/25) → KES 917M (FY25/26)",
  },
  {
    icon: Server,
    value: "170",
    label:
      "Facilities on our procurement system — Murang'a County",
  },
  {
    icon: Server,
    value: "156",
    label:
      "Hospitals running our ERP — Kisumu County",
  },
];

const projects = [
  {
    title: "Murang'a County — County-Wide Digital Transformation",
    industry: "County Government",
    client: "Murang'a County Government",
    challenge:
      "Fragmented, manual processes across revenue, lands, health, HR and procurement, with significant revenue leakage and limited executive visibility.",
    solution:
      "Delivered a fully integrated digital government ecosystem: revenue management (single business permits, liquor, land rates, parking, market & quarry fees, health & veterinary revenue) via USSD (*267#), web, POS and mobile; citizen digital services; lands digitization with GIS; health digital transformation with EMR and telemedicine; HR automation with biometric attendance; procurement, finance, asset & fleet management; and executive GIS dashboards.",
    tech: [
      "USSD *267#",
      "Web & Mobile",
      "POS",
      "Mobile Money",
      "Bank Integration",
      "GIS",
      "EMR",
      "Telemedicine",
      "Biometrics",
    ],
    results: [
      "Revenue: KES 400M → KES 1.68B (FY25/26)",
      "Procurement live in 170 facilities",
      "Reduced turnaround & office visits",
      "Full auditability of transactions",
      "Live executive dashboards",
      "National benchmark for digital transformation",
    ],
    testimonial:
      "Murang'a has become a national benchmark for county digital transformation, attracting benchmarking visits from other counties.",
    related: [
      "Revenue Collection",
      "ERP Solutions",
      "Business Intelligence",
      "HR & Payroll",
    ],
  },
  {
    title: "Wajir County — Revenue Collection & Management System",
    industry: "County Government",
    client: "Wajir County Government",
    challenge:
      "Structured and unstructured revenue streams collected manually, with limited visibility of Wajir Water & Sanitation Company revenue and SHA collections.",
    solution:
      "Deployed an integrated revenue collection system covering all streams, including Wajir Water and Sanitation, and integrated with the existing HMIS to surface SHA (Social Health Authority) collections.",
    tech: [
      "Revenue Platform",
      "HMIS Integration",
      "Mobile Money",
      "POS",
      "Dashboards",
    ],
    results: [
      "FY22/23: KES 46M",
      "FY23/24: KES 165M",
      "FY24/25: KES 331M",
      "Over 7× growth in two years",
    ],
    testimonial:
      "Closed leakages and unified visibility across structured and unstructured streams.",
    related: [
      "Revenue Collection",
      "Systems Integration",
    ],
  },
  {
    title: "Embu County — Revenue, Lands & Financial Systems",
    industry: "County Government",
    client: "Embu County Government",
    challenge:
      "Siloed revenue, lands, procurement and funds-requisition processes limiting accountability and slowing land-development approvals.",
    solution:
      "Delivered the Integrated County Revenue Collection & Management System (ICRMS), Lands Management & Electronic Development Application System, Facility Improvement Fund Procurement & Supplier Management System, and Funds Requisition Management System.",
    tech: [
      "ICRMS",
      "Lands & e-Development",
      "Procurement",
      "Funds Requisition",
    ],
    results: [
      "Revenue: KES 746M → KES 917M (FY25/26)",
      "Digital, auditable workflows",
      "Shorter land-approval turnaround",
      "Stronger financial accountability",
    ],
    testimonial:
      "Digital, auditable workflows across revenue, lands, procurement and funds requisition.",
    related: [
      "Revenue Collection",
      "Real Estate Management",
      "Procurement",
      "Finance & Accounting",
    ],
  },
  {
    title: "JOOTRH — Hospital ERP Deployment",
    industry: "National Referral Hospital",
    client:
      "Jaramogi Oginga Odinga Teaching & Referral Hospital",
    challenge:
      "Disconnected HR, procurement and finance operations at a major national referral hospital.",
    solution:
      "Deployed an ERP covering HR (with biometric attendance), procurement & supply chain, finance, accounting, and integration with the hospital's existing HMIS.",
    tech: [
      "Hospital ERP",
      "Biometrics",
      "HMIS Integration",
      "Finance",
      "Procurement",
    ],
    results: [
      "Streamlined HR and procurement",
      "Unified finance & accounting",
      "Model later replicated in Kisumu County",
    ],
    testimonial:
      "The reference deployment that shaped our multi-facility hospital ERP model.",
    related: [
      "ERP Solutions",
      "HR & Payroll",
      "Hospital Management",
    ],
  },
  {
    title: "Kisumu County — Multi-Facility Hospital ERP Rollout",
    industry: "County Health",
    client: "Kisumu County Government",
    challenge:
      "Automating hospital operations across a large county network of facilities.",
    solution:
      "Building on the JOOTRH model, deployed the same ERP approach across 156 hospitals, streamlining procurement and HR county-wide.",
    tech: [
      "Hospital ERP",
      "Procurement",
      "HR",
      "Biometrics",
    ],
    results: [
      "156 hospitals live",
      "County-wide procurement automation",
      "Unified HR management",
    ],
    testimonial:
      "Scaled a single-hospital model into a county-wide platform.",
    related: [
      "Hospital Management",
      "ERP Solutions",
      "Procurement",
    ],
  },
];

export default function Portfolio() {
  return (
    <div>
      <section style={{ background: "var(--gradient-hero)" }}>
        <div className="container-page py-20 md:py-24">
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--navy)]/15 bg-white px-3 py-1 text-xs font-bold uppercase tracking-widest text-[var(--navy)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--lime-brand)]" />
            Portfolio
          </span>

          <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[1.05] text-[var(--navy)] sm:text-6xl md:text-7xl">
            Track record you can{" "}
            <span className="underline-lime">
              measure
            </span>.
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-[var(--dark-gray)]">
            Selected case studies from PulseWave's
            government-sector digitization portfolio —
            spanning revenue transformation, lands,
            health and county-wide ERP rollouts.
          </p>
        </div>
      </section>

      <section className="container-page py-16">
        <FadeIn>
          <SectionHeader
            eyebrow="Track record at a glance"
            title="Real numbers from real deployments."
          />
        </FadeIn>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((s, i) => (
            <FadeIn key={s.label} delay={i * 0.05}>
              <div className="h-full rounded-2xl border border-[var(--color-border)] bg-white p-6 shadow-[var(--shadow-card)]">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-[var(--navy)] text-white">
                  <s.icon className="h-5 w-5" />
                </span>

                <p className="mt-4 text-4xl font-black text-[var(--navy)]">
                  {s.value}
                </p>

                <p className="mt-2 text-sm text-[var(--dark-gray)]">
                  {s.label}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
                <FadeIn delay={0.15}>
          <div className="mt-8 flex items-start gap-3 rounded-2xl border border-[var(--lime-brand)]/50 bg-[var(--lime-brand)]/15 p-5">
            <Award className="mt-0.5 h-5 w-5 text-[var(--navy)]" />

            <p className="text-sm font-semibold text-[var(--navy)]">
              Recognition — Murang'a County has become a national benchmark
              for digital transformation, attracting benchmarking visits
              from other counties.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* PROJECTS */}

      <section className="container-page space-y-16 pb-8">
        {projects.map((p) => (
          <FadeIn key={p.title}>
            <article className="grid gap-8 rounded-3xl border border-[var(--color-border)] bg-white p-8 shadow-[var(--shadow-card)] lg:grid-cols-12 lg:p-10">
              <div className="lg:col-span-5">
                <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-[var(--navy)] via-[var(--blue-brand)] to-[var(--lime-brand)]">
                  <div className="grid h-full grid-cols-2 gap-2 p-4">
                    {[0, 1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="rounded-xl bg-white/90"
                      />
                    ))}
                  </div>
                </div>

                <p className="mt-3 text-center text-xs text-[var(--dark-gray)]">
                  Project gallery placeholder
                </p>
              </div>

              <div className="lg:col-span-7">
                <p className="text-xs font-bold uppercase tracking-widest text-[var(--blue-brand)]">
                  {p.industry} · {p.client}
                </p>

                <h2 className="mt-2 text-3xl font-black text-[var(--navy)]">
                  {p.title}
                </h2>

                <div className="mt-6 grid gap-5 sm:grid-cols-2">
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest text-[var(--dark-gray)]">
                      Challenge
                    </h4>

                    <p className="mt-2 text-[var(--navy)]">
                      {p.challenge}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest text-[var(--dark-gray)]">
                      Solution
                    </h4>

                    <p className="mt-2 text-[var(--navy)]">
                      {p.solution}
                    </p>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="text-sm font-bold uppercase tracking-widest text-[var(--dark-gray)]">
                    Outcomes
                  </h4>

                  <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                    {p.results.map((r) => (
                      <li
                        key={r}
                        className="rounded-xl bg-[var(--light-gray)] p-3 text-sm font-semibold text-[var(--navy)]"
                      >
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6">
                  <h4 className="text-sm font-bold uppercase tracking-widest text-[var(--dark-gray)]">
                    Technologies & Channels
                  </h4>

                  <div className="mt-2 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-[var(--color-border)] px-3 py-1 text-xs font-medium text-[var(--navy)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <blockquote className="mt-6 flex gap-3 rounded-2xl bg-[var(--light-gray)] p-5">
                  <Quote className="h-5 w-5 shrink-0 text-[var(--blue-brand)]" />

                  <p className="italic text-[var(--navy)]">
                    "{p.testimonial}"
                  </p>
                </blockquote>

                <div className="mt-6 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-[var(--dark-gray)]">
                    Related solutions:
                  </span>

                  {p.related.map((r) => (
                    <span
                      key={r}
                      className="rounded-full bg-[var(--navy)]/5 px-3 py-1 text-xs font-medium text-[var(--navy)]"
                    >
                      {r}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </FadeIn>
        ))}
      </section>
            {/* Expanding footprint */}
      <section className="container-page py-16">
        <FadeIn>
          <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--light-gray)] p-8 md:p-10">
            <SectionHeader
              eyebrow="Expanding public-sector footprint"
              title="New engagements onboarding."
            />

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-[var(--color-border)] bg-white p-6">
                <h4 className="text-lg font-bold text-[var(--navy)]">
                  Othaya Level 6 Hospital
                </h4>

                <p className="mt-2 text-sm text-[var(--dark-gray)]">
                  Requested an ERP modeled on our JOOTRH deployment.
                </p>
              </div>

              <div className="rounded-2xl border border-[var(--color-border)] bg-white p-6">
                <h4 className="text-lg font-bold text-[var(--navy)]">
                  Kiambu County Government
                </h4>

                <p className="mt-2 text-sm text-[var(--dark-gray)]">
                  Expressed interest in replicating the digital
                  transformation model built for Murang'a County.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Why PulseWave */}

      <section className="container-page pb-16">
        <FadeIn>
          <SectionHeader
            eyebrow="Why PulseWave"
            title="Built for public-service digitization."
            description="Our government-sector portfolio reflects the realities of resource-constrained environments — fragmented legacy systems, revenue leakage, low digital penetration outside major towns, and infrastructure that varies by location."
          />
        </FadeIn>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {[
            "Multi-channel access design (USSD, web, mobile, POS) that works across varying levels of connectivity and device access",

            "Proven ability to turn fragmented, manual government processes into integrated, auditable digital ecosystems",

            "Scale from a single pilot facility to systems running across hundreds of institutions",

            "Deep experience integrating with pre-existing systems (e.g., HMIS) rather than requiring costly rip-and-replace",

            "Methodology that pairs system delivery with training and change management for sustained adoption",

            "Track record with counties, national referral hospitals and multi-facility health networks",
          ].map((point, i) => (
            <FadeIn
              key={point}
              delay={i * 0.04}
            >
              <div className="h-full rounded-2xl border border-[var(--color-border)] bg-white p-6">
                <p className="text-sm text-[var(--navy)]">
                  {point}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
            {/* CTA */}

      <section className="container-page pb-24">
        <div className="rounded-3xl border border-[var(--color-border)] bg-white p-10 text-center">
          <h3 className="text-3xl font-black text-[var(--navy)]">
            Bringing this experience to your institution.
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-[var(--dark-gray)]">
            PulseWave Technologies welcomes new government-sector
            digitization initiatives and adapts every engagement
            to the specific institutional and infrastructure
            context.
          </p>

          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[var(--navy)] px-6 py-3.5 font-semibold text-white transition hover:bg-[color-mix(in_oklab,var(--navy)_88%,white)]"
          >
            Start a conversation

            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
