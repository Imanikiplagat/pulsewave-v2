import React from "react";
import { Link } from "react-router-dom";
import {
  Building2,
  ClipboardCheck,
  Map,
  FileSearch,
  Landmark,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: Building2,
    title: "Property Management",
    description:
      "Manage property records, ownership information and tenancy details through a centralized digital system.",
    href: "/real-estate/property-management",
  },
  {
    icon: ClipboardCheck,
    title: "Building Approvals",
    description:
      "Simplify the submission, review and approval of building applications through structured digital workflows.",
    href: "/real-estate/building-approvals",
  },
];

const modules = [
  {
    icon: Map,
    title: "GIS Mapping",
    description:
      "Visualize land, parcels and property information through interactive geographic information system mapping.",
    href: "/real-estate/gis-mapping",
  },
  {
    icon: FileSearch,
    title: "Survey Request",
    description:
      "Submit, manage and track survey requests through a streamlined digital process.",
    href: "/real-estate/survey-request",
  },
  {
    icon: Landmark,
    title: "Development Applications",
    description:
      "Digitize development applications with online submissions, document management and application tracking.",
    href: "/real-estate/development-applications",
  },
];

export const RealEstatePage: React.FC = () => {
  return (
    <main className="bg-white text-[var(--navy)]">

      {/* =====================================================
          OVERVIEW
      ===================================================== */}
      <section
        id="overview"
        className="scroll-mt-24 overflow-hidden bg-slate-50 px-6 py-20 md:px-12 lg:px-20"
      >
        <div className="container-page mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-3 lg:gap-8">

            {/* Heading */}
            <div className="space-y-6">
              <div>
                <div className="mb-4 h-1 w-12 rounded-full bg-[var(--lime-brand)]" />

                <h1 className="font-serif text-3xl leading-tight text-[var(--navy)] md:text-4xl lg:text-5xl">
                  Smarter
                  <br />
                  <span className="font-semibold">
                    Real Estate Management
                  </span>
                </h1>
              </div>

              <div className="border-l-2 border-[var(--navy)] pl-3 text-sm font-semibold uppercase tracking-wider text-[var(--dark-gray)] md:text-base">
                Digital solutions for land, property and development
                management
              </div>

              <p className="text-base leading-relaxed text-[var(--dark-gray)]">
                PulseWave helps organizations modernize the way they manage
                land, properties, development applications, approvals and
                spatial information.
              </p>
            </div>

            {/* Image */}
            <div className="group relative overflow-hidden rounded-2xl border border-[var(--color-border)]">
              <img
                src="/loader.jpg"
                alt="Real estate and property management"
                className="h-[400px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 lg:h-[460px]"
              />

              <div className="absolute inset-0 bg-[var(--navy)]/5 transition-colors duration-300 group-hover:bg-transparent" />
            </div>

            {/* Description */}
            <div className="flex flex-col justify-between space-y-8 rounded-2xl bg-[var(--navy)] p-8 text-white">

              <div className="space-y-5">
                <p className="text-sm leading-relaxed text-white/75 md:text-base">
                  From property management and building approvals to GIS
                  mapping, surveying requests and development applications,
                  PulseWave brings essential real estate workflows into one
                  connected digital environment.
                </p>

                <p className="text-sm leading-relaxed text-white/75 md:text-base">
                  By connecting information, workflows and decision-making
                  processes, organizations can improve visibility, streamline
                  operations and deliver more efficient property and land
                  services.
                </p>
              </div>

              <div>
                <a
                  href="#modules"
                  className="group inline-flex items-center gap-3 bg-[var(--lime-brand)] px-6 py-3 font-bold tracking-wide text-[var(--navy)] transition-all duration-300 hover:-translate-y-0.5"
                >
                  <span>Explore Solutions</span>

                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          FEATURES
      ===================================================== */}
      <section
        id="features"
        className="scroll-mt-24 bg-white px-6 py-20 md:px-12 lg:px-20"
      >
        <div className="container-page mx-auto max-w-7xl">

          {/* Section heading */}
          <div className="mb-12 max-w-2xl">
            <div className="mb-4 h-1 w-12 rounded-full bg-[var(--lime-brand)]" />

            <h2 className="font-serif text-3xl text-[var(--navy)] md:text-4xl">
              Core
              <span className="font-semibold"> Features</span>
            </h2>

            <p className="mt-4 text-base leading-relaxed text-[var(--dark-gray)]">
              Practical digital tools designed to simplify property
              administration and development processes.
            </p>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <article
                  key={feature.title}
                  className="group border border-[var(--color-border)] bg-slate-50 p-8 transition-all duration-300 hover:border-[var(--blue-brand)]/30"
                >
                  <div className="mb-8 flex h-12 w-12 items-center justify-center bg-[var(--navy)]">
                    <Icon
                      size={22}
                      strokeWidth={1.8}
                      className="text-[var(--lime-brand)]"
                    />
                  </div>

                  <h3 className="font-serif text-2xl font-semibold text-[var(--navy)]">
                    {feature.title}
                  </h3>

                  <p className="mt-4 max-w-xl text-sm leading-relaxed text-[var(--dark-gray)] md:text-base">
                    {feature.description}
                  </p>

                  <Link
                    to={feature.href}
                    className="mt-8 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--navy)] transition-all duration-300 group-hover:bg-[var(--lime-brand)]"
                    aria-label={`Learn more about ${feature.title}`}
                  >
                    <ArrowRight
                      className="h-4 w-4 text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-[var(--navy)]"
                    />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          MODULES
      ===================================================== */}
      <section
        id="modules"
        className="scroll-mt-24 bg-slate-50 px-6 py-20 md:px-12 lg:px-20"
      >
        <div className="container-page mx-auto max-w-7xl">

          {/* Section heading */}
          <div className="mb-12 max-w-2xl">
            <div className="mb-4 h-1 w-12 rounded-full bg-[var(--lime-brand)]" />

            <h2 className="font-serif text-3xl text-[var(--navy)] md:text-4xl">
              Real Estate
              <span className="font-semibold"> Modules</span>
            </h2>

            <p className="mt-4 text-base leading-relaxed text-[var(--dark-gray)]">
              Connected modules that support land information, surveying and
              development management.
            </p>
          </div>

          {/* Modules */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {modules.map((module, index) => {
              const Icon = module.icon;

              return (
                <article
                  key={module.title}
                  className="group flex flex-col border border-[var(--color-border)] bg-white p-7 transition-all duration-300 hover:border-[var(--blue-brand)]/30"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center bg-[var(--navy)]">
                      <Icon
                        size={20}
                        strokeWidth={1.8}
                        className="text-[var(--lime-brand)]"
                      />
                    </div>

                    <span className="text-xs font-semibold tracking-widest text-slate-400">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-8 font-serif text-xl font-semibold text-[var(--navy)]">
                    {module.title}
                  </h3>

                  <p className="mt-4 flex-1 text-sm leading-relaxed text-[var(--dark-gray)]">
                    {module.description}
                  </p>

                  {/* Actual link */}
                  <div className="mt-7 border-t border-[var(--color-border)] pt-5">
                    <Link
                      to={module.href}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--navy)] transition-colors duration-300 hover:text-[var(--blue-brand)]"
                    >
                      Explore module

                      <ArrowRight
                        size={15}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
    PROCESS
===================================================== */}
<section
  id="process"
  className="scroll-mt-24 bg-white px-6 py-20 md:px-12 lg:px-20"
>
  <div className="container-page mx-auto max-w-7xl">

    {/* Section heading */}
    <div className="mb-14 max-w-2xl">
      <div className="mb-4 h-1 w-12 rounded-full bg-[var(--lime-brand)]" />

      <h2 className="font-serif text-3xl text-[var(--navy)] md:text-4xl">
        From Request
        <span className="font-semibold"> to Resolution</span>
      </h2>

      <p className="mt-4 text-base leading-relaxed text-[var(--dark-gray)]">
        A structured digital process helps organizations receive requests,
        review information, manage workflows and keep applicants informed
        throughout the lifecycle of a property or development process.
      </p>
    </div>

    {/* Process steps */}
    <div className="grid grid-cols-1 border-t border-[var(--color-border)] md:grid-cols-2 lg:grid-cols-4">

      {/* Step 01 */}
      <div className="group border-b border-[var(--color-border)] p-7 md:border-r lg:border-b-0">
        <div className="flex items-center justify-between">
          <span className="text-sm font-bold tracking-widest text-[var(--blue-brand)]">
            01
          </span>

          <ArrowRight
            size={18}
            className="text-slate-300 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[var(--navy)]"
          />
        </div>

        <h3 className="mt-10 font-serif text-2xl font-semibold text-[var(--navy)]">
          Submit
        </h3>

        <p className="mt-4 text-sm leading-relaxed text-[var(--dark-gray)]">
          Applicants or officers submit a property, survey or development
          request together with the required information and supporting
          documents.
        </p>
      </div>

      {/* Step 02 */}
      <div className="group border-b border-[var(--color-border)] p-7 lg:border-b-0 lg:border-r">
        <div className="flex items-center justify-between">
          <span className="text-sm font-bold tracking-widest text-[var(--blue-brand)]">
            02
          </span>

          <ArrowRight
            size={18}
            className="text-slate-300 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[var(--navy)]"
          />
        </div>

        <h3 className="mt-10 font-serif text-2xl font-semibold text-[var(--navy)]">
          Review
        </h3>

        <p className="mt-4 text-sm leading-relaxed text-[var(--dark-gray)]">
          Submitted information is checked and routed to the relevant
          officers or departments for assessment, technical review and
          additional requirements where applicable.
        </p>
      </div>

      {/* Step 03 */}
      <div className="group border-b border-[var(--color-border)] p-7 md:border-r lg:border-b-0">
        <div className="flex items-center justify-between">
          <span className="text-sm font-bold tracking-widest text-[var(--blue-brand)]">
            03
          </span>

          <ArrowRight
            size={18}
            className="text-slate-300 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[var(--navy)]"
          />
        </div>

        <h3 className="mt-10 font-serif text-2xl font-semibold text-[var(--navy)]">
          Process
        </h3>

        <p className="mt-4 text-sm leading-relaxed text-[var(--dark-gray)]">
          Officers manage the request through its required workflow, record
          reviews and actions, and communicate any revisions or additional
          information required.
        </p>
      </div>

      {/* Step 04 */}
      <div className="group p-7">
        <div className="flex items-center justify-between">
          <span className="text-sm font-bold tracking-widest text-[var(--blue-brand)]">
            04
          </span>

          <ArrowRight
            size={18}
            className="text-slate-300 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[var(--navy)]"
          />
        </div>

        <h3 className="mt-10 font-serif text-2xl font-semibold text-[var(--navy)]">
          Resolve
        </h3>

        <p className="mt-4 text-sm leading-relaxed text-[var(--dark-gray)]">
          The outcome is recorded and the completed request, approval,
          survey information or related documentation remains available
          for future reference.
        </p>
      </div>

    </div>

    {/* Supporting information */}
    <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">

      <div className="border border-[var(--color-border)] bg-slate-50 p-6">
        <p className="text-xs font-bold uppercase tracking-widest text-[var(--blue-brand)]">
          Visibility
        </p>

        <h3 className="mt-3 font-serif text-xl font-semibold text-[var(--navy)]">
          Track progress
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-[var(--dark-gray)]">
          Monitor requests and applications as they move through the
          relevant stages of the workflow.
        </p>
      </div>

      <div className="border border-[var(--color-border)] bg-slate-50 p-6">
        <p className="text-xs font-bold uppercase tracking-widest text-[var(--blue-brand)]">
          Information
        </p>

        <h3 className="mt-3 font-serif text-xl font-semibold text-[var(--navy)]">
          Keep records connected
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-[var(--dark-gray)]">
          Connect applications with property, parcel, ownership,
          documents and spatial information.
        </p>
      </div>

      <div className="border border-[var(--color-border)] bg-slate-50 p-6">
        <p className="text-xs font-bold uppercase tracking-widest text-[var(--blue-brand)]">
          Accountability
        </p>

        <h3 className="mt-3 font-serif text-xl font-semibold text-[var(--navy)]">
          Maintain an audit trail
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-[var(--dark-gray)]">
          Maintain a record of submissions, reviews, actions, decisions
          and supporting documentation throughout the process.
        </p>
      </div>

    </div>

  </div>
</section>

      {/* =====================================================
          CTA
      ===================================================== */}
      <section className="bg-white px-6 py-20 md:px-12 lg:px-20">
        <div className="container-page mx-auto max-w-7xl">
          <div className="flex flex-col items-start justify-between gap-8 border-t border-[var(--color-border)] pt-12 md:flex-row md:items-center">

            <div>
              <div className="mb-4 h-1 w-12 rounded-full bg-[var(--lime-brand)]" />

              <h2 className="font-serif text-3xl text-[var(--navy)]">
                Need a custom
                <span className="font-semibold"> solution?</span>
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-relaxed text-[var(--dark-gray)] md:text-base">
                Talk to PulseWave about digitizing your property and
                development workflows.
              </p>
            </div>

            <Link
              to="/contact"
              className="group inline-flex shrink-0 items-center gap-2 bg-[var(--navy)] px-6 py-3 font-bold tracking-wide text-white transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90"
            >
              Talk to us

              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>

      

    </main>
  );
};

export default RealEstatePage;