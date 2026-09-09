/**
 * The Orenda mark, generated.
 *
 * Per the brand book it is four things fused:
 *   Central core     , focus, strength, purpose
 *   Aum resonance    , the "O", primordial sound of creation
 *   Ashoka Chakra    , 24 spokes: movement, progress, righteousness
 *   Candlestick rays , each ray is an OHLC candle: a thin wick with a
 *                       thicker body offset along it (financial intelligence)
 *
 * Drawn rather than shipped as eight PNGs, so every sub-brand lockup comes
 * from one source and stays sharp at any size.
 */

const RAYS = 24;

export function Starburst({
  size = 96,
  accent = "var(--color-navy)",
  core = "var(--color-navy)",
}: {
  size?: number;
  accent?: string;
  core?: string;
}) {
  const c = 100; // viewBox centre
  const rays = Array.from({ length: RAYS }, (_, i) => {
    const angle = (360 / RAYS) * i;
    // Alternating: even rays carry a long accent candle body,
    // odd rays a short one nearer the core.
    const long = i % 2 === 0;
    return { angle, long };
  });

  return (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      role="presentation"
      aria-hidden
    >
      <g>
        {rays.map(({ angle, long }, i) => (
          <g key={i} transform={`rotate(${angle} ${c} ${c})`}>
            {/* wick, hairline, full length */}
            <line
              x1={c}
              y1={c - 26}
              x2={c}
              y2={c - 88}
              stroke={core}
              strokeWidth={1.1}
              strokeLinecap="round"
            />
            {/* candle body */}
            {long ? (
              <rect
                x={c - 3.1}
                y={c - 78}
                width={6.2}
                height={44}
                rx={3.1}
                fill={accent}
              />
            ) : (
              <rect
                x={c - 2.2}
                y={c - 62}
                width={4.4}
                height={16}
                rx={2.2}
                fill={accent}
                opacity={0.92}
              />
            )}
          </g>
        ))}
        {/* central core */}
        <circle cx={c} cy={c} r={13} fill={core} />
      </g>
    </svg>
  );
}
