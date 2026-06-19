"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { cn } from "@/lib/utils";

const SLOTS = [
  {
    name: "Homepage takeover",
    desc: "Full-width placement above the fold on partner homepages.",
    price: "0.8 ETH / week",
    impressions: "~180K impressions",
    glow: "shadow-glow-pink",
    bar: "from-signal-pink to-signal-amber",
  },
  {
    name: "Sidebar strip",
    desc: "Persistent placement alongside content on desktop layouts.",
    price: "120 USDC / week",
    impressions: "~64K impressions",
    glow: "shadow-glow-cyan",
    bar: "from-signal-cyan to-signal-pink",
  },
  {
    name: "App splash screen",
    desc: "First-frame placement shown on cold app launches.",
    price: "0.3 ETH / week",
    impressions: "~96K impressions",
    glow: "shadow-glow-amber",
    bar: "from-signal-amber to-signal-cyan",
  },
  {
    name: "Wallet connect banner",
    desc: "Shown in the connect-wallet modal across partner dApps.",
    price: "200 USDC / week",
    impressions: "~41K impressions",
    glow: "shadow-glow-cyan",
    bar: "from-signal-cyan to-signal-amber",
  },
];

export function Inventory() {
  return (
    <section id="inventory" className="relative border-t border-line py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionLabel>Inventory</SectionLabel>
            <h2 className="mt-4 max-w-lg font-display text-4xl font-extrabold uppercase leading-[1] tracking-tight sm:text-5xl">
              Pick a placement, see the price.
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-mute">
            Every slot below is live inventory from the marketplace — prices
            update as demand changes.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {SLOTS.map((slot, i) => (
            <motion.div
              key={slot.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              className={cn(
                "group relative overflow-hidden rounded-2xl border border-line bg-panel/50 p-6 transition-shadow hover:bg-panel2",
                "hover:" + slot.glow
              )}
            >
              <div className={cn("absolute inset-x-0 top-0 h-1 bg-gradient-to-r", slot.bar)} />
              <div className="flex items-center justify-between">
                <h3 className="font-display text-2xl font-bold uppercase tracking-tight">
                  {slot.name}
                </h3>
                <span className="font-mono text-xs uppercase tracking-[0.15em] text-mute">
                  {slot.impressions}
                </span>
              </div>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-mute">{slot.desc}</p>
              <div className="mt-6 flex items-center justify-between border-t border-line pt-4">
                <span className="font-mono text-sm text-paper">{slot.price}</span>
                <span className="font-mono text-xs uppercase tracking-[0.15em] text-signal-cyan opacity-0 transition-opacity group-hover:opacity-100">
                  Book this slot →
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
