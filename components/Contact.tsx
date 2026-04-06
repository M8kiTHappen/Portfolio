"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Send, Mail, CheckCircle } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

const CONTACT_LINKS = [
  {
    icon:  Mail,
    label: "Email",
    value: "Mohamed.a03@outlook.com",
    href:  "mailto:Mohamed.a03@outlook.com",
  },
  {
    icon:  GithubIcon,
    label: "GitHub",
    value: "github.com/M8kiTHappen",
    href:  "https://github.com/M8kiTHappen",
  },
  {
    icon:  LinkedinIcon,
    label: "LinkedIn",
    value: "linkedin.com/in/m-aden",
    href:  "https://www.linkedin.com/in/m-aden/",
  },
];

export default function Contact() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent]  = useState(false);

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body    = encodeURIComponent(
      `${form.message}\n\n—\nFrom: ${form.name}\nEmail: ${form.email}`
    );
    window.location.href = `mailto:Mohamed.a03@outlook.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const inputClass =
    "w-full bg-[#0E1616] border border-[rgba(0,255,135,0.12)] rounded-lg px-4 py-3 text-sm text-[#E0E8E8] placeholder:text-[#3D5555] focus:outline-none focus:border-[rgba(0,255,135,0.38)] transition-colors duration-200";

  return (
    <section id="contact" className="py-28 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="text-4xl sm:text-5xl font-bold text-[#E0E8E8] mb-4"
        >
          Get In Touch
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, delay: 0.14 }}
          className="text-[#6B8F8F] text-base sm:text-lg mb-14 max-w-lg"
        >
          I&apos;m open to new opportunities, collaborations, and interesting
          conversations. My inbox is always open.
        </motion.p>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          {/* ── Form ── */}
          <motion.form
            initial={{ opacity: 0, x: -28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="md:col-span-3 space-y-5"
          >
            <div>
              <label htmlFor="contact-name" className="section-label block mb-2">
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                required
                autoComplete="name"
                placeholder="John Doe"
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="contact-email" className="section-label block mb-2">
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                required
                autoComplete="email"
                placeholder="john@example.com"
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="contact-message" className="section-label block mb-2">
                Message
              </label>
              <textarea
                id="contact-message"
                required
                rows={5}
                placeholder="Tell me about your project or opportunity…"
                value={form.message}
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                className={`${inputClass} resize-none`}
              />
            </div>

            <button
              type="submit"
              className="btn-primary w-full gap-2"
              disabled={sent}
            >
              {sent ? (
                <>
                  <CheckCircle size={16} />
                  Message Sent — Check Your Email Client
                </>
              ) : (
                <>
                  <Send size={15} />
                  Send Message
                </>
              )}
            </button>
          </motion.form>

          {/* ── Contact cards ── */}
          <motion.aside
            initial={{ opacity: 0, x: 28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-2 flex flex-col gap-4"
            aria-label="Contact links"
          >
            {CONTACT_LINKS.map(({ icon: Icon, label, value, href }, i) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 14 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.32 + i * 0.08 }}
                className="flex items-center gap-4 card-surface rounded-lg p-4 group"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(0,255,135,0.07)", border: "1px solid rgba(0,255,135,0.14)" }}
                >
                  <Icon size={17} className="text-[#00FF87]" />
                </div>
                <div className="overflow-hidden">
                  <p className="section-label text-[0.62rem] mb-0.5">{label}</p>
                  <p className="text-sm text-[#E0E8E8] font-medium group-hover:text-[#00FF87] transition-colors truncate">
                    {value}
                  </p>
                </div>
              </motion.a>
            ))}

            {/* Response-time chip */}
            <div className="mt-2 flex items-center gap-2 px-4 py-3 rounded-lg border border-[rgba(0,153,255,0.12)] bg-[rgba(0,153,255,0.04)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0099FF] animate-pulse flex-shrink-0" />
              <p className="text-xs text-[#6B8F8F] font-mono">
                Usually responds within <span className="text-[#E0E8E8]">24 hours</span>
              </p>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
