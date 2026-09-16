import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Logo } from "@/components/brand/logo";
import { megaGroups } from "@/lib/mega-menu";

const navLinks = [
  { to: "/about", label: "About" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [mega, setMega] = useState(false);
  const [activeGroup, setActiveGroup] = useState(
    megaGroups[0]?.key ?? ""
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);

    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMega = () => {
    setMega(false);
  };

  const closeMobile = () => {
    setMobile(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all ${
        scrolled
          ? "bg-white/85 backdrop-blur-md shadow-[0_1px_0_0_var(--color-border)]"
          : "bg-white/60 backdrop-blur-sm"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Logo />

        {/* ================= DESKTOP NAV ================= */}
        <nav className="hidden items-center gap-1 lg:flex">
          <div
            className="relative"
            onMouseEnter={() => setMega(true)}
            onMouseLeave={() => setMega(false)}
          >
            <button
              type="button"
              className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-[var(--navy)] hover:bg-[var(--light-gray)]"
              aria-expanded={mega}
            >
              Solutions
              <ChevronDown
                className={`h-4 w-4 transition-transform ${
                  mega ? "rotate-180" : ""
                }`}
              />
            </button>

            <AnimatePresence>
              {mega && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute left-1/2 top-full z-50 w-[min(94vw,1040px)] -translate-x-1/2 pt-3"
                >
                  <div className="overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white shadow-[var(--shadow-elegant)]">
                    <div className="grid grid-cols-12">
                      {/* ================= GROUP RAIL ================= */}
                      <div className="col-span-5 border-r border-[var(--color-border)] bg-[var(--light-gray)]/60 p-3">
                        {megaGroups.map((g) => {
                          const GIcon = g.icon;
                          const active = g.key === activeGroup;

                          return (
                            <div
                              key={g.key}
                              className={`group relative flex w-full items-center gap-3 rounded-xl p-3 transition ${
                                active
                                  ? "bg-white shadow-[var(--shadow-card)]"
                                  : "hover:bg-white/70"
                              }`}
                              onMouseEnter={() =>
                                setActiveGroup(g.key)
                              }
                            >
                              {/* Icon */}
                              <span
                                className={`grid h-9 w-9 shrink-0 place-items-center rounded-lg transition ${
                                  active
                                    ? "bg-[var(--navy)] text-white"
                                    : "bg-[var(--navy)]/5 text-[var(--navy)]"
                                }`}
                              >
                                <GIcon className="h-4 w-4" />
                              </span>

                              {/* Clickable solution title */}
                              <Link
                                to={`/solutions/${g.slug}`}
                                onClick={closeMega}
                                className="min-w-0 flex-1"
                              >
                                <span className="block text-sm font-semibold text-[var(--navy)] hover:underline">
                                  {g.title}
                                </span>

                                <span className="line-clamp-1 text-xs text-[var(--dark-gray)]">
                                  {g.tagline}
                                </span>
                              </Link>

                              {/* Arrow */}
                              <ChevronRight
                                className={`h-4 w-4 shrink-0 transition ${
                                  active
                                    ? "text-[var(--navy)]"
                                    : "text-[var(--dark-gray)]/50"
                                }`}
                              />
                            </div>
                          );
                        })}
                      </div>

                      {/* ================= CAPABILITIES ================= */}
                      <div className="col-span-7 p-4">
                        {megaGroups
                          .filter((g) => g.key === activeGroup)
                          .map((g) => (
                            <div key={g.key}>
                              {/* Header */}
                              <div className="flex items-center justify-between px-2">
                                <Link
                                  to={`/${g.slug}`}
                                  onClick={closeMega}
                                  className="text-xs font-bold uppercase tracking-widest text-[var(--dark-gray)] hover:text-[var(--navy)]"
                                >
                                  {g.title}
                                </Link>

                                <Link
                                  to={`/solutions/${g.slug}`}
                                  onClick={closeMega}
                                  className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--blue-brand)] hover:underline"
                                >
                                  View solution
                                  <ArrowRight className="h-3.5 w-3.5" />
                                </Link>
                              </div>

                              {/* Modules */}
                              <div className="mt-2 grid grid-cols-2 gap-1">
                                {g.items.map((it) => (
                                  <Link
                                    key={`${g.key}-${it.label}`}
                                    to={`/solutions/${it.slug}#${it.hash}`}
                                    onClick={closeMega}
                                    className="group rounded-xl px-3 py-2 hover:bg-[var(--light-gray)]"
                                  >
                                    <span className="block text-sm font-semibold text-[var(--navy)]">
                                      {it.label}
                                    </span>

                                    <span className="line-clamp-1 text-xs text-[var(--dark-gray)]">
                                      {it.blurb}
                                    </span>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>

                    {/* ================= CUSTOM SOLUTION CTA ================= */}
                    <div className="border-t border-[var(--color-border)] bg-[var(--light-gray)]/50 px-5 py-4">
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <p className="text-sm font-semibold text-[var(--navy)]">
                            Need a custom solution?
                          </p>

                          <p className="mt-0.5 text-xs text-[var(--dark-gray)]">
                            Let&apos;s build a solution around your organisation&apos;s needs.
                          </p>
                        </div>

                        <Link
                          to="/contact"
                          onClick={closeMega}
                          className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-[var(--navy)] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[color-mix(in_oklab,var(--navy)_88%,white)]"
                        >
                          Talk to us
                          <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ================= OTHER NAV LINKS ================= */}
          {navLinks.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                isActive
                  ? "rounded-md bg-[var(--light-gray)] px-3 py-2 text-sm font-semibold text-[var(--navy)]"
                  : "rounded-md px-3 py-2 text-sm font-medium text-[var(--navy)] hover:bg-[var(--light-gray)]"
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        {/* ================= DESKTOP CTA ================= */}
        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-[var(--navy)] px-4 py-2 text-sm font-semibold text-white shadow-[var(--shadow-card)] transition hover:bg-[color-mix(in_oklab,var(--navy)_88%,white)]"
          >
            Request Demo
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* ================= MOBILE BUTTON ================= */}
        <button
          type="button"
          className="rounded-md p-2 text-[var(--navy)] lg:hidden"
          onClick={() => setMobile((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={mobile}
        >
          {mobile ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {mobile && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-[var(--color-border)] bg-white lg:hidden"
          >
            <div className="container-page space-y-1 py-3">
              {/* ================= MOBILE SOLUTIONS ================= */}
              <details className="group">
                <summary className="flex cursor-pointer items-center justify-between rounded-md px-3 py-2 font-medium text-[var(--navy)]">
                  Solutions

                  <ChevronDown className="h-4 w-4 transition group-open:rotate-180" />
                </summary>

                <div className="ml-1 mt-1 grid gap-1">
                  {megaGroups.map((g) => (
                    <details
                      key={g.key}
                      className="group/sub rounded-lg bg-[var(--light-gray)]/60"
                    >
                      {/* Solution heading */}
                      <summary className="flex cursor-pointer items-center justify-between gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-[var(--navy)]">
                        <span className="flex min-w-0 items-center gap-2">
                          <g.icon className="h-4 w-4 shrink-0 text-[var(--blue-brand)]" />

                          <Link
                            to={`/${g.slug}`}
                            onClick={(e) => {
                              e.stopPropagation();
                              closeMobile();
                            }}
                            className="truncate hover:underline"
                          >
                            {g.title}
                          </Link>
                        </span>

                        <ChevronDown className="h-4 w-4 shrink-0 transition group-open/sub:rotate-180" />
                      </summary>

                      {/* Modules */}
                      <div className="grid gap-0.5 px-2 pb-2">
                        {g.items.map((it) => (
                          <Link
                            key={`${g.key}-${it.label}`}
                            to={`/${it.slug}#${it.hash}`}
                            onClick={closeMobile}
                            className="rounded-md px-3 py-2 text-sm text-[var(--dark-gray)] hover:bg-white"
                          >
                            {it.label}
                          </Link>
                        ))}

                        {/* Overview */}
                        <Link
                          to={`/${g.slug}`}
                          onClick={closeMobile}
                          className="rounded-md px-3 py-1.5 text-xs font-semibold text-red"
                        >
                          View solution →
                        </Link>
                      </div>
                    </details>
                  ))}

                  {/* View all */}
                  <Link
                    to="/solutions"
                    onClick={closeMobile}
                    className="rounded-md px-3 py-2 text-sm font-semibold text-[var(--navy)]"
                  >
                    View all solutions →
                  </Link>
                </div>
              </details>

              {/* ================= MOBILE NAV LINKS ================= */}
              {navLinks.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={closeMobile}
                  className="block rounded-md px-3 py-2 font-medium text-[var(--navy)] hover:bg-[var(--light-gray)]"
                >
                  {l.label}
                </Link>
              ))}

              {/* ================= MOBILE CUSTOM SOLUTION CTA ================= */}
              <div className="mt-3 rounded-xl border border-[var(--color-border)] bg-[var(--light-gray)]/60 p-4">
                <p className="text-sm font-semibold text-[var(--navy)]">
                  Need a custom solution?
                </p>

                <p className="mt-1 text-xs leading-5 text-[var(--dark-gray)]">
                  Tell us what you need and our team can help design the right
                  solution for your organisation.
                </p>

                <Link
                  to="/contact"
                  onClick={closeMobile}
                  className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[var(--navy)] px-4 py-2.5 text-sm font-semibold text-white"
                >
                  Talk to us
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              {/* ================= MOBILE REQUEST DEMO ================= */}
              <Link
                to="/contact"
                onClick={closeMobile}
                className="mt-2 inline-flex w-full items-center justify-center rounded-lg bg-[var(--navy)] px-4 py-2.5 text-sm font-semibold text-white"
              >
                Request Demo
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}