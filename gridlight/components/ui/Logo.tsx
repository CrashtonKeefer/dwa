export function Logo({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect x="2" y="4" width="28" height="16" rx="3" stroke="currentColor" strokeWidth="2" />
      <path d="M8 24L6 29M24 24L26 29" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="9" cy="12" r="2" fill="#FF3DAE" />
      <circle cx="16" cy="12" r="2" fill="#FFC23C" />
      <circle cx="23" cy="12" r="2" fill="#34E4FF" />
    </svg>
  );
}
