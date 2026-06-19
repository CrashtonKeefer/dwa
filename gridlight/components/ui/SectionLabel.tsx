import { cn } from "@/lib/utils";

export function SectionLabel({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-mute",
        className
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-signal-pink shadow-glow-pink" />
      {children}
    </div>
  );
}
