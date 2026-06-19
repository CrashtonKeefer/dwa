# GridLight

An original, production-ready landing page for a fictional Web3 advertising
platform — built with Next.js 14 (App Router), TypeScript, Tailwind CSS,
Framer Motion, and Lucide icons.

> Note: this is an original design built in the same genre as the brief
> (crypto/web3 ad marketplace, dark UI with neon/gradient accents). It is not
> a copy of any specific third-party site's layout, copy, or branding.

## Stack

- **Next.js 14** (App Router, TypeScript)
- **Tailwind CSS** — custom token system (colors, glows, keyframes) in `tailwind.config.ts`
- **Framer Motion** — scroll-reveal and entrance animations
- **lucide-react** — icons
- Fonts via `next/font/google`: Big Shoulders Display (headlines), Inter (body), JetBrains Mono (data/labels)

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

```bash
npm run build
npm run start
```

## Project structure

```
app/
  layout.tsx        Root layout, font loading, metadata
  page.tsx           Assembles all sections in order
  globals.css        Base styles, gradient/glow utilities, focus states
components/
  Navbar.tsx          Sticky nav, scroll-aware blur, mobile menu
  Hero.tsx            Headline, subhead, CTAs
  HeroBillboard.tsx   Signature animated SVG billboard graphic
  Marquee.tsx         Scrolling LED-style stats ticker
  BuiltFor.tsx        "Built for teams" logo strip
  HowItWorks.tsx      4-step numbered process
  Stats.tsx           Big glowing numbers
  Inventory.tsx       Ad placement cards
  FAQ.tsx             Accordion
  CTASection.tsx      Closing call to action
  Footer.tsx          Link columns + socials
  ui/
    Button.tsx        primary / secondary / ghost variants
    SectionLabel.tsx  Eyebrow label
    Logo.tsx           Mark used in nav + footer
lib/
  utils.ts            cn() className helper
```

## Design notes

- **Palette**: near-black `ink` background with three "signal" neon accents
  (pink `#FF3DAE`, amber `#FFC23C`, cyan `#34E4FF`) — modeled on the mixed
  tube colors of real marquee signage rather than a single accent color.
- **Type**: Big Shoulders Display (condensed industrial display face) paired
  with Inter for body copy and JetBrains Mono for data/ticker/labels.
- **Signature element**: the scrolling LED ticker (`Marquee.tsx`) and the
  animated SVG billboard in the hero, with chasing marquee bulbs and a
  scanning beam.
- Respects `prefers-reduced-motion` (animations are disabled via the
  `motion-reduce:` variant and a global media query in `globals.css`).
- All visuals (billboard graphic, logo mark) are inline SVG/CSS — no external
  image dependencies.

## Deploy

Works out of the box on Vercel:

```bash
npx vercel
```

Or any Node host that supports Next.js 14.
