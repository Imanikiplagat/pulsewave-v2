import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  ClipboardCheck,
  FileSearch,
  Landmark,
  Map,
  CheckCircle2,
} from "lucide-react";
import { motion } from "motion/react";

type DetailType =
  | "property-management"
  | "building-approvals"
  | "gis-mapping"
  | "survey-request"
  | "development-applications";

interface DetailData {
  eyebrow: string;
  title: string;
  intro: string;
  description: string;
  icon: React.ElementType;
  capabilities: string[];
  workflow: {
    title: string;
    description: string;
  }[];
  information: string[];
}

const detailData: Record<DetailType, DetailData> = {
  "property-management": {
    eyebrow: "Real Estate Feature",
    title: "Property Management",
    intro:
      "Centralize property information and simplify the management of land, ownership and occupancy records.",
    description:
      "PulseWave Property Management provides a centralized environment for managing property information throughout its lifecycle. Organizations can maintain property records, link ownership and supporting documents, and connect property information with spatial data and other administrative processes.",
    icon: Building2,

    capabilities: [
      "Property and parcel record management",
      "Ownership information management",
      "Tenancy and occupancy records",
      "Property document management",
      "Property search and information retrieval",
      "GIS-linked property information",
      "Record history and audit trails",
      "Integration with related revenue or billing processes",
    ],

    workflow: [
      {
        title: "Capture property information",
        description:
          "Create or import property records together with relevant parcel, ownership and property information.",
      },
      {
        title: "Link supporting information",
        description:
          "Attach documents and connect property records with relevant spatial and administrative information.",
      },
      {
        title: "Search and manage records",
        description:
          "Authorized users can search, review and update property information from a centralized environment.",
      },
      {
        title: "Track changes",
        description:
          "Maintain a history of changes and activities associated with property records.",
      },
    ],

    information: [
      "Parcel information",
      "Ownership details",
      "Property information",
      "Occupancy or tenancy information",
      "Supporting documents",
      "Location information",
      "Record activity and history",
    ],
  },

  "building-approvals": {
    eyebrow: "Real Estate Feature",
    title: "Building Approvals",
    intro:
      "Bring building applications, reviews, approvals and supporting documentation into a structured digital workflow.",
    description:
      "PulseWave Building Approvals helps organizations manage development-related building applications from submission through review and decision. The workflow can support document submission, technical review, application tracking, communication and approval records.",
    icon: ClipboardCheck,

    capabilities: [
      "Online building application submission",
      "Applicant and property information",
      "Document and plan submission",
      "Application review workflows",
      "Technical review and comments",
      "Application status tracking",
      "Approval and permit records",
      "Inspection and compliance tracking",
    ],

    workflow: [
      {
        title: "Submit application",
        description:
          "Applicants submit the relevant development information, plans and supporting documentation.",
      },
      {
        title: "Application registration",
        description:
          "The application is recorded and assigned for processing within the appropriate workflow.",
      },
      {
        title: "Review and assessment",
        description:
          "Relevant officers and departments can review submitted information, record comments and request revisions where necessary.",
      },
      {
        title: "Decision and approval",
        description:
          "The application outcome and associated approval documentation can be recorded and communicated to the applicant.",
      },
      {
        title: "Inspection and compliance",
        description:
          "Where applicable, inspections and subsequent compliance activities can be linked to the application.",
      },
    ],

    information: [
      "Applicant details",
      "Property and parcel information",
      "Building plans",
      "Supporting documents",
      "Review comments",
      "Approval conditions",
      "Inspection information",
      "Permit and approval records",
    ],
  },

  "gis-mapping": {
    eyebrow: "Platform Module",
    title: "GIS Mapping",
    intro:
      "Connect property and land information to location through interactive geographic information system mapping.",
    description:
      "The GIS Mapping module provides a spatial view of property and land information. It can bring parcel boundaries, property records and other geographic datasets together so users can understand information in its location context.",
    icon: Map,

    capabilities: [
      "Interactive parcel mapping",
      "Property location visualization",
      "Spatial property searches",
      "Parcel and boundary information",
      "Layer-based geographic information",
      "Map-based record access",
      "Spatial data management",
      "Integration with property records",
    ],

    workflow: [
      {
        title: "Locate",
        description:
          "Search for a property or parcel and identify its location on the map.",
      },
      {
        title: "Visualize",
        description:
          "View available spatial information and relevant geographic layers.",
      },
      {
        title: "Inspect",
        description:
          "Access associated property or land information from the mapped location.",
      },
      {
        title: "Connect",
        description:
          "Link spatial information with property, planning and administrative workflows.",
      },
    ],

    information: [
      "Parcel boundaries",
      "Parcel numbers",
      "Property locations",
      "Road and access information",
      "Planning information",
      "Spatial reference information",
      "Related property records",
    ],
  },

  "survey-request": {
    eyebrow: "Platform Module",
    title: "Survey Request",
    intro:
      "Digitize the submission and tracking of surveying requests from initial application through completion.",
    description:
      "PulseWave Survey Request provides a structured way for applicants and officers to submit, manage and track survey-related requests. Requests can be connected to property information and supporting documentation to provide a clearer view of the work being processed.",
    icon: FileSearch,

    capabilities: [
      "Online survey request submission",
      "Property and parcel identification",
      "Supporting document upload",
      "Request assignment",
      "Survey status tracking",
      "Officer comments and updates",
      "Survey documentation",
      "Completion records",
    ],

    workflow: [
      {
        title: "Submit request",
        description:
          "The applicant provides the required property, parcel and survey request information.",
      },
      {
        title: "Review request",
        description:
          "The request can be reviewed for completeness and assigned for the relevant surveying process.",
      },
      {
        title: "Process survey",
        description:
          "Survey officers can manage the request and record relevant activities or findings.",
      },
      {
        title: "Update applicant",
        description:
          "The applicant can follow the progress of the request and receive relevant status updates.",
      },
      {
        title: "Complete request",
        description:
          "Survey outputs and completion information can be recorded against the request.",
      },
    ],

    information: [
      "Applicant information",
      "Parcel information",
      "Survey request type",
      "Location information",
      "Supporting documents",
      "Survey status",
      "Survey records",
    ],
  },

  "development-applications": {
    eyebrow: "Platform Module",
    title: "Development Applications",
    intro:
      "Digitize the submission, review and tracking of development applications through a connected workflow.",
    description:
      "PulseWave Development Applications provides a structured digital process for managing development applications. Depending on the applicable planning requirements, workflows can support applications such as building development, change of user, extension of user, subdivision and amalgamation.",
    icon: Landmark,

    capabilities: [
      "Online development application submission",
      "Property and ownership information",
      "Planning and location documents",
      "Building and scheme plans",
      "Application review and routing",
      "Supporting document management",
      "Status and progress tracking",
      "Approval and decision records",
    ],

    workflow: [
      {
        title: "Create application",
        description:
          "The applicant selects the relevant development application type and provides the required information.",
      },
      {
        title: "Submit documents",
        description:
          "Required ownership documents, location plans, building or scheme plans and other applicable documentation can be submitted with the application.",
      },
      {
        title: "Review",
        description:
          "The application can be routed to the relevant officers or departments for review and comments.",
      },
      {
        title: "Respond and revise",
        description:
          "Where additional information or revisions are required, applicants can respond through the application workflow.",
      },
      {
        title: "Decision",
        description:
          "The final decision, approval conditions and associated documents can be recorded against the application.",
      },
      {
        title: "Track and retrieve",
        description:
          "Applicants and authorized officers can access the application's status, history and relevant documentation.",
      },
    ],

    information: [
      "Applicant information",
      "Property ownership information",
      "Title or ownership documents",
      "Location plans",
      "Building or scheme plans",
      "Planning briefs where applicable",
      "Public notification information where applicable",
      "Application reviews and comments",
      "Approval conditions",
      "Final decision and documents",
    ],
  },
};

export const RealEstateDetailPage: React.FC<{
  type: DetailType;
}> = ({ type }) => {
  const data = detailData[type];
  const Icon = data.icon;

  return (
    <main className="bg-white text-[var(--navy)]">

      {/* HERO */}
      <section
        className="relative overflow-hidden"
        style={{ background: "var(--gradient-hero)" }}
      >
        <div className="pointer-events-none absolute -right-24 top-16 h-[420px] w-[420px] rotate-12 rounded-[70px] bg-[var(--blue-brand)]/6" />

        <div className="pointer-events-none absolute right-20 top-40 h-[280px] w-[280px] rotate-6 rounded-[50px] bg-[var(--lime-brand)]/15" />

        <div className="container-page relative py-14 md:py-20">

          <Link
            to="/real-estate"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--dark-gray)] transition hover:text-[var(--blue-brand)]"
          >
            <ArrowLeft className="h-4 w-4" />
            Real Estate
          </Link>

          <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:items-end">

            <div className="lg:col-span-8">

              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--navy)]/15 bg-white px-3 py-1 text-xs font-bold uppercase tracking-widest text-[var(--navy)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--lime-brand)]" />

                {data.eyebrow}
              </div>

              <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[1.03] tracking-tight text-[var(--navy)] md:text-6xl">
                {data.title}
              </h1>

              <p className="mt-7 max-w-3xl text-lg leading-8 text-[var(--dark-gray)]">
                {data.intro}
              </p>

            </div>

            <div className="lg:col-span-4 lg:flex lg:justify-end">
              <div className="grid h-20 w-20 place-items-center bg-[var(--navy)]">
                <Icon className="h-9 w-9 text-[var(--lime-brand)]" />
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* OVERVIEW */}
      <section className="container-page py-20">

        <div className="grid gap-12 lg:grid-cols-12">

          <div className="lg:col-span-4">
            <p className="text-xs font-bold uppercase tracking-widest text-[var(--dark-gray)]">
              Overview
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-[var(--navy)] md:text-4xl">
              What it does
            </h2>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <p className="text-base leading-8 text-[var(--dark-gray)] md:text-lg">
              {data.description}
            </p>
          </div>

        </div>

      </section>


      {/* CAPABILITIES */}
      <section className="bg-slate-50 py-20">

        <div className="container-page">

          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-[var(--dark-gray)]">
              Capabilities
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight text-[var(--navy)]">
              What you can manage
            </h2>
          </div>


          <div className="mt-12 grid gap-x-12 gap-y-0 md:grid-cols-2">

            {data.capabilities.map((capability, index) => (
              <div
                key={capability}
                className="flex gap-4 border-b border-[var(--color-border)] py-5"
              >
                <span className="mt-1 text-xs font-bold text-[var(--blue-brand)]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--lime-brand)]" />

                  <span className="text-sm font-medium text-[var(--navy)] md:text-base">
                    {capability}
                  </span>
                </div>
              </div>
            ))}

          </div>

        </div>

      </section>


      {/* WORKFLOW */}
      <section className="container-page py-20">

        <div className="grid gap-12 lg:grid-cols-12">

          <div className="lg:col-span-4">
            <p className="text-xs font-bold uppercase tracking-widest text-[var(--dark-gray)]">
              Workflow
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight text-[var(--navy)]">
              From submission
              <br />
              <span className="underline-lime">
                to completion.
              </span>
            </h2>
          </div>


          <div className="lg:col-span-7 lg:col-start-6">

            <div className="border-t border-[var(--color-border)]">

              {data.workflow.map((step, index) => (
                <div
                  key={step.title}
                  className="grid gap-5 border-b border-[var(--color-border)] py-7 sm:grid-cols-[60px_1fr]"
                >

                  <div>
                    <span className="text-sm font-black text-[var(--blue-brand)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-[var(--navy)]">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-[var(--dark-gray)] md:text-base">
                      {step.description}
                    </p>
                  </div>

                </div>
              ))}

            </div>

          </div>

        </div>

      </section>


      {/* INFORMATION */}
      <section className="bg-[var(--navy)] py-20 text-white">

        <div className="container-page">

          <div className="grid gap-12 lg:grid-cols-12">

            <div className="lg:col-span-5">

              <p className="text-xs font-bold uppercase tracking-widest text-[var(--lime-brand)]">
                Information managed
              </p>

              <h2 className="mt-4 text-4xl font-black leading-tight">
                One connected view of the information that matters.
              </h2>

              <p className="mt-5 text-sm leading-7 text-white/65 md:text-base">
                Keep the information associated with each process organized,
                searchable and connected to the relevant property, application
                or workflow.
              </p>

            </div>


            <div className="lg:col-span-6 lg:col-start-7">

              <div className="grid sm:grid-cols-2">

                {data.information.map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 border-b border-white/10 py-4"
                  >
                    <span className="text-xs font-bold text-[var(--lime-brand)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-sm text-white/85">
                      {item}
                    </span>
                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="bg-white py-20">

        <div className="container-page">

          <div className="border-t border-[var(--color-border)] pt-12">

            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">

              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[var(--dark-gray)]">
                  PulseWave Real Estate
                </p>

                <h2 className="mt-3 text-3xl font-black tracking-tight text-[var(--navy)] md:text-4xl">
                  Ready to digitize this workflow?
                </h2>
              </div>

              <Link
                to="/contact"
                className="group inline-flex shrink-0 items-center gap-3 bg-[var(--navy)] px-7 py-4 font-semibold text-white transition hover:bg-[color-mix(in_oklab,var(--navy)_88%,white)]"
              >
                Talk to us

                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
};

export default RealEstateDetailPage;
