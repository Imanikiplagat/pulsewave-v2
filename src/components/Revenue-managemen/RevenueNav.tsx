import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

import logo from "/logo.png";

const revenueLinks = [
  {
    label: "Revenue Collection",
    href: "#revenue-collection",
  },
  {
    label: "Billing & Invoicing",
    href: "#billing-invoicing",
  },
  {
    label: "Citizen Portal",
    href: "#citizen-portal",
  },
    {
    label: "USSD",
    href: "#ussd",
  },
];

export default function RevenueNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSectionClick = () => {
    setMobileOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav
        className={`h-20 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 shadow-md backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="container-page flex h-full items-center justify-between">

          {/* LOGO */}
          <Link
            to="/"
            className="relative z-10 flex h-full items-center"
          >
            <img
              src={logo}
              alt="PulseWave Technologies"
              className="h-[72px] w-auto object-contain"
            />
          </Link>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden items-center lg:flex">

            {/* REVENUE SECTION LINKS */}
            <div className="absolute left-1/2 flex -translate-x-1/2 items-center gap-1">
              {revenueLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`rounded-full px-4 py-2.5 text-sm font-medium transition ${
                    scrolled
                      ? "text-slate-700 hover:text-[var(--navy)]"
                      : "text-white hover:text-[var(--lime-brand)]"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* BOOK DEMO */}
            <Link
              to="/contact?subject=Revenue%20Management%20Demo"
              className="ml-auto rounded-full bg-[var(--lime-brand)] px-6 py-3 text-sm font-bold text-[var(--navy)] shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              Book a Demo
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`flex h-10 w-10 items-center justify-center rounded-full lg:hidden ${
              scrolled
                ? "text-[var(--navy)]"
                : "text-white"
            }`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {mobileOpen && (
          <div className="border-t border-slate-200 bg-white shadow-xl lg:hidden">
            <div className="container-page py-5">

              {/* REVENUE LINKS */}
              {revenueLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={handleSectionClick}
                  className="block border-b border-slate-100 py-4 text-sm font-medium text-slate-700 transition hover:text-[var(--navy)]"
                >
                  {item.label}
                </a>
              ))}

              {/* BOOK DEMO */}
              <Link
                to="/contact?subject=Revenue%20Management%20Demo"
                onClick={() => setMobileOpen(false)}
                className="mt-5 block rounded-full bg-[var(--lime-brand)] px-5 py-3.5 text-center text-sm font-bold text-[var(--navy)]"
              >
                Book a Demo
              </Link>

            </div>
          </div>
        )}
      </nav>
    </header>
  );
}