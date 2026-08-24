import type { Project } from "./types";

export const PROJECTS: Project[] = [
  // ---- Featured ----
  {
    slug: "mobile-anti-theft-system",
    title: "Mobile Anti-Theft System",
    category: "Mobile / Security",
    summary:
      "Real-time device security monitoring with encrypted alerting, location tracking, and privacy-preserving location sharing. Best Project Award, KEC Project Exhibition 2023.",
    tier: "featured",
    status: "completed",
    tech: ["Java", "Android", "Firebase", "Device Sensors"],
    year: "2023",
    github: "https://github.com/riiteeshh/Anti-theft-app",
    caseStudy: {
      problem:
        "Once a phone is out of its owner's physical control, there's very little the owner can do beyond hoping it's recovered. The project set out to give a device a way to detect unauthorized access and respond to it, without turning location tracking into another privacy risk.",
      solution:
        "An Android application with real-time security monitoring, encrypted alerting, location tracking, pattern-based emergency calling, and privacy-preserving location sharing with access control, so location data only reaches an authorized recipient.",
      contribution:
        "I designed and implemented the security monitoring, alerting, and location-sharing features, using the device's sensors to detect tampering and trigger an encrypted alert.",
      technicalDetails: [
        "Android app built in Java",
        "Device sensors for tamper/motion detection",
        "Firebase for alerting and data sync",
        "Access-controlled, privacy-preserving location sharing",
        "Pattern-based emergency calling",
      ],
      challenges:
        "The core tension was between monitoring the device continuously enough to be useful and not draining the battery or over-collecting data, while making sure location data was only ever exposed to the device owner, not stored or shared more broadly than necessary.",
      results:
        "Awarded Best Project at the KEC Project Exhibition 2023. It was my first project where security and privacy constraints shaped the architecture from the start, rather than being added afterward.",
    },
  },
  {
    slug: "ycotek-ai-chat-system",
    title: "AI-Powered Chat System (Ycotek)",
    category: "Conversational AI",
    summary:
      "Conversational AI chat system for retail applications, with a Next.js frontend and Python backend, integrating LangChain and LangGraph for agentic workflows. Current role at Ycotek Nepal.",
    tier: "featured",
    status: "in-progress",
    tech: ["Next.js", "TypeScript", "Python", "LangChain", "LangGraph"],
    year: "2025 – Present",
    privateNote: "Employer product. Proprietary, not publicly available.",
    caseStudy: {
      problem:
        "A retail conversational AI needs to hold a coherent, useful conversation with a customer. That means reasoning about what the customer is actually asking, not just returning relevant-looking text.",
      solution:
        "A chat system with a Next.js frontend and a Python backend. My work has spanned both sides: building the interface and product-facing website, and backend API/architecture work. Working alongside data engineers, I've helped integrate LangChain and LangGraph so the system can move from a single-pass response pipeline toward agent-based workflows.",
      contribution:
        "Frontend and backend development, API design, code reviews, and mentoring of junior developers, plus hands-on work integrating LangChain and LangGraph with the data engineering team.",
      technicalDetails: [
        "Next.js / TypeScript frontend",
        "Python backend and API layer",
        "LangChain and LangGraph for agent orchestration",
        "Moving toward multi-agent, tool-using workflows",
      ],
      challenges:
        "This is where my thinking shifted the most. With a conventional web application there's usually a specific line of logic you can trace back to and fix. With an AI system, a model can have the right information and still answer incorrectly, or an agent can have the right tool available and still call the wrong one. Simply adding more context doesn't reliably fix either failure mode. That gap is what pushed my interest from 'get this into production' toward 'understand why it behaves this way.'",
      results:
        "The system is live and in active development. I can't share internal metrics or architecture specifics since it's a proprietary employer product, but this work is the direct source of my interest in RAG, knowledge representation, and agentic systems.",
    },
  },
  {
    slug: "mobizilla-inventory",
    title: "Mobizilla Inventory",
    category: "Mobile / Business Software",
    summary:
      "Inventory management system for a mobile retail business: stock tracking, product cataloguing, sales recording, and low-stock alerts.",
    tier: "featured",
    status: "completed",
    tech: ["Flutter", "Dart", "SQLite", "Firebase"],
    year: "2024",
    liveUrl: "https://mobisoft-inventory-app.vercel.app/",
    caseStudy: {
      problem:
        "A mobile retail business needed a way to track stock, catalogue products, and record sales without relying on manual or ad-hoc methods that make it easy to lose track of low or out-of-stock items.",
      solution:
        "A Flutter application handling stock tracking, product cataloguing, sales recording, and low-stock alerts, with local storage via SQLite and Firebase for backend sync.",
      contribution:
        "Designed and built the application end-to-end, including the data model for inventory and sales.",
      technicalDetails: [
        "Flutter / Dart cross-platform app",
      ],
      results:
        "Deployed and available as a live demo.",
    },
  },

  // ---- Other ----
  {
    slug: "payanywhere",
    title: "PayAnywhere",
    category: "Mobile",
    summary:
      "Cross-platform payment app for digital transactions via QR codes, with transaction history and a wallet interface.",
    tier: "other",
    status: "completed",
    tech: ["Flutter", "Dart", "Firebase", "REST API"],
    year: "2023",
    github: "https://github.com/riiteeshh/PayAnywhere",
  },
  {
    slug: "cash-track",
    title: "Cash Track",
    category: "Mobile",
    summary:
      "Personal finance tracker for income, expenses, and savings goals, with categories and spending visualizations.",
    tier: "other",
    status: "completed",
    tech: ["Flutter", "Dart", "SQLite", "Bloc"],
    year: "2023",
    github: "https://github.com/riiteeshh/Cash_Track",
  },
  {
    slug: "split-it",
    title: "Split It",
    category: "Web",
    summary:
      "Splits shared expenses among participants: add transactions and it works out who owes whom. Built for trips, dinners, and shared bills.",
    tier: "other",
    status: "completed",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    year: "2024",
    liveUrl: "https://splitit-sigma.vercel.app/",
  },
  {
    slug: "meguri-wallet",
    title: "Meguri Wallet",
    category: "Mobile",
    summary:
      "Digital wallet app for balance management and peer-to-peer transfers, focused on transaction transparency.",
    tier: "other",
    status: "completed",
    tech: ["Flutter", "Dart", "Firebase", "REST API"],
    year: "2024",
    privateNote: "Not publicly available.",
  },
  {
    slug: "sawaari",
    title: "Sawaari",
    category: "Web",
    summary:
      "Vehicle renting app connecting riders with available vehicles for short-term rentals, with real-time availability.",
    tier: "other",
    status: "in-progress",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    year: "2024 – Present",
    liveUrl: "https://sawaari-eta.vercel.app/",
  },
];

export const FEATURED_PROJECTS = PROJECTS.filter((p) => p.tier === "featured");
export const OTHER_PROJECTS = PROJECTS.filter((p) => p.tier === "other");
export function getProjectBySlug(slug: string) {
  return PROJECTS.find((p) => p.slug === slug);
}
