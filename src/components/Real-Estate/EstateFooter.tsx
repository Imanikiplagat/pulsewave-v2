import { Link } from "react-router-dom";
import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";
import { Logo } from "@/components/brand/logo";

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--navy)] text-white">
      <div className="container-page mx-auto max-w-7xl px-6 md:px-12 lg:px-20">

        {/* Main footer */}
        <div className="grid grid-cols-1 gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-2">
            <Link
              to="/"
              className="inline-flex items-center"
              aria-label="PulseWave Technologies home"
            >
              <Logo />
            </Link>

            <p className="mt-6 max-w-md text-sm leading-relaxed text-white">
              Technology solutions that help organizations simplify
              operations, connect information and deliver better digital
              services.
            </p>

            <Link
              to="/contact"
              className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-white"
            >
              Talk to PulseWave
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-white">
              Solutions
            </h3>

            <nav className="mt-5 flex flex-col gap-3">
              <Link
                to="/solutions/erp"
                className="text-sm text-white transition-colors hover:text-[var(--blue-brand)]"
              >
                ERP
              </Link>

              <Link
                to="/solutions/procurement"
                className="text-sm text-white transition-colors hover:text-[var(--blue-brand)]"
              >
                Procurement
              </Link>

              <Link
                to="/solutions/real-estate"
                className="text-sm text-white transition-colors hover:text-[var(--blue-brand)]"
              >
                Real Estate
              </Link>

              <Link
                to="/revenue-collection"
                className="text-sm text-white transition-colors hover:text-[var(--blue-brand)]"
              >
                Revenue Collection
              </Link>

              <Link
                to="/solutions/digital-services"
                className="text-sm text-white transition-colors hover:text-[var(--blue-brand)]"
              >
                Digital Services
              </Link>

              <Link
                to="/solutions/healthcare"
                className="text-sm text-white transition-colors hover:text-[var(--blue-brand)]"
              >
                Healthcare
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-white">
              Contact
            </h3>

            <div className="mt-5 space-y-4">

              <div className="flex items-start gap-3">
                <MapPin
                  size={17}
                  strokeWidth={1.7}
                  className="mt-0.5 shrink-0 text-[var(--blue-brand)]"
                />

                <p className="text-sm leading-relaxed text-white">
                  Kenya
                </p>
              </div>

              <a
                href="mailto:info@pulsewavetechnologies.com"
                className="flex items-start gap-3 text-sm text-white transition-colors hover:text-[var(--blue-brand)]"
              >
                <Mail
                  size={17}
                  strokeWidth={1.7}
                  className="mt-0.5 shrink-0 text-[var(--blue-brand)]"
                />

                <span>info@pulsewavetechnologies.com</span>
              </a>

              <a
                href="tel:+254 796 222 111"
                className="flex items-start gap-3 text-sm text-white transition-colors hover:text-[var(--blue-brand)]"
              >
                <Phone
                  size={17}
                  strokeWidth={1.7}
                  className="mt-0.5 shrink-0 text-[var(--blue-brand)]"
                />

                <span>+254 796 222 111</span>
              </a>

            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-4 border-t border-[var(--color-border)] py-6 md:flex-row md:items-center md:justify-between">

          <p className="text-xs text-white">
            © {new Date().getFullYear()} PulseWave Technologies. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link
              to="/privacy"
              className="text-xs text-white transition-colors hover:text-[var(--blue-brand)]"
            >
              Privacy Policy
            </Link>

            <Link
              to="/contact"
              className="text-xs text-white transition-colors hover:text-[var(--blue-brand)]"
            >
              Contact
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
};