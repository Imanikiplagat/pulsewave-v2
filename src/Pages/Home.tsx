import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  ArrowRight,
  ShieldCheck,
  Cloud,
  Layers,
  CheckCircle2,
  Quote,
  Sparkles,
  Building2,
  Factory,
  Landmark,
  GraduationCap,
  Stethoscope,
  ShoppingBag,
} from "lucide-react";


import { FadeIn, SectionHeader } from "@/layouts/Section";
import { solutions } from "@/lib/solutions";
import LogoCarousel from "@/components/ui/logoCarousel";

const highlights = [
  {
    icon: ShieldCheck,
    label: "Enterprise-grade security",
  },
  {
    icon: Cloud,
    label: "Cloud & on-premise",
  },
  {
    icon: Layers,
    label: "15+ integrated modules",
  },
];

const industries = [
  {
    icon: Building2,
    name: "Real Estate",
  },
  {
    icon: Factory,
    name: "Manufacturing",
  },
  {
    icon: Landmark,
    name: "Public Sector",
  },
  {
    icon: GraduationCap,
    name: "Education",
  },
  {
    icon: Stethoscope,
    name: "Healthcare",
  },
  {
    icon: ShoppingBag,
    name: "Retail",
  },
];

const projects = [
  {
    title: "County Revenue Digitization",
    industry: "Public Sector",
    result: "+62% own-source revenue",
  },
  {
    title: "Group ERP Consolidation",
    industry: "Manufacturing",
    result: "6 systems → 1 platform",
  },
  {
    title: "SACCO Core Modernization",
    industry: "Financial Services",
    result: "24-hour loan disbursement",
  },
];

const testimonials = [
  {
    quote:
      "PulseWave transformed how we operate. Our teams finally share one source of truth.",
    name: "CFO",
    org: "National Distribution Group",
  },
  {
    quote:
      "The revenue platform paid for itself in the first quarter.",
    name: "County Executive",
    org: "County Government",
  },
  {
    quote:
      "Delivered on time, on budget, and with a team that truly understands enterprise scale.",
    name: "CTO",
    org: "Financial Services Group",
  },
];

export default function Home() {
  const featuredSolutions = solutions.slice(0, 8);

  return (
    <div>
      {/* HERO */}

      <section
        className="relative overflow-hidden"
        style={{ background: "var(--gradient-hero)" }}
      >
        <div className="pointer-events-none absolute -right-24 top-10 h-[520px] w-[520px] rotate-12 rounded-[80px] bg-[var(--blue-brand)]/8" />

        <div className="pointer-events-none absolute right-24 top-40 h-[380px] w-[380px] rotate-6 rounded-[64px] bg-[var(--lime-brand)]/20" />

        <div className="container-page relative grid gap-10 py-12 md:py-16 lg:grid-cols-12">
          <div className="lg:col-span-10">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 rounded-full border border-[var(--navy)]/15 bg-white px-3 py-1 text-xs font-bold uppercase tracking-widest text-[var(--navy)]"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--lime-brand)]" />

              ERP for Enterprises
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.05,
                duration: 0.6,
              }}
              className="mt-6 text-5xl font-black leading-[1.02] tracking-tight text-[var(--navy)] sm:text-6xl md:text-5xl"
            >
              Transforming Public Services

              <br className="hidden sm:block" />

              Through{" "}
              <span className="underline-lime">
                Digital Innovation.
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[var(--navy)] px-6 py-3.5 text-base font-semibold text-white shadow-[var(--shadow-elegant)] transition hover:bg-[color-mix(in_oklab,var(--navy)_88%,white)]"
              >
                Request a Demo

                <ArrowRight className="h-5 w-5" />
              </Link>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-base font-semibold text-[var(--navy)] hover:text-[var(--blue-brand)]"
              >
                Learn about us

                <ArrowRight className="h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </div>
                {/* Highlights + Module Explorer */}
        <div className="container-page relative">
          <div className="grid gap-6 border-t border-[var(--color-border)] py-5 lg:grid-cols-12 lg:gap-10">
            <ul className="grid gap-4 sm:grid-cols-3 lg:col-span-5">
              {highlights.map((h) => (
                <li
                  key={h.label}
                  className="flex items-center gap-2 text-sm font-medium text-[var(--navy)]"
                >
                  <span className="grid h-7 w-7 place-items-center rounded-md bg-[var(--navy)]/6 text-[var(--navy)]">
                    <h.icon className="h-4 w-4" />
                  </span>

                  {h.label}
                </li>
              ))}
            </ul>

            <div className="lg:col-span-7">
              <p className="text-xs font-bold uppercase tracking-widest text-[var(--dark-gray)]">
                Explore modules
              </p>

              <div className="mt-3 flex flex-wrap gap-2">
                {featuredSolutions.map((s) => (
                  <Link
                    key={s.slug}
                    to={`/solutions/${s.slug}`}
                    className="rounded-full border border-[var(--color-border)] bg-white px-4 py-1.5 text-sm text-[var(--navy)] transition hover:border-[var(--navy)] hover:bg-[var(--navy)] hover:text-white"
                  >
                    {s.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRACK RECORD */}

      <section className="container-page py-20">
        <FadeIn>
          <SectionHeader
            eyebrow="Track record at a glance"
            title="Measurable impact for government institutions."
            description="Six-plus county governments and national/teaching referral hospitals served, with further engagements onboarding."
            center
          />
        </FadeIn>

        <LogoCarousel />

        <div className="mx-auto mt-12 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              v: "7×",
              l: "Wajir County revenue growth",
              s: "KES 46M  → KES 331M ",
            },
            {
              v: "4×",
              l: "Embu County revenue growth",
              s: "KES 400M  → KES 1.68B ",
            },
            {
              v: "+23%",
              l: "Murang'a County revenue",
              s: "KES 746M  → KES 917M ",
            },
            {
              v: "170",
              l: "Facilities on our procurement system",
              s: "Murang'a County",
            },
            {
              v: "156",
              l: "Hospitals running our ERP",
              s: "Kisumu County",
            },
            {
              v: "6+",
              l: "County governments & referral hospitals",
              s: "Served to date",
            },
          ].map((k, i) => (
            <FadeIn key={k.l} delay={i * 0.05}>
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
    hover:border-[var(--blue-brand)]
  "
>
  {/* Corner glow */}
  <span className="pointer-events-none absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-[var(--blue-brand)]/5 transition-colors duration-500 group-hover:bg-[var(--blue-brand)]/10" />

  <div className="relative z-10">
    {/* Small badge */}
    <span className="inline-flex rounded-full bg-[var(--blue-brand)]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[var(--blue-brand)]">
      Impact
    </span>

    {/* Statistic */}
    <h3 className="mt-6 text-6xl font-black leading-none text-[var(--navy)] transition-transform duration-300 group-hover:scale-105">
      {k.v}
    </h3>

    {/* Title */}
    <p className="mt-5 text-lg font-bold leading-snug text-[var(--navy)]">
      {k.l}
    </p>

    {/* Description */}
    <p className="mt-2 text-sm leading-relaxed text-[var(--dark-gray)]">
      {k.s}
    </p>

    {/* Bottom accent */}
    <div className="mt-8 border-t border-[var(--color-border)] pt-4">
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--blue-brand)]">
        PulseWave Impact
      </span>
    </div>
  </div>
</div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2}>
          <div className="mx-auto mt-10 flex max-w-4xl items-start gap-3 rounded-2xl border border-[var(--lime-brand)]/50 bg-[var(--lime-brand)]/15 p-5">
            <Sparkles className="mt-0.5 h-5 w-5 text-[var(--navy)]" />

            <p className="text-sm font-semibold text-[var(--navy)]">
              Recognition — Murang'a County is a national benchmark for
              digital transformation, attracting benchmarking visits
              from other counties.
            </p>
          </div>
        </FadeIn>

        <div className="mt-10 flex justify-center">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 rounded-xl bg-[var(--navy)] px-6 py-3.5 font-semibold text-white"
          >
            View full case studies

            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
      </div>
  );
}