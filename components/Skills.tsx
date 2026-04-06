"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const CATEGORIES = [
  {
    label:  "Languages",
    accent: "#00FF87",
    skills: ["Python", "TypeScript", "JavaScript", "Java", "C++", "SQL", "Bash"],
  },
  {
    label:  "Frontend",
    accent: "#0099FF",
    skills: ["React", "Next.js", "Tailwind CSS", "HTML / CSS", "Redux", "Framer Motion"],
  },
  {
    label:  "Backend",
    accent: "#00FF87",
    skills: ["Node.js", "Express", "FastAPI", "REST APIs", "GraphQL", "WebSockets"],
  },
  {
    label:  "Databases",
    accent: "#0099FF",
    skills: ["PostgreSQL", "MongoDB", "Redis", "SQLite", "Prisma", "Supabase"],
  },
  {
    label:  "DevOps & Cloud",
    accent: "#00FF87",
    skills: ["Git", "Docker", "Linux", "AWS", "Azure", "GitHub Actions", "CI/CD"],
  },
  {
    label:  "Concepts",
    accent: "#0099FF",
    skills: ["Data Structures", "Algorithms", "System Design", "OOP", "Agile", "TDD"],
  },
];

export default function Skills() {
  const ref   = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="skills"
      className="py-28 px-6 bg-[#0E1616] relative overflow-hidden"
      ref={ref}
    >
      {/* Subtle top-edge glow */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(0,255,135,0.18), transparent)" }}
        aria-hidden
      />

      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="text-4xl sm:text-5xl font-bold text-[#E0E8E8] mb-16"
        >
          Tech Stack
        </motion.h2>

        {/* Category grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CATEGORIES.map((cat, ci) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + ci * 0.07 }}
              className="card-surface rounded-lg p-6 group"
            >
              {/* Category header */}
              <div className="flex items-center gap-2 mb-5">
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: cat.accent, boxShadow: `0 0 8px ${cat.accent}` }}
                />
                <span
                  className="font-mono text-[0.67rem] font-bold tracking-[0.18em] uppercase"
                  style={{ color: cat.accent }}
                >
                  {cat.label}
                </span>
              </div>

              {/* Skill chips */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.28, delay: 0.15 + ci * 0.06 + si * 0.025 }}
                    className="text-xs font-mono px-2.5 py-1 rounded-sm border text-[#C0CCCC] hover:text-[#E0E8E8] transition-colors duration-150 cursor-default"
                    style={{ borderColor: "rgba(0,255,135,0.11)" }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Subtle bottom-edge glow */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(0,153,255,0.14), transparent)" }}
        aria-hidden
      />
    </section>
  );
}
