"use client";

import { motion } from "framer-motion";
import { Radio } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { HeroBillboard } from "@/components/HeroBillboard";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      {/* background grid + glows */}
      <div className="pointer-events-none absolute inset-0 bg-grid-fade" />
      <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-radial-pink blur-2xl" />
      <div className="pointer-events-none absolute right-0 top-40 h-80 w-80 rounded-full bg-radial-cyan blur-2xl" />

      <div className="relative mx-auto grid max-w-6xl gap-14 px-6 md:grid-cols-2 md:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-panel/60 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-mute animate-flicker">
            <Radio size={13} className="text-signal-pink" />
            live across 41 chains
          </div>

          <h1 className="font-display text-5xl font-extrabold uppercase leading-[0.95] tracking-tight sm:text-6xl md:text-7xl">
            Your message,
            <br />
            <span className="text-gradient-signal">lit up</span> on-chain.
          </h1>

          <p className="mt-6 max-w-md font-body text-lg leading-relaxed text-mute">
            GridLight turns unused screen space into programmable ad
            inventory. Book a placement, pay in crypto, and go live in
            minutes — no ad ops, no invoices, no waiting.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button size="lg">Book ad space</Button>
            <Button size="lg" variant="secondary">
              List your screens
            </Button>
          </div>

          <div className="mt-10 flex items-center gap-6 font-mono text-xs uppercase tracking-[0.15em] text-mute">
            <span>No code required</span>
            <span className="h-1 w-1 rounded-full bg-line" />
            <span>Settled in stablecoins</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
        >
          <HeroBillboard />
        </motion.div>
      </div>
    </section>
  );
}
