import { motion } from "motion/react";
import { ArrowRight, Download, ShieldCheck, TrendingUp, Wallet, CheckCircle2 } from "lucide-react";
import { ErpReveal } from "./ErpPrimitive";
//import erpBg from "@/assets/erp/erp-bg.jpeg";
import erp1 from "@/assets/erp/erp1.mp4";

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 26 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const },
});

function BrowserMockup() {
  const bars = [42, 58, 50, 71, 64, 82, 76, 94];
  return (
    <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-elegant">
      <div className="flex items-center gap-2 border-b border-border bg-light-gray px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-dark-gray/25" aria-hidden />
        <span className="h-2.5 w-2.5 rounded-full bg-dark-gray/25" aria-hidden />
        <span className="h-2.5 w-2.5 rounded-full bg-dark-gray/25" aria-hidden />
        <span className="ml-3 truncate rounded-md border border-border bg-card px-3 py-1 text-[11px] text-dark-gray">
          pulsewave.co.ke/dashboard
        </span>
      </div>

      <div className="grid gap-4 p-4 sm:p-5">
        <div className="grid grid-cols-3 gap-3">
          {[
            { l: "Budget absorption", v: "78.4%", d: "+6.2%" },
            { l: "Open POs", v: "312", d: "-14" },
            { l: "Payroll run", v: "Ready", d: "On time" },
          ].map((k) => (
            <div key={k.l} className="min-w-0 rounded-2xl border border-border bg-card p-3">
              <p className="truncate text-[10px] uppercase tracking-wider text-dark-gray">{k.l}</p>
              <p className="mt-1 truncate text-base font-extrabold text-navy sm:text-lg">{k.v}</p>
              <p className="text-[10px] font-semibold text-blue-brand">{k.d}</p>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-border bg-card p-4">
          <div className="flex items-center justify-between gap-3">
            <p className="text-xs font-bold text-navy">Expenditure vs. Revenue</p>
            <span className="rounded-full bg-lime-brand px-2 py-0.5 text-[10px] font-bold text-navy">
              Live
            </span>
          </div>
          <div className="mt-4 flex h-28 items-end gap-2" aria-hidden>
            {bars.map((h, i) => (
              <motion.span
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ duration: 0.8, delay: 0.5 + i * 0.07, ease: "easeOut" }}
                className="flex-1 rounded-t-md bg-[var(--navy)]"
              />
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card p-4">
          <p className="text-xs font-bold text-navy">Pending approvals</p>
          <ul className="mt-3 space-y-2">
            {[
              ["Requisition #RQ-2291", "Health Dept."],
              ["Imprest #IM-0442", "Finance"],
              ["LPO #PO-8817", "Procurement"],
            ].map(([a, b]) => (
              <li key={a} className="flex items-center justify-between gap-3 text-[11px]">
                <span className="flex min-w-0 items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-blue-brand" aria-hidden />
                  <span className="truncate font-medium text-foreground">{a}</span>
                </span>
                <span className="shrink-0 text-dark-gray">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export function ErpHero() {
  return (
    <section id="hero" className="relative isolate overflow-hidden bg-hero-gradient">
          {/* Background image */}
<video
  className="absolute inset-0 -z-20 h-full w-full object-cover"
  autoPlay
  muted
  loop
  playsInline
>
  <source src={erp1} type="video/mp4" />
</video>
<div className="absolute inset-0 -z-10 bg-slate-900/50 backdrop-blur-[2px]" />
   
      <div
        aria-hidden
        className="animate-blob pointer-events-none absolute -left-24 top-24 -z-10 h-72 w-72 rounded-full bg-blue-brand/15 blur-3xl"
      />
      <div
        aria-hidden
        className="animate-blob pointer-events-none absolute -right-16 top-1/3 -z-10 h-80 w-80 rounded-full bg-lime-brand/20 blur-3xl"
        style={{ animationDelay: "3s" }}
      />

      <div className="container-page grid items-center gap-14 pt-32 pb-20 lg:grid-cols-[1.02fr_0.98fr] lg:pt-40 lg:pb-28">
        <div className="min-w-0">
          <motion.span
            {...fade(0)}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-navy shadow-card"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-lime-brand" aria-hidden />
            PulseWave Technologies · ERP
          </motion.span>

          <motion.h1
            {...fade(0.08)}
            className="mt-6 text-4xl font-extrabold leading-[1.07] text-navy sm:text-5xl lg:text-[3.4rem]"
          >
            Enterprise Resource Planning (ERP) for{" "}
            <span className="underline-lime">Government &amp; Healthcare</span>
          </motion.h1>

          <motion.p
            {...fade(0.16)}
            className="mt-6 max-w-xl text-base leading-relaxed text-gray-800 sm:text-lg"
          >
            One secure platform that unifies finance, procurement, HR, inventory, payroll, assets
            and reporting — giving counties and referral hospitals a single, auditable source of
            truth.
          </motion.p>

          <motion.div {...fade(0.24)} className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#cta"
              className="inline-flex items-center gap-2 rounded-lg bg-[var(--navy)] px-4 py-2 text-sm font-semibold text-white shadow-[var(--shadow-card)] transition hover:bg-[color-mix(in_oklab,var(--navy)_88%,white)]"
          >
              Request a Demo
              <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
            <a
              href="#cta"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-navy shadow-card transition-colors hover:border-blue-brand"
            >
              <Download className="h-4 w-4" aria-hidden />
              Download Brochure
            </a>
          </motion.div>

          <motion.ul
            {...fade(0.32)}
            className="mt-10 grid max-w-lg gap-4 border-t border-border pt-7 sm:grid-cols-3"
          >
            {[
              { Icon: ShieldCheck, v: "ISO-grade", l: "Data security" },
              { Icon: TrendingUp, v: "10 modules", l: "One ecosystem" },
              { Icon: Wallet, v: "40+", l: "Facilities live" },
            ].map(({ Icon, v, l }) => (
              <li key={l} className="min-w-0">
                <Icon className="h-4 w-4 text-lime-brand" aria-hidden />
                <p className="mt-2 text-lg font-extrabold text-white">{v}</p>
                <p className="text-xs text-dark-gray">{l}</p>
              </li>
            ))}
          </motion.ul>
        </div>

        <ErpReveal className="relative min-w-0" delay={0.1}>
          <BrowserMockup />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="absolute -left-4 bottom-10 hidden w-52 rounded-2xl border border-border bg-card/90 p-4 shadow-elegant backdrop-blur-xl sm:block"
          >
            <p className="text-[10px] uppercase tracking-wider text-dark-gray">Approval time</p>
            <p className="mt-1 text-xl font-extrabold text-navy">-64%</p>
            <p className="text-[11px] font-medium text-blue-brand">vs. manual workflow</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05, duration: 0.6 }}
            className="absolute -right-3 -top-6 hidden w-48 rounded-2xl border border-border bg-card/90 p-4 shadow-elegant backdrop-blur-xl lg:block"
          >
            <p className="text-[10px] uppercase tracking-wider text-dark-gray">Audit trail</p>
            <p className="mt-1 text-sm font-bold text-navy">100% traceable</p>
            <span className="mt-2 inline-block rounded-full bg-lime-brand px-2 py-0.5 text-[10px] font-bold text-navy">
              Compliant
            </span>
          </motion.div>
        </ErpReveal>
      </div>
    </section>
  );
}
