"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Send, Mail, CheckCircle } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

const CONTACT_LINKS = [
  { icon: Mail,         label: "Email",    value: "Mohamed.a03@outlook.com",  href: "mailto:Mohamed.a03@outlook.com" },
  { icon: GithubIcon,   label: "GitHub",   value: "github.com/M8kiTHappen",   href: "https://github.com/M8kiTHappen" },
  { icon: LinkedinIcon, label: "LinkedIn", value: "linkedin.com/in/m-aden",   href: "https://www.linkedin.com/in/m-aden/" },
];

export default function Contact() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent]  = useState(false);

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body    = encodeURIComponent(`${form.message}\n\nFrom: ${form.name}\nEmail: ${form.email}`);
    window.location.href = `mailto:Mohamed.a03@outlook.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const inputClass =
    "w-full bg-[#0D1F0D] border border-[#1E3A1E] px-4 py-3 text-sm text-[#E8F0E8] placeholder:text-[#2A502A] focus:outline-none focus:border-[#00CC6A] transition-colors duration-200 clip-oct";

  return (
    <section id="contact" className="py-28 px-6 bg-[#070A0A]" ref={ref}>
      <div className="max-w-5xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45 }}
          className="font-heading text-4xl sm:text-5xl font-bold text-[#E8F0E8] mb-4"
        >
          Get In Touch
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.08 }}
          className="font-body text-[#7A9A7A] text-base sm:text-lg mb-14 max-w-lg"
        >
          I&apos;m open to new opportunities, collaborations, and interesting conversations. My inbox is always open.
        </motion.p>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          <motion.form
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            onSubmit={handleSubmit}
            className="md:col-span-3 space-y-4"
          >
            <div>
              <label htmlFor="contact-name" className="font-heading section-label block mb-2">Name</label>
              <input
                id="contact-name" type="text" required autoComplete="name" placeholder="John Doe"
                value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="font-heading section-label block mb-2">Email</label>
              <input
                id="contact-email" type="email" required autoComplete="email" placeholder="john@example.com"
                value={form.email} onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="contact-message" className="font-heading section-label block mb-2">Message</label>
              <textarea
                id="contact-message" required rows={5} placeholder="Tell me about your opportunity..."
                value={form.message} onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                className={`${inputClass} resize-none`}
              />
            </div>
            <button type="submit" className="btn-primary w-full gap-2" disabled={sent}>
              {sent ? <><CheckCircle size={16} /> Message Sent</> : <><Send size={15} /> Send Message</>}
            </button>
          </motion.form>

          <motion.aside
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-2 flex flex-col gap-3"
          >
            {CONTACT_LINKS.map(({ icon: Icon, label, value, href }, i) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.35, delay: 0.25 + i * 0.07 }}
                className="flex items-center gap-4 clip-oct bg-[#00CC6A] hover:bg-[#00FF87] active:bg-[#009950] p-4 transition-colors duration-200"
              >
                <div className="w-10 h-10 bg-[#009950] clip-oct-sm flex items-center justify-center flex-shrink-0">
                  <Icon size={16} className="text-[#070A0A]" />
                </div>
                <div className="overflow-hidden">
                  <p className="font-heading text-[0.62rem] tracking-[0.18em] uppercase mb-0.5 text-[#070A0A] font-semibold">{label}</p>
                  <p className="text-sm text-[#070A0A] font-bold truncate">{value}</p>
                </div>
              </motion.a>
            ))}
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
