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

const ICON = { education: GraduationCap, work: Briefcase };

export default function Experience() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="py-28 px-6 bg-[#0D1F0D]" ref={ref}>
      <div className="max-w-4xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45 }}
          className="font-heading text-4xl sm:text-5xl font-bold text-[#E8F0E8] mb-16"
        >
          Timeline
        </motion.h2>

        <div className="relative">
          <div
            className="absolute left-6 top-3 bottom-0 w-px bg-[#1E3A1E]"
            aria-hidden
          />

          <ol className="space-y-8" aria-label="Career timeline">
            {TIMELINE.map((item, i) => {
              const Icon = ICON[item.type];
              return (
                <motion.li
                  key={`${item.org}-${i}`}
                  initial={{ opacity: 0, x: -24 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.12 }}
                  className="relative pl-16"
                >
                  <div
                    className="absolute left-0 top-0 w-12 h-12 bg-[#142814] border border-[#1E3A1E] flex items-center justify-center clip-oct-sm"
                    aria-hidden
                  >
                    <Icon size={18} className="text-[#00CC6A]" />
                  </div>

                  <div className="clip-oct card-surface p-6">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div>
                        <p className="section-label text-[0.62rem] mb-1">
                          {item.type === "education" ? "Education" : "Work"}
                        </p>
                        <h3 className="font-heading text-base sm:text-lg font-bold text-[#E8F0E8] leading-snug">
                          {item.title}
                        </h3>
                        <p className="text-[#00CC6A] font-semibold text-sm mt-0.5">{item.org}</p>
                      </div>

                      <span className="font-mono text-xs px-3 py-1.5 bg-[#142814] border border-[#1E3A1E] text-[#7A9A7A] clip-oct-sm whitespace-nowrap">
                        {item.period}
                      </span>
                    </div>

                    <p className="font-body text-[#7A9A7A] text-sm leading-relaxed mb-4">{item.description}</p>

                    {item.tags && (
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs font-mono px-2 py-0.5 bg-[#142814] border border-[#1E3A1E] text-[#7A9A7A] clip-oct-sm"
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
