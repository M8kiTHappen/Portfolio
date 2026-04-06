"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Code2, MapPin, Zap, User } from "lucide-react";

const HIGHLIGHTS = [
  {
    icon: GraduationCap,
    label:  "Education",
    value:  "B.S. Computer Science",
    accent: "#00FF87",
  },
  {
    icon:   Code2,
    label:  "Focus",
    value:  "Full Stack Development",
    accent: "#0099FF",
  },
  {
    icon:   MapPin,
    label:  "Location",
    value:  "Minneapolis, MN",
    accent: "#00FF87",
  },
  {
    icon:   Zap,
    label:  "Currently",
    value:  "Open to Opportunities",
    accent: "#0099FF",
  },
];

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.55, delay, ease: "easeOut" as const },
  };
}

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-28 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="text-4xl sm:text-5xl font-bold text-[#E0E8E8] mb-16"
        >
          Who I Am
        </motion.h2>

        <div className="grid md:grid-cols-5 gap-12 items-start">

          {/* ── Photo placeholder ── */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="md:col-span-2 flex justify-center md:justify-start"
          >
            <div className="relative w-full max-w-[280px]">
              {/* Portrait frame */}
              <div className="aspect-[3/4] rounded-lg bg-[#0E1616] border border-[rgba(0,255,135,0.10)] flex flex-col items-center justify-center gap-3 overflow-hidden relative">
                {/* Corner accents */}
                <span className="absolute top-0 left-0 w-7 h-7 border-t-2 border-l-2 border-[#00FF87] rounded-tl-lg" />
                <span className="absolute top-0 right-0 w-7 h-7 border-t-2 border-r-2 border-[#00FF87] rounded-tr-lg" />
                <span className="absolute bottom-0 left-0 w-7 h-7 border-b-2 border-l-2 border-[#00FF87] rounded-bl-lg" />
                <span className="absolute bottom-0 right-0 w-7 h-7 border-b-2 border-r-2 border-[#00FF87] rounded-br-lg" />
                {/* Ambient gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,255,135,0.03)] to-[rgba(0,153,255,0.03)]" />
                {/* Icon */}
                <User size={56} className="text-[#2A4040] relative z-10" />
                <p className="section-label text-[0.62rem] text-[#3D5555] relative z-10">
                  your photo here
                </p>
              </div>
            </div>
          </motion.div>

          {/* ── Bio + cards ── */}
          <div className="md:col-span-3 flex flex-col gap-10">
            {/* Bio copy */}
            <motion.div
              initial={{ opacity: 0, x: 28 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-5 text-[#6B8F8F] text-base sm:text-lg leading-relaxed"
            >
              <p>
                I&apos;m a computer science graduate with a deep drive for building
                software that is technically sound and genuinely useful. My background
                spans the full stack — from architecting resilient backend systems to
                crafting responsive, accessible frontends.
              </p>
              <p>
                I thrive where complex problems demand elegant solutions. Whether
                it&apos;s optimising a critical query, wiring up a real-time feature,
                or refining a micro-interaction — I care about every layer.
              </p>
              <p>
                Outside of code, I&apos;m exploring new technologies, reading about
                systems design, and occasionally contributing to open source. I believe
                the best engineers never stop learning.
              </p>
              <div className="pt-2">
                <a href="#contact" className="btn-primary">
                  Let&apos;s Talk
                </a>
              </div>
            </motion.div>

            {/* Highlight cards */}
            <div className="grid grid-cols-2 gap-4">
              {HIGHLIGHTS.map(({ icon: Icon, label, value, accent }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 24 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.28 + i * 0.08 }}
                  className="card-surface rounded-lg p-5 group cursor-default"
                >
                  <div
                    className="w-9 h-9 rounded-md flex items-center justify-center mb-3 transition-transform duration-200 group-hover:scale-110"
                    style={{ background: `${accent}12`, border: `1px solid ${accent}22` }}
                  >
                    <Icon size={17} style={{ color: accent }} />
                  </div>
                  <p className="section-label text-[0.62rem] mb-1">{label}</p>
                  <p className="text-[#E0E8E8] font-semibold text-sm leading-snug">{value}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

        {/* Decorative divider */}
        <motion.div
          {...fadeUp(0.35)}
          className="mt-20 h-px bg-gradient-to-r from-transparent via-[rgba(0,255,135,0.18)] to-transparent"
        />
      </div>
    </section>
  );
}
