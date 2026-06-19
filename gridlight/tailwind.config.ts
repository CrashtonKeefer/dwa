import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0A0A0F",
        panel: "#13131C",
        panel2: "#191926",
        line: "#26263580",
        paper: "#F4F3F0",
        mute: "#8C8CA0",
        signal: {
          pink: "#FF3DAE",
          cyan: "#34E4FF",
          amber: "#FFC23C",
        },
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, transparent, #0A0A0F 90%), repeating-linear-gradient(0deg, #ffffff08 0px, #ffffff08 1px, transparent 1px, transparent 48px), repeating-linear-gradient(90deg, #ffffff08 0px, #ffffff08 1px, transparent 1px, transparent 48px)",
      },
      boxShadow: {
        "glow-pink": "0 0 24px 0 rgba(255,61,174,0.45)",
        "glow-cyan": "0 0 24px 0 rgba(52,228,255,0.45)",
        "glow-amber": "0 0 24px 0 rgba(255,194,60,0.45)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        flicker: {
          "0%, 100%": { opacity: "1" },
          "92%": { opacity: "1" },
          "93%": { opacity: "0.4" },
          "94%": { opacity: "1" },
          "96%": { opacity: "0.6" },
          "97%": { opacity: "1" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.55" },
          "50%": { opacity: "1" },
        },
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0.25" },
        },
        "scan-y": {
          "0%": { transform: "translateY(-10%)" },
          "100%": { transform: "translateY(110%)" },
        },
      },
      animation: {
        marquee: "marquee 32s linear infinite",
        "marquee-reverse": "marquee-reverse 38s linear infinite",
        flicker: "flicker 6s linear infinite",
        "pulse-glow": "pulse-glow 3.2s ease-in-out infinite",
        blink: "blink 1.4s step-start infinite",
        "scan-y": "scan-y 4.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
