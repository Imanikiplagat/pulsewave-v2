import {
  Receipt,
  Stethoscope,
  Landmark,
  Layers,
  ShoppingCart,
  Network,
  type LucideIcon,
} from "lucide-react";

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
    key: "erp",
    title: "Enterprise ERP",
    slug: "erp",
    tagline: "One integrated backbone for the whole organisation.",
    icon: Layers,
    items: [
      {
        label: "Finance Management",
        slug: "solutions/erp",
        hash: "overview",
        blurb: "Budgets, treasury and financial control",
      },
      {
        label: "Accounting",
        slug: "solutions/erp",
        hash: "features",
        blurb: "Ledgers, reporting and reconciliation",
      },
      {
        label: "Asset Management",
        slug: "solutions/erp",
        hash: "modules",
        blurb: "Register, track and manage assets",
      },
      {
        label: "Human Resource Management",
        slug: "solutions/erp",
        hash: "modules",
        blurb: "People operations and payroll",
      },
      {
        label: "Fleet Management",
        slug: "solutions/erp",
        hash: "overview",
        blurb: "Vehicles, fuel and driver management",
      },
    ],
  },

{
  key: "revenue",
  title: "Revenue Management",
  slug: "revenue-management",
  tagline:
    "Digitized revenue collection and citizen-facing services.",
  icon: Receipt,

  items: [
    {
      label: "Revenue Collection",
      slug: "revenue-management",
      hash: "revenue-collection",
      blurb: "Automated revenue collection and monitoring",
    },
    {
      label: "Billing & Invoicing",
      slug: "revenue-management",
      hash: "billing-invoicing",
      blurb: "Generate and manage revenue invoices",
    },
    {
      label: "Citizen Portal",
      slug: "revenue-management",
      hash: "citizen-portal",
      blurb: "Self-service for residents and businesses",
    },
    {
      label: "Digital Payments",
      slug: "revenue-management",
      hash: "digital-payments",
      blurb: "Mobile money, card and bank payments",
    },
    {
      label: "USSD Services",
      slug: "revenue-management",
      hash: "ussd",
      blurb: "Accessible services without internet",
    },
  ],
},

  // 2. PROCUREMENT
  {
    key: "procurement",
    title: "Procurement",
    slug: "procurement",
    tagline: "Streamlined procurement from sourcing to payment.",
    icon: ShoppingCart,
    items: [
      {
        label: "Supplier Management",
        slug: "procurement",
        hash: "overview",
        blurb: "Manage suppliers and vendor relationships",
      },
      {
        label: "Purchase Requests",
        slug: "procurement",
        hash: "features",
        blurb: "Digital requisitions and approvals",
      },
      {
        label: "Tender Management",
        slug: "procurement",
        hash: "modules",
        blurb: "Transparent tendering workflows",
      },
      {
        label: "Purchase Orders",
        slug: "procurement",
        hash: "process",
        blurb: "Create, approve and track orders",
      },
      {
        label: "Contract Management",
        slug: "procurement",
        hash: "features",
        blurb: "Manage procurement contracts",
      },
      {
        label: "Procurement Analytics",
        slug: "procurement",
        hash: "overview",
        blurb: "Spend visibility and reporting",
      },
    ],
  },

  // 3. REAL ESTATE
  {
    key: "real-estate",
    title: "Real Estate Management",
    slug: "real-estate",
    tagline: "Land, property and development services on one platform.",
    icon: Landmark,
    items: [
      {
        label: "Land Registry",
        slug: "real-estate",
        hash: "overview",
        blurb: "Parcel and ownership records",
      },
      {
        label: "Property Management",
        slug: "real-estate",
        hash: "features",
        blurb: "Manage properties and tenancy records",
      },
      {
        label: "Building Approvals",
        slug: "real-estate",
        hash: "features",
        blurb: "Digital permitting and approvals",
      },
      {
        label: "GIS Mapping",
        slug: "real-estate",
        hash: "modules",
        blurb: "Spatial data, maps and property layers",
      },
      {
        label: "Survey Requests",
        slug: "real-estate",
        hash: "modules",
        blurb: "Request and track surveying services",
      },
      {
        label: "Development Applications",
        slug: "real-estate",
        hash: "process",
        blurb: "End-to-end development approvals",
      },
    ],
  },

{
  key: "digital-services",
  title: "Digital Services",
  slug: "custom-software",
  tagline:
    "Digital platforms, applications and intelligent services built around your organisation.",
  icon: Network,
  items: [
    {
      label: "Custom Software",
      slug: "custom-software",
      hash: "overview",
      blurb: "Purpose-built digital solutions",
    },
    {
      label: "Web & Mobile Apps",
      slug: "custom-software",
      hash: "features",
      blurb: "High-performance digital experiences",
    },
    {
      label: "SaaS Solutions",
      slug: "custom-software",
      hash: "modules",
      blurb: "Scalable software delivered as a service",
    },
    {
      label: "AI Solutions",
      slug: "custom-software",
      hash: "technologies",
      blurb: "Intelligent automation and data-driven systems",
    },
    {
      label: "System Integration",
      slug: "systems-integration",
      hash: "overview",
      blurb: "Connect systems and data seamlessly",
    },
    {
      label: "Bulk SMS & Voice",
      slug: "custom-software",
      hash: "features",
      blurb: "Reach customers through digital communication",
    },
    {
      label: "Cloud & Digital Transformation",
      slug: "systems-integration",
      hash: "technologies",
      blurb: "Modernise operations with scalable technology",
    },
  ],
},

  // 6. HEALTHCARE
  {
    key: "health",
    title: "Healthcare",
    slug: "hospital-management",
    tagline: "Connected digital healthcare for hospitals and health facilities.",
    icon: Stethoscope,
    items: [
      {
        label: "Electronic Medical Records",
        slug: "hospital-management",
        hash: "features",
        blurb: "Unified digital patient records",
      },
      {
        label: "Hospital Management",
        slug: "hospital-management",
        hash: "overview",
        blurb: "Clinical and administrative operations",
      },
      {
        label: "Telemedicine",
        slug: "hospital-management",
        hash: "modules",
        blurb: "Remote consultations and digital care",
      },
      {
        label: "Pharmacy Management",
        slug: "hospital-management",
        hash: "features",
        blurb: "Medication inventory and dispensing",
      },
      {
        label: "Laboratory Management",
        slug: "hospital-management",
        hash: "modules",
        blurb: "Digital laboratory workflows and results",
      },
      {
        label: "Health Facility ERP",
        slug: "hospital-management",
        hash: "overview",
        blurb: "Integrated healthcare operations",
      },
    ],
  },
];