import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa6";
import logo from "/logo.png";

export default function RevenueFooter() {
  return (
    <footer className="relative overflow-hidden bg-[var(--navy)] text-white">
      {/* Blue background glow */}
      <div className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-[var(--blue-brand)]/30 blur-[120px]" />

      {/* Lime accent */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-[var(--lime-brand)]/10 blur-[100px]" />

      <div className="container-page relative z-10">
        {/* CTA */}
        <div className="border-b border-white/15 py-20 lg:py-24">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--lime-brand)]">
                Let's work together
              </span>

              <h2 className="mt-5 font-display text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                Ready to transform
                <span className="block text-[var(--lime-brand)]">
                  your revenue operations?
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-7 text-blue-100/70">
                Talk to PulseWave Technologies about building a smarter,
                more connected revenue ecosystem for your organization.
              </p>
            </div>

            <Link
              to="/contact?subject=Revenue%20Management%20Demo"
              className="group inline-flex shrink-0 items-center gap-3 self-start rounded-full bg-[var(--lime-brand)] px-7 py-4 text-sm font-bold text-[var(--navy)] transition hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(215,242,58,0.25)] lg:self-auto"
            >
              Book a Demo

              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>

        {/* Main footer */}
        <div className="grid gap-12 py-16 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block">
              <img
                src={logo}
                alt="PulseWave Technologies"
                className="h-11 w-auto"
              />
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-blue-100/65">
              Transforming organizations through intelligent digital
              solutions, seamless systems integration and meaningful
              technology.
            </p>

            <div className="mt-7 flex gap-3">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-blue-100/60 transition hover:border-[var(--lime-brand)] hover:bg-[var(--lime-brand)] hover:text-[var(--navy)]"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={17} />
              </a>

              <a
                href="mailto:info@pulsewave.co.ke"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-blue-100/60 transition hover:border-[var(--lime-brand)] hover:bg-[var(--lime-brand)] hover:text-[var(--navy)]"
                aria-label="Email"
              >
                <Mail size={17} />
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-display text-xl font-semibold">
              Solutions
            </h3>

            <div className="mt-6 space-y-3 text-sm">
              {[
                ["Revenue Collection", "#revenue-collection"],
                ["Billing & Invoicing", "#billing-invoicing"],
                ["Citizen Portal", "#citizen-portal"],
                ["Digital Payments", "#digital-payments"],
                ["USSD Services", "#ussd"],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="block text-blue-100/60 transition hover:translate-x-1 hover:text-[var(--lime-brand)]"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-display text-xl font-semibold">
              Company
            </h3>

            <div className="mt-6 space-y-3 text-sm">
              <Link
                to="/"
                className="block text-blue-100/60 transition hover:text-[var(--lime-brand)]"
              >
                Home
              </Link>

              <Link
                to="/about"
                className="block text-blue-100/60 transition hover:text-[var(--lime-brand)]"
              >
                About Us
              </Link>

              <Link
                to="/solutions"
                className="block text-blue-100/60 transition hover:text-[var(--lime-brand)]"
              >
                Solutions
              </Link>

              <Link
                to="/contact"
                className="block text-blue-100/60 transition hover:text-[var(--lime-brand)]"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-xl font-semibold">
              Contact
            </h3>

            <div className="mt-6 space-y-5 text-sm">
              <div className="flex items-start gap-3 text-blue-100/60">
                <MapPin
                  size={17}
                  className="mt-0.5 shrink-0 text-[var(--lime-brand)]"
                />

                <span>Nairobi, Kenya</span>
              </div>

              <div className="flex items-center gap-3 text-blue-100/60">
                <Mail
                  size={17}
                  className="text-[var(--lime-brand)]"
                />

                <span>info@pulsewave.co.ke</span>
              </div>

              <div className="flex items-center gap-3 text-blue-100/60">
                <Phone
                  size={17}
                  className="text-[var(--lime-brand)]"
                />

                <span>Talk to our team</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col justify-between gap-5 border-t border-white/15 py-7 text-xs text-blue-100/40 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} PulseWave Technologies.
            All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link
              to="/privacy"
              className="transition hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="transition hover:text-white"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}