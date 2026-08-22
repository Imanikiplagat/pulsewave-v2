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
        {/* =========================================================
    EXPLORE SOLUTIONS
========================================================= */}
<section className="bg-[var(--light-gray)] py-24 lg:py-28">
  <div className="container-page">

    <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto]">

      <FadeIn>
        <div className="max-w-3xl">

          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[var(--blue-brand)]">
            <span className="h-1.5 w-8 rounded-full bg-[var(--lime-brand)]" />
            What we do
          </span>

          <h2 className="mt-5 text-4xl font-black leading-tight text-[var(--navy)] sm:text-5xl">
            Technology built around
            <br />
            <span className="text-[var(--blue-brand)]">
              your organisation.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--dark-gray)]">
            From enterprise ERP and revenue management to healthcare,
            digital services and intelligent technology, PulseWave builds
            connected systems that help organisations work smarter,
            operate efficiently and serve their people better.
          </p>

        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <Link
          to="/solutions"
          className="group inline-flex shrink-0 items-center gap-3 rounded-xl bg-[var(--navy)] px-6 py-4 text-sm font-bold text-white shadow-[var(--shadow-card)] transition duration-300 hover:-translate-y-1 hover:bg-[var(--blue-brand)]"
        >
          Explore our solutions

          <ArrowRight
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>
      </FadeIn>

    </div>

    {/* Small solution categories */}
    <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {[
        "Enterprise ERP",
        "Revenue Collection",
        "Healthcare",
        "Procurement",
        "Real Estate Management",
        "Digital Services",
      ].map((item, index) => (
        <FadeIn
          key={item}
          delay={index * 0.04}
        >
          <div className="flex items-center gap-3 rounded-xl border border-[var(--color-border)] bg-white px-5 py-4 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[var(--lime-brand)]" />

            <span className="text-sm font-semibold text-[var(--navy)]">
              {item}
            </span>
          </div>
        </FadeIn>
      ))}
    </div>

  </div>
</section>
      </div>
    </>
  );
}