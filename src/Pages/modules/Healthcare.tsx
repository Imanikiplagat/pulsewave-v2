import {
  ArrowRight,
  Check,
  ChevronDown,
  Globe,
  HeartPulse,
  Menu,
  Pill,
  Video,
  FlaskConical,
  Building2,
  X,
} from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const healthcareSolutions = [
  {
    title: 'Electronic Medical Records',
    description: 'Unified digital patient records',
    href: '#features',
  },
  {
    title: 'Hospital Management',
    description: 'Clinical and administrative operations',
    href: '#overview',
  },
  {
    title: 'Telemedicine',
    description: 'Remote consultations and digital care',
    href: '#modules',
  },
  {
    title: 'Pharmacy Management',
    description: 'Medication inventory and dispensing',
    href: '#features',
  },
  {
    title: 'Laboratory Management',
    description: 'Digital laboratory workflows and results',
    href: '#modules',
  },
  {
    title: 'Health Facility ERP',
    description: 'Integrated healthcare operations',
    href: '#overview',
  },
];

const features = [
  'Electronic Medical Records',
  'Patient registration and management',
  'Pharmacy inventory and dispensing',
  'Billing and payment management',
  'Secure patient data management',
  'Clinical documentation and reporting',
];

const modules = [
  {
    number: '01',
    title: 'Telemedicine',
    description:
      'Enable remote consultations, digital appointments, and accessible healthcare services for patients beyond the facility.',
  },
  {
    number: '02',
    title: 'Laboratory Management',
    description:
      'Digitise laboratory workflows, test requests, results, and reporting while keeping information connected to patient records.',
  },
  {
    number: '03',
    title: 'Integrated Healthcare Operations',
    description:
      'Connect clinical, administrative, financial, pharmacy, and laboratory workflows through one digital environment.',
  },
];

export default function HospitalManagement() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobileMenu = () => setMobileOpen(false);

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#071A35]">

      {/* ================= NAVBAR ================= */}
      <header className="sticky top-0 z-50 border-b border-[#E5E7EB] bg-[#FFFFFF]/95 backdrop-blur-md">
        <div className="relative mx-auto flex h-20 max-w-7xl items-center px-6 lg:px-10">

          {/* Logo */}
          <Link
            to="/"
            onClick={closeMobileMenu}
            className="flex shrink-0 items-center"
          >
            <img
              src="/logo.png"
              alt="PulseWave Technologies"
              className="h-25 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 lg:flex">
            <Link
              to="/"
              className="text-sm font-semibold text-[#071A35] transition hover:text-[#2563EB]"
            >
              Home
            </Link>

            <Link
              to="/solutions/custom-software"
              className="text-sm font-semibold text-[#071A35] transition hover:text-[#2563EB]"
            >
              Solutions
            </Link>

            <Link
              to="/solutions/systems-integration"
              className="text-sm font-semibold text-[#071A35] transition hover:text-[#2563EB]"
            >
              Systems Integration
            </Link>

            <Link
              to="/about"
              className="text-sm font-semibold text-[#071A35] transition hover:text-[#2563EB]"
            >
              About
            </Link>
          </nav>

          {/* CTA */}
          <div className="ml-auto hidden lg:flex">
            <Link
              to="/contact"
              className="rounded-full bg-[#071A35] px-5 py-2.5 text-sm font-semibold text-[#FFFFFF] transition hover:bg-[#2563EB]"
            >
              Start a project
            </Link>
          </div>

          {/* Mobile menu */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="ml-auto rounded-lg p-2 text-[#071A35] lg:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileOpen && (
          <div className="border-t border-[#E5E7EB] bg-[#FFFFFF] lg:hidden">
            <nav className="flex flex-col px-6 py-5">

              <Link
                to="/"
                onClick={closeMobileMenu}
                className="border-b border-[#E5E7EB] py-4 text-sm font-semibold text-[#071A35]"
              >
                Home
              </Link>

              <Link
                to="/solutions/custom-software"
                onClick={closeMobileMenu}
                className="border-b border-[#E5E7EB] py-4 text-sm font-semibold text-[#071A35]"
              >
                Solutions
              </Link>

              <Link
                to="/solutions/systems-integration"
                onClick={closeMobileMenu}
                className="border-b border-[#E5E7EB] py-4 text-sm font-semibold text-[#071A35]"
              >
                Systems Integration
              </Link>

              <Link
                to="/about"
                onClick={closeMobileMenu}
                className="border-b border-[#E5E7EB] py-4 text-sm font-semibold text-[#071A35]"
              >
                About
              </Link>

              <Link
                to="/contact"
                onClick={closeMobileMenu}
                className="py-4 text-sm font-semibold text-[#071A35]"
              >
                Contact
              </Link>

            </nav>
          </div>
        )}
      </header>

      <main>

        {/* ================= HERO ================= */}
        <section className="relative overflow-hidden bg-[#071A35] text-[#FFFFFF]">

          <div
            aria-hidden
            className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-[#2563EB]/20 blur-3xl"
          />

          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-40 left-1/4 h-96 w-96 rounded-full bg-[#D7F23A]/10 blur-3xl"
          />

          <div className="relative z-10 mx-auto grid min-h-[620px] max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:py-28">

            {/* Hero Text */}
            <div>

              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-[#D7F23A]" />

                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#D7F23A]">
                  Healthcare
                </span>
              </div>

              <h1
                className="max-w-3xl text-5xl font-medium leading-[1.08] text-[#FFFFFF] sm:text-6xl lg:text-7xl"
                style={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                }}
              >
                Connected technology for
                <span className="text-[#D7F23A]">
                  {' '}
                  better healthcare.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-[#FFFFFF]">
                Modern healthcare systems that connect patients,
                clinicians, facilities, and operations through one
                secure digital environment.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">

                <Link
                  to="#overview"
                  className="inline-flex items-center gap-2 rounded-full bg-[#D7F23A] px-7 py-3.5 font-semibold text-[#071A35] transition hover:bg-[#FFFFFF]"
                >
                  Explore solution
                  <ArrowRight size={18} />
                </Link>

                <a
                  href="#features"
                  className="inline-flex items-center gap-2 rounded-full border border-[#FFFFFF]/30 px-7 py-3.5 font-semibold text-[#FFFFFF] transition hover:border-[#D7F23A] hover:text-[#D7F23A]"
                >
                  View features
                  <ChevronDown size={17} />
                </a>

              </div>

            </div>

            {/* Only major visual */}
            <div className="relative hidden lg:block">
              <div className="overflow-hidden rounded-3xl border border-[#FFFFFF]/10 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=90"
                  alt="Healthcare professional using digital technology"
                  className="h-[430px] w-full object-cover"
                />

                <div className="absolute inset-0 bg-[#071A35]/20" />
              </div>

              <div className="absolute -bottom-6 -left-6 rounded-2xl border border-[#FFFFFF]/20 bg-[#071A35] p-5 shadow-xl">
                <HeartPulse
                  size={25}
                  className="text-[#D7F23A]"
                />

                <p className="mt-2 text-sm font-semibold text-[#FFFFFF]">
                  Connected Healthcare
                </p>

                <p className="mt-1 text-xs text-[#FFFFFF]/70">
                  Digital care. Better operations.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* ================= OVERVIEW ================= */}
        <section
          id="overview"
          className="scroll-mt-24 px-6 py-24 lg:px-10 lg:py-32"
        >
          <div className="mx-auto max-w-7xl">

            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#2563EB]">
                Hospital Management
              </p>

              <h2
                className="mt-4 text-4xl font-medium leading-tight text-[#071A35] sm:text-5xl"
                style={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                }}
              >
                One connected system for healthcare operations.
              </h2>

              <p className="mt-7 text-lg leading-8 text-[#374151]">
                PulseWave healthcare technology brings clinical and
                administrative processes together so facilities can
                manage information more efficiently.
              </p>

              <p className="mt-5 leading-7 text-[#374151]">
                From patient registration and clinical documentation to
                billing, pharmacy, laboratory workflows, and reporting,
                healthcare teams can work from connected digital systems.
              </p>
            </div>

            {/* Simple solution cards */}
            <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

              {healthcareSolutions.slice(1).map((solution) => (
                <a
                  key={solution.title}
                  href={solution.href}
                  className="group rounded-2xl border border-[#E5E7EB] bg-[#FFFFFF] p-7 shadow-sm transition hover:-translate-y-1 hover:border-[#2563EB] hover:shadow-lg"
                >
                  <div className="flex items-center justify-between">

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#D7F23A] text-[#071A35]">
                      <Building2 size={21} />
                    </div>

                    <ArrowRight
                      size={18}
                      className="text-[#2563EB] transition group-hover:translate-x-1"
                    />

                  </div>

                  <h3 className="mt-7 text-lg font-bold text-[#071A35]">
                    {solution.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#374151]">
                    {solution.description}
                  </p>
                </a>
              ))}

            </div>
          </div>
        </section>

        {/* ================= FEATURES ================= */}
        <section
          id="features"
          className="scroll-mt-24 bg-[#F5F7FA] px-6 py-24 lg:px-10 lg:py-32"
        >
          <div className="mx-auto max-w-7xl">

            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#2563EB]">
                Healthcare Features
              </p>

              <h2
                className="mt-4 text-4xl font-medium leading-tight text-[#071A35] sm:text-5xl"
                style={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                }}
              >
                Digital tools for everyday healthcare workflows.
              </h2>

              <p className="mt-6 leading-7 text-[#374151]">
                Give healthcare teams the systems they need to manage
                patients, records, medication, billing, and reporting
                more efficiently.
              </p>
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">

              {features.map((feature, index) => (
                <div
                  key={feature}
                  className="flex items-start gap-4 rounded-2xl border border-[#E5E7EB] bg-[#FFFFFF] p-6 shadow-sm"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#D7F23A] text-[#071A35]">
                    <Check size={16} strokeWidth={3} />
                  </span>

                  <div>
                    <p className="text-sm font-semibold text-[#071A35]">
                      {feature}
                    </p>

                    <p className="mt-1 text-xs leading-5 text-[#374151]">
                      Secure and connected digital workflows.
                    </p>
                  </div>
                </div>
              ))}

            </div>

            {/* Healthcare solution links */}
            <div className="mt-12 grid gap-4 md:grid-cols-2">

              <a
                href="#features"
                className="group rounded-2xl bg-[#071A35] p-7 text-[#FFFFFF]"
              >
                <div className="flex items-center justify-between">
                  <Pill className="text-[#D7F23A]" size={25} />

                  <ArrowRight
                    size={19}
                    className="transition group-hover:translate-x-1 group-hover:text-[#D7F23A]"
                  />
                </div>

                <h3 className="mt-7 text-xl font-bold">
                  Pharmacy Management
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#FFFFFF]/75">
                  Manage medication inventory, dispensing, and pharmacy
                  workflows through connected digital systems.
                </p>
              </a>

              <a
                href="#features"
                className="group rounded-2xl bg-[#FFFFFF] p-7 shadow-sm border border-[#E5E7EB]"
              >
                <div className="flex items-center justify-between">
                  <HeartPulse
                    className="text-[#2563EB]"
                    size={25}
                  />

                  <ArrowRight
                    size={19}
                    className="text-[#2563EB] transition group-hover:translate-x-1"
                  />
                </div>

                <h3 className="mt-7 text-xl font-bold text-[#071A35]">
                  Electronic Medical Records
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#374151]">
                  Maintain unified digital patient records that can
                  support connected clinical workflows.
                </p>
              </a>

            </div>
          </div>
        </section>

        {/* ================= MODULES ================= */}
        <section
          id="modules"
          className="scroll-mt-24 bg-[#071A35] px-6 py-24 text-[#FFFFFF] lg:px-10 lg:py-32"
        >
          <div className="mx-auto max-w-7xl">

            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#D7F23A]">
                  Healthcare Modules
                </p>

                <h2
                  className="mt-4 text-4xl font-medium leading-tight text-[#FFFFFF] sm:text-5xl"
                  style={{
                    fontFamily: '"Playfair Display", Georgia, serif',
                  }}
                >
                  Connected modules for modern care.
                </h2>

                <p className="mt-6 max-w-lg leading-7 text-[#FFFFFF]/75">
                  Extend your healthcare platform with specialised
                  modules designed to support digital care and
                  operational efficiency.
                </p>
              </div>

              <div className="space-y-3">

                {modules.map((module) => (
                  <div
                    key={module.number}
                    className="flex gap-6 border-t border-[#FFFFFF]/15 py-8"
                  >
                    <span className="text-sm font-bold text-[#D7F23A]">
                      {module.number}
                    </span>

                    <div>
                      <h3
                        className="text-2xl font-medium text-[#FFFFFF]"
                        style={{
                          fontFamily: '"Playfair Display", Georgia, serif',
                        }}
                      >
                        {module.title}
                      </h3>

                      <p className="mt-3 max-w-xl text-sm leading-7 text-[#FFFFFF]/70">
                        {module.description}
                      </p>
                    </div>
                  </div>
                ))}

              </div>
            </div>

            {/* Module cards */}
            <div className="mt-14 grid gap-5 md:grid-cols-2">

              <div className="rounded-2xl border border-[#FFFFFF]/10 bg-[#FFFFFF]/5 p-7">
                <Video
                  size={25}
                  className="text-[#D7F23A]"
                />

                <h3 className="mt-6 text-xl font-bold text-[#FFFFFF]">
                  Telemedicine
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#FFFFFF]/70">
                  Support remote consultations and digital care
                  experiences for patients and healthcare providers.
                </p>
              </div>

              <div className="rounded-2xl border border-[#FFFFFF]/10 bg-[#FFFFFF]/5 p-7">
                <FlaskConical
                  size={25}
                  className="text-[#D7F23A]"
                />

                <h3 className="mt-6 text-xl font-bold text-[#FFFFFF]">
                  Laboratory Management
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#FFFFFF]/70">
                  Connect laboratory requests, workflows, results, and
                  reporting with patient information.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="px-6 py-24 lg:px-10 lg:py-32">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#071A35]">
            <div className="p-8 text-[#FFFFFF] sm:p-12 lg:p-16">

              <Globe
                className="mb-7 text-[#D7F23A]"
                size={28}
              />

              <h2
                className="max-w-3xl text-4xl font-medium leading-tight text-[#FFFFFF] sm:text-5xl"
                style={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                }}
              >
                Build a healthcare system around your facility.
              </h2>

              <p className="mt-5 max-w-2xl leading-7 text-[#FFFFFF]/80">
                Tell us about your healthcare operation and let's
                explore how connected technology can support your
                patients, teams, and processes.
              </p>

              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#D7F23A] px-7 py-3.5 font-semibold text-[#071A35] transition hover:bg-[#FFFFFF]"
              >
                Start a conversation
                <ArrowRight size={18} />
              </Link>

            </div>
          </div>
        </section>

      </main>

      {/* ================= FOOTER ================= */}
      <footer className="bg-[#071A35] text-[#FFFFFF]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">

          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

            {/* Brand */}
            <div className="lg:col-span-2">
              <Link
                to="/"
                className="inline-flex items-center"
              >
                <img
                  src="/logo.png"
                  alt="PulseWave Technologies"
                  className="h-24 w-auto object-contain"
                />
              </Link>

              <p
                className="mt-7 max-w-md text-2xl leading-relaxed text-[#FFFFFF]"
                style={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                }}
              >
                Building digital experiences for the businesses
                shaping tomorrow.
              </p>
            </div>

            {/* Explore */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#D7F23A]">
                Explore
              </h3>

              <div className="mt-5 flex flex-col gap-3 text-sm text-[#FFFFFF]">
                <Link
                  to="/"
                  className="transition hover:text-[#D7F23A]"
                >
                  Home
                </Link>

                <Link
                  to="/solutions/custom-software"
                  className="transition hover:text-[#D7F23A]"
                >
                  Digital Services
                </Link>

                <Link
                  to="/solutions/hospital-management"
                  className="transition hover:text-[#D7F23A]"
                >
                  Healthcare
                </Link>

                <Link
                  to="/solutions/systems-integration"
                  className="transition hover:text-[#D7F23A]"
                >
                  Systems Integration
                </Link>

                <Link
                  to="/about"
                  className="transition hover:text-[#D7F23A]"
                >
                  About
                </Link>
              </div>
            </div>

            {/* Connect */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#D7F23A]">
                Connect
              </h3>

              <div className="mt-5 flex flex-col gap-3 text-sm text-[#FFFFFF]">
                <Link
                  to="/contact"
                  className="transition hover:text-[#D7F23A]"
                >
                  Contact
                </Link>

                <a
                  href="mailto:info@pulsewave.com"
                  className="transition hover:text-[#D7F23A]"
                >
                  info@pulsewave.com
                </a>
              </div>
            </div>

          </div>

          {/* Bottom */}
          <div className="mt-14 flex flex-col justify-between gap-4 border-t border-[#FFFFFF]/20 pt-7 text-xs text-[#FFFFFF]/70 sm:flex-row">

            <p>
              © {new Date().getFullYear()} PulseWave Technologies.
              All rights reserved.
            </p>

            <div className="flex gap-6">
              <Link
                to="/privacy"
                className="transition hover:text-[#D7F23A]"
              >
                Privacy
              </Link>

              <Link
                to="/terms"
                className="transition hover:text-[#D7F23A]"
              >
                Terms
              </Link>
            </div>

          </div>
        </div>
      </footer>
    </div>
  );
}