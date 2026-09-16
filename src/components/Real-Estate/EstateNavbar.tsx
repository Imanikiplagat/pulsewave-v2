import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Logo } from "@/components/brand/logo";

export default function EstateNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-40 px-6 pt-6 md:px-12 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            onClick={closeMenu}
            className="group flex items-center"
            aria-label="PulseWave Technologies Home"
          >
            <div className="h-10 w-auto transition-transform duration-300 group-hover:scale-105 md:h-11 lg:h-12">
              <Logo className="h-full w-auto" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 lg:flex">
            <Link
              to="/"
              className="text-xs font-light uppercase tracking-[0.18em] text-white/80 transition-colors hover:text-[#D7F23A]"
            >
              Home
            </Link>

            <Link
              to="/real-estate/modules"
              className="text-xs font-light uppercase tracking-[0.18em] text-white/80 transition-colors hover:text-[#D7F23A]"
            >
            Modules
            </Link>

            <Link
              to="/real-estate/about"
              className="text-xs font-light uppercase tracking-[0.18em] text-[#D7F23A]"
            >
              About us
            </Link>           

          </nav>

          {/* Desktop CTA */}
          <Link
            to="/contact"
            className="hidden border border-[#D7F23A] px-5 py-3 text-xs font-medium uppercase tracking-[0.16em] text-[#D7F23A] transition-all duration-300 hover:bg-[#D7F23A] hover:text-[#07130F] lg:inline-flex"
          >
            Talk to us
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="p-2 text-white transition-colors hover:text-[#D7F23A] lg:hidden"
            aria-label="Open navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            <Menu size={26} strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#07130F] px-6 py-6 md:px-12 lg:hidden">

          {/* Mobile Header */}
          <div className="flex items-center justify-between">
            <Link
              to="/"
              onClick={closeMenu}
              className="flex items-center"
              aria-label="PulseWave Technologies Home"
            >
              <div className="h-10 w-auto">
                <Logo className="h-full w-auto" />
              </div>
            </Link>

            <button
              onClick={closeMenu}
              className="p-2 text-white transition-colors hover:text-[#D7F23A]"
              aria-label="Close navigation menu"
            >
              <X size={28} strokeWidth={1.5} />
            </button>
          </div>

          {/* Mobile Links */}
          <nav className="mt-16 flex flex-col">

            <Link
              to="/"
              onClick={closeMenu}
              className="border-b border-white/10 py-5 text-sm font-light uppercase tracking-[0.2em] text-white transition-colors hover:text-[#D7F23A]"
            >
              Home
            </Link>

            <Link
              to="/solutions"
              onClick={closeMenu}
              className="border-b border-white/10 py-5 text-sm font-light uppercase tracking-[0.2em] text-white transition-colors hover:text-[#D7F23A]"
            >
              Solutions
            </Link>

            <Link
              to="/real-estate"
              onClick={closeMenu}
              className="border-b border-white/10 py-5 text-sm font-light uppercase tracking-[0.2em] text-[#D7F23A]"
            >
              Real Estate
            </Link>

            <Link
              to="/about"
              onClick={closeMenu}
              className="border-b border-white/10 py-5 text-sm font-light uppercase tracking-[0.2em] text-white transition-colors hover:text-[#D7F23A]"
            >
              About
            </Link>

            <Link
              to="/contact"
              onClick={closeMenu}
              className="border-b border-white/10 py-5 text-sm font-light uppercase tracking-[0.2em] text-white transition-colors hover:text-[#D7F23A]"
            >
              Contact
            </Link>

          </nav>

          {/* Mobile CTA */}
          <div className="mt-10">
            <Link
              to="/contact"
              onClick={closeMenu}
              className="flex w-full items-center justify-center border border-[#D7F23A] py-4 text-xs font-medium uppercase tracking-[0.2em] text-[#D7F23A] transition-all duration-300 hover:bg-[#D7F23A] hover:text-[#07130F]"
            >
              Talk to us
            </Link>
          </div>

          {/* Mobile Footer */}
          <div className="absolute bottom-8 left-6 right-6 md:left-12 md:right-12">
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/40">
              PulseWave Technologies
            </p>
          </div>
        </div>
      )}
    </header>
  );
}