"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Star } from "lucide-react";
import { GithubIcon } from "@/components/icons";

interface Project {
  title:       string;
  description: string;
  tech:        string[];
  github:      string;
  live:        string | null;
  featured:    boolean;
  accent:      "#00FF87" | "#0099FF";
}

const PROJECTS: Project[] = [
  {
    title: "Project Alpha",
    description:
      "A full-stack web application with real-time collaboration, JWT authentication, and a responsive UI. Designed for scale — containerised with Docker and deployed on AWS with zero-downtime deployments.",
    tech:     ["Next.js", "TypeScript", "PostgreSQL", "Redis", "Docker", "AWS"],
    github:   "#",
    live:     "#",
    featured: true,
    accent:   "#00FF87",
  },
  {
    title: "Project Beta",
    description:
      "High-performance REST API serving thousands of requests per minute. Implements request queuing, rate limiting, automatic retries, and structured logging with Prometheus metrics.",
    tech:     ["Python", "FastAPI", "MongoDB", "AWS", "Prometheus"],
    github:   "#",
    live:     null,
    featured: false,
    accent:   "#0099FF",
  },
  {
    title: "Project Gamma",
    description:
      "An open-source CLI tool that automates complex CI/CD workflows, reducing pipeline setup time significantly. Includes a plugin system and first-class Windows / Linux / macOS support.",
    tech:     ["Node.js", "TypeScript", "Bash", "GitHub Actions"],
    github:   "#",
    live:     null,
    featured: false,
    accent:   "#00FF87",
  },
];

function ProjectCard({ project, index, inView }: { project: Project; index: number; inView: boolean }) {
  const { title, description, tech, github, live, featured, accent } = project;

  return (
    <motion.article
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: 0.15 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="card-surface rounded-lg p-6 flex flex-col group relative overflow-hidden"
    >
      {/* Corner accent line */}
      <span
        className="absolute top-0 left-0 w-16 h-px transition-all duration-500 group-hover:w-full"
        style={{ background: accent }}
        aria-hidden
      />

      {/* Featured badge */}
      {featured && (
        <div className="flex items-center gap-1.5 mb-4">
          <Star size={12} style={{ color: accent }} />
          <span className="section-label text-[0.62rem]">Featured Project</span>
        </div>
      )}

      {/* Title */}
      <h3
        className="text-lg font-bold text-[#E0E8E8] mb-3 group-hover:text-[#00FF87] transition-colors duration-200"
      >
        {title}
      </h3>

      {/* Description */}
      <p className="text-[#6B8F8F] text-sm leading-relaxed mb-6 flex-1">{description}</p>

      {/* Tech badges */}
      <div className="flex flex-wrap gap-1.5 mb-6">
        {tech.map((t) => (
          <span
            key={t}
            className="text-xs font-mono px-2 py-0.5 rounded-sm"
            style={{
              color:            accent === "#00FF87" ? "#0099FF" : "#00FF87",
              background:       accent === "#00FF87" ? "rgba(0,153,255,0.07)" : "rgba(0,255,135,0.07)",
              border:           `1px solid ${accent === "#00FF87" ? "rgba(0,153,255,0.15)" : "rgba(0,255,135,0.15)"}`,
            }}
          >
            {t}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex items-center gap-5">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-sm text-[#6B8F8F] hover:text-[#00FF87] transition-colors"
        >
          <GithubIcon size={15} />
          Code
        </a>
        {live && (
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-[#6B8F8F] hover:text-[#0099FF] transition-colors"
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
    <section id="projects" className="py-28 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="text-4xl sm:text-5xl font-bold text-[#E0E8E8] mb-4"
        >
          Selected Work
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, delay: 0.14 }}
          className="text-[#6B8F8F] text-base sm:text-lg mb-14"
        >
          A selection of projects I&apos;ve built. Each one taught me something new.
        </motion.p>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} inView={inView} />
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, delay: 0.45 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2"
          >
            <GithubIcon size={16} />
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
