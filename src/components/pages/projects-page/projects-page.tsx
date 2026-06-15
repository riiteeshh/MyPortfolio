"use client";

import { Card } from "@/components/ui/card";
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

export default function ProjectsPage() {
  const [hoveredId, setHoveredId] = useState(-1);

  const projects: Project[] = [
    {
      id: 1,
      title: "Anti-Theft App",
      description:
        "A mobile security application that protects devices from unauthorized access. Features motion detection triggers, loud alarm activation on wrong PIN attempts, front camera capture, and real-time alerts to keep your device secure.",
      tech: ["Flutter", "Dart", "Firebase", "Device Sensors"],
      github: "https://github.com/riiteeshh/Anti-theft-app",
      status: "completed",
    },
    {
      id: 2,
      title: "PayAnywhere",
      description:
        "A cross-platform payment application enabling seamless digital transactions. Supports QR code-based payments, real-time transaction history, and a clean wallet interface for fast and secure fund transfers.",
      tech: ["Flutter", "Dart", "Firebase", "REST API"],
      github: "https://github.com/riiteeshh/PayAnywhere",
      status: "completed",
    },
    {
      id: 3,
      title: "Mobizilla Inventory App",
      description:
        "An inventory management system built for a mobile retail business. Streamlines stock tracking, product cataloguing, sales recording, and low-stock alerts — replacing manual spreadsheet workflows with a reliable cross-platform app.",
      tech: ["Flutter", "Dart", "SQLite", "Firebase"],
      liveUrl: "https://mobizilla-inventory-app.vercel.app/",
      status: "completed",
    },
    {
      id: 4,
      title: "Cash Track",
      description:
        "A personal finance tracker that helps users stay on top of their money. Log income and expenses with categories, visualize spending patterns, and set savings goals — all in a minimal, intuitive interface.",
      tech: ["Flutter", "Dart", "SQLite", "Bloc"],
      github: "https://github.com/riiteeshh/Cash_Track",
      status: "completed",
    },
    {
      id: 5,
      title: "Split It",
      description:
        "A web app that makes splitting expenses effortless. Add participants and transactions, and it instantly calculates who owes whom — keeping group trips, dinners, and shared bills fair and drama-free.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS"],
      liveUrl: "https://splitit-sigma.vercel.app/",
      status: "completed",
    },
    {
      id: 7,
      title: "Meguri Wallet",
      description:
        "A digital wallet application offering secure balance management and peer-to-peer transfers. Built with a focus on transaction transparency, Meguri Wallet provides a smooth UX for everyday digital payments.",
      tech: ["Flutter", "Dart", "Firebase", "REST API"],
      status: "completed",
    },
    {
      id: 8,
      title: "AI Chat Application",
      description:
        "Currently building the frontend for an AI-powered chat system designed for retail environments. Integrates with LLM services to deliver real-time conversational experiences, helping customers get instant product recommendations and support.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "LLM"],
      status: "in-progress",
    },
    {
      id: 9,
      title: "Sawaari",
      description:
        "A vehicle renting application that connects riders with available vehicles for seamless short-term rentals. Focused on a clean booking experience with real-time availability.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS"],
      liveUrl: "https://sawaari-eta.vercel.app/",
      status: "in-progress",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white py-16 px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
        PROJECTS
      </h1>
      <p className="text-center text-gray-400 italic mb-16 max-w-xl mx-auto">
        A collection of things I&apos;ve built — from mobile apps to AI-powered
        web experiences.
      </p>

      <div className="container mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 pl-24 md:pl-35">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group relative"
            onMouseEnter={() => setHoveredId(project.id)}
            onMouseLeave={() => setHoveredId(-1)}
          >
            {/* Card */}
            <Card className="bg-zinc-900 text-white p-6 rounded-none shadow-xl border-0 w-full z-10 relative py-8 flex flex-col gap-3">
              {/* Status badge */}
              <div className="flex justify-end">
                <span
                  className={`text-xs font-bold px-2 py-1 rounded-full ${
                    project.status === "in-progress"
                      ? "bg-red-500/20 text-red-400 border border-red-500/40"
                      : "bg-zinc-700 text-gray-400"
                  }`}
                >
                  {project.status === "in-progress" ? "● In Progress" : "Completed"}
                </span>
              </div>

              {/* Title */}
              <h3
                className={`text-2xl font-bold transition-all duration-300 ${
                  hoveredId === project.id
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text"
                    : "text-white"
                }`}
              >
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mt-1">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs bg-zinc-800 text-gray-300 px-2 py-1 border border-zinc-700"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4 mt-1">
                {project.github && (
                  <Link
                    href={project.github}
                    target="_blank"
                    className="text-sm font-bold text-red-500 hover:text-white transition-colors self-start"
                  >
                    GitHub →
                  </Link>
                )}
                {project.liveUrl && (
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    className="text-sm font-bold text-red-500 hover:text-white transition-colors self-start"
                  >
                    Live Demo →
                  </Link>
                )}
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
