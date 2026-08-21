"use client";

import { useState } from "react";
import Link from "next/link";
import { Starburst } from "./Starburst";
import { VERTICALS } from "@/data/verticals";

/**
 * Eight satellites at 45 degree steps, placed by pure CSS:
 *   rotate(angle) then translateY(-radius) then rotate(-angle)
 * The counter-rotation keeps each mark upright.
 *
 * Held back deliberately: hairline rings, marks in a single tone, and
 * colour introduced only on the vertical currently being read.
 */
export function Orbit() {
  const [active, setActive] = useState(0);
  const v = VERTICALS[active];

  return (
    <div className="grid items-center gap-20 lg:grid-cols-[minmax(0,520px)_minmax(0,1fr)] lg:gap-28">
      {/* diagram */}
      <div className="flex justify-center">
        <div
          className="relative aspect-square w-[300px] sm:w-[420px] lg:w-[500px]"
          style={{ ["--r" as string]: "clamp(118px, 34vw, 196px)" }}
        >
          <span
            aria-hidden
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.09]"
            style={{ width: "calc(var(--r) * 2)", height: "calc(var(--r) * 2)" }}
          />
          <span
            aria-hidden
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.05]"
            style={{ width: "calc(var(--r) * 2.5)", height: "calc(var(--r) * 2.5)" }}
          />

          {/* line to the active satellite */}
          <span
            aria-hidden
            className="absolute left-1/2 top-1/2 transition-transform duration-[900ms] ease-[cubic-bezier(.2,.8,.25,1)]"
            style={{
              width: "1px",
              height: "var(--r)",
              background: `linear-gradient(to bottom, transparent, ${v.accent})`,
              transformOrigin: "top center",
              transform: `translateX(-50%) rotate(${active * 45 + 180}deg)`,
            }}
          />

          {/* centre */}
          <div className="absolute left-1/2 top-1/2 z-20 flex h-[92px] w-[92px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/12 bg-navy-deep sm:h-[112px] sm:w-[112px]">
            <Starburst size={40} accent="var(--color-gold-light)" core="#ffffff" />
          </div>

          {/* satellites */}
          {VERTICALS.map((item, i) => {
            const angle = i * 45;
            const on = i === active;
            return (
              <button
                key={item.slug}
                type="button"
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                aria-pressed={on}
                aria-label={item.name}
                className="absolute left-1/2 top-1/2 z-10 flex h-[52px] w-[52px] items-center justify-center rounded-full border bg-navy-deep transition-[border-color,transform] duration-700 ease-[cubic-bezier(.2,.8,.25,1)] sm:h-[62px] sm:w-[62px]"
                style={{
                  marginLeft: "-26px",
                  marginTop: "-26px",
                  transform: `rotate(${angle}deg) translateY(calc(var(--r) * -1)) rotate(${-angle}deg) scale(${on ? 1.16 : 1})`,
                  borderColor: on ? item.accent : "rgba(255,255,255,.13)",
                }}
              >
                <Starburst
                  size={28}
                  accent={on ? item.accent : "rgba(255,255,255,.4)"}
                  core={on ? "#ffffff" : "rgba(255,255,255,.4)"}
                />
              </button>
            );
          })}
        </div>
      </div>

      {/* reading pane */}
      <div>
        <div className="flex items-center gap-5">
          <span className="label text-white/30 tabular-nums">
            {String(active + 1).padStart(2, "0")} / 08
          </span>
          <span className="h-px flex-1" style={{ background: v.accent, opacity: 0.5 }} />
        </div>

        <h3 key={v.slug} className="fade-up mt-8 text-[2.3rem] leading-[1.05] text-white lg:text-[3.2rem]">
          {v.name}
        </h3>

        <p key={`${v.slug}-p`} className="fade-up d1 mt-6 max-w-lg text-[1.05rem] font-light leading-relaxed text-white/50">
          {v.body}
        </p>

        <Link
          href="/group"
          className="group mt-12 inline-flex items-center gap-3 text-sm font-light text-white/70 transition-colors hover:text-white"
        >
          Explore the Group
          <span aria-hidden className="transition-transform duration-500 group-hover:translate-x-1.5">
            &rarr;
          </span>
        </Link>
      </div>
    </div>
  );
}
