import {
  Boxes, ShoppingCart, Wallet, Users, Building2, Landmark, Receipt,
  ScanBarcode, GraduationCap, Stethoscope, Truck, BarChart3, Code2, Network,
  Layers, type LucideIcon,
} from "lucide-react";

export type Solution = {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  icon: LucideIcon;
  overview: string;
  features: string[];
  benefits: string[];
  modules: string[];
  industries: string[];
  process: { step: string; detail: string }[];
  technologies: string[];
  caseStudies: { client: string; result: string }[];
  faqs: { q: string; a: string }[];
};

const commonProcess = [
  { step: "Discovery", detail: "Requirement workshops, process mapping and success metrics." },
  { step: "Design", detail: "Solution blueprint, integration architecture and UX design." },
  { step: "Build", detail: "Agile configuration, customization and API integrations." },
  { step: "Deploy", detail: "Data migration, UAT, training and phased rollout." },
  { step: "Support", detail: "24/7 support, optimisation and continuous improvement." },
];

const commonTech = ["Node.js", "PostgreSQL", "React", "TypeScript", "Docker", "AWS", "Azure", "REST APIs"];

function make(
  slug: string, title: string, tagline: string, category: string, icon: LucideIcon,
  overview: string, features: string[], benefits: string[], modules: string[], industries: string[],
  caseStudies: { client: string; result: string }[],
  faqs: { q: string; a: string }[],
): Solution {
  return { slug, title, tagline, category, icon, overview, features, benefits, modules, industries, process: commonProcess, technologies: commonTech, caseStudies, faqs };
}

export const solutions: Solution[] = [
  make("erp", "ERP Solutions", "One platform for the whole enterprise.", "Core Platform", Layers,
    "PulseWave ERP unifies finance, supply chain, HR and operations on a single, cloud-native platform — giving leaders real-time visibility and teams a modern experience.",
    ["Unified data model across departments", "Configurable workflows & approvals", "Multi-entity, multi-currency", "Real-time dashboards & reports", "Role-based access & audit trail", "Mobile-first responsive UI"],
    ["Cut operating costs up to 30%", "Faster month-end close", "Single source of truth", "Compliance built in"],
    ["Finance", "Procurement", "Inventory", "HR & Payroll", "CRM", "Projects", "Asset Management", "Business Intelligence"],
    ["Manufacturing", "Retail", "Distribution", "Public Sector", "Financial Services"],
    [{ client: "National Distribution Group", result: "Reduced order-to-cash cycle by 42%." }, { client: "Regional Manufacturer", result: "Consolidated 6 legacy systems into one ERP." }],
    [{ q: "How long does implementation take?", a: "Typical rollouts run 8–16 weeks depending on scope and integrations." }, { q: "Is it cloud or on-premise?", a: "Both. PulseWave ERP is deployable on cloud, on-premise or hybrid." }]),

  make("inventory", "Inventory Management", "Precision stock control across every location.", "Operations", Boxes,
    "Track every SKU across warehouses, branches and in-transit — with barcode, batch and serial tracking, automated reordering and live valuation.",
    ["Multi-warehouse & bin locations", "Barcode & QR scanning", "Batch, serial & expiry tracking", "Automated reorder points", "Cycle counting & stock takes", "Live stock valuation (FIFO/WAC)"],
    ["Zero stock-outs", "Lower carrying costs", "Full traceability", "Faster fulfilment"],
    ["Stock Master", "Receipts & Issues", "Transfers", "Adjustments", "Reorder", "Reporting"],
    ["Retail", "Manufacturing", "Pharma", "FMCG", "Logistics"],
    [{ client: "Retail Chain (28 branches)", result: "Cut stock-outs by 63% in six months." }],
    [{ q: "Does it integrate with our POS?", a: "Yes — real-time integration with PulseWave POS and third-party POS." }]),

  make("procurement", "Procurement", "Source, buy and pay — smarter.", "Operations", ShoppingCart,
    "Digitize the entire source-to-pay cycle with requisitions, RFQs, vendor scoring, purchase orders and 3-way matching.",
    ["Requisition workflows", "RFQ & vendor bidding", "Vendor management & scoring", "Purchase orders", "3-way match invoicing", "Contract & catalog management"],
    ["Better vendor pricing", "Full audit trail", "Faster PR-to-PO cycle", "Reduced maverick spend"],
    ["Requisitions", "RFQs", "POs", "Vendors", "Contracts", "Analytics"],
    ["Public Sector", "NGOs", "Manufacturing", "Corporates"],
    [{ client: "County Government", result: "Saved 18% on annual procurement spend." }],
    [{ q: "Can vendors submit bids online?", a: "Yes — vendors get a self-service portal for RFQs and invoices." }]),

  make("finance", "Finance & Accounting", "Close the books faster, with confidence.", "Finance", Wallet,
    "A modern general ledger with AP, AR, fixed assets, budgeting, cash management and IFRS-ready reporting.",
    ["Multi-entity & multi-currency GL", "AP & AR automation", "Fixed asset register", "Bank reconciliation", "Budgeting & forecasting", "IFRS & tax reporting"],
    ["Real-time financials", "Automated compliance", "Faster close", "Better cash visibility"],
    ["General Ledger", "AP", "AR", "Fixed Assets", "Cash", "Tax", "Reporting"],
    ["All industries"],
    [{ client: "Financial Services Group", result: "Cut month-end close from 12 days to 4." }],
    [{ q: "Is it KRA / eTIMS compliant?", a: "Yes — certified integrations for statutory filing and eTIMS." }]),

  make("hr-payroll", "HR & Payroll", "People operations, end to end.", "People", Users,
    "From hire to retire — recruitment, onboarding, attendance, leave, performance and fully compliant payroll.",
    ["Employee self-service portal", "Biometric & mobile attendance", "Leave & shift management", "Performance & appraisals", "Statutory-compliant payroll", "Learning & development"],
    ["Higher engagement", "Zero payroll errors", "Full statutory compliance", "Data-driven HR"],
    ["Recruitment", "Onboarding", "Attendance", "Leave", "Payroll", "Performance", "L&D"],
    ["Corporates", "SACCOs", "NGOs", "Public Sector"],
    [{ client: "Multi-country conglomerate", result: "Unified payroll for 4,200 employees across 5 countries." }],
    [{ q: "Does payroll handle PAYE, NHIF, NSSF?", a: "Yes — pre-configured for regional statutory requirements with auto-updates." }]),

  make("real-estate", "Real Estate Management", "Property, tenants and revenue on one platform.", "Vertical", Building2,
    "Manage properties, leases, tenants, billing, service charges and maintenance with full financial integration.",
    ["Property & unit register", "Lease & tenant management", "Automated billing & receipting", "Service charge apportioning", "Maintenance & work orders", "Landlord & tenant portals"],
    ["Higher occupancy", "Faster collections", "Transparent statements", "Reduced arrears"],
    ["Properties", "Leases", "Billing", "Receipting", "Maintenance", "Portals"],
    ["Property Managers", "Landlords", "REITs", "Housing Cooperatives"],
    [{ client: "Property Manager (1,200 units)", result: "Collections up 34% within one year." }],
    [{ q: "Can tenants pay via mobile money?", a: "Yes — M-Pesa, cards and bank integrations are supported." }]),

  

  make("revenue-management", "Revenue Collection", "Digitized revenue for governments & utilities.", "Public Sector", Receipt,
    "End-to-end revenue collection with billing, cashless payments, agent networks and real-time revenue dashboards.",
    ["Revenue master & rates", "Automated billing", "Cashless payment channels", "Field revenue agents", "GIS-based mapping", "Real-time dashboards"],
    ["Higher collections", "Reduced leakage", "Citizen convenience", "Transparent reporting"],
    ["Billing", "Payments", "Agents", "GIS", "Enforcement", "Analytics"],
    ["County Governments", "Utilities", "Parastatals"],
    [{ client: "County Government", result: "Own-source revenue up 62% year-over-year." }],
    [{ q: "Do you support M-Pesa & bank payments?", a: "Yes — plus USSD, cards, agent POS and web self-service." }]),

  make("pos", "POS Systems", "Fast, reliable point-of-sale.", "Operations", ScanBarcode,
    "Cloud-connected POS for retail, restaurants and service outlets — with offline mode, loyalty and full ERP integration.",
    ["Touch-friendly POS", "Offline mode with auto-sync", "Loyalty & promotions", "Kitchen display (KDS)", "Multi-tender payments", "Real-time reports"],
    ["Faster checkout", "No lost sales when offline", "Unified inventory", "Customer insights"],
    ["Cashier", "Kitchen", "Inventory", "Loyalty", "Reports"],
    ["Retail", "Restaurants", "Hospitality", "Services"],
    [{ client: "QSR Chain (40 outlets)", result: "Cut checkout time by 38%." }],
    [{ q: "Does it work offline?", a: "Yes — full offline mode with automatic reconciliation when back online." }]),

  make("school-management", "School Management", "The complete school operating system.", "Vertical", GraduationCap,
    "Admissions, academics, fees, exams, timetables and parent engagement — all integrated with finance and HR.",
    ["Admissions & enrolment", "Academic records", "Fee billing & collections", "Exams & grading", "Timetable & attendance", "Parent portal & SMS"],
    ["Higher fee collections", "Transparent academics", "Better parent engagement", "Time saved on admin"],
    ["Admissions", "Academics", "Finance", "Exams", "Library", "Transport"],
    ["Schools", "Colleges", "Training Institutions"],
    [{ client: "Group of Schools", result: "Automated fee reminders lifted collections by 27%." }],
    [{ q: "Can parents pay online?", a: "Yes — parents can pay via M-Pesa, cards and bank transfer." }]),

  make("hospital-management", "Hospital Management", "Care, coordinated.", "Vertical", Stethoscope,
    "A HIMS covering EMR, appointments, pharmacy, lab, billing, insurance and inventory — with SHA/NHIF integration.",
    ["Electronic Medical Records", "Appointments & queue", "Pharmacy & drug store", "Lab & radiology", "Billing & insurance claims", "Inpatient management"],
    ["Better patient outcomes", "Faster claims", "Reduced drug wastage", "Real-time bed visibility"],
    ["EMR", "Pharmacy", "Lab", "Billing", "Insurance", "Inpatient"],
    ["Hospitals", "Clinics", "Diagnostic Centres"],
    [{ client: "Level 5 Hospital", result: "Insurance claim rejection down 71%." }],
    [{ q: "Do you integrate with SHA?", a: "Yes — real-time integration with SHA and major insurers." }]),

  make("fleet-management", "Fleet Management", "Vehicles, drivers, fuel — under control.", "Operations", Truck,
    "Track vehicles, manage fuel and maintenance, monitor driver behaviour and cut fleet costs.",
    ["GPS tracking & geofencing", "Fuel management", "Maintenance scheduling", "Driver behaviour scoring", "Trip & route management", "Cost analytics"],
    ["Lower fuel costs", "Fewer breakdowns", "Safer drivers", "Higher utilisation"],
    ["Tracking", "Fuel", "Maintenance", "Drivers", "Trips", "Analytics"],
    ["Logistics", "Public Transport", "Corporates", "Government"],
    [{ client: "Logistics Company (180 trucks)", result: "Fuel spend down 22%." }],
    [{ q: "Does it work with any GPS device?", a: "Yes — hardware-agnostic with 40+ device integrations." }]),

  make("business-intelligence", "Business Intelligence", "Decisions, powered by data.", "Analytics", BarChart3,
    "Interactive dashboards, self-service analytics and AI-powered insights on top of your operational data.",
    ["Executive dashboards", "Self-service reports", "Data warehousing & ETL", "AI-powered insights", "Alerts & KPIs", "Mobile analytics"],
    ["Faster, better decisions", "One version of the truth", "Predictive insights", "Data democratization"],
    ["Dashboards", "Reports", "Data Warehouse", "AI Insights"],
    ["All industries"],
    [{ client: "Insurance Group", result: "Weekly board pack automated end-to-end." }],
    [{ q: "Which data sources are supported?", a: "50+ connectors including SQL, Excel, APIs, SAP, Oracle and more." }]),

  make("custom-software", "Custom Software Development", "Purpose-built for your process.", "Services", Code2,
    "When off-the-shelf isn't enough, our engineers design and build secure, scalable custom applications.",
    ["Discovery & UX design", "Web & mobile development", "Cloud-native architecture", "DevOps & CI/CD", "QA & security testing", "Managed support"],
    ["Perfect process fit", "Owned IP", "Scalable & secure", "Continuous delivery"],
    ["Web Apps", "Mobile Apps", "APIs", "Portals", "Integrations"],
    ["All industries"],
    [{ client: "Financial Institution", result: "Delivered a customer portal used by 400k users." }],
    [{ q: "Do we own the source code?", a: "Yes — clients own the IP and source code for bespoke projects." }]),

  make("systems-integration", "Systems Integration", "Make every system speak.", "Services", Network,
    "Connect legacy systems, third-party apps and modern platforms with reliable APIs, ESBs and iPaaS integrations.",
    ["API design & governance", "iPaaS & ESB integrations", "Legacy modernisation", "Event-driven architecture", "Data pipelines", "Monitoring & SLAs"],
    ["End data silos", "Automate workflows", "Lower TCO", "Faster innovation"],
    ["APIs", "ESB", "Data Pipelines", "Middleware"],
    ["Banking", "Telecoms", "Public Sector", "Enterprises"],
    [{ client: "Telecom Operator", result: "Integrated 14 systems into a unified customer view." }],
    [{ q: "Do you support SAP / Oracle?", a: "Yes — certified integrations for SAP, Oracle, Microsoft Dynamics and more." }]),
];

export const solutionBySlug = (slug: string) => solutions.find((s) => s.slug === slug);
