"use client";

import { motion } from "framer-motion";
import { Wallet, MapPinned, ShieldCheck, Activity } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";

const STEPS = [
  {
    n: "01",
    title: "Connect your wallet",
    body: "Sign in with any wallet that supports your chain of choice. No forms, no account review.",
    icon: Wallet,
  },
  {
    n: "02",
    title: "Pick a placement & dates",
    body: "Browse live inventory across partner sites and apps, filtered by audience, format and price.",
    icon: MapPinned,
  },
  {
    n: "03",
    title: "Pay, get a receipt on-chain",
    body: "Settle in stablecoins. Your booking, price and duration are written to the chain — no invoices to chase.",
    icon: ShieldCheck,
  },
  {
    n: "04",
    title: "Go live, watch it work",
    body: "Your creative ships within minutes. Track impressions and spend from a single live dashboard.",
    icon: Activity,
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative border-t border-line py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionLabel>How it works</SectionLabel>
        <h2 className="mt-4 max-w-xl font-display text-4xl font-extrabold uppercase leading-[1] tracking-tight sm:text-5xl">
          From wallet to billboard, four steps.
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
                className="group relative rounded-2xl border border-line bg-panel/50 p-6 transition-colors hover:border-signal-cyan/40"
              >
                <span className="font-mono text-xs tracking-[0.2em] text-mute">{step.n}</span>
                <div className="mt-5 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-panel2 text-signal-cyan transition-shadow group-hover:shadow-glow-cyan">
                  <Icon size={20} />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold uppercase tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-mute">{step.body}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
