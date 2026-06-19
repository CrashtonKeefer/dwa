"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
  children: ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "relative inline-flex items-center justify-center gap-2 rounded-full font-body font-semibold tracking-tight transition-all duration-200 ease-out active:scale-[0.97] disabled:opacity-40 disabled:pointer-events-none",
        size === "md" ? "px-6 py-3 text-sm" : "px-8 py-4 text-base",
        variant === "primary" &&
          "bg-paper text-ink shadow-[0_0_0_0_rgba(255,61,174,0)] hover:shadow-glow-pink hover:bg-white",
        variant === "secondary" &&
          "bg-transparent text-paper border border-line hover:border-signal-cyan/60 hover:shadow-glow-cyan",
        variant === "ghost" &&
          "bg-panel/60 text-paper border border-line hover:bg-panel2",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
