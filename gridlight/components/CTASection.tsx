"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function CTASection() {
  return (
    <section className="relative overflow-hidden border-t border-line py-28">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-radial-pink blur-3xl" />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="font-display text-4xl font-extrabold uppercase leading-[1] tracking-tight sm:text-5xl md:text-6xl"
        >
          Your audience is already on-chain.
          <br />
          <span className="text-gradient-signal">Meet them there.</span>
        </motion.h2>
        <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-mute">
          Set up your first campaign in the time it takes to read this
          sentence twice.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Button size="lg">Book ad space</Button>
          <Button size="lg" variant="secondary">
            List your screens
          </Button>
        </div>
      </div>
    </section>
  );
}
