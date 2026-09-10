import { NowStatus } from "@/types";

export const nowData: NowStatus = {
  statusText: "Turning visions into digital products",
  currentRole: "Frontend Engineer & Fullstack Developer",
  location: "Osogbo, Nigeria / Remote",
  lastUpdated: "September 2026",
  building: [
    {
      title: "ClinicOnlinePlus",
      description:
        "Building patient-facing booking and payment flows for a healthcare discovery platform connecting patients across Africa and the UAE to specialists.",
    },
    {
      title: "O2 Foods",
      description:
        "Helping a food ordering business move off manual, walk-in order-taking and onto a proper online storefront ordering, payment, and order tracking, built from the ground up.",
    },
    {
      title: "The Governed Life",
      description:
        "A mentorship movement built around spiritual discipline and accountability needing a digital home that could deliver structured coaching content.",
    },
  ],
  education: [
    {
      title: "B.Sc. Cybersecurity - Miva University",
      description:
        "Core coursework in network security protocols, cryptography, and secure software development. Applied directly to client-facing systems through edge rate-limiting, least-privilege API authorization, and zero-trust input sanitization.",
    },
    {
      title: "Diploma in Software Engineering (Frontend Engineer) - Altschool Africa",
      description:
        "Certified frontend engineering track (2025–2026), covering React, TypeScript, and production web application practices.",
    },
    {
      title: "Computer Science - Federal Polytechnic Offa",
      description:
        "Completed 2023–2024. Foundation in computer science principles.",
    },
  ],
  exploring: [
    {
      title: "Turning a Personal Brand into a Real Product",
      description:
        "Studying how a person's voice, reputation, or offline credibility becomes something more than a brochure site a booking system, a course platform, an ordering flow people actually use.",
    },
    {
      title: "AI-Assisted Frontend Workflows",
      description:
        "Trying out how AI coding tools change day-to-day frontend work where they genuinely speed things up, and where they just add noise.",
    },
  ],
};



export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  badge: string;
  focus: string[];
  description: string;
}

export const educationData: EducationItem[] = [
  {
    degree: "B.Sc. Cybersecurity",
    institution: "Miva Open University",
    period: "2024 – Present",
    badge: "In Progress",
    focus: ["Application Security", "Threat Modeling", "Defensive Systems"],
    description:
      "Core coursework in network security protocols, cryptography, and secure software development. Applied directly to client-facing systems through edge rate-limiting, least-privilege API authorization, and zero-trust input sanitization.",
  },
  {
    degree: "Diploma in Software Engineering (Frontend Engineering)",
    institution: "AltSchool Africa",
    period: "2025 – 2026",
    badge: "Certified",
    focus: ["React Internals", "TypeScript", "State Orchestration", "SSR/SSG"],
    description:
      "Intensive specialization in production-grade frontend engineering: building type-safe single-page applications, component lifecycle design, accessible design systems, and client-side performance auditing.",
  },
  {
    degree: "National Diploma in Computer Science",
    institution: "Federal Polytechnic Offa",
    period: "2022 – 2024",
    badge: "Completed",
    focus: ["Data Structures", "Algorithms", "Object-Oriented Programming", "Relational Databases"],
    description:
      "Rigorous grounding in discrete computational mathematics, memory management, algorithm complexity (Big O), and relational database modeling (SQL, normalization, indexing).",
  },
];