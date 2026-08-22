"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Starburst } from "@/components/Starburst";
import { Action } from "@/components/ui";
import { VERTICALS } from "@/data/verticals";

export function Orbit2() {
  const [active, setActive] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const scrollableDistance = rect.height - window.innerHeight;
      
      let progress = -rect.top / scrollableDistance;
      progress = Math.max(0, Math.min(1, progress));
      
      const index = Math.min(7, Math.floor(progress * 8));
      
      if (index !== active) {
        setActive(index);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [active]);

  const v = VERTICALS[active];

  return (
    <div ref={containerRef} className="relative h-[400vh]">
      <div className="sticky top-0 flex h-[100svh] flex-col justify-center overflow-hidden pt-36 pb-10">
        <div className="grid items-center gap-16 lg:grid-cols-[minmax(0,520px)_minmax(0,1fr)] lg:gap-28">
          {/* diagram */}
          <div className="flex justify-center">
            <div
              className="relative aspect-square w-[220px] sm:w-[420px] lg:w-[500px]"
              style={{ ["--r" as string]: "clamp(100px, 34vw, 196px)" }}
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
              {VERTICALS.map((item, i) => {
                const angle = i * 45;
                const on = i === active;
                return (
                  <button
                    key={item.slug}
                    type="button"
                    aria-pressed={on}
                    aria-label={item.name}
                    className="absolute left-1/2 top-1/2 z-10 flex h-[52px] w-[52px] items-center justify-center rounded-full border bg-white shadow-lg transition-[border-color,transform] duration-700 ease-[cubic-bezier(.2,.8,.25,1)] sm:h-[62px] sm:w-[62px]"
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
            <div className="flex items-center gap-5 my-8 sm:my-0">
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

            <div className="grid mt-8">
              {VERTICALS.map((item, i) => {
                const on = i === active;
                return (
                  <div 
                    key={item.slug} 
                    className={`col-start-1 row-start-1 transition-opacity duration-700 ${on ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}
                  >
                    <h3 className="text-[2.2rem] font-bold leading-[1.05] text-navy lg:text-[3.5rem]">
                      {item.name}
                    </h3>
                    <p className="mt-4 max-w-lg text-[0.95rem] font-light leading-relaxed text-muted lg:mt-5">
                      {item.body}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-4">
              <Action href="#" variant="outline">
                Explore the Group
              </Action>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
