import type { Interest } from "./types";

export const RESEARCH_INTERESTS: Interest[] = [
  {
    title: "Conversational AI & RAG",
    body: "My day-to-day work at Ycotek is on a conversational AI system, and it's the source of most of what follows. Retrieval-augmented generation is good at surfacing relevant text, but I've repeatedly seen it fall short at capturing how the things in that text relate to each other.",
  },
  {
    title: "Knowledge Representation & Knowledge Graphs",
    body: "After watching document chunking fragment the context that made retrieved text meaningful, I got interested in representing entities, relationships, and constraints explicitly. Knowledge graphs and ontologies do that; documents and database rows mostly leave it implicit.",
  },
  {
    title: "Agentic AI & Multi-Agent Systems",
    body: "Building with LangGraph showed me how much of an agent's coordination is still hand-specified: which agent calls which tool, what happens next. I'm interested in how agents can share state and stay aligned on a task with less of that hand-written structure, and in the connection between memory, planning, and coordination.",
  },
  {
    title: "Reliable AI Systems",
    body: "Across both of the above: an AI system can have the right information and still get it wrong, or the right tool and still misuse it. I'm interested in how structured knowledge can make agent reasoning and retrieval more reliable, and in evaluating that improvement rather than assuming it.",
  },
];

export const EXPLORING: string[] = [
  "Exploring how multi-agent systems can coordinate with less hand-specified logic between steps.",
  "Learning about graph-enhanced retrieval, where relevance comes from relationships between entities rather than text similarity alone.",
  "Investigating how structured databases and organizational knowledge can be connected so an AI system can reason over both documents and structured data.",
  "Currently studying for the Claude Certified Solution Architect certification, alongside my day-to-day work on agentic systems.",
];
