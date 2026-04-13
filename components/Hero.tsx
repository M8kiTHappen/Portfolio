"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

const ROLES = [
  "Full Stack Engineer",
  "CS Graduate",
  "Systems Thinker",
  "Open Source Contributor",
  "Problem Solver",
];

function Typewriter() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed,  setDisplayed]  = useState("");
  const [isTyping,   setIsTyping]   = useState(true);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const current = ROLES[roleIndex];

    const schedule = (fn: () => void, ms: number) => {
      timeoutRef.current = setTimeout(fn, ms);
    };

    if (isTyping) {
      if (displayed.length < current.length) {
        schedule(() => setDisplayed(current.slice(0, displayed.length + 1)), 75);
      } else {
        schedule(() => setIsTyping(false), 2200);
      }
    } else {
      if (displayed.length > 0) {
        schedule(() => setDisplayed((d) => d.slice(0, -1)), 38);
      } else {
        setRoleIndex((i) => (i + 1) % ROLES.length);
        setIsTyping(true);
      }
    }

    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, [displayed, isTyping, roleIndex]);

  return (
    <span className="inline-flex items-center gap-1.5">
      <span className="gradient-text font-semibold">{displayed}</span>
      <span
        className="inline-block w-0.5 h-6 sm:h-8 bg-[#00FF87] animate-pulse"
        aria-hidden
      />
    </span>
  );
}

/* Floating geometric accent */
function HexAccent({
  className,
  size = 120,
  color = "rgba(0,255,135,0.06)",
  delay = 0,
}: {
  className?: string;
  size?: number;
  color?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={`absolute pointer-events-none ${className}`}
      animate={{ y: [0, -14, 0] }}
      transition={{ duration: 6, ease: "easeInOut", repeat: Infinity, delay }}
      style={{ width: size, height: size }}
    >
      <svg viewBox="0 0 100 100" fill="none">
        <polygon
          points="50,2 95,26 95,74 50,98 5,74 5,26"
          stroke={color}
          strokeWidth="1.5"
          fill="transparent"
        />
        <polygon
          points="50,14 83,32 83,68 50,86 17,68 17,32"
          stroke={color}
          strokeWidth="0.8"
          fill="transparent"
        />
      </svg>
    </motion.div>
  );
}

const SOCIAL = [
  { icon: GithubIcon,   label: "GitHub",   href: "https://github.com/M8kiTHappen" },
  { icon: LinkedinIcon, label: "LinkedIn", href: "https://www.linkedin.com/in/m-aden/" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center bg-grid overflow-hidden px-6"
    >
      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-1/3 left-1/4 w-[700px] h-[700px] rounded-full bg-[rgba(0,255,135,0.035)] blur-[140px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-[rgba(0,153,255,0.035)] blur-[120px]" />
      </div>

      {/* Scan line */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.025]" aria-hidden>
        <div className="absolute left-0 right-0 h-[1px] bg-[#00FF87] animate-scan-line" />
      </div>

      {/* Floating hex accents */}
      <HexAccent className="-top-10 -left-10 opacity-60"  size={200} delay={0} />
      <HexAccent className="top-20 right-10 opacity-40"   size={140} delay={1.5} color="rgba(0,153,255,0.07)" />
      <HexAccent className="bottom-16 left-16 opacity-30" size={110} delay={3}   color="rgba(0,153,255,0.05)" />
      <HexAccent className="-bottom-8 -right-8 opacity-50" size={180} delay={0.8} />

      {/* ── Main content ── */}
      <div className="relative z-10 max-w-4xl w-full mx-auto text-center">
        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative w-28 h-28 sm:w-32 sm:h-32 mx-auto mb-8"
        >
          {/* Outer spinning dashed ring */}
          <div className="absolute inset-0 rounded-full border-2 border-dashed border-[rgba(0,255,135,0.28)] animate-spin [animation-duration:12s]" />
          {/* Photo */}
          <div className="absolute inset-2 rounded-full overflow-hidden border border-[rgba(0,255,135,0.18)]">
            <Image
              src="/avatar.jpg"
              alt="Mohamed Aden"
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* Ambient glow */}
          <div className="absolute inset-0 rounded-full bg-[rgba(0,255,135,0.04)] blur-xl pointer-events-none" />
        </motion.div>

        {/* Status chip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="inline-flex items-center gap-2 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#00FF87] animate-pulse" />
          <span className="section-label">Available for opportunities</span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight text-[#E0E8E8] mb-4 leading-none"
        >
          Mohamed{" "}
          <span className="gradient-text text-glow-green">Aden</span>
        </motion.h1>

        {/* Typewriter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl sm:text-2xl md:text-3xl font-mono mb-8 min-h-[44px] flex items-center justify-center"
        >
          <Typewriter />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-[#6B8F8F] text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-12"
        >
          CS graduate with a passion for building elegant, high-performance software.
          From backend systems to pixel-perfect UIs — I ship things that{" "}
          <span className="text-[#E0E8E8]">actually work</span>.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-14"
        >
          <a href="#projects" className="btn-primary gap-2">
            View My Work
          </a>
          <a href="#contact" className="btn-outline">
            Get In Touch
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="flex items-center justify-center gap-5"
        >
          {SOCIAL.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="p-2 rounded-lg border border-[rgba(0,255,135,0.10)] text-[#6B8F8F] hover:text-[#00FF87] hover:border-[rgba(0,255,135,0.35)] hover:bg-[rgba(0,255,135,0.05)] transition-all duration-200"
            >
              <Icon size={18} />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-[#6B8F8F] hover:text-[#00FF87] transition-colors group"
        aria-label="Scroll to about"
      >
        <span className="section-label text-[0.62rem]">Scroll</span>
        <ChevronDown size={16} className="animate-bounce" />
      </motion.a>
    </section>
  );
}
