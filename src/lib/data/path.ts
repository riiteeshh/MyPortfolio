import type { PathItem } from "./types";

export const MY_PATH: PathItem[] = [
  {
    period: "2018 – 2023",
    title: "Bachelor's in Computer Engineering",
    body: [
      "Studied Computer Engineering at Tribhuvan University (Kantipur Engineering College) on a full scholarship. Coursework included Data Structures & Algorithms, Operating Systems, Artificial Intelligence, Computer Networks, Database Management Systems, Distributed Computing, and Big Data Technologies.",
    ],
  },
  {
    period: "2022 – 2023",
    title: "Early technical work",
    body: [
      "Built a Mobile Anti-Theft System with real-time security monitoring, encrypted alerting, location tracking, and privacy-preserving location sharing. It was awarded Best Project at the KEC Project Exhibition 2023.",
      "Co-authored \"Offline Wallet Secured with AES Encryption,\" an SMS-based digital transaction system for low-connectivity environments using AES-128 and Diffie–Hellman key exchange, presented at the International Conference on Engineering and Technology in 2023.",
      "Neither project involved AI, but both left me with the same habit: before I trust a system, I want to know where it can fail.",
    ],
    tags: ["Security", "Mobile", "Research"],
  },
  {
    period: "2023 – 2025",
    title: "Professional software engineering",
    body: [
      "Started at Creators Tech building Flutter mobile applications, then moved to LIS Nepal, where I worked across cross-platform apps and SQL databases, and later moved into frontend and backend work on Next.js web applications, along with my first AI-based projects.",
    ],
    tags: ["Flutter", "SQL", "Next.js"],
  },
  {
    period: "2025 – Present",
    title: "Conversational AI at Ycotek",
    body: [
      "As Senior Software Engineer at Ycotek, I've worked on both the frontend and backend of a conversational AI chat system for retail, and worked with data engineers to integrate LangChain and LangGraph into it.",
      "Working with an AI system is different from working with typical software. There usually isn't a single line of logic to trace when something goes wrong. A model can have the right information and still answer incorrectly, or an agent can have the right tool and still call the wrong one. Adding more information doesn't always fix either problem. That's what pulled my attention from getting these systems shipped toward understanding what's actually happening underneath them.",
    ],
    tags: ["LangChain", "LangGraph", "Python"],
  },
  {
    period: "A turning point",
    title: "From retrieval to knowledge representation",
    body: [
      "While working on a RAG system, I kept running into the same issue: the model could retrieve text containing the entities and processes I needed, but it didn't reliably grasp how they related to each other. Chunking documents made retrieval easier but fragmented the context that made the documents meaningful in the first place.",
      "My first instinct was to add more data, so I tried feeding in database schemas alongside the documents. That helped, but only up to a point. A schema tells you what tables exist, not how a business actually works or which relationships matter in a given situation.",
      "That's what led me to knowledge graphs, ontologies, and graph-based retrieval: modeling entities, relationships, and constraints explicitly instead of leaving them implicit in documents and rows. Sometimes the problem isn't a lack of information. It's how the information is structured.",
    ],
    tags: ["RAG", "Knowledge Graphs", "Ontologies"],
  },
  {
    period: "Current direction",
    title: "Agentic systems and reliable AI",
    body: [
      "I'm currently exploring agentic AI and multi-agent coordination, knowledge representation, and information retrieval. The underlying interest is the same one: how a system's limitations can be understood and addressed, rather than papered over with more data.",
    ],
    tags: ["Agentic AI", "Multi-Agent Systems", "Reliable AI"],
  },
];
