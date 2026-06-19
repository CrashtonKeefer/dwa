"use client";

import { motion } from "framer-motion";

const STATS = [
  { value: "2,400+", label: "Active ad placements", color: "text-signal-pink" },
  { value: "41", label: "Chains supported", color: "text-signal-amber" },
  { value: "$4.2M", label: "Ad spend settled on-chain", color: "text-signal-cyan" },
  { value: "4 min", label: "Average time to book", color: "text-paper" },
];

export function Stats() {
  return (
    <section id="network" className="relative border-t border-line py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              className="border-l border-line pl-6"
            >
              <div className={`font-display text-5xl font-extrabold tracking-tight sm:text-6xl ${stat.color}`}>
                {stat.value}
              </div>
              <p className="mt-2 font-mono text-xs uppercase tracking-[0.15em] text-mute">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
