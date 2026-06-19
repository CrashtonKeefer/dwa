import { Github, MessageCircle, Send, Globe } from "lucide-react";
import { Logo } from "@/components/ui/Logo";

const COLUMNS = [
  {
    title: "Product",
    links: [
      { label: "Inventory", href: "#inventory" },
      { label: "How it works", href: "#how-it-works" },
      { label: "Network", href: "#network" },
      { label: "Status", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Careers", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "FAQ", href: "#faq" },
      { label: "Support", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Privacy", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-line py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <a href="#" className="flex items-center gap-2 text-paper">
              <Logo />
              <span className="font-display text-xl font-extrabold uppercase tracking-tight">
                GridLight
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-mute">
              Programmable ad space for the on-chain web. Book it, run it,
              track it — all in one place.
            </p>
            <div className="mt-6 flex items-center gap-4 text-mute">
              <a href="#" aria-label="GitHub" className="transition-colors hover:text-paper">
                <Github size={18} />
              </a>
              <a href="#" aria-label="Discord" className="transition-colors hover:text-paper">
                <MessageCircle size={18} />
              </a>
              <a href="#" aria-label="Telegram" className="transition-colors hover:text-paper">
                <Send size={18} />
              </a>
              <a href="#" aria-label="Website" className="transition-colors hover:text-paper">
                <Globe size={18} />
              </a>
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-mute">
                {col.title}
              </h4>
              <ul className="mt-4 flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-mute transition-colors hover:text-paper"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-line pt-8 sm:flex-row">
          <p className="font-mono text-xs text-mute">
            © {new Date().getFullYear()} GridLight. All rights reserved.
          </p>
          <p className="font-mono text-xs text-mute">Built on-chain, for the on-chain web.</p>
        </div>
      </div>
    </footer>
  );
}
