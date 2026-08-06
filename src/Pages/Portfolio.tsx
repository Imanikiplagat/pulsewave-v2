import { Link } from "react-router-dom";
import {
  ArrowRight,
  Quote,
  TrendingUp,
  Building2,
  Award,
  Server,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";
import { FadeIn, SectionHeader } from "@/layouts/Section";
import image1 from "../assets/portfolio/image1.jpeg";
import image2 from "../assets/portfolio/image2.jpeg";
import image3 from "../assets/portfolio/image3.jpeg";
import image4 from "../assets/portfolio/image4.jpeg";
import image5 from "../assets/portfolio/image5.jpeg";
import image6 from "../assets/portfolio/image6.jpeg";
import image7 from "../assets/portfolio/image7.jpeg";
import image8 from "../assets/portfolio/image8.jpeg";
import image9 from "../assets/portfolio/image9.jpeg";
import image10 from "../assets/portfolio/image10.jpeg";
import image11 from "../assets/portfolio/image11.jpeg";
import image12 from "../assets/portfolio/image12.jpeg";
import image13 from "../assets/portfolio/image13.jpeg";
import image14 from "../assets/portfolio/image14.jpeg";

const stats = [
  {
    icon: Building2,
    value: "6+",
    label:
      "County governments & national/teaching referral hospitals served",
    detail: "PulseWave has delivered digital transformation solutions to multiple county governments and national referral hospitals, demonstrating our expertise in public-sector digitization.",  
  },
  {
    icon: TrendingUp,
    value: "7×",
    label:
      "Wajir County revenue growth ",
    detail: "Wajir County experienced a remarkable 7× growth in revenue over two years, increasing from KES 46M in FY22/23 to KES 331M in FY24/25, showcasing the effectiveness of our integrated revenue collection system.",  
  },
  {
    icon: TrendingUp,
    value: "4×",
    label:
      "Embu County revenue growth",
    detail: "Embu County saw a significant 4×+ growth in revenue, increasing from KES 400M to KES 1.68B by FY25/26, highlighting the success of our integrated revenue management approach.",  
  },
  {
    icon: TrendingUp,
    value: "+23%",
    label:
      "Murang'a County revenue growth",
    detail: "Murang'a County saw a 23% increase in revenue, going from KES 746M in FY24/25 to KES 917M in FY25/26, demonstrating the impact of our digital transformation initiatives.",  
  },
  {
    icon: Server,
    value: "170",
    label:
      "Facilities on our procurement system — Murang'a County",
    detail: "Murang'a County has successfully implemented our procurement system across 170 facilities, streamlining procurement processes and enhancing operational efficiency.",
  },
  {
    icon: Server,
    value: "156",
    label:
      "Hospitals running our ERP — Kisumu County",
    detail: "Kisumu County has deployed our hospital ERP across 156 hospitals, standardizing operations and improving management of healthcare services.",
  },
];

const projects = [
  {
    title: "Murang'a County — County-Wide Digital Transformation",
    images: [image1, image2, image3, image4],
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
    images: [image11, image14, image7, image12],
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
    images: [image9, image10, image5, image4],
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
    images: [image8, image13, image6, image8],
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
    images: [image13, image6, image8, image13],
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
  const [expanded, setExpanded] = useState<number | null>(null);

const toggleCard = (index: number) => {
  setExpanded((prev) => (prev === index ? null : index));
};

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
      <div
  className="
    group relative h-full overflow-hidden rounded-2xl
    border border-[var(--color-border)]
    bg-gradient-to-br from-white via-white to-slate-50
    p-8
    shadow-lg
    transition-all duration-500
    hover:-translate-y-2
    hover:shadow-2xl
    hover:border-[var(--primary)]
  "
>
  {/* Corner glow */}
  <span className="pointer-events-none absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-[var(--primary)]/5 transition-colors duration-500 group-hover:bg-[var(--primary)]/10" />

  <div className="relative z-10">
    {/* Icon */}
    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--primary)]/10 text-[var(--primary)] transition-all duration-300 group-hover:scale-110">
      <s.icon className="h-6 w-6" />
    </div>

    {/* Animated Number */}
    <h3 className="text-5xl font-black leading-none text-[var(--navy)]">
      {s.value}
    </h3>

    {/* Label */}
    <p className="mt-4 text-sm leading-relaxed text-[var(--dark-gray)]">
      {s.label}
    </p>

    {/* Expandable details */}
    <div className="mt-8 border-t border-[var(--color-border)] pt-5">
      <button
        onClick={() => toggleCard(i)}
        className="flex items-center gap-2 text-sm font-medium text-[var(--primary)] transition-colors hover:text-[var(--navy)]"
      >
        {expanded === i ? "Hide details" : "Performance details"}

        <ChevronDown
          className={`h-4 w-4 transition-transform ${
            expanded === i ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`grid transition-all duration-300 ${
          expanded === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="mt-4 rounded-lg bg-[var(--primary)]/5 p-4 text-sm leading-relaxed text-[var(--dark-gray)]">
            {s.detail}
          </p>
        </div>
      </div>
    </div>
  </div>
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
                    {p.images.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`${p.title} ${index + 1}`}
                        className="h-full w-full rounded-xl object-cover"
                      />
                    ))}
                  </div>
                </div>

                <p className="mt-3 text-center text-xs text-[var(--dark-gray)]">
                  {p.title} Gallery
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
