import { Receipt, Stethoscope, Landmark, Layers, Network, type LucideIcon } from "lucide-react";

export type MegaItem = {
  label: string;
  slug: string;
  hash: string;
  blurb: string;
};

export type MegaGroup = {
  key: string;
  title: string;
  slug: string;
  tagline: string;
  icon: LucideIcon;
  items: MegaItem[];
};

export const megaGroups: MegaGroup[] = [
  {
    key: "revenue",
    title: "Revenue & Citizen Services",
    slug: "revenue-management",
    tagline: "Digitized own-source revenue and citizen-facing services.",
    icon: Receipt,
    items: [
      { label: "Revenue Collection", slug: "revenue-management", hash: "overview", blurb: "Automated billing & collection" },
      { label: "Citizen Portal", slug: "revenue-management", hash: "features", blurb: "Self-service for residents" },
      { label: "Digital Payments", slug: "revenue-management", hash: "features", blurb: "Mobile money, card & bank" },
      { label: "USSD Services", slug: "revenue-management", hash: "modules", blurb: "Offline-first access" },
      { label: "Executive Dashboards", slug: "business-intelligence", hash: "overview", blurb: "Live leadership insight" },
    ],
  },
  {
    key: "health",
    title: "Healthcare Digital Platform",
    slug: "hospital-management",
    tagline: "Connected care across hospitals and health facilities.",
    icon: Stethoscope,
    items: [
      { label: "Electronic Medical Records", slug: "hospital-management", hash: "features", blurb: "Unified patient records" },
      { label: "Telemedicine", slug: "hospital-management", hash: "modules", blurb: "Remote consultations" },
      { label: "Hospital ERP", slug: "hospital-management", hash: "overview", blurb: "Clinical + back office" },
      { label: "Procurement", slug: "procurement", hash: "overview", blurb: "Facility supply chain" },
      { label: "Human Resource Management", slug: "hr-payroll", hash: "overview", blurb: "Staffing, rosters & payroll" },
    ],
  },
  {
    key: "land",
    title: "Land Administration & GIS",
    slug: "real-estate",
    tagline: "Land, planning and spatial services on one map.",
    icon: Landmark,
    items: [
      { label: "Land Registry", slug: "real-estate", hash: "overview", blurb: "Parcel & ownership records" },
      { label: "Building Approvals", slug: "real-estate", hash: "features", blurb: "Digital permitting workflow" },
      { label: "GIS Mapping", slug: "real-estate", hash: "features", blurb: "Spatial data & layers" },
      { label: "Survey Requests", slug: "real-estate", hash: "modules", blurb: "Request to report tracking" },
      { label: "Development Applications", slug: "real-estate", hash: "process", blurb: "End-to-end approvals" },
    ],
  },
  {
    key: "erp",
    title: "Enterprise ERP",
    slug: "erp",
    tagline: "One integrated backbone for the whole organisation.",
    icon: Layers,
    items: [
      { label: "Procurement", slug: "procurement", hash: "overview", blurb: "Source, buy and pay" },
      { label: "Finance", slug: "finance", hash: "overview", blurb: "Budgets & treasury" },
      { label: "Accounting", slug: "finance", hash: "features", blurb: "Ledgers & fast close" },
      { label: "Asset Management", slug: "erp", hash: "modules", blurb: "Register to disposal" },
      { label: "Fleet Management", slug: "fleet-management", hash: "overview", blurb: "Vehicles, fuel & drivers" },
      { label: "Human Resources", slug: "hr-payroll", hash: "overview", blurb: "People operations" },
    ],
  },
  {
    key: "services",
    title: "Digital Transformation Services",
    slug: "custom-software",
    tagline: "Advisory, build and run — delivered by our engineers.",
    icon: Network,
    items: [
      { label: "Consulting", slug: "custom-software", hash: "overview", blurb: "Strategy & roadmaps" },
      { label: "System Design", slug: "custom-software", hash: "process", blurb: "Architecture & UX" },
      { label: "System Integration", slug: "systems-integration", hash: "overview", blurb: "Make systems speak" },
      { label: "Cloud Deployment", slug: "systems-integration", hash: "technologies", blurb: "Cloud, hybrid & on-prem" },
      { label: "Data Migration", slug: "systems-integration", hash: "process", blurb: "Clean, verified cutovers" },
      { label: "Training", slug: "custom-software", hash: "process", blurb: "Enablement for teams" },
      { label: "Support & Maintenance", slug: "custom-software", hash: "faqs", blurb: "24/7 managed support" },
    ],
  },
];
