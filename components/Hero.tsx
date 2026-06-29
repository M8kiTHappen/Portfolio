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
  "Cloud Infrastructure Enthusiast",
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
      <span className="text-[#00CC6A] font-semibold">{displayed}</span>
      <span className="inline-block w-0.5 h-6 sm:h-8 bg-[#00CC6A] animate-pulse" aria-hidden />
    </span>
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
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6"
      style={{ background: "#070A0A" }}
    >
      <div className="relative z-10 max-w-4xl w-full mx-auto text-center">

        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="mx-auto mb-8"
          style={{ width: 120, height: 120 }}
        >
          <div
            className="w-full h-full overflow-hidden border-2 border-[#1E3A1E] rounded-full"
          >
            <Image src="/avatar.jpg" alt="Mohamed Aden" fill className="object-cover" priority />
          </div>
        </motion.div>

        {/* Available chip */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="inline-flex items-center gap-2 mb-7 px-4 py-1.5 bg-[#0D1F0D] border border-[#1E3A1E] clip-oct-sm"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#00CC6A]" />
          <span className="section-label text-[0.62rem]">Available for opportunities</span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-heading text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight text-[#E8F0E8] mb-4 leading-none"
        >
          Mohamed <span className="text-[#00CC6A]">Aden</span>
        </motion.h1>

        {/* Typewriter */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-xl sm:text-2xl md:text-3xl font-mono mb-8 min-h-[44px] flex items-center justify-center"
        >
          <Typewriter />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="font-body text-[#7A9A7A] text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-12"
        >
          CS graduate looking for full-time roles around the country.
          Passionate about building solutions that make a real impact, ready to tackle hard problems and ship software that matters.{" "}
          <span className="text-[#E8F0E8] font-medium">Would love to talk!</span>
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <a href="#projects" className="btn-primary">View My Work</a>
          <a href="#contact"  className="btn-outline">Get In Touch</a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="flex items-center justify-center gap-4"
        >
          {SOCIAL.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="p-2.5 bg-[#0D1F0D] border border-[#1E3A1E] text-[#7A9A7A] hover:text-[#00CC6A] hover:border-[#2A502A] transition-colors duration-200 clip-oct-sm"
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
        transition={{ duration: 0.4, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-[#2A502A] hover:text-[#00CC6A] transition-colors"
        aria-label="Scroll to about"
      >
        <ChevronDown size={18} className="animate-bounce" />
      </motion.a>
    </section>
  );
}
