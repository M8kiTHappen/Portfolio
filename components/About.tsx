"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Code2, MapPin, Zap } from "lucide-react";
import Image from "next/image";

const HIGHLIGHTS = [
  { icon: GraduationCap, label: "Education", value: "B.S. Computer Science", accent: "#00CC6A" },
  { icon: Code2,          label: "Focus",     value: "Full Stack Development", accent: "#00CC6A" },
  { icon: MapPin,         label: "Location",  value: "Minneapolis, MN",        accent: "#00CC6A" },
  { icon: Zap,            label: "Currently", value: "Open to Opportunities",  accent: "#00CC6A" },
];

export default function About() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-28 px-6 bg-[#070A0A]" ref={ref}>
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45 }}
          className="font-heading text-4xl sm:text-5xl font-bold text-[#E8F0E8] mb-16"
        >
          Who I Am
        </motion.h2>

        <div className="grid md:grid-cols-5 gap-12 items-start">

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-2 flex justify-center md:justify-start"
          >
            <div className="relative w-full max-w-[280px]">
              <div
                className="aspect-[3/4] overflow-hidden border border-[#1E3A1E] relative"
                style={{
                  clipPath: "polygon(16px 0%, calc(100% - 16px) 0%, 100% 16px, 100% calc(100% - 16px), calc(100% - 16px) 100%, 16px 100%, 0% calc(100% - 16px), 0% 16px)"
                }}
              >
                <Image src="/about.jpeg" alt="About Mohamed Aden" fill className="object-cover" />
              </div>
            </div>
          </motion.div>

          {/* Bio + cards */}
          <div className="md:col-span-3 flex flex-col gap-10">
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="font-body space-y-5 text-[#7A9A7A] text-base sm:text-lg leading-relaxed"
            >
              <p>
                I&apos;m a computer science graduate with a deep drive for building
                software that is technically sound and genuinely useful. My background consists of all my schooling at NDSU and on the job experience as a student researcher and intern during my time at university.
              </p>
              <p>
                I thrive where complex problems demand elegant solutions. Whether
                it&apos;s optimizing a critical query, wiring up a real-time feature,
                or refining a micro-interaction, I care about every layer.
              </p>
              <p>
                Outside of code, I&apos;m exploring new technologies, reading about
                systems design, and occasionally contributing to open source. I believe
                the best engineers never stop learning. Otherwise, you can find me shooting hoops or finding a new travel destination!
              </p>
              <div className="pt-2">
                <a href="#contact" className="btn-primary">Let&apos;s Talk</a>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-3">
              {HIGHLIGHTS.map(({ icon: Icon, label, value }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.07 }}
                  className="clip-oct card-surface p-5 cursor-default"
                >
                  <div className="w-9 h-9 bg-[#142814] border border-[#1E3A1E] clip-oct-sm flex items-center justify-center mb-3">
                    <Icon size={16} className="text-[#00CC6A]" />
                  </div>
                  <p className="section-label text-[0.62rem] mb-1">{label}</p>
                  <p className="text-[#E8F0E8] font-semibold text-sm">{value}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-20 h-px bg-[#1E3A1E]"
        />
      </div>
    </section>
  );
}
