import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Navbar } from "@/layouts/Navbar";
import { Footer } from "@/layouts/Footer";
import { megaGroups } from "@/lib/mega-menu";
import { FadeIn } from "@/layouts/Section";

export default function Solutions() {
  return (   
    <>
     <Navbar />
      <Helmet>
        <title>Solutions | PulseWave Technologies</title>

        <meta
          name="description"
          content="Explore PulseWave Technologies' enterprise ERP, revenue management, healthcare, procurement, real estate and digital technology solutions."
        />

        <meta
          property="og:title"
          content="Solutions | PulseWave Technologies"
        />

        <meta
          property="og:description"
          content="Connected digital solutions designed around your organisation."
        />

        <meta property="og:type" content="website" />
      </Helmet>

      <main className="bg-white">

        {/* =====================================================
            HERO
        ===================================================== */}
        <section className="relative overflow-hidden bg-[var(--light-gray)]">
          {/* Decorative glow */}
          <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[var(--lime-brand)]/15 blur-[120px]" />

          <div className="pointer-events-none absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-[var(--blue-brand)]/10 blur-[120px]" />

          <div className="container-page relative py-24 md:py-32 lg:py-36">
            <FadeIn>
              <div className="max-w-4xl">

                <span className="inline-flex items-center gap-2 rounded-full border border-[var(--navy)]/15 bg-white px-3 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[var(--navy)] shadow-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--lime-brand)]" />
                  Our Solutions
                </span>

                <h1 className="mt-7 text-5xl font-black leading-[1.05] text-[var(--navy)] sm:text-6xl lg:text-7xl">
                  Solutions built
                  <br />
                  <span className="text-[var(--blue-brand)]">
                    around your organisation.
                  </span>
                </h1>

                <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--dark-gray)]">
                  From enterprise resource planning and revenue management
                  to healthcare, digital services and intelligent technology,
                  we build connected systems that help organisations work
                  smarter.
                </p>

              </div>
            </FadeIn>
          </div>
        </section>

        {/* =====================================================
            SOLUTIONS GRID
        ===================================================== */}
        <section className="container-page py-24 lg:py-32">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {megaGroups.map((solution, index) => {
              const Icon = solution.icon;

              return (
                <FadeIn
                  key={solution.key}
                  delay={index * 0.05}
                >
                  <Link
                    to={`/solutions/${solution.slug}`}
                    className="group block h-full"
                  >
                    <article className="relative flex h-full min-h-[360px] flex-col overflow-hidden rounded-3xl border border-[var(--color-border)] bg-white p-8 shadow-[var(--shadow-card)] transition-all duration-500 hover:-translate-y-2 hover:border-[var(--blue-brand)]/40 hover:shadow-[var(--shadow-elegant)]">

                      {/* Decorative number */}
                      <span className="absolute right-7 top-6 text-6xl font-black text-[var(--navy)]/[0.035]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      {/* Icon */}
                      <div className="relative grid h-14 w-14 place-items-center rounded-2xl bg-[var(--navy)] text-white transition duration-300 group-hover:bg-[var(--blue-brand)]">
                        <Icon className="h-6 w-6" />
                      </div>

                      {/* Content */}
                      <div className="relative mt-8">
                        <h2 className="text-2xl font-black text-[var(--navy)]">
                          {solution.title}
                        </h2>

                        <p className="mt-4 text-sm leading-7 text-[var(--dark-gray)]">
                          {solution.tagline}
                        </p>
                      </div>

                      {/* Capabilities */}
                      <div className="relative mt-7 flex flex-wrap gap-2">
                        {solution.items.slice(0, 4).map((item) => (
                          <span
                            key={item.label}
                            className="rounded-full bg-[var(--light-gray)] px-3 py-1.5 text-xs font-medium text-[var(--dark-gray)]"
                          >
                            {item.label}
                          </span>
                        ))}

                        {solution.items.length > 4 && (
                          <span className="rounded-full bg-[var(--lime-brand)]/15 px-3 py-1.5 text-xs font-bold text-[var(--navy)]">
                            +{solution.items.length - 4} more
                          </span>
                        )}
                      </div>

                      {/* Bottom CTA */}
                      <div className="mt-auto flex items-center justify-between pt-10">
                        <span className="text-sm font-bold text-[var(--blue-brand)] transition group-hover:text-[var(--navy)]">
                          Explore solution
                        </span>

                        <span className="grid h-10 w-10 place-items-center rounded-full border border-[var(--color-border)] transition duration-300 group-hover:border-[var(--lime-brand)] group-hover:bg-[var(--lime-brand)]">
                          <ArrowRight
                            className="h-4 w-4 text-[var(--navy)] transition-transform duration-300 group-hover:translate-x-0.5"
                          />
                        </span>
                      </div>

                      {/* Hover lime line */}
                      <div className="absolute bottom-0 left-0 h-1 w-0 bg-[var(--lime-brand)] transition-all duration-500 group-hover:w-full" />
                    </article>
                  </Link>
                </FadeIn>
              );
            })}
          </div>
        </section>

        {/* =====================================================
            CUSTOM SOLUTION CTA
        ===================================================== */}
        <section className="container-page pb-24 lg:pb-32">
          <FadeIn>
            <div className="relative overflow-hidden rounded-3xl bg-[var(--navy)] px-8 py-16 text-center sm:px-12">

              <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[var(--lime-brand)]/20 blur-[90px]" />

              <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[var(--blue-brand)]/30 blur-[90px]" />

              <div className="relative">
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--lime-brand)]">
                  Need something different?
                </span>

                <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-black text-white sm:text-4xl">
                  Let&apos;s build a solution around your organisation.
                </h2>

                <p className="mx-auto mt-5 max-w-2xl leading-7 text-white/70">
                  Tell us what you are trying to solve and our team can
                  design the right technology solution for your needs.
                </p>

                <Link
                  to="/contact"
                  className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[var(--lime-brand)] px-6 py-3.5 text-sm font-bold text-[var(--navy)] transition hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(215,242,58,0.25)]"
                >
                  Talk to us
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </FadeIn>
        </section>

      </main>
      <Footer />
    </>
  );
}