import { Project } from "@/types";

export const projectsData: Project[] = [
  {
    id: "cliniconlineplus",
    title: "ClinicOnlinePlus",
    tagline:
      "Healthcare discovery platform connecting patients to verified specialists",
    summary:
      "A cross-border healthcare discovery and booking platform that helps patients find verified specialists and access secure consultation services.",
    category: "HealthTech",
    role: "Frontend Engineer",
    period: "May 2026 – Present",
    featured: false,
    problem:
      "Finding and booking the right specialist is often slow and confusing, especially across borders patients needed a simple way to discover and reach clinicians without friction.",
    solution:
      "Built and maintain patient-facing features in React.js, Next.js, and Tailwind CSS including booking flows and secure payment handling through the Paystack API focused on making discovery and booking feel effortless.",
    outcome:
      "Shipped a highly performant experience: 0.8s Speed Index, 99% Performance, 96% Best Practices, and 100% SEO on Lighthouse.",
    metrics: [
      { value: "0.8s", label: "Speed Index" },
      { value: "99%", label: "Lighthouse Performance" },
      { value: "96%", label: "Lighthouse Best Practices" },
      { value: "100%", label: "Lighthouse SEO" },
    ],
    architectureHighlights: [
      "Responsive patient-facing booking flows built with React.js, Next.js, and Tailwind CSS",
      "Secure Paystack payment integration for streamlined appointment checkout",
      "Performance-focused implementation optimized for fast discovery and booking experiences",
    ],
    links: [
      {
        label: "Live System",
        url: "https://cliniconlineplus.com",
        type: "live",
      },
    ],
    tags: ["Cloudflare", "Next.js", "Tailwind CSS", "Redis", "PostgreSQL", "Twilio", "Mailjet"],
  },
  {
    id: "doctorkays",
    title: "DoctorKays",
    tagline:
      "Personal brand & authority platform for a fertility specialist and health entrepreneur",
    summary:
      "A personal brand and authority platform that presents a fertility specialist's clinical expertise, health-tech experience, and services in one credible online destination.",
    category: "Brand & Systems",
    role: "Frontend Engineer",
    period: "2024",
    featured: false,
    problem:
      "Dr. Olayiwola Babatunde Emmanuel a fertility specialist and health-tech entrepreneur with 10+ years of clinical experience across the UAE, Nigeria, and Ukraine needed a digital presence that matched his credibility and made it easy for patients to reach him.",
    solution:
      "Built a personal brand platform to present his practice, credentials, and content in one place, with a clear path for prospective patients to get in touch or book.",
    outcome:
      "Gave his practice a cohesive online identity consistent with his offline reputation.",
    metrics: [],
    architectureHighlights: [
      "Responsive personal brand experience built with Next.js and Tailwind CSS",
      "SEO-focused content structure for improved discoverability and authority",
    ],
    links: [
      { label: "Live System", url: "https://www.doctorkays.com", type: "live" },
    ],
    tags: ["Next.js", "Tailwind CSS", "SEO", "Paystack API", "MongoDB", "Node.js"],
  },
  {
    id: "thegovernedlife",
    title: "The GovernedLife",
    tagline:
      "Mentorship & discipleship platform built on structured, LMS-driven coaching",
    summary:
      "A structured mentorship and discipleship platform that delivers coaching content, accountability, and guided personal development through an LMS-style experience.",
    category: "Mentorship / EdTech",
    role: "Frontend Engineer",
    period: "2024",
    featured: false,
    problem:
      "A mentorship movement built around spiritual discipline and accountability needed a digital home that could deliver structured coaching content.",
    solution:
      "Built the platform experience around the brand's core philosophy that private discipline creates public authority including an LMS-style structure for coaching material and accountability tracking.",
    outcome:
      "Gave the movement a home online that reflects its mission: raising a generation of people who lead through structured, private discipline before public influence.",
    metrics: [],
    architectureHighlights: [
      "LMS-style content structure for guided mentorship and discipleship programs",
      "Responsive coaching experience built with Next.js, TypeScript, and Tailwind CSS",
      "Accountability-focused flows supporting consistent personal development",
    ],
    links: [
      {
        label: "Live System",
        url: "https://www.thegovernedlife.com",
        type: "live",
      },
    ],
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "LMS"],
  },
  {
    id: "o2foods",
    title: "O2 Foods",
    tagline: "Taking a walk-in food ordering business online",
    summary:
      "An online ordering and delivery platform helping O2 Foods move from manual, in-person ordering to a professional digital storefront.",
    category: "FoodTech",
    role: "Frontend/Full-Stack Engineer",
    period: "In progress",
    featured: false,
    problem:
      "O2 Foods ran entirely on manual, in-person order-taking no way for customers to browse, order, or pay without walking in, which capped how many customers the business could reasonably serve.",
    solution:
      "Building an online ordering and delivery platform to move the business from foot-traffic-only to a proper digital storefront, with online ordering, payment, and order tracking.",
    outcome:
      "Currently in development the goal is a professional online brand presence that replaces the manual ordering process entirely.",
    metrics: [],
    architectureHighlights: [
      "Online storefront for browsing products and placing orders",
      "Payment and order-tracking flows designed for a digital ordering experience",
    ],
    links: [
      {
        label: "Live System",
        url: "https://www.02foods.com",
        type: "live",
      },
    ],
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
  },
];
