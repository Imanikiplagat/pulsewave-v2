import {
  ArrowRight,
  BarChart3,
  Check,
  ChevronDown,
  ClipboardCheck,
  FileText,
  Globe,
  Menu,
  PackageCheck,
  Search,
  ShieldCheck,
  Truck,
  X,
} from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const procurementSolutions = [
  {
    title: 'Procurement Management',
    description: 'Manage purchasing activities, suppliers, approvals, and procurement workflows in one platform.',
    icon: ClipboardCheck,
    href: '#overview',
  },
  {
    title: 'Supplier Management',
    description: 'Centralize supplier information, onboarding, performance, and compliance tracking.',
    icon: ShieldCheck,
    href: '#features',
  },
  {
    title: 'Purchase Management',
    description: 'Create, approve, track, and manage purchase requests and purchase orders efficiently.',
    icon: FileText,
    href: '#modules',
  },
  {
    title: 'Inventory & Supplies',
    description: 'Monitor stock levels, incoming supplies, inventory movement, and procurement needs.',
    icon: PackageCheck,
    href: '#modules',
  },
  {
    title: 'Tender Management',
    description: 'Streamline tender processes, supplier submissions, evaluations, and approvals.',
    icon: Search,
    href: '#process',
  },
  {
    title: 'Procurement Analytics',
    description: 'Gain visibility into spending, supplier performance, purchasing trends, and procurement efficiency.',
    icon: BarChart3,
    href: '#features',
  },
];

const features = [
  'Supplier registration and management',
  'Purchase requisitions and approvals',
  'Purchase order management',
  'Tender and quotation management',
  'Inventory and supply tracking',
  'Procurement reporting and analytics',
];

const modules = [
  {
    title: 'Supplier Management',
    description:
      'Maintain centralized supplier profiles, documentation, contracts, performance records, and compliance information.',
    icon: ShieldCheck,
  },
  {
    title: 'Purchase Orders',
    description:
      'Create, approve, issue, and track purchase orders while maintaining a clear record of procurement activities.',
    icon: FileText,
  },
  {
    title: 'Inventory Management',
    description:
      'Track stock levels, goods received, inventory movement, and replenishment requirements.',
    icon: PackageCheck,
  },
  {
    title: 'Tender & Quotation Management',
    description:
      'Manage supplier quotations, tender submissions, evaluations, approvals, and procurement decisions.',
    icon: Search,
  },
];

const processSteps = [
  {
    number: '01',
    title: 'Request',
    description:
      'Departments submit procurement requests with the required products, services, quantities, and specifications.',
  },
  {
    number: '02',
    title: 'Evaluate',
    description:
      'Procurement teams review requirements, suppliers, quotations, pricing, and compliance information.',
  },
  {
    number: '03',
    title: 'Approve',
    description:
      'Requests and purchasing decisions move through configurable approval workflows before orders are placed.',
  },
  {
    number: '04',
    title: 'Purchase',
    description:
      'Approved purchase orders are issued and tracked from supplier confirmation through delivery.',
  },
  {
    number: '05',
    title: 'Receive & Track',
    description:
      'Goods and services are received, recorded, and connected to inventory, finance, and reporting processes.',
  },
];

export default function Procurement() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobileMenu = () => setMobileOpen(false);

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#374151]">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-[#E5E7EB] bg-[#FFFFFF]/95 backdrop-blur-md">
        <div className="relative mx-auto flex h-20 max-w-7xl items-center px-6 lg:px-10">
          <Link
            to="/"
            className="inline-flex items-center"
            onClick={closeMobileMenu}
          >
            <img
              src="/logo.png"
              alt="PulseWave Technologies"
              className="h-16 w-auto object-contain"
            />
          </Link>

          <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 lg:flex">
            <Link
              to="/"
              className="text-sm font-medium text-[#374151] transition hover:text-[#2563EB]"
            >
              Home
            </Link>

            <Link
              to="/solutions/custom-software"
              className="text-sm font-medium text-[#374151] transition hover:text-[#2563EB]"
            >
              Digital Services
            </Link>

            <Link
              to="/solutions/systems-integration"
              className="text-sm font-medium text-[#374151] transition hover:text-[#2563EB]"
            >
              Systems Integration
            </Link>

            <Link
              to="/solutions/hospital-management"
              className="text-sm font-medium text-[#374151] transition hover:text-[#2563EB]"
            >
              Healthcare
            </Link>

            <Link
              to="/solutions/procurement"
              className="text-sm font-medium text-[#2563EB]"
            >
              Procurement
            </Link>

            <Link
              to="/about"
              className="text-sm font-medium text-[#374151] transition hover:text-[#2563EB]"
            >
              About
            </Link>
          </nav>

          <div className="ml-auto hidden lg:flex">
            <Link
              to="/contact"
              className="rounded-full bg-[#071A35] px-6 py-3 text-sm font-semibold text-[#FFFFFF] transition hover:bg-[#2563EB]"
            >
              Start a project
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="ml-auto rounded-lg p-2 text-[#071A35] lg:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileOpen && (
          <div className="border-t border-[#E5E7EB] bg-[#FFFFFF] px-6 py-6 lg:hidden">
            <nav className="flex flex-col gap-5">
              <Link
                to="/"
                onClick={closeMobileMenu}
                className="text-sm font-medium text-[#374151]"
              >
                Home
              </Link>

              <Link
                to="/solutions/custom-software"
                onClick={closeMobileMenu}
                className="text-sm font-medium text-[#374151]"
              >
                Digital Services
              </Link>

              <Link
                to="/solutions/systems-integration"
                onClick={closeMobileMenu}
                className="text-sm font-medium text-[#374151]"
              >
                Systems Integration
              </Link>

              <Link
                to="/solutions/hospital-management"
                onClick={closeMobileMenu}
                className="text-sm font-medium text-[#374151]"
              >
                Healthcare
              </Link>

              <Link
                to="/solutions/procurement"
                onClick={closeMobileMenu}
                className="text-sm font-medium text-[#2563EB]"
              >
                Procurement
              </Link>

              <Link
                to="/about"
                onClick={closeMobileMenu}
                className="text-sm font-medium text-[#374151]"
              >
                About
              </Link>

              <Link
                to="/contact"
                onClick={closeMobileMenu}
                className="mt-2 inline-flex w-fit rounded-full bg-[#071A35] px-6 py-3 text-sm font-semibold text-[#FFFFFF]"
              >
                Start a project
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#071A35] text-[#FFFFFF]">
        <div className="grid lg:grid-cols-2">
          <div className="flex items-center px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
            <div className="max-w-2xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#D7F23A]/40 bg-[#D7F23A]/10 px-4 py-2 text-sm font-medium text-[#D7F23A]">
                <Globe size={16} />
                Procurement Technology
              </div>

              <h1
                className="text-5xl font-semibold leading-[1.08] tracking-tight text-[#FFFFFF] sm:text-6xl lg:text-7xl"
                style={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                }}
              >
                Smarter procurement.
                <span className="text-[#D7F23A]"> Better operations.</span>
              </h1>

              <p className="mt-7 max-w-xl text-base leading-8 text-[#FFFFFF] sm:text-lg">
                We build digital procurement solutions that connect purchasing,
                suppliers, approvals, inventory, and reporting into one
                efficient workflow.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="#overview"
                  className="inline-flex items-center gap-2 rounded-full bg-[#D7F23A] px-7 py-3.5 font-semibold text-[#071A35] transition hover:bg-[#FFFFFF]"
                >
                  Explore procurement
                  <ChevronDown size={18} />
                </a>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-[#FFFFFF]/40 px-7 py-3.5 font-semibold text-[#FFFFFF] transition hover:border-[#D7F23A] hover:text-[#D7F23A]"
                >
                  Start a project
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>

          <div className="relative min-h-[380px] lg:min-h-[650px]">
            <img
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=90"
              alt="Procurement and logistics operations"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-[#071A35]/25" />
          </div>
        </div>
      </section>

      {/* Overview */}
      <section
        id="overview"
        className="scroll-mt-24 bg-[#F5F7FA] px-6 py-24 lg:px-10 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#2563EB]">
              Procurement overview
            </p>

            <h2
              className="mt-4 text-4xl font-medium leading-tight text-[#071A35] sm:text-5xl"
              style={{
                fontFamily: '"Playfair Display", Georgia, serif',
              }}
            >
              One connected system for your procurement operations.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#374151]">
              From the first purchase request to supplier delivery and
              reporting, our procurement platforms help organizations create
              structured, transparent, and efficient purchasing workflows.
            </p>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {procurementSolutions.map((solution) => {
              const Icon = solution.icon;

              return (
                <a
                  key={solution.title}
                  href={solution.href}
                  className="group rounded-2xl border border-[#E5E7EB] bg-[#FFFFFF] p-7 transition hover:-translate-y-1 hover:border-[#2563EB]/30 hover:shadow-xl"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#071A35] text-[#D7F23A]">
                    <Icon size={22} />
                  </div>

                  <h3 className="mt-6 text-xl font-semibold text-[#071A35]">
                    {solution.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#374151]">
                    {solution.description}
                  </p>

                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#2563EB]">
                    Learn more
                    <ArrowRight
                      size={16}
                      className="transition group-hover:translate-x-1"
                    />
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features */}
      <section
        id="features"
        className="scroll-mt-24 bg-[#FFFFFF] px-6 py-24 lg:px-10 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#2563EB]">
                Features
              </p>

              <h2
                className="mt-4 text-4xl font-medium leading-tight text-[#071A35] sm:text-5xl"
                style={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                }}
              >
                Everything your procurement team needs.
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-[#374151]">
                Build a procurement environment that gives teams better
                visibility, stronger controls, and simpler day-to-day
                purchasing workflows.
              </p>

              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#071A35] px-7 py-3.5 font-semibold text-[#FFFFFF] transition hover:bg-[#2563EB]"
              >
                Discuss your requirements
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="rounded-2xl border border-[#E5E7EB] bg-[#F5F7FA] p-6"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#D7F23A] text-[#071A35]">
                    <Check size={18} strokeWidth={3} />
                  </div>

                  <h3 className="mt-5 font-semibold text-[#071A35]">
                    {feature}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#374151]">
                    Designed to support structured and efficient procurement
                    operations.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modules */}
      <section
        id="modules"
        className="scroll-mt-24 bg-[#071A35] px-6 py-24 text-[#FFFFFF] lg:px-10 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#D7F23A]">
              Procurement modules
            </p>

            <h2
              className="mt-4 text-4xl font-medium leading-tight text-[#FFFFFF] sm:text-5xl"
              style={{
                fontFamily: '"Playfair Display", Georgia, serif',
              }}
            >
              Connected modules built around your workflow.
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#FFFFFF]">
              Select the capabilities your organization needs and create a
              procurement platform that can evolve with your operations.
            </p>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-2">
            {modules.map((module) => {
              const Icon = module.icon;

              return (
                <div
                  key={module.title}
                  className="rounded-2xl border border-[#FFFFFF]/15 bg-[#FFFFFF]/5 p-8"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#D7F23A] text-[#071A35]">
                    <Icon size={22} />
                  </div>

                  <h3 className="mt-6 text-2xl font-semibold text-[#FFFFFF]">
                    {module.title}
                  </h3>

                  <p className="mt-4 leading-7 text-[#FFFFFF]">
                    {module.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section
        id="process"
        className="scroll-mt-24 bg-[#F5F7FA] px-6 py-24 lg:px-10 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#2563EB]">
              Procurement process
            </p>

            <h2
              className="mt-4 text-4xl font-medium leading-tight text-[#071A35] sm:text-5xl"
              style={{
                fontFamily: '"Playfair Display", Georgia, serif',
              }}
            >
              From request to delivery.
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#374151]">
              Create a clear digital workflow that keeps every procurement
              stage visible and accountable.
            </p>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((step) => (
              <div
                key={step.number}
                className="relative rounded-2xl border border-[#E5E7EB] bg-[#FFFFFF] p-6"
              >
                <span className="text-sm font-bold text-[#2563EB]">
                  {step.number}
                </span>

                <h3 className="mt-5 text-xl font-semibold text-[#071A35]">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#374151]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl rounded-3xl bg-[#071A35] px-8 py-16 text-center sm:px-12 lg:px-16">
          <Globe className="mx-auto text-[#D7F23A]" size={30} />

          <h2
            className="mx-auto mt-6 max-w-3xl text-4xl font-medium leading-tight text-[#FFFFFF] sm:text-5xl"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
            }}
          >
            Ready to modernize your procurement operations?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-[#FFFFFF]">
            Tell us about your procurement workflow and we will explore the
            right digital solution for your organization.
          </p>

          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#D7F23A] px-7 py-3.5 font-semibold text-[#071A35] transition hover:bg-[#FFFFFF]"
          >
            Start a conversation
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#071A35] text-[#FFFFFF]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            <div className="lg:col-span-2">
              <Link to="/" className="inline-flex items-center">
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
                Building digital experiences for the businesses shaping
                tomorrow.
              </p>
            </div>

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
                  to="/solutions/systems-integration"
                  className="transition hover:text-[#D7F23A]"
                >
                  Systems Integration
                </Link>

                <Link
                  to="/solutions/hospital-management"
                  className="transition hover:text-[#D7F23A]"
                >
                  Healthcare
                </Link>

                <Link
                  to="/solutions/procurement"
                  className="transition hover:text-[#D7F23A]"
                >
                  Procurement
                </Link>

                <Link
                  to="/about"
                  className="transition hover:text-[#D7F23A]"
                >
                  About
                </Link>
              </div>
            </div>

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

          <div className="mt-14 flex flex-col justify-between gap-4 border-t border-[#FFFFFF]/20 pt-7 text-xs text-[#FFFFFF]/70 sm:flex-row">
            <p>
              © {new Date().getFullYear()} PulseWave Technologies. All rights
              reserved.
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