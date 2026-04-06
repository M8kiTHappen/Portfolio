import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

const SOCIAL = [
  { icon: GithubIcon,   label: "GitHub",   href: "https://github.com/M8kiTHappen" },
  { icon: LinkedinIcon, label: "LinkedIn", href: "https://www.linkedin.com/in/m-aden/" },
  { icon: Mail,         label: "Email",    href: "mailto:Mohamed.a03@outlook.com" },
];

const NAV = [
  { label: "About",      href: "#about" },
  { label: "Skills",     href: "#skills" },
  { label: "Projects",   href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact",    href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0E1616] border-t border-[rgba(0,255,135,0.08)]">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col sm:flex-row items-start justify-between gap-8">
          {/* Nav links */}
          <nav aria-label="Footer navigation">
            <p className="section-label mb-3">Navigation</p>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-2">
              {NAV.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-sm text-[#6B8F8F] hover:text-[#00FF87] transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social */}
          <div>
            <p className="section-label mb-3">Connect</p>
            <div className="flex items-center gap-3">
              {SOCIAL.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2.5 rounded-lg border border-[rgba(0,255,135,0.10)] text-[#6B8F8F] hover:text-[#00FF87] hover:border-[rgba(0,255,135,0.30)] hover:bg-[rgba(0,255,135,0.05)] transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
