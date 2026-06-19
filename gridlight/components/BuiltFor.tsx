const MARKS = ["VECTRA", "NODEWORKS", "ORBITAL", "ZENPAY", "FORGEKIT", "HALOLABS"];

export function BuiltFor() {
  return (
    <section className="relative border-t border-line py-14">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-center font-mono text-xs uppercase tracking-[0.2em] text-mute">
          Built for teams shipping on-chain
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-70">
          {MARKS.map((mark) => (
            <span
              key={mark}
              className="font-display text-lg font-bold uppercase tracking-wider text-mute"
            >
              {mark}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
