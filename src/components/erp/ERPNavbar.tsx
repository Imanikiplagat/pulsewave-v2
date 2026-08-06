import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Waves } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/brand/logo";
const links = [
  { label: "Overview", href: "#overview" },
  { label: "Modules", href: "#modules" },
  { label: "Features", href: "#features" },
  { label: "Benefits", href: "#benefits" },
  { label: "Case Study", href: "#case-study" },
  { label: "FAQ", href: "#faq" },
];

export function ErpNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-xl shadow-card"
          : "border-b border-transparent",
      )}
    >
      <nav
        aria-label="ERP main"
       className="container-page flex items-center py-3.5">
      
        <div className="flex items-center gap-3">
        <div className="h-10 w-auto">
            <Logo className="h-full w-auto" />
        </div>

        <div>
            <p className="hidden text-xs text-gray-800 sm:block leading-tight">
            Enterprise Resource
            <br />
            Planning
            </p>
        </div>
        </div>

        <div className="ml-13 flex flex-1  gap-1">
          <ul className="hidden flex-1 items-center gap-6 lg:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="rounded-full px-3 py-2 text-[13px] font-medium text-gray-800 transition-colors hover:bg-light-gray hover:text-navy"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#cta"
            className="hidden rounded-full inline-flex items-center gap-2 rounded-lg bg-[var(--navy)] px-4 py-2 text-sm font-semibold text-white shadow-[var(--shadow-card)] transition hover:bg-[color-mix(in_oklab,var(--navy)_88%,white)]"
          >
          
            Request a Demo
          </a>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open navigation menu"
            className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-border text-navy transition-colors hover:bg-light-gray lg:hidden"
          >
            <Menu className="h-5 w-5" aria-hidden />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-navy/50 backdrop-blur-sm lg:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 26, stiffness: 240 }}
              role="dialog"
              aria-label="Navigation"
              className="fixed inset-y-0 right-0 z-50 flex w-[86%] max-w-sm flex-col bg-background p-6 shadow-elegant lg:hidden"
            >
              <div className="flex items-center justify-between">
                <span className="text-lg font-extrabold text-navy">PulseWave ERP</span>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close navigation menu"
                  className="grid h-10 w-10 place-items-center rounded-xl border border-border hover:bg-light-gray"
                >
                  <X className="h-5 w-5" aria-hidden />
                </button>
              </div>
              <ul className="mt-8 flex flex-col gap-1">
                {links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-xl px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-light-gray"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href="#cta"
                onClick={() => setOpen(false)}
                className="mt-auto rounded-full bg-navy-gradient px-5 py-3 text-center text-sm font-semibold text-navy-foreground"
              >
                Request a Demo
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}