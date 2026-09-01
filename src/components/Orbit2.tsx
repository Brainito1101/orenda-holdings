"use client";

import { useState } from "react";
import { Starburst } from "@/components/Starburst";
import { Action } from "@/components/ui";
import { VERTICALS, type Vertical } from "@/data/verticals";

export function Orbit2() {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % 8);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + 8) % 8);
  };

  const v = VERTICALS[active];

  return (
    <div className="relative py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,520px)_minmax(0,1fr)] lg:gap-28">
          {/* diagram */}
          <div className="flex justify-center mb-8 sm:mb-0">
            <div
              className="relative aspect-square w-[180px] sm:w-[420px] lg:w-[500px]"
              style={{ ["--r" as string]: "clamp(90px, 30vw, 196px)" }}
            >
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
                  transform: `translateX(-50%) rotate(${active * 45 + 180}deg)`,
                }}
              />

              {/* centre hub */}
              <div className="absolute left-1/2 top-1/2 z-20 flex h-[72px] w-[72px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white sm:h-[84px] sm:w-[84px]">
                <Starburst size={44} accent={v.accent} core="#0a1a2f" />
              </div>

              {/* satellites */}
              {VERTICALS.map((item: Vertical, i: number) => {
                const angle = i * 45;
                const on = i === active;
                return (
                  <button
                    key={item.slug}
                    type="button"
                    onClick={() => setActive(i)}
                    aria-pressed={on}
                    aria-label={item.name}
                    className="absolute left-1/2 top-1/2 z-10 flex h-[52px] w-[52px] items-center justify-center rounded-full border bg-white shadow-lg transition-[border-color,transform] duration-700 ease-[cubic-bezier(.2,.8,.25,1)] sm:h-[62px] sm:w-[62px] cursor-pointer hover:border-black/20 hover:scale-[1.05]"
                    style={{
                      marginLeft: "-26px",
                      marginTop: "-26px",
                      transform: `rotate(${angle}deg) translateY(calc(var(--r) * -1)) rotate(${-angle}deg) scale(${on ? 1.16 : 1})`,
                      borderColor: on ? item.accent : "rgba(0,0,0,.05)",
                    }}
                  >
                    <Starburst
                      size={28}
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
            <div className="flex items-center gap-5 mb-8 sm:mb-12">
              <span className="label font-bold tabular-nums" style={{ color: v.accent }}>
                {String(active + 1).padStart(2, "0")} / 08
              </span>
              <div className="relative h-px flex-1 bg-black/10">
                <div 
                  className="absolute left-0 top-0 h-full transition-all duration-700 ease-out" 
                  style={{ 
                    width: `${((active + 1) / 8) * 100}%`, 
                    background: v.accent 
                  }} 
                />
              </div>
            </div>

            <div className="min-h-[140px] sm:min-h-[160px] animate-in fade-in duration-700" key={active}>
              <h3 className="text-[1.8rem] sm:text-[2.2rem] font-bold leading-[1.05] text-navy lg:text-[34px] lg:font-semibold lg:leading-[1.3] mb-6">
                {v.name}
              </h3>
              <p className="max-w-lg text-[0.95rem] font-light leading-relaxed text-muted mb-8">
                {v.body}
              </p>
            </div>

            <div className="flex items-center gap-4 sm:gap-12 justify-between sm:justify-start mt-4 sm:mt-6 w-full">
              <Action href={`/group/${v.slug}`} variant="outline">
                Explore the Group
              </Action>

              <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                <button 
                  onClick={handlePrev}
                  className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-black/10 hover:border-black/30 transition-colors"
                  aria-label="Previous Vertical"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-180 sm:w-[24px] sm:h-[24px]">
                    <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button 
                  onClick={handleNext}
                  className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-black/10 hover:border-black/30 transition-colors"
                  aria-label="Next Vertical"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-[24px] sm:h-[24px]">
                    <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
