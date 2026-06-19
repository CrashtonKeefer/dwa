"use client";

export function HeroBillboard() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <svg viewBox="0 0 420 360" className="w-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="screenGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FF3DAE" />
            <stop offset="50%" stopColor="#FFC23C" />
            <stop offset="100%" stopColor="#34E4FF" />
          </linearGradient>
          <radialGradient id="glowGrad" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#34E4FF" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#34E4FF" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* ambient glow behind sign */}
        <ellipse cx="210" cy="120" rx="190" ry="120" fill="url(#glowGrad)" />

        {/* support posts */}
        <rect x="150" y="230" width="10" height="100" rx="2" fill="#26263580" />
        <rect x="260" y="230" width="10" height="100" rx="2" fill="#26263580" />

        {/* frame */}
        <rect x="20" y="20" width="380" height="220" rx="14" fill="#13131C" stroke="#26263580" strokeWidth="3" />

        {/* screen */}
        <rect x="40" y="40" width="340" height="180" rx="8" fill="url(#screenGrad)" opacity="0.18" />
        <rect x="40" y="40" width="340" height="180" rx="8" fill="none" stroke="url(#screenGrad)" strokeWidth="2" />

        {/* scanning beam, animated */}
        <g clipPath="url(#screenClip)">
          <rect x="40" y="40" width="340" height="40" fill="#ffffff" opacity="0.08">
            <animate attributeName="y" values="40;180;40" dur="4.5s" repeatCount="indefinite" />
          </rect>
        </g>
        <clipPath id="screenClip">
          <rect x="40" y="40" width="340" height="180" rx="8" />
        </clipPath>

        {/* on-screen content mock: bars + headline lines */}
        <rect x="64" y="68" width="120" height="14" rx="3" fill="#F4F3F0" opacity="0.85" />
        <rect x="64" y="92" width="200" height="10" rx="3" fill="#F4F3F0" opacity="0.5" />
        <rect x="64" y="108" width="160" height="10" rx="3" fill="#F4F3F0" opacity="0.5" />

        <rect x="64" y="150" width="60" height="40" rx="6" fill="#0A0A0F" opacity="0.5" />
        <rect x="134" y="150" width="60" height="40" rx="6" fill="#0A0A0F" opacity="0.5" />
        <rect x="204" y="150" width="60" height="40" rx="6" fill="#0A0A0F" opacity="0.5" />
        <rect x="274" y="150" width="42" height="40" rx="6" fill="#0A0A0F" opacity="0.5" />

        {/* corner bolts */}
        {[[30, 30], [390, 30], [30, 230], [390, 230]].map(([cx, cy]) => (
          <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="4" fill="#3a3a4a" />
        ))}

        {/* marquee bulbs around frame */}
        {Array.from({ length: 18 }).map((_, i) => {
          const x = 30 + (i % 9) * 43;
          const y = i < 9 ? 12 : 248;
          const colors = ["#FF3DAE", "#FFC23C", "#34E4FF"];
          return (
            <circle key={i} cx={x} cy={y} r="3" fill={colors[i % 3]} opacity="0.9">
              <animate
                attributeName="opacity"
                values="0.9;0.2;0.9"
                dur="1.6s"
                begin={`${i * 0.09}s`}
                repeatCount="indefinite"
              />
            </circle>
          );
        })}
      </svg>
    </div>
  );
}
