"use client";

import { useState } from "react";
import Link from "next/link";

type Project = {
  id: number;
  title: string;
  description: string;
  tech: string[];
  github?: string;
  liveUrl?: string;
  status: "completed" | "in-progress";
};

const projects: Project[] = [
  {
    id: 1,
    title: "Anti-Theft App",
    description:
      "A mobile security app that protects devices from unauthorized access. Features motion detection, loud alarm on wrong PIN, front camera capture, and real-time alerts.",
    tech: ["Java", "Android", "Firebase", "Device Sensors"],
    github: "https://github.com/riiteeshh/Anti-theft-app",
    status: "completed",
  },
  {
    id: 2,
    title: "PayAnywhere",
    description:
      "A cross-platform payment app enabling seamless digital transactions via QR codes, real-time transaction history, and a clean wallet interface.",
    tech: ["Flutter", "Dart", "Firebase", "REST API"],
    github: "https://github.com/riiteeshh/PayAnywhere",
    status: "completed",
  },
  {
    id: 3,
    title: "Mobizilla Inventory",
    description:
      "An inventory management system for a mobile retail business. Handles stock tracking, product cataloguing, sales recording, and low-stock alerts.",
    tech: ["Flutter", "Dart", "SQLite", "Firebase"],
    liveUrl: "https://mobisoft-inventory-app.vercel.app/",
    status: "completed",
  },
  {
    id: 4,
    title: "Cash Track",
    description:
      "A personal finance tracker to monitor income, expenses, and savings goals with categories and spending visualizations.",
    tech: ["Flutter", "Dart", "SQLite", "Bloc"],
    github: "https://github.com/riiteeshh/Cash_Track",
    status: "completed",
  },
  {
    id: 5,
    title: "Split It",
    description:
      "Splits shared expenses instantly. Add participants and transactions — it calculates exactly who owes whom. Perfect for trips, dinners, and shared bills.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://splitit-sigma.vercel.app/",
    status: "completed",
  },
  {
    id: 6,
    title: "Meguri Wallet",
    description:
      "A digital wallet app for secure balance management and peer-to-peer transfers, focused on transaction transparency and smooth everyday payments.",
    tech: ["Flutter", "Dart", "Firebase", "REST API"],
    status: "completed",
  },
  {
    id: 7,
    title: "AI Chat App",
    description:
      "Frontend for an AI-powered chat system for retail environments. Integrates LLM services for real-time product recommendations and conversational support.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "LLM"],
    status: "in-progress",
  },
  {
    id: 8,
    title: "Sawaari",
    description:
      "A vehicle renting app connecting riders with available vehicles. Clean booking experience with real-time availability for short-term rentals.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://sawaari-eta.vercel.app/",
    status: "in-progress",
  },
];

function FlipCard({ project }: { project: Project; index?: number }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="h-64 cursor-pointer"
      style={{ perspective: "1000px" }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div
        className="relative w-full h-full transition-transform duration-700"
        style={{
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 bg-zinc-900 p-6 flex flex-col justify-between overflow-hidden"
          style={{ backfaceVisibility: "hidden", pointerEvents: flipped ? "none" : "auto" }}
        >
          {/* Watermark: primary tech in large faded text */}
          <span
            className="absolute -bottom-3 -right-2 text-7xl font-extrabold text-zinc-800 leading-none select-none pointer-events-none uppercase"
            aria-hidden
          >
            {project.tech[0]}
          </span>

          {/* Top: category label + status dot */}
          <div className="flex items-center justify-between">
            <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold">
              {project.tech[0] === "Java" || project.tech[0] === "Flutter"
                ? "Mobile App"
                : "Web App"}
            </span>
          </div>

          {/* Bottom: title + tags */}
          <div className="relative z-10">
            <h3 className="text-xl font-bold text-white mb-3 leading-snug">
              {project.title}
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-[10px] uppercase tracking-wide border border-zinc-700 text-zinc-400 px-2 py-0.5"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 p-6 flex flex-col justify-between bg-zinc-800"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            pointerEvents: flipped ? "auto" : "none",
          }}
        >
          <div>
            <h3 className="text-sm font-extrabold uppercase tracking-widest text-red-500 mb-3">
              {project.title}
            </h3>
            <p className="text-gray-300 text-xs leading-relaxed line-clamp-5">
              {project.description}
            </p>
          </div>
          <div className="flex gap-4">
            {project.github && (
              <Link
                href={project.github}
                target="_blank"
                
                className="text-xs font-bold text-white hover:text-red-500 transition-colors uppercase tracking-wider"
              >
                GitHub
              </Link>
            )}
            {project.liveUrl && (
              <Link
                href={project.liveUrl}
                target="_blank"
                className="text-xs font-bold text-white hover:text-red-500 transition-colors uppercase tracking-wider"
              >
                Live Demo
              </Link>
            )}
            {!project.github && !project.liveUrl && (
              <span className="text-xs text-zinc-500 uppercase tracking-wider">
                Private
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  const completed = projects.filter((p) => p.status === "completed");
  const inProgress = projects.filter((p) => p.status === "in-progress");

  return (
    <div className="min-h-screen bg-black text-white py-16 px-6 md:px-16">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-2">PROJECTS</h1>
      <p className="text-gray-500 italic mb-16 text-sm">
        Hover a card to flip it.
      </p>

      {/* Completed */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-500">
            Completed
          </span>
          <div className="flex-1 h-px bg-zinc-800" />
          <span className="text-xs text-zinc-700">{completed.length}</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {completed.map((project, i) => (
            <FlipCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </section>

      {/* In Progress */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-red-500">
            In Progress
          </span>
          <div className="flex-1 h-px bg-zinc-800" />
          <span className="text-xs text-zinc-700">{inProgress.length}</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {inProgress.map((project, i) => (
            <FlipCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </section>
    </div>
  );
}
