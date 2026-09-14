import {
  BookOpen,
  Clock,
  Code,
  HelpCircle,
  Rocket,
  Sparkles,
  Star,
  Target,
  Users,
  Zap,
} from "lucide-react";

export const NAV_LINKS = [
  { label: "Overview & Now", href: "#now" },
  { label: "Featured Projects", href: "#projects" },
  // { label: "Impact Metrics", href: "#impact" },
  { label: "Curated Shelf", href: "#shelf" },
  { label: "Contact", href: "#contact" },
];

// Options for Step 1: Focus Area
export const focusOptions = [
  {
    id: "software-engineering",
    title: "Software Engineering",
    desc: "Master programming fundamentals, full-stack architectures, and core programming languages (TS, Python, Go).",
    icon: Code,
  },
  {
    id: "generative-ai",
    title: "Generative AI & Agentic Workflows",
    desc: "Learn to build using LLMs, write advanced prompts, build agents, and automate developer pipelines.",
    icon: Sparkles,
  },
  {
    id: "founder-startup",
    title: "Founder & Product Builder",
    desc: "Validate product concepts, coordinate technical stacks, launch high-fidelity MVPs, and scale.",
    icon: Rocket,
  },
  {
    id: "tech-literacy",
    title: "General Tech Literacy",
    desc: "Demystify coding languages, servers, databases, and APIs for non-technical leadership and operations.",
    icon: BookOpen,
  },
  {
    id: "custom",
    title: "Alternative Focus / Life Stage",
    desc: "Type in your custom situation or learning objective (e.g. Graduate looking for options, laid-off worker transitioning).",
    icon: HelpCircle,
  },
];

// Options for Step 2: Experience Level
export const experienceOptions = [
  {
    id: "absolute-beginner",
    title: "Absolute Beginner",
    desc: "I have never written code, built a product, or opened a terminal interface.",
    icon: Star,
  },
  {
    id: "tech-curious",
    title: "Tech-Curious Hobbyist",
    desc: "I know basic HTML/CSS or spreadsheet formulas and want to gain production capabilities.",
    icon: Target,
  },
  {
    id: "transitioning-professional",
    title: "Transitioning Professional",
    desc: "I am a designer, marketer, PM, or operator looking to gain direct engineering powers.",
    icon: Users,
  },
  {
    id: "custom",
    title: "Alternative / Other Experience",
    desc: "Describe your custom technical or product experience.",
    icon: HelpCircle,
  },
];

// Options for Step 3: Commitment
export const commitmentOptions = [
  {
    id: "self-paced",
    title: "Self-Paced / Part-Time",
    desc: "Learning 2-6 hours a week around my current full-time employment or university studies.",
    icon: Clock,
  },
  {
    id: "bootcamp",
    title: "Fast-Track / Immersive",
    desc: "Highly concentrated 15-40 hours a week to launch my skills and career path as fast as possible.",
    icon: Zap,
  },
  {
    id: "community",
    title: "Local Community & Networks",
    desc: "Focussing on hackathons, local engineering hubs, open-source cohorts, and peer study groups.",
    icon: Users,
  },
  {
    id: "custom",
    title: "Alternative / Other Schedule",
    desc: "Specify your custom pacing, availability, or constraints.",
    icon: HelpCircle,
  },
];
