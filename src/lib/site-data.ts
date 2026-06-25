import timberStack from "@/assets/timber-stack.jpg";
import sawblade from "@/assets/sawblade.jpg";
import worker from "@/assets/worker.jpg";
import logs from "@/assets/logs.jpg";
import beams from "@/assets/beams.jpg";
import hardwood from "@/assets/hardwood.jpg";
import softwood from "@/assets/softwood.jpg";
import customCut from "@/assets/custom-cut.jpg";
import facility from "@/assets/facility.jpg";

export const COMPANY = {
  name: "Savitri Saw Mill",
  short: "Savitri",
  tagline: "Quality Timber. Precision Cutting. Trusted Manufacturing.",
  established: 1987,
  phone: "+91 98765 43210",
  whatsapp: "919876543210",
  email: "enquiry@savitrisawmill.com",
  address: "Industrial Estate, Plot 14, Sector 7, Nagpur, Maharashtra 440018, India",
  hours: "Mon – Sat · 9:00 AM – 7:00 PM",
};

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export const STATS = [
  { value: 38, suffix: "+", label: "Years of Experience" },
  { value: 2400, suffix: "+", label: "Projects Delivered" },
  { value: 650, suffix: "+", label: "B2B Clients Served" },
  { value: 120, suffix: " m³", label: "Daily Production Capacity" },
];

export type Product = {
  slug: string;
  name: string;
  category: "Timber" | "Beams" | "Planks" | "Custom" | "Industrial";
  image: string;
  description: string;
  applications: string[];
  specs: { label: string; value: string }[];
};

export const PRODUCTS: Product[] = [
  {
    slug: "timber-planks",
    name: "Timber Planks",
    category: "Planks",
    image: timberStack,
    description:
      "Kiln-dried, dimensionally stable planks milled to consistent thickness for flooring, panelling and joinery.",
    applications: ["Flooring", "Wall panelling", "Joinery", "Furniture"],
    specs: [
      { label: "Thickness", value: "12 – 75 mm" },
      { label: "Width", value: "Up to 600 mm" },
      { label: "Length", value: "Up to 4.2 m" },
      { label: "Moisture", value: "10 – 14%" },
    ],
  },
  {
    slug: "wood-beams",
    name: "Structural Wood Beams",
    category: "Beams",
    image: beams,
    description:
      "Heavy-section structural beams grade-stamped for load-bearing applications in roofing and framework.",
    applications: ["Roof trusses", "Framing", "Pergolas", "Heavy construction"],
    specs: [
      { label: "Section", value: "75×75 to 300×300 mm" },
      { label: "Length", value: "Up to 6 m" },
      { label: "Grade", value: "IS 883 Select" },
      { label: "Treatment", value: "Boron / CCA optional" },
    ],
  },
  {
    slug: "custom-cutting",
    name: "Custom Cut Profiles",
    category: "Custom",
    image: customCut,
    description:
      "CNC-assisted custom cutting and milling to your drawings — repeatable to ±0.5 mm tolerance.",
    applications: ["Furniture parts", "Modular kitchens", "Door & window frames", "Crating"],
    specs: [
      { label: "Tolerance", value: "±0.5 mm" },
      { label: "Min order", value: "0.5 m³" },
      { label: "Profiles", value: "Rip, cross, mitre, rebate" },
      { label: "Lead time", value: "3 – 7 days" },
    ],
  },
  {
    slug: "industrial-timber",
    name: "Industrial Timber",
    category: "Industrial",
    image: logs,
    description:
      "Bulk-grade structural timber for industrial use — shuttering, packaging crates and heavy pallets.",
    applications: ["Concrete shuttering", "Export pallets", "Industrial crating", "Dunnage"],
    specs: [
      { label: "Bulk MOQ", value: "5 m³" },
      { label: "Sizes", value: "Site-specific" },
      { label: "Delivery", value: "Pan-India" },
      { label: "Certification", value: "ISPM-15 on request" },
    ],
  },
  {
    slug: "hardwood",
    name: "Premium Hardwood",
    category: "Timber",
    image: hardwood,
    description:
      "Teak, sheesham and sal varieties selected for grain, density and longevity in fine joinery.",
    applications: ["High-end furniture", "Doors", "Interior cladding", "Heritage restoration"],
    specs: [
      { label: "Species", value: "Teak, Sheesham, Sal" },
      { label: "Density", value: "650 – 880 kg/m³" },
      { label: "Finish", value: "Sanded / Planed" },
      { label: "Origin", value: "Verified legal sources" },
    ],
  },
  {
    slug: "softwood",
    name: "Softwood Timber",
    category: "Timber",
    image: softwood,
    description:
      "Lightweight, easy-to-work pine and fir sections — ideal for framing, packaging and interiors.",
    applications: ["Framing", "Packaging", "Interior carpentry", "Crating"],
    specs: [
      { label: "Species", value: "Pine, Fir, Spruce" },
      { label: "Density", value: "400 – 550 kg/m³" },
      { label: "Drying", value: "Kiln-dried 12%" },
      { label: "Grades", value: "A / B / C" },
    ],
  },
];

export const SERVICES = [
  {
    title: "Custom Wood Cutting",
    description: "Precision cuts to drawing — repeatable batches with strict tolerance control.",
  },
  {
    title: "Bulk Timber Supply",
    description: "Large-volume orders for contractors, developers and OEMs with reliable lead times.",
  },
  {
    title: "Precision Milling",
    description: "Profiling, planing, rebating and mortising on calibrated machinery.",
  },
  {
    title: "Industrial Processing",
    description: "Kiln drying, treatment and surface preparation for industrial-grade output.",
  },
  {
    title: "Export-Grade Packaging",
    description: "ISPM-15 compliant heat-treatment, crating and dunnage for global shipments.",
  },
  {
    title: "Logistics & Transportation",
    description: "In-house fleet and verified partners for on-time, pan-India delivery.",
  },
];

export const WHY_US = [
  { title: "Premium Timber", body: "Sourced from verified, legal forestry partners — every log graded on arrival." },
  { title: "Modern Machinery", body: "Twin band mills, multi-rip saws and CNC profilers operating 6 days a week." },
  { title: "Experienced Crew", body: "Master sawyers with 20+ years on the floor — quality is built, not inspected." },
  { title: "Fast Delivery", body: "Standard stock dispatched within 48 hours, custom orders within 7 days." },
  { title: "Quality Assurance", body: "Three-stage inspection — raw material, post-cut and pre-dispatch." },
  { title: "Competitive Pricing", body: "Mill-direct pricing with transparent slabs for bulk B2B contracts." },
];

export const PROCESS = [
  { step: "01", title: "Wood Selection", body: "Each log inspected for grade, defects and moisture before entering the line." },
  { step: "02", title: "Precision Cutting", body: "Calibrated band saws breaking down logs into target sections." },
  { step: "03", title: "Kiln Drying", body: "Controlled drying chambers bring moisture down to a stable 10–14%." },
  { step: "04", title: "Surface Finishing", body: "Planing, sanding and profiling to spec — clean, square, ready to install." },
  { step: "05", title: "Quality Inspection", body: "Final dimensional and visual check with full batch traceability." },
  { step: "06", title: "Dispatch & Delivery", body: "Strapped, labelled and loaded onto our fleet for safe on-time delivery." },
];

export const INDUSTRIES = [
  "Construction",
  "Furniture Manufacturing",
  "Interior Design",
  "Infrastructure",
  "Retail Fit-out",
  "Government Projects",
];

export const TESTIMONIALS = [
  {
    quote:
      "Savitri has been our timber partner on three large residential projects. The consistency in sizing and on-time delivery is something we rarely see in this industry.",
    name: "Anand Mehta",
    role: "Project Director, Meridian Builders",
  },
  {
    quote:
      "Their custom cutting tolerances let us assemble modular kitchen runs without any rework on site. Genuine B2B partners.",
    name: "Priya Iyer",
    role: "Procurement Head, Casa Modular",
  },
  {
    quote:
      "Bulk orders, export-grade packaging, ISPM certification — Savitri handled it end-to-end for our overseas shipment.",
    name: "Rajiv Kapoor",
    role: "Operations Lead, NorthArc Exports",
  },
];

export const FAQS = [
  {
    q: "What is the minimum order quantity?",
    a: "Standard stock starts at 0.5 m³. Custom and bulk industrial orders typically begin at 5 m³.",
  },
  {
    q: "Do you ship outside Maharashtra?",
    a: "Yes — we ship pan-India through our in-house fleet and verified logistics partners. Export packaging is available on request.",
  },
  {
    q: "Can you cut to my drawings?",
    a: "Absolutely. Share a DWG, PDF or sketch with sections and lengths — we deliver within 3–7 days at ±0.5 mm tolerance.",
  },
  {
    q: "What species do you stock?",
    a: "Teak, Sheesham, Sal, Pine, Fir and Spruce. Other species can be sourced on indent for larger orders.",
  },
  {
    q: "Are your timbers legally sourced?",
    a: "Every log is procured from verified, legal forestry partners with full documentation available on request.",
  },
];

export const IMAGES = {
  timberStack, sawblade, worker, logs, beams, hardwood, softwood, customCut, facility,
};

export const GALLERY = [
  { src: facility, alt: "Sawmill facility exterior", h: 600 },
  { src: sawblade, alt: "Industrial saw blade cutting log", h: 800 },
  { src: timberStack, alt: "Stacked timber planks", h: 700 },
  { src: worker, alt: "Sawmill operator at work", h: 900 },
  { src: logs, alt: "Raw timber log yard", h: 600 },
  { src: beams, alt: "Structural wood beams", h: 800 },
  { src: hardwood, alt: "Premium hardwood planks", h: 650 },
  { src: softwood, alt: "Softwood lumber stock", h: 750 },
  { src: customCut, alt: "Custom cut wood components", h: 700 },
];
