"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { cn } from "@/lib/utils";

const FAQS = [
  {
    q: "Which chains can I pay with?",
    a: "GridLight currently settles on 41 chains, including Ethereum, Base, Arbitrum and Solana. Stablecoin payments are supported on every chain we list.",
  },
  {
    q: "How long does it take to go live?",
    a: "Most campaigns ship within 4 minutes of payment confirming on-chain. Larger takeover placements may need creative review, which adds up to one business day.",
  },
  {
    q: "Can I list my own screen space?",
    a: "Yes. Connect your wallet, verify the property you want to list, and set your own pricing. You get paid automatically each time a placement sells.",
  },
  {
    q: "Is pricing fixed or does it change with demand?",
    a: "Pricing floats with demand, similar to an order book. You always see the live price before you confirm a booking — nothing changes after you pay.",
  },
  {
    q: "What happens if a campaign underdelivers?",
    a: "Every placement guarantees a minimum impression count. If a campaign falls short, the difference is refunded automatically to your wallet.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative border-t border-line py-24">
      <div className="mx-auto max-w-3xl px-6">
        <SectionLabel>FAQ</SectionLabel>
        <h2 className="mt-4 font-display text-4xl font-extrabold uppercase leading-[1] tracking-tight sm:text-5xl">
          Questions, answered.
        </h2>

        <div className="mt-12 divide-y divide-line border-t border-line">
          {FAQS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.q}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="font-body text-base font-medium text-paper">{item.q}</span>
                  <ChevronDown
                    size={18}
                    className={cn(
                      "shrink-0 text-mute transition-transform duration-300",
                      isOpen && "rotate-180 text-signal-cyan"
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "overflow-hidden transition-all duration-300 ease-out",
                    isOpen ? "max-h-40 pb-5 opacity-100" : "max-h-0 opacity-0"
                  )}
                >
                  <p className="text-sm leading-relaxed text-mute">{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
