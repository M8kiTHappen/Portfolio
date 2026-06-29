"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const CATEGORIES = [
  { label: "Languages",    skills: ["Python", "TypeScript", "JavaScript", "Java", "C++", "SQL", "Bash"] },
  { label: "Frontend",     skills: ["React", "Next.js", "Tailwind CSS", "HTML / CSS", "Redux", "Framer Motion"] },
  { label: "Backend",      skills: ["Node.js", "Express", "FastAPI", "REST APIs", "GraphQL", "WebSockets"] },
  { label: "Databases",    skills: ["PostgreSQL", "MongoDB", "Redis", "SQLite", "Prisma", "Supabase"] },
  { label: "DevOps & Cloud", skills: ["Git", "Docker", "Linux", "AWS", "Azure", "GitHub Actions", "CI/CD"] },
  { label: "Concepts",     skills: ["Data Structures", "Algorithms", "System Design", "OOP", "Agile", "TDD"] },
];

export default function Skills() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-28 px-6 bg-[#0D1F0D]" ref={ref}>
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45 }}
          className="font-heading text-4xl sm:text-5xl font-bold text-[#E8F0E8] mb-16"
        >
          Tech Stack
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CATEGORIES.map((cat, ci) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.08 + ci * 0.06 }}
              className="clip-oct card-surface-2 p-6"
            >
              <h3 className="text-[#00CC6A] font-bold text-sm tracking-widest uppercase mb-5">
                {cat.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.25, delay: 0.12 + ci * 0.05 + si * 0.02 }}
                    className="text-xs font-mono px-2.5 py-1 bg-[#0D1F0D] border border-[#1E3A1E] text-[#7A9A7A] cursor-default clip-oct-sm"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
