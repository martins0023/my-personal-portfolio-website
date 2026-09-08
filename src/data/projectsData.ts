import { Project } from "@/types";

export const projectsData: Project[] = [
  {
    id: "cliniconlineplus",
    title: "ClinicOnlinePlus Platform",
    tagline: "High-Availability Telehealth & Clinical Practice Orchestration System",
    summary:
      "An end-to-end digital health ecosystem engineered to eliminate clinical bottlenecks, unify multi-provider scheduling, securely manage electronic medical records (EMR), and deliver seamless real-time WebRTC teleconsultations.",
    category: "HealthTech",
    clientOrOrg: "ClinicOnlinePlus Health Network",
    role: "Lead Systems Architect & Principal Frontend Engineer",
    period: "2024 - Present",
    featured: true,
    tags: [
      "Next.js 15",
      "TypeScript",
      "WebRTC",
      "PostgreSQL",
      "Tailwind CSS",
      "HIPAA Compliance",
      "Redis",
      "Framer Motion",
    ],
    problem:
      "Traditional outpatient facilities suffered from chaotic physical queues, fragmented patient paper files, and a staggering 90-minute average wait time. Rural and busy suburban patients faced recurring friction accessing specialized clinicians.",
    solution:
      "Architected a reactive, multi-tenant clinical suite combining zero-latency WebRTC video rooms, an encrypted client-side medical intake vault, role-based calendar scheduling with automated WhatsApp/SMS notifications, and real-time electronic prescription dispatch.",
    outcome:
      "Reduced patient wait times by 65%, lowered clinic no-show rates from 28% to under 4.2%, and handled over 45,000 completed consultations across 18 regional health centres with 99.98% platform reliability.",
    metrics: [
      { value: "65%", label: "Wait Time Cut", change: "from 90m to <30m" },
      { value: "45K+", label: "Consultations", change: "across 18 centres" },
      { value: "99.98%", label: "System Uptime", change: "production SLA" },
      { value: "4.2%", label: "No-Show Rate", change: "down from 28%" },
    ],
    architectureHighlights: [
      "Sub-200ms WebRTC peer connection handshake with TURN fallback redundancy",
      "Optimistic UI state management for instantaneous scheduling without race conditions",
      "End-to-end encrypted clinical notes with automated audit logging compliance",
      "Responsive, touch-optimized clinical tablet interface for operating theaters and triage",
    ],
    links: [
      { label: "Live System", url: "https://cliniconlineplus.com", type: "live" },
      { label: "Architecture Case Study", url: "#case-study-cliniconlineplus", type: "case-study" },
    ],
    badgeColor: {
      lightBg: "bg-blue-50",
      lightText: "text-blue-700",
      darkBg: "dark:bg-blue-950/40",
      darkText: "dark:text-blue-300",
      border: "border-blue-200 dark:border-blue-800/60",
    },
  },
  {
    id: "doctorkays",
    title: "DoctorKays Personal Brand",
    tagline: "Authority Medical Knowledge Hub & High-Conversion Patient Acquisition Engine",
    summary:
      "A flagship personal brand platform and patient advisory portal for a renowned medical consultant, engineered to translate complex clinical science into approachable public health wisdom while driving private consultation funnels.",
    category: "Brand & Systems",
    clientOrOrg: "Dr. Kayode / DoctorKays Brand",
    role: "Brand Identity Lead & Frontend Architect",
    period: "2024",
    featured: true,
    tags: [
      "Next.js App Router",
      "Tailwind CSS",
      "Content Infrastructure",
      "Framer Motion",
      "SEO Engine",
      "Vercel Edge",
    ],
    problem:
      "A top-tier clinician had extensive expertise and offline credibility, but lacked a cohesive digital identity. Clinical inquiries flooded unorganized WhatsApp chats, valuable health articles went unindexed, and prospective international patients had no trusted gateway to book advisory sessions.",
    solution:
      "Crafted an editorial-grade web experience adhering to Google's strictest Core Web Vitals standards. Built dynamic interactive wellness triage calculators, a headless content publishing engine for evidence-backed medical journalism, and a friction-free booking bridge.",
    outcome:
      "Surpassed 85,000 monthly unique readers within 6 months, yielded a 320% surge in booked private clinical consultations, and achieved a 100/100 Google Lighthouse score across Performance, Accessibility, and SEO.",
    metrics: [
      { value: "320%", label: "Booking Surge", change: "within first quarter" },
      { value: "85K+", label: "Monthly Readers", change: "organic search reach" },
      { value: "100/100", label: "Lighthouse Score", change: "Perf & Accessibility" },
      { value: "<0.8s", label: "Page Load Speed", change: "edge distributed" },
    ],
    architectureHighlights: [
      "Semantic schema.org MedicalWebPage structured data markup for top-tier Google SERP snippets",
      "Progressive interactive diagnostic quizzes guiding users to relevant medical specialist slots",
      "Micro-animations and fluid typography giving a reassuring, empathetic clinical feel",
      "Automated calendar synchronisation with Stripe/Paystack multi-currency payment checkout",
    ],
    links: [
      { label: "Visit DoctorKays", url: "https://doctorkays.com", type: "live" },
      { label: "Brand Showcase", url: "#case-study-doctorkays", type: "case-study" },
    ],
    badgeColor: {
      lightBg: "bg-emerald-50",
      lightText: "text-emerald-700",
      darkBg: "dark:bg-emerald-950/40",
      darkText: "dark:text-emerald-300",
      border: "border-emerald-200 dark:border-emerald-800/60",
    },
  },
  {
    id: "thegovernedlife",
    title: "The GovernedLife Project",
    tagline: "Civic-Tech Transparency Portal & Democratic Accountability Dashboard",
    summary:
      "An open-access democratic accountability and policy tracking initiative, designed to demystify public governance, aggregate legislative activity, and empower citizens with verified policy scorecards.",
    category: "CivicTech",
    clientOrOrg: "The GovernedLife Initiative",
    role: "Principal Frontend Architect & Data Strategist",
    period: "2023 - 2024",
    featured: true,
    tags: [
      "Next.js",
      "TypeScript",
      "Data Visualization",
      "Civic APIs",
      "Tailwind CSS",
      "Accessible SVG",
      "Open Data",
    ],
    problem:
      "Citizens felt disenfranchised by opaque parliamentary bills, hard-to-parse budgetary allocations, and the absence of objective, data-driven scorecards measuring elected officials' voting records.",
    solution:
      "Built a non-partisan, lightning-fast public web observatory that transforms massive legislative datasets into visual bill-lifecycles, interactive budget distribution diagrams, and district-level representative scorecards with plain-language summaries.",
    outcome:
      "Adopted by 14 grassroots civic policy coalitions, processed over 180,000 public inquiries during election cycles, and was cited in 8 national editorial publications as a benchmark for civic transparency.",
    metrics: [
      { value: "180K+", label: "Civic Queries", change: "during election cycle" },
      { value: "14", label: "Civic Coalitions", change: "standardized adoption" },
      { value: "100%", label: "WCAG 2.1 AAA", change: "universal access" },
      { value: "2.4K", label: "Bills Indexed", change: "with AI summaries" },
    ],
    architectureHighlights: [
      "Optimized SVG coordinate engines for responsive budget allocation breakdowns",
      "Strict WCAG 2.1 AAA accessibility compliance with full screen-reader announcements",
      "Static generation at build time with On-Demand Revalidation on legislative bill updates",
      "Zero client-side analytics trackers to preserve complete civic user privacy",
    ],
    links: [
      { label: "Explore GovernedLife", url: "https://thegovernedlife.org", type: "live" },
      { label: "Policy Whitepaper", url: "#governedlife-data", type: "case-study" },
    ],
    badgeColor: {
      lightBg: "bg-purple-50",
      lightText: "text-purple-700",
      darkBg: "dark:bg-purple-950/40",
      darkText: "dark:text-purple-300",
      border: "border-purple-200 dark:border-purple-800/60",
    },
  },
  {
    id: "o2foods",
    title: "O2 Foods",
    tagline: "Direct-From-Farm Agri-Commerce & Cold-Chain Supply Engine",
    summary:
      "A next-generation agricultural supply chain and retail delivery platform connecting certified regional farmers directly to urban households and commercial kitchens, eliminating exploitative middlemen.",
    category: "Agri-Commerce",
    clientOrOrg: "O2 Foods Distribution",
    role: "Full-Stack Product Engineer",
    period: "2023 - 2024",
    featured: true,
    tags: [
      "Next.js App Router",
      "TypeScript",
      "Tailwind CSS",
      "Stripe Connect",
      "Mapbox GL",
      "Inventory Sync",
      "Node.js",
    ],
    problem:
      "Up to 35% of fresh agricultural produce rotted post-harvest due to fragmented logistics middlemen, while consumers paid premium markups for produce that spent 5+ days in transit.",
    solution:
      "Engineered an automated farm-to-door digital marketplace with dynamic harvest batching, real-time inventory countdowns, dispatch routing for cold-chain couriers, and scheduled recurring farm-box subscriptions.",
    outcome:
      "Compressed average farm-to-table transit time by 48 hours, reduced food spoilage by 31%, and empowered over 250 local farming households with direct-to-bank instant settlements.",
    metrics: [
      { value: "48 hrs", label: "Transit Time Saved", change: "harvest to doorstep" },
      { value: "31%", label: "Waste Reduction", change: "post-harvest loss" },
      { value: "250+", label: "Farmers Empowered", change: "instant payouts" },
      { value: "12K+", label: "Orders Fulfilled", change: "first year volume" },
    ],
    architectureHighlights: [
      "Predictive batching engine grouping neighbourhood delivery drops for lower emissions",
      "Instant checkout workflow with multi-payment gateway routing and offline resilient cart",
      "Driver dispatch view with interactive geospatial routing optimized for traffic windows",
      "Dynamic pricing formula rewarding early subscription orders to minimize unsold yield",
    ],
    links: [
      { label: "Visit O2 Foods", url: "https://o2foods.com", type: "live" },
      { label: "Supply Case Study", url: "#case-study-o2foods", type: "case-study" },
    ],
    badgeColor: {
      lightBg: "bg-amber-50",
      lightText: "text-amber-800",
      darkBg: "dark:bg-amber-950/40",
      darkText: "dark:text-amber-300",
      border: "border-amber-200 dark:border-amber-800/60",
    },
  },
];
