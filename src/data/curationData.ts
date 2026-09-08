import { ShelfItem } from "@/types";

export const curationData: ShelfItem[] = [
  // Books
  {
    id: "book-design-of-everyday-things",
    title: "The Design of Everyday Things",
    creator: "Don Norman",
    category: "Books",
    tag: "Design Philosophy",
    takeaway:
      "A fundamental reminder that when users fail to understand an interface, the flaw lies in the architect's mental model, never the user.",
    url: "https://www.goodreads.com/book/show/840.The_Design_of_Everyday_Things",
  },
  {
    id: "book-designing-data-intensive-applications",
    title: "Designing Data-Intensive Applications",
    creator: "Martin Kleppmann",
    category: "Books",
    tag: "Distributed Systems",
    takeaway:
      "The definitive blueprint for understanding trade-offs in consistency, replication lag, and reliability when building high-concurrency systems.",
    url: "https://dataintensive.net/",
  },
  {
    id: "book-thinking-in-systems",
    title: "Thinking in Systems: A Primer",
    creator: "Donella H. Meadows",
    category: "Books",
    tag: "Mental Models",
    takeaway:
      "Taught me to dissect problems by mapping non-linear feedback loops, system delays, and structural leverage points rather than surface symptoms.",
    url: "https://www.chelseagreen.com/product/thinking-in-systems/",
  },
  {
    id: "book-refactoring-ui",
    title: "Refactoring UI",
    creator: "Adam Wathan & Steve Schoger",
    category: "Books",
    tag: "Interface Engineering",
    takeaway:
      "Transformed how I approach visual hierarchy, micro-spacing, and subtle neutral contrast from an engineer's systematic perspective.",
    url: "https://www.refactoringui.com/",
  },

  // Audiobooks
  {
    id: "audio-steve-jobs",
    title: "Steve Jobs",
    creator: "Walter Isaacson",
    category: "Audiobooks",
    tag: "Product Obsession",
    takeaway:
      "Instilled an uncompromising obsession with holistic product craftsmanship where the unseen backside of the board matters as much as the front glass.",
    url: "https://www.audible.com/pd/Steve-Jobs-Audiobook/B005V0QI82",
  },
  {
    id: "audio-creativity-inc",
    title: "Creativity, Inc.",
    creator: "Ed Catmull",
    category: "Audiobooks",
    tag: "Engineering Culture",
    takeaway:
      "Articulated how candid feedback candor and egoless post-mortems protect fragile early-stage engineering concepts from premature dismissal.",
    url: "https://www.audible.com/pd/Creativity-Inc-Audiobook/B00IK851MG",
  },
  {
    id: "audio-shoe-dog",
    title: "Shoe Dog: A Memoir by the Creator of Nike",
    creator: "Phil Knight",
    category: "Audiobooks",
    tag: "Resilience & Grit",
    takeaway:
      "A raw narrative of relentless persistence through existential supply-chain bottlenecks and faith in an audacious mission.",
    url: "https://www.audible.com/pd/Shoe-Dog-Audiobook/B01CRJA4RQ",
  },

  // Podcasts
  {
    id: "podcast-lex-fridman",
    title: "Lex Fridman Podcast",
    creator: "Lex Fridman",
    category: "Podcasts",
    tag: "Deep Tech & AI",
    takeaway:
      "Unmatched long-form dialogues probing artificial intelligence, human agency, quantum physics, and the long-term arc of computing.",
    url: "https://lexfridman.com/podcast/",
  },
  {
    id: "podcast-acquired",
    title: "Acquired",
    creator: "Ben Gilbert & David Rosenthal",
    category: "Podcasts",
    tag: "Playbooks & Strategy",
    takeaway:
      "Masterful forensic breakdowns detailing how legendary tech institutions forged durable moats, network effects, and compounding culture.",
    url: "https://www.acquired.fm/",
  },
  {
    id: "podcast-changelog",
    title: "The Changelog",
    creator: "Jerod Santo & Adam Stacoviak",
    category: "Podcasts",
    tag: "Software Engineering",
    takeaway:
      "My primary pulse on open-source ecosystems, software maintainer realities, and emerging developer tooling paradigms.",
    url: "https://changelog.com/podcast",
  },
  {
    id: "podcast-design-details",
    title: "Design Details",
    creator: "Marshall Bock & Brian Lovin",
    category: "Podcasts",
    tag: "Product & UX Design",
    takeaway:
      "A masterclass in examining subtle UI micro-decisions, button interactions, and the craft of modern digital interfaces.",
    url: "https://designdetails.fm/",
  },

  // Key Talks & Events
  {
    id: "talk-rich-hickey-simple-made-easy",
    title: "Simple Made Easy",
    creator: "Rich Hickey (Strange Loop)",
    category: "Key Talks",
    tag: "Architecture",
    takeaway:
      "Profoundly separated the concept of 'ease' (familiarity) from 'simplicity' (unentangled state), fundamentally shaping how I design component APIs.",
    url: "https://www.youtube.com/watch?v=SxdOUGdseq4",
  },
  {
    id: "talk-bret-victor-inventing-on-principle",
    title: "Inventing on Principle",
    creator: "Bret Victor (CUSEC)",
    category: "Key Talks",
    tag: "Creator Philosophy",
    takeaway:
      "Ignited my conviction that creators must have immediate, direct feedback loops with what they are constructing in code.",
    url: "https://vimeo.com/36579366",
  },
  {
    id: "talk-google-io-web-vitals",
    title: "The Future of Web Performance & Core Web Vitals",
    creator: "Google I/O Chrome Team",
    category: "Key Talks",
    tag: "Web Performance",
    takeaway:
      "Codified the mathematical relationship between perceived smoothness (INP), layout stability (CLS), and tangible business conversion rates.",
    url: "https://io.google/",
  },

  // Core Tools & Resources
  {
    id: "tool-nextjs",
    title: "Next.js & React Server Components",
    creator: "Vercel",
    category: "Core Tools",
    tag: "Full-Stack Web",
    takeaway:
      "The premier vehicle for shipping high-speed edge applications with zero-bundle-cost backend data streams and instant hydration.",
    url: "https://nextjs.org/",
  },
  {
    id: "tool-framer-motion",
    title: "Framer Motion",
    creator: "Motion / Matt Perry",
    category: "Core Tools",
    tag: "Animation Physics",
    takeaway:
      "Brings tactile physics, spring momentum, and intuitive gesture handling to web interfaces, raising software above static mockups.",
    url: "https://motion.dev/",
  },
  {
    id: "tool-tailwind",
    title: "Tailwind CSS",
    creator: "Tailwind Labs",
    category: "Core Tools",
    tag: "Design Tokens & CSS",
    takeaway:
      "Provides the ultimate constraint-based design system token pipeline, eliminating CSS bloat and naming fatigue completely.",
    url: "https://tailwindcss.com/",
  },
  {
    id: "tool-raycast",
    title: "Raycast & Developer Workflow",
    creator: "Raycast",
    category: "Core Tools",
    tag: "Productivity",
    takeaway:
      "A testament to keyboard-first software velocity and frictionless extension architecture that powers my daily engineering throughput.",
    url: "https://raycast.com/",
  },
];
