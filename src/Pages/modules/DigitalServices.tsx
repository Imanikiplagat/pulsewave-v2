import {  ArrowRight,  Check,  ChevronDown,  Cloud,    Cpu,  Globe,  Layers3,  Menu,  MessageSquare,  X,} from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const services = [
  {
    title: 'Custom Software',
    description: 'Purpose-built digital solutions',
    href: '/solutions/custom-software#overview',
    image:
      'https://images.pexels.com/photos/36724030/pexels-photo-36724030.jpeg',
  },
  {
    title: 'Web & Mobile Apps',
    description: 'High-performance digital experiences',
    href: '/solutions/custom-software#features',
    image:
      'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1200&q=85',
  },
  {
    title: 'SaaS Solutions',
    description: 'Scalable software delivered as a service',
    href: '/solutions/custom-software#modules',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85',
  },
  {
    title: 'AI Solutions',
    description: 'Intelligent automation and data-driven systems',
    href: '/solutions/custom-software#technologies',
    image:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=85',
  },
];

const additionalServices = [
  {
    title: 'System Integration',
    description: 'Connect systems and data seamlessly',
    href: '/solutions/systems-integration#overview',
    icon: Layers3,
  },
  {
    title: 'Bulk SMS & Voice',
    description: 'Reach customers through digital communication',
    href: '/solutions/custom-software#features',
    icon: MessageSquare,
  },
  {
    title: 'Cloud & Digital Transformation',
    description: 'Modernise operations with scalable technology',
    href: '/solutions/systems-integration#technologies',
    icon: Cloud,
  },
];

const features = [
  'Responsive web applications',
  'Cross-platform mobile applications',
  'Secure backend systems and APIs',
  'User authentication and role management',
  'Payment and third-party integrations',
  'Cloud deployment and infrastructure',
];

const modules = [
  {
    number: '01',
    title: 'SaaS Platforms',
    description:
      'Build scalable software platforms that grow alongside your customers and business.',
  },
  {
    number: '02',
    title: 'Business Applications',
    description:
      'Turn complex business processes into simple, efficient digital workflows.',
  },
  {
    number: '03',
    title: 'Customer Portals',
    description:
      'Create intuitive digital spaces where customers can access services and manage their accounts.',
  },
];

const technologies = [
  'Artificial Intelligence & Machine Learning',
  'Cloud Computing',
  'REST APIs & System Integrations',
  'Data & Automation',
  'Modern Web Technologies',
  'Secure Digital Infrastructure',
];

export default function CustomSoftware() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobileMenu = () => setMobileOpen(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
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

    {/* Desktop Navigation - Centered */}
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

    {/* Right CTA */}
    <div className="ml-auto hidden lg:flex">
      <Link
        to="/contact"
        className="rounded-full bg-[#071A35] px-5 py-2.5 text-sm font-semibold text-[#FFFFFF] transition hover:bg-[#2563EB]"
      >
        Start a project
      </Link>
    </div>

    {/* Mobile menu button */}
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
  {/* Decorative background */}
  <div
    aria-hidden
    className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#2563EB]/20 blur-3xl"
  />

  <div
    aria-hidden
    className="pointer-events-none absolute -bottom-40 left-1/4 h-96 w-96 rounded-full bg-[#D7F23A]/10 blur-3xl"
  />

  <div
    aria-hidden
    className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2563EB]/10 blur-3xl"
  />

  <div className="relative z-10 mx-auto flex min-h-[680px] max-w-7xl items-center justify-center px-6 py-24 lg:px-10 lg:py-32">
    <div className="w-full max-w-4xl text-center">     
    
      {/* Heading */}
      <h1
        className="text-5xl font-semibold leading-[1.08] tracking-tight text-[#FFFFFF] sm:text-6xl lg:text-7xl xl:text-8xl"
        style={{
          fontFamily: '"Playfair Display", Georgia, serif',
        }}
      >
        Technology built around your{' '}
        <span className="text-[#D7F23A]">
          vision.
        </span>
      </h1>

      {/* Description */}
      <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-[#FFFFFF] sm:text-lg">
        We create purposeful digital products, intelligent systems,
        and scalable technology that help ambitious businesses move
        forward.
      </p>

      {/* Buttons */}
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-[#D7F23A] px-7 py-3.5 font-semibold text-[#071A35] shadow-lg transition hover:bg-[#FFFFFF]"
        >
          Start a project
          <ArrowRight size={18} />
        </Link>

        <a
          href="#overview"
          className="inline-flex items-center gap-2 rounded-full border border-[#FFFFFF]/40 bg-[#FFFFFF]/5 px-7 py-3.5 font-semibold text-[#FFFFFF] transition hover:border-[#D7F23A] hover:text-[#D7F23A]"
        >
          Explore
          <ChevronDown size={17} />
        </a>
      </div>

      {/* Stats */}
      <div className="mx-auto mt-16 grid max-w-2xl grid-cols-3 border-t border-[#FFFFFF]/20 pt-8">
        <div className="px-4">
          <p className="text-2xl font-bold text-[#FFFFFF] sm:text-3xl">
            40+
          </p>

          <p className="mt-2 text-xs font-medium text-[#FFFFFF] sm:text-sm">
            Digital projects
          </p>
        </div>

        <div className="border-x border-[#FFFFFF]/20 px-4">
          <p className="text-2xl font-bold text-[#FFFFFF] sm:text-3xl">
            10+
          </p>

          <p className="mt-2 text-xs font-medium text-[#FFFFFF] sm:text-sm">
            Technology solutions
          </p>
        </div>

        <div className="px-4">
          <p className="text-2xl font-bold text-[#FFFFFF] sm:text-3xl">
            24/7
          </p>

          <p className="mt-2 text-xs font-medium text-[#FFFFFF] sm:text-sm">
            Digital possibilities
          </p>
        </div>
      </div>

      {/* Bottom text */}
      <div className="mx-auto mt-12 max-w-xl">
        <p className="text-sm leading-7 text-[#FFFFFF]">
          From idea to deployment, we build digital experiences
          that work for people and businesses.
        </p>
      </div>

    </div>
  </div>
</section>

        {/* ================= SERVICE CARDS ================= */}
        <section className="px-6 py-24 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-dark-gray">
                  What we do
                </p>

                <h2 className="mt-3 max-w-2xl font-playfair text-4xl font-medium leading-tight text-navy sm:text-5xl">
                  Digital solutions designed with purpose.
                </h2>
              </div>

              <p className="max-w-md leading-7 text-dark-gray">
                Whether you are launching something new or transforming an
                existing operation, we create technology around your needs.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {services.map((service, index) => (
                <Link
                  key={service.title}
                  to={service.href}
                  className="group relative min-h-[360px] overflow-hidden rounded-3xl shadow-card"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/45 to-transparent" />

                  <div className="absolute left-7 right-7 top-7 flex justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-lime-brand text-sm font-bold text-navy">
                      0{index + 1}
                    </span>

                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition group-hover:border-lime-brand group-hover:bg-lime-brand group-hover:text-navy">
                      <ArrowRight size={17} />
                    </span>
                  </div>

                  <div className="absolute bottom-7 left-7 right-7 text-white">
                    <h3 className="font-playfair text-3xl font-medium">
                      {service.title}
                    </h3>

                    <p className="mt-2 text-sm text-white/70">
                      {service.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ================= OVERVIEW ================= */}
        <section
          id="overview"
          className="scroll-mt-20 bg-light-gray px-6 py-24 lg:px-10 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-dark-gray">
                Custom Software
              </p>

              <h2 className="mt-4 font-playfair text-4xl font-medium leading-tight text-navy sm:text-5xl">
                Purpose-built digital solutions.
              </h2>

              <p className="mt-7 text-lg leading-8 text-dark-gray">
                Your business is different. Your software should be too.
              </p>

              <p className="mt-5 leading-7 text-dark-gray">
                We design and develop software around your processes,
                customers, and goals — creating systems that are practical
                today and ready for tomorrow.
              </p>

              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 font-semibold text-navy transition hover:text-blue-brand"
              >
                Discuss your project
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1400&q=90"
                alt="Team working on a digital product"
                className="h-[480px] w-full rounded-3xl object-cover shadow-card"
              />

              
            </div>
          </div>
        </section>

        {/* ================= FEATURES ================= */}
        <section
          id="features"
          className="scroll-mt-20 px-6 py-24 lg:px-10 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">
            {/* Image Grid */}
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                {[
                  'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=85',
                  'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=85',
                  'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=85',
                  'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=85',
                ].map((image, index) => (
                  <img
                    key={image}
                    src={image}
                    alt={`Digital team ${index + 1}`}
                    className={`w-full rounded-2xl object-cover shadow-card ${
                      index === 1 || index === 2 ? 'h-52' : 'h-64'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Text */}
            <div className="order-1 lg:order-2">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-dark-gray">
                Web & Mobile Apps
              </p>

              <h2 className="mt-4 font-playfair text-4xl font-medium leading-tight text-navy sm:text-5xl">
                Experiences people actually enjoy using.
              </h2>

              <p className="mt-6 leading-7 text-dark-gray">
                We build responsive applications that combine thoughtful
                interfaces with reliable engineering.
              </p>

              <div className="mt-8 space-y-4">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-lime-brand text-navy">
                      <Check size={14} strokeWidth={3} />
                    </span>

                    <span className="text-sm font-medium text-foreground">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ================= SAAS ================= */}
        <section
          id="modules"
          className="scroll-mt-20 bg-navy px-6 py-24 text-white lg:px-10 lg:py-32"
        >
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-lime-brand">
                  SaaS Solutions
                </p>

                <h2 className="mt-4 font-playfair text-4xl font-medium leading-tight sm:text-5xl">
                  Software that grows with you.
                </h2>

                <p className="mt-6 max-w-lg leading-7 text-white/60">
                  Build platforms that can evolve with your customers,
                  operations, and business model.
                </p>
              </div>

              <div className="space-y-3">
                {modules.map((module) => (
                  <div
                    key={module.number}
                    className="group flex gap-6 border-t border-white/10 py-7"
                  >
                    <span className="text-sm font-semibold text-lime-brand">
                      {module.number}
                    </span>

                    <div>
                      <h3 className="font-playfair text-2xl font-medium">
                        {module.title}
                      </h3>

                      <p className="mt-2 max-w-xl text-sm leading-6 text-white/50">
                        {module.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ================= AI / TECHNOLOGY ================= */}
        <section
          id="technologies"
          className="scroll-mt-20 px-6 py-24 lg:px-10 lg:py-32"
        >
          <div className="mx-auto max-w-7xl">
            <div className="relative overflow-hidden rounded-3xl bg-light-gray shadow-card">
              <div className="grid lg:grid-cols-2">
                <div className="p-8 sm:p-12 lg:p-16">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-navy text-lime-brand">
                    <Cpu size={22} />
                  </div>

                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-dark-gray">
                    AI & Technology
                  </p>

                  <h2 className="mt-4 font-playfair text-4xl font-medium leading-tight text-navy sm:text-5xl">
                    Smarter technology. Better possibilities.
                  </h2>

                  <p className="mt-6 leading-7 text-dark-gray">
                    We use modern technology, automation, and data to help
                    businesses work smarter and create better digital
                    experiences.
                  </p>

                  <div className="mt-8 grid gap-3 sm:grid-cols-2">
                    {technologies.map((technology) => (
                      <div
                        key={technology}
                        className="rounded-xl border border-border bg-white p-4 text-sm font-medium text-navy shadow-card transition hover:-translate-y-0.5 hover:border-blue-brand"
                      >
                        {technology}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative min-h-[400px]">
                  <img
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=90"
                    alt="Technology and digital infrastructure"
                    className="absolute inset-0 h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-navy/25" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= OTHER SERVICES ================= */}
        <section className="border-t border-border px-6 py-20 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-dark-gray">
                More solutions
              </p>

              <h2 className="mt-3 font-playfair text-3xl font-medium text-navy sm:text-4xl">
                More ways PulseWave can help.
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {additionalServices.map((service) => {
                const Icon = service.icon;

                return (
                  <Link
                    key={service.title}
                    to={service.href}
                    className="group rounded-2xl border border-border p-6 transition duration-300 hover:-translate-y-1 hover:border-navy hover:bg-navy hover:text-white hover:shadow-elegant"
                  >
                    <Icon
                      size={24}
                      className="text-blue-brand transition group-hover:text-lime-brand"
                    />

                    <h3 className="mt-7 font-semibold">{service.title}</h3>

                    <p className="mt-2 text-sm leading-6 text-dark-gray transition group-hover:text-white/60">
                      {service.description}
                    </p>

                    <ArrowRight
                      size={18}
                      className="mt-6 transition group-hover:translate-x-1 group-hover:text-lime-brand"
                    />
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* ================= CTA ================= */}
<section className="px-6 pb-24 lg:px-10 lg:pb-32">
  <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-navy text-white shadow-2xl">
    <div className="grid lg:grid-cols-2">

      {/* Content */}
      <div className="p-8 text-[#FFFFFF] sm:p-12 lg:p-16">
        <Globe
          className="mb-7 text-[#D7F23A]"
          size={28}
        />

        <h2
          className="text-4xl font-medium leading-tight text-[#FFFFFF] sm:text-5xl"
          style={{
            fontFamily: '"Playfair Display", Georgia, serif',
          }}
        >
          Have an idea worth building?
        </h2>

        <p className="mt-5 max-w-lg leading-7 text-[#FFFFFF]">
          Tell us what you are trying to achieve. Let's explore what
          technology can make possible.
        </p>

        <Link
          to="/contact"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#D7F23A] px-7 py-3.5 font-semibold text-[#071A35] shadow-lg transition hover:bg-[#FFFFFF]"
        >
          Start a conversation
          <ArrowRight size={18} />
        </Link>
      </div>

      {/* Image */}
      <div className="relative min-h-[300px] lg:min-h-full">
        <img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=90"
          alt="Team collaborating"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[#071A35]/30" />
      </div>

    </div>
  </div>
</section>
      </main>

      {/* ================= FOOTER ================= */}
<footer className="bg-navy text-white ">
  <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
    <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

      {/* Brand */}
      <div className="lg:col-span-2">
        <Link to="/" className="inline-flex items-center">
          <img
            src="/logo.png"
            alt="PulseWave Technologies"
            className="h-30 w-auto object-contain"
          />
        </Link>

        <p
          className="mt-7 max-w-md text-2xl leading-relaxed text-[#FFFFFF]"
          style={{
            fontFamily: '"Playfair Display", Georgia, serif',
          }}
        >
          Building digital experiences for the businesses shaping tomorrow.
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
            href="mailto:hello@pulsewave.co.ke"
            className="transition hover:text-[#D7F23A]"
          >
            info@pulsewave.com
          </a>
        </div>
      </div>
    </div>

    {/* Bottom Footer */}
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