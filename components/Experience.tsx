"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Briefcase } from "lucide-react";

interface TimelineItem {
  type:        "education" | "work";
  title:       string;
  org:         string;
  period:      string;
  description: string;
  tags?:       string[];
}

const TIMELINE: TimelineItem[] = [
  {
    type:    "work",
    title:   "Student Researcher",
    org:     "Noridian Healthcare",
    period:  "Jan 2025 — May 2025",
    description:
      "Built an AI-powered knowledge assistant using Microsoft Copilot and Azure to organize and centralize Noridian Healthcare's SharePoint file system. Facilitated more convenient access to essential files for company employees. Produced a guide specifying the requirements, limitations, and risks of the system to outline how to implement it.",
    tags: ["Microsoft Copilot", "Azure", "SharePoint"],
  },
  {
    type:    "work",
    title:   "IT Helpdesk Specialist",
    org:     "NDSU",
    period:  "Aug 2024 — May 2025",
    description:
      "Provided technical support to students, faculty, and staff by diagnosing and resolving hardware, software, and network issues via in-person, phone, and remote sessions. Managed user accounts and access permissions through university systems, ensuring data security and compliance with IT policies. Documented support requests and resolutions in the ticketing system to track trends and improve response efficiency.",
    tags: ["Technical Support", "Networking", "IT Operations"],
  },
  {
    type:    "education",
    title:   "Bachelor of Science — Computer Science",
    org:     "North Dakota State University",
    period:  "2021 — 2025",
    description:
      "Core coursework: Data Structures, Algorithms, Operating Systems, Computer Networks, Databases, and Software Engineering. Graduated 2025.",
    tags: ["B.S. Computer Science", "2025"],
  },
  {
    type:    "work",
    title:   "Software Engineering Intern",
    org:     "TJA League",
    period:  "May 2023 — Jul 2023",
    description:
      "Developed a front-end application with Angular to record player and team stats and post league news. Designed and executed SQL queries to efficiently retrieve and populate player and team data. Identified bottlenecks and inefficiencies, then applied targeted optimizations to streamline code and enhance webpage loading speed.",
    tags: ["Angular", "SQL", "Front-End"],
  },
];

const ICON_MAP = { education: GraduationCap, work: Briefcase };
const ACCENT   = { education: "#00FF87",     work: "#0099FF"  };

export default function Experience() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="experience"
      className="py-28 px-6 bg-[#0E1616] relative overflow-hidden"
      ref={ref}
    >
      {/* Edge glows */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(0,255,135,0.18), transparent)" }}
        aria-hidden />
      <div className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(0,153,255,0.14), transparent)" }}
        aria-hidden />

      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="text-4xl sm:text-5xl font-bold text-[#E0E8E8] mb-16"
        >
          Timeline
        </motion.h2>

        <div className="relative">
          {/* Vertical spine */}
          <div
            className="absolute left-6 top-3 w-px"
            style={{
              bottom: 0,
              background: "linear-gradient(to bottom, #00FF87, #0099FF 60%, transparent)",
            }}
            aria-hidden
          />

          <ol className="space-y-10" aria-label="Career timeline">
            {TIMELINE.map((item, i) => {
              const Icon   = ICON_MAP[item.type];
              const accent = ACCENT[item.type];

              return (
                <motion.li
                  key={`${item.org}-${i}`}
                  initial={{ opacity: 0, x: -28 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.55, delay: 0.2 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                  className="relative pl-16"
                >
                  {/* Icon node */}
                  <div
                    className="absolute left-0 top-0 w-12 h-12 rounded-lg flex items-center justify-center"
                    style={{
                      background:   `${accent}0D`,
                      border:       `1px solid ${accent}28`,
                    }}
                    aria-hidden
                  >
                    <Icon size={20} style={{ color: accent }} />
                  </div>

                  {/* Card */}
                  <div className="card-surface rounded-lg p-6 hover:border-[rgba(0,255,135,0.28)] transition-all duration-300">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div>
                        <p className="section-label text-[0.62rem] mb-1">
                          {item.type === "education" ? "Education" : "Work"}
                        </p>
                        <h3 className="text-base sm:text-lg font-bold text-[#E0E8E8] leading-snug">
                          {item.title}
                        </h3>
                        <p className="font-semibold text-sm mt-0.5" style={{ color: accent }}>
                          {item.org}
                        </p>
                      </div>

                      <span
                        className="font-mono text-xs px-3 py-1.5 rounded whitespace-nowrap"
                        style={{
                          color:      accent,
                          background: `${accent}0D`,
                          border:     `1px solid ${accent}22`,
                        }}
                      >
                        {item.period}
                      </span>
                    </div>

                    <p className="text-[#6B8F8F] text-sm leading-relaxed mb-4">
                      {item.description}
                    </p>

                    {item.tags && (
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs font-mono px-2 py-0.5 rounded-sm border text-[#C0CCCC]"
                            style={{ borderColor: "rgba(0,255,135,0.12)" }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
