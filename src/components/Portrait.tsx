"use client";

import Image from "next/image";
import { useState } from "react";

const initials = (n: string) =>
  n
    .replace(/^(CS|CA|Dr\.?|Adv\.?)\s+/i, "")
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

/**
 * A headshot when the file exists in /public/team, and a light monogram
 * panel when it does not. The fallback is deliberately quiet so an
 * unphotographed page still reads as finished rather than as a gap.
 */
export function Portrait({
  name,
  photo,
  className = "",
  rounded = "rounded-none",
  sizes = "(max-width: 768px) 100vw, 380px",
}: {
  name: string;
  photo?: string;
  className?: string;
  rounded?: string;
  sizes?: string;
}) {
  const [failed, setFailed] = useState(false);
  const show = photo && !failed;

  return (
    <div className={`relative overflow-hidden ${rounded} ${className}`}>
      {show ? (
        <Image
          src={photo}
          alt={name}
          fill
          sizes={sizes}
          className="object-cover object-top grayscale transition-all duration-[1400ms] group-hover:grayscale-0"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className={`absolute inset-0 border border-black/10 bg-white ${rounded}`} aria-hidden>
          <svg
            viewBox="0 0 200 200"
            className="absolute left-1/2 top-1/2 h-[78%] w-[78%] -translate-x-1/2 -translate-y-1/2"
            style={{ opacity: 0.28 }}
          >
            {Array.from({ length: 24 }, (_, i) => (
              <g key={i} transform={`rotate(${i * 15} 100 100)`}>
                <line
                  x1="100"
                  y1="66"
                  x2="100"
                  y2="16"
                  stroke="var(--color-gold)"
                  strokeWidth="0.4"
                />
                {i % 2 === 0 && (
                  <rect
                    x="98.7"
                    y="28"
                    width="2.6"
                    height="30"
                    rx="1.3"
                    fill="none"
                    stroke="var(--color-gold)"
                    strokeWidth="0.4"
                  />
                )}
              </g>
            ))}
            <circle cx="100" cy="100" r="58" fill="none" stroke="var(--color-gold)" strokeWidth="0.35" />
          </svg>
          <span className="absolute inset-0 flex items-center justify-center font-display text-[2.4rem] tracking-[0.12em] text-navy/70">
            {initials(name)}
          </span>
        </div>
      )}
    </div>
  );
}
