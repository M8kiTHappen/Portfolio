"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/icons";

interface Project {
  title:       string;
  description: string;
  tech:        string[];
  github:      string;
  live:        string | null;
  featured:    boolean;
}

const PROJECTS: Project[] = [
  {
    title: "GeoConnections",
    description:
      "A daily geography puzzle game where players group 16 tiles into 4 hidden categories. Uses the Anthropic Claude API to automatically generate new puzzle categories daily, stored in Firebase Firestore so the AI runs once per day regardless of user count. API calls are secured through a Vercel serverless function, keeping credentials server-side.",
    tech:     ["React", "Tailwind CSS", "Firebase", "Claude API", "Vercel"],
    github:   "https://github.com/M8kiTHappen/GeoConnections",
    live:     "https://geo-connections.vercel.app/",
    featured: true,
  },
  {
    title: "GuessTheSong",
    description:
      "A multiplayer music guessing game with real song previews and album art via the iTunes API. Uses Supabase (PostgreSQL) as the song database filtered by genre and decade, Next.js serverless API routes to serve randomized song pools, and Framer Motion for smooth animations across a fully responsive UI.",
    tech:     ["Next.js", "TypeScript", "Supabase", "iTunes API", "Framer Motion", "Tailwind CSS"],
    github:   "https://github.com/M8kiTHappen/guess-the-song",
    live:     "https://guess-the-song-topaz-nine.vercel.app/",
    featured: false,
  },
];

function ProjectCard({ project, index, inView }: { project: Project; index: number; inView: boolean }) {
  const { title, description, tech, github, live } = project;

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.12 + index * 0.1 }}
      className="clip-oct bg-[#00CC6A] hover:bg-[#00FF87] transition-colors duration-200 p-6 flex flex-col"
    >
      <h3 className="font-heading text-lg font-bold text-[#070A0A] mb-3">{title}</h3>

      <p className="font-body text-[#003D1F] text-sm leading-relaxed mb-6 flex-1">{description}</p>

      <div className="flex flex-wrap gap-2 mb-6">
        {tech.map((t) => (
          <span
            key={t}
            className="text-xs font-mono px-2 py-0.5 bg-[#009950] text-[#070A0A] font-semibold clip-oct-sm"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-5">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-sm text-[#070A0A] hover:text-[#003D1F] transition-colors font-semibold"
        >
          <GithubIcon size={15} />
          Code
        </a>
        {live && (
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-[#070A0A] hover:text-[#003D1F] transition-colors font-semibold"
          >
            <ExternalLink size={15} />
            Live Demo
          </a>
        )}
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="py-28 px-6 bg-[#070A0A]" ref={ref}>
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45 }}
          className="font-heading text-4xl sm:text-5xl font-bold text-[#E8F0E8] mb-4"
        >
          Selected Work
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.08 }}
          className="font-body text-[#7A9A7A] text-base sm:text-lg mb-14"
        >
          A selection of projects I&apos;ve built. Each one taught me something new.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-4">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} inView={inView} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.35 }}
          className="mt-10 text-center"
        >
          <a
            href="https://github.com/M8kiTHappen"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2"
          >
            <GithubIcon size={15} />
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
