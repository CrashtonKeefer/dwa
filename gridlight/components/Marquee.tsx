import { cn } from "@/lib/utils";

const STATS = [
  "2,418 ACTIVE PLACEMENTS",
  "41 CHAINS SUPPORTED",
  "96,200+ IMPRESSIONS TODAY",
  "AVG. BOOKING TIME 4 MIN",
  "$4.2M SETTLED ON-CHAIN",
  "1,107 CAMPAIGNS LIVE NOW",
];

function Dot() {
  return <span className="mx-6 inline-block h-1.5 w-1.5 rounded-full bg-signal-amber align-middle animate-blink" />;
}

export function Marquee({ reverse = false }: { reverse?: boolean }) {
  const content = (
    <>
      {STATS.map((stat) => (
        <span key={stat} className="inline-flex items-center font-mono text-xs uppercase tracking-[0.15em] text-mute">
          {stat}
          <Dot />
        </span>
      ))}
    </>
  );

  return (
    <div className="relative overflow-hidden border-y border-line bg-panel/60 py-3">
      <div
        className={cn(
          "flex w-max whitespace-nowrap motion-reduce:animate-none",
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        )}
      >
        <div className="flex">{content}</div>
        <div className="flex">{content}</div>
      </div>
    </div>
  );
}
