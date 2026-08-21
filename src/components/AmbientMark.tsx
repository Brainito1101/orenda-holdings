/**
 * The mark drawn in hairlines at a very large scale, turning slowly.
 * Texture for the hero, not an illustration.
 */
export function AmbientMark({
  size = 900,
  className = "",
  stroke = "var(--color-gold)",
  opacity = 0.16,
}: {
  size?: number;
  className?: string;
  stroke?: string;
  opacity?: number;
}) {
  return (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      className={className}
      style={{ opacity }}
      aria-hidden
    >
      <g className="orbit-turn" style={{ transformOrigin: "100px 100px" }}>
        {Array.from({ length: 24 }, (_, i) => {
          const long = i % 2 === 0;
          return (
            <g key={i} transform={`rotate(${i * 15} 100 100)`}>
              <line x1="100" y1="72" x2="100" y2="14" stroke={stroke} strokeWidth="0.35" />
              {long ? (
                <rect x="98.6" y="26" width="2.8" height="34" rx="1.4" fill="none" stroke={stroke} strokeWidth="0.35" />
              ) : (
                <rect x="99.1" y="42" width="1.8" height="13" rx="0.9" fill="none" stroke={stroke} strokeWidth="0.35" />
              )}
            </g>
          );
        })}
        <circle cx="100" cy="100" r="64" fill="none" stroke={stroke} strokeWidth="0.3" />
        <circle cx="100" cy="100" r="88" fill="none" stroke={stroke} strokeWidth="0.3" />
        <circle cx="100" cy="100" r="6" fill="none" stroke={stroke} strokeWidth="0.5" />
      </g>
    </svg>
  );
}
