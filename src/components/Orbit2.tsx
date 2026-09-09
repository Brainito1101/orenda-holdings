"use client";

import { useState } from "react";
import { Starburst } from "@/components/Starburst";
import { Action } from "@/components/ui";
import { VERTICALS, type Vertical } from "@/data/verticals";

/**
 * The orbit is sized by two paired values per breakpoint: the square box
 * (`w-*`) and the satellite radius (`--r`). They must stay in step — a
 * satellite sits at `--r` from the centre, so `--r + halfSatellite` has to fit
 * inside half the box, and the outer ring (2.5 x --r) has to fit inside it too.
 * Driving the radius off the viewport instead let it outgrow the box and push
 * the page sideways on small phones.
 */
const RING = "w-[260px] [--r:100px] sm:w-[360px] sm:[--r:140px] md:w-[430px] md:[--r:168px] lg:w-[500px] lg:[--r:196px] 2xl:w-[560px] 2xl:[--r:220px] 3xl:w-[620px] 3xl:[--r:244px]";
const SATELLITE = "h-12 w-12 sm:h-14 sm:w-14 md:h-[60px] md:w-[60px] lg:h-[62px] lg:w-[62px]";

export function Orbit2() {
  const [active, setActive] = useState(0);
  const count = VERTICALS.length;
  const step = 360 / count;

  const handleNext = () => setActive((prev) => (prev + 1) % count);
  const handlePrev = () => setActive((prev) => (prev - 1 + count) % count);

  const v = VERTICALS[active];

  return (
    <div className="relative py-12 md:py-16 lg:py-24 2xl:py-28 3xl:py-32">
      <div className="grid items-center gap-12 md:gap-16 lg:grid-cols-[minmax(0,520px)_minmax(0,1fr)] lg:gap-20 xl:gap-28 2xl:grid-cols-[minmax(0,580px)_minmax(0,1fr)] 2xl:gap-32 3xl:grid-cols-[minmax(0,640px)_minmax(0,1fr)]">
        {/* diagram */}
        <div className="flex justify-center">
          <div className={`relative aspect-square ${RING}`}>
            <span
              aria-hidden
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-black/10"
              style={{ width: "calc(var(--r) * 2)", height: "calc(var(--r) * 2)" }}
            />
            <span
              aria-hidden
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-black/5"
              style={{ width: "calc(var(--r) * 2.5)", height: "calc(var(--r) * 2.5)" }}
            />

            {/* line to the active satellite */}
            <span
              aria-hidden
              className="absolute left-1/2 top-1/2 transition-transform duration-700 ease-[cubic-bezier(.2,.8,.25,1)]"
              style={{
                width: "1px",
                height: "var(--r)",
                background: `linear-gradient(to bottom, transparent, ${v.accent})`,
                transformOrigin: "top center",
                transform: `translateX(-50%) rotate(${active * step + 180}deg)`,
              }}
            />

            {/* centre hub */}
            <div className="absolute left-1/2 top-1/2 z-20 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white sm:h-20 sm:w-20 lg:h-[84px] lg:w-[84px]">
              <Starburst size={44} accent={v.accent} core="#0a1a2f" />
            </div>

            {/* satellites */}
            {VERTICALS.map((item: Vertical, i: number) => {
              const angle = i * step;
              const on = i === active;
              return (
                <button
                  key={item.slug}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-pressed={on}
                  aria-label={item.name}
                  className={`absolute left-1/2 top-1/2 z-10 flex ${SATELLITE} cursor-pointer items-center justify-center rounded-full border bg-white shadow-lg transition-[border-color,transform] duration-700 ease-[cubic-bezier(.2,.8,.25,1)] hover:scale-[1.05] hover:border-black/20`}
                  style={{
                    // -50%/-50% centres the satellite whatever its size is at this
                    // breakpoint, then the rotate/translate pair swings it out to
                    // the radius and counter-rotates so the mark stays upright.
                    transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(calc(var(--r) * -1)) rotate(${-angle}deg) scale(${on ? 1.16 : 1})`,
                    borderColor: on ? item.accent : "rgba(0,0,0,.05)",
                  }}
                >
                  <Starburst
                    size={26}
                    accent={on ? item.accent : "rgba(10,26,47,.4)"}
                    core={on ? "#0a1a2f" : "rgba(10,26,47,.4)"}
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* reading pane */}
        <div>
          <div className="mb-8 flex items-center gap-5 sm:mb-10">
            <span className="label font-bold tabular-nums" style={{ color: v.accent }}>
              {String(active + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
            </span>
            <div className="relative h-px flex-1 bg-black/10">
              <div
                className="absolute left-0 top-0 h-full transition-all duration-700 ease-out"
                style={{ width: `${((active + 1) / count) * 100}%`, background: v.accent }}
              />
            </div>
          </div>

          <div className="min-h-[150px] sm:min-h-[160px]" key={active}>
            <h3 className="mb-5 text-[1.6rem] font-bold leading-[1.12] text-navy sm:text-[1.85rem] md:text-[2rem] lg:text-[34px] lg:font-semibold lg:leading-[1.3] 2xl:text-[40px] 3xl:text-[44px]">
              {v.name}
            </h3>
            <p className="max-w-lg text-[0.95rem] font-light leading-relaxed text-muted">
              {v.body}
            </p>
          </div>

          <div className="mt-6 flex w-full items-center justify-between gap-4 sm:justify-start sm:gap-12">
            <Action href={`/group/${v.slug}`} variant="outline">
              Explore the Group
            </Action>

            <div className="flex shrink-0 items-center gap-2 sm:gap-3">
              <button
                type="button"
                onClick={handlePrev}
                className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-black/10 transition-colors hover:border-black/30 sm:h-12 sm:w-12"
                aria-label="Previous vertical"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="rotate-180" aria-hidden>
                  <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-black/10 transition-colors hover:border-black/30 sm:h-12 sm:w-12"
                aria-label="Next vertical"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
