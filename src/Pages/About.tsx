import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  Target,
  Compass,
  Heart,
  ShieldCheck,
  Users,
  Rocket,
  ArrowRight,
} from "lucide-react";

import { FadeIn, SectionHeader } from "@/layouts/Section";

const values = [
  {
    icon: ShieldCheck,
    t: "Integrity",
    d: "We do the right thing — even when no one is watching.",
  },
  {
    icon: Rocket,
    t: "Excellence",
    d: "We ship enterprise-grade software that stands the test of time.",
  },
  {
    icon: Users,
    t: "Partnership",
    d: "Our clients' outcomes are our success metrics.",
  },
  {
    icon: Heart,
    t: "Craft",
    d: "We take pride in every line of code and every UX detail.",
  },
];

const timeline = [
  {
    year: "2013",
    event: "PulseWave founded as an enterprise software consultancy.",
  },
  {
    year: "2016",
    event: "Launched the first integrated ERP platform.",
  },
  {
    year: "2019",
    event: "Expanded into revenue management for county governments.",
  },
  {
    year: "2022",
    event: "Reached 100+ enterprise deployments across the region.",
  },
  {
    year: "2025",
    event: "Serving 12 countries with 15+ integrated modules.",
  },
];

const team = [
  {
    name: "A. Otieno",
    role: "Chief Executive Officer",
  },
  {
    name: "M. Wanjiku",
    role: "Chief Technology Officer",
  },
  {
    name: "K. Njoroge",
    role: "Head of Delivery",
  },
  {
    name: "L. Achieng",
    role: "Head of Product",
  },
];

export default function About() {
  return (
    <>
      <Helmet>
        <title>About PulseWave Technologies</title>

        <meta
          name="description"
          content="PulseWave Technologies is an enterprise software company building integrated ERP and digital solutions for governments and businesses."
        />

        <meta
          property="og:title"
          content="About PulseWave Technologies"
        />

        <meta
          property="og:description"
          content="Meet the team building enterprise-grade ERP and digital solutions."
        />

        <meta property="og:type" content="website" />

        <meta
          name="twitter:card"
          content="summary_large_image"
        />
      </Helmet>

      <div>
        <section
          className="relative overflow-hidden"
          style={{ background: "var(--gradient-hero)" }}
        >
          <div className="container-page py-20 md:py-28">
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--navy)]/15 bg-white px-3 py-1 text-xs font-bold uppercase tracking-widest text-[var(--navy)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--lime-brand)]" />
              About us
            </span>

            <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[1.05] text-[var(--navy)] sm:text-6xl md:text-7xl">
              Building the digital backbone of{" "}
              <span className="underline-lime">
                modern enterprises
              </span>
              .
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-[var(--dark-gray)]">
              We are a team of engineers, designers and domain experts
              obsessed with helping organisations run better through great
              software.
            </p>
          </div>
        </section>

        <section className="container-page py-24">
          <div className="grid gap-8 md:grid-cols-2">
            <FadeIn>
              <div className="rounded-2xl border border-[var(--color-border)] bg-white p-8 shadow-[var(--shadow-card)]">
                <Compass className="h-8 w-8 text-[var(--blue-brand)]" />

                <h3 className="mt-4 text-2xl font-black text-[var(--navy)]">
                  Our Vision
                </h3>

                <p className="mt-3 text-[var(--dark-gray)]">
                  To be Africa's most trusted partner for enterprise digital
                  transformation — powering the next generation of institutions.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.08}>
              <div className="rounded-2xl border border-[var(--color-border)] bg-white p-8 shadow-[var(--shadow-card)]">
                <Target className="h-8 w-8 text-[var(--blue-brand)]" />

                <h3 className="mt-4 text-2xl font-black text-[var(--navy)]">
                  Our Mission
                </h3>

                <p className="mt-3 text-[var(--dark-gray)]">
                  To design, build and support integrated software that unifies
                  operations, digitises revenue, and gives leaders real-time
                  clarity.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        <section className="bg-[var(--light-gray)] py-24">
          <div className="container-page">
            <FadeIn>
              <SectionHeader
                eyebrow="Core values"
                title="What we stand for."
              />
            </FadeIn>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {values.map((v, i) => (
                <FadeIn key={v.t} delay={i * 0.05}>
                  <div className="h-full rounded-2xl border border-[var(--color-border)] bg-white p-6">
                    <span className="grid h-10 w-10 place-items-center rounded-lg bg-[var(--navy)] text-white">
                      <v.icon className="h-5 w-5" />
                    </span>

                    <h4 className="mt-4 text-lg font-bold text-[var(--navy)]">
                      {v.t}
                    </h4>

                    <p className="mt-2 text-sm text-[var(--dark-gray)]">
                      {v.d}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
                <section className="container-page py-24">
          <FadeIn>
            <SectionHeader
              eyebrow="Our journey"
              title="A decade of building."
            />
          </FadeIn>

          <div className="relative mt-12">
            <div className="absolute bottom-0 left-4 top-0 w-px bg-[var(--color-border)] md:left-1/2" />

            <ol className="space-y-10">
              {timeline.map((t, i) => (
                <FadeIn key={t.year} delay={i * 0.05}>
                  <li
                    className={`relative grid gap-4 md:grid-cols-2 md:gap-16 ${
                      i % 2
                        ? "md:[&>div:first-child]:col-start-2"
                        : ""
                    }`}
                  >
                    <div
                      className={`pl-12 md:pl-0 ${
                        i % 2 ? "md:text-left" : "md:text-right"
                      }`}
                    >
                      <span className="text-4xl font-black text-[var(--navy)]">
                        {t.year}
                      </span>

                      <p className="mt-2 text-[var(--dark-gray)]">
                        {t.event}
                      </p>
                    </div>

                    <span className="absolute left-4 top-3 grid h-3 w-3 -translate-x-1/2 place-items-center rounded-full bg-[var(--lime-brand)] ring-4 ring-white md:left-1/2" />
                  </li>
                </FadeIn>
              ))}
            </ol>
          </div>
        </section>

        <section className="bg-[var(--light-gray)] py-24">
          <div className="container-page">
            <FadeIn>
              <SectionHeader
                eyebrow="Leadership"
                title="Meet the team."
              />
            </FadeIn>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {team.map((person, i) => (
                <FadeIn key={person.name} delay={i * 0.05}>
                  <div className="group rounded-2xl border border-[var(--color-border)] bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <div className="mx-auto grid h-24 w-24 place-items-center rounded-full bg-gradient-to-br from-[var(--navy)] to-[var(--blue-brand)] text-2xl font-black text-white">
                      {person.name
                        .split(" ")
                        .map((word) => word[0])
                        .join("")}
                    </div>

                    <h4 className="mt-5 text-lg font-bold text-[var(--navy)]">
                      {person.name}
                    </h4>

                    <p className="text-sm text-[var(--dark-gray)]">
                      {person.role}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <section className="container-page py-24">
          <div className="rounded-3xl border border-[var(--color-border)] bg-white p-10 text-center shadow-[var(--shadow-card)]">
            <h3 className="text-3xl font-black text-[var(--navy)] sm:text-4xl">
              Ready to build with us?
            </h3>

            <p className="mx-auto mt-3 max-w-2xl text-[var(--dark-gray)]">
              Whether you need an ERP, a custom platform or a digitisation
              partner, we'd love to talk.
            </p>

            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[var(--navy)] px-6 py-3.5 font-semibold text-white transition hover:opacity-90"
            >
              Get in touch
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}