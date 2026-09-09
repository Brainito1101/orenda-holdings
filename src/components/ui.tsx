import Link from "next/link";
import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

/**
 * The one container width for the whole site — shared with the header and
 * footer bars so they stay aligned with page content at every width.
 *
 *          max-width   gutter   content
 *  base      1320        20      ~280+
 *  lg        1320        48       1224
 *  2xl       1560        64       1432
 *  3xl       1760        80       1600
 */
export const CONTAINER_W =
  "max-w-[1320px] px-5 sm:px-7 lg:px-12 2xl:max-w-[1560px] 2xl:px-16 3xl:max-w-[1760px] 3xl:px-20";

/** Site container. */
export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`mx-auto w-full ${CONTAINER_W} ${className}`}>{children}</div>
  );
}

export function Label({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <span className={`label text-gold ${className}`}>{children}</span>;
}

/** Understated link-style action. Luxury does not shout. */
export function Action({
  href,
  children,
  variant = "outline",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "outline" | "solid";
  className?: string;
}) {
  if (variant === "solid") {
    return (
      <Link
        href={href}
        className={`group inline-flex whitespace-nowrap items-center justify-center gap-3.5 rounded-full px-4 sm:px-8 py-3 sm:py-4 text-sm font-light transition-colors duration-500 bg-navy text-ivory hover:bg-navy/90 ${className}`}
      >
        {children}
        <span aria-hidden className="transition-transform duration-500 group-hover:translate-x-1.5">
          &rarr;
        </span>
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className={`group inline-flex whitespace-nowrap items-center justify-center gap-3.5 rounded-full border px-4 sm:px-8 py-3 sm:py-4 text-sm font-light transition-colors duration-500 border-navy/25 text-navy hover:border-[#09767C] hover:text-[#09767C] hover:bg-transparent ${className}`}
    >
      {children}
      <span aria-hidden className="transition-transform duration-500 group-hover:translate-x-1.5">
        &rarr;
      </span>
    </Link>
  );
}

export function Section({
  children,
  tone = "ivory",
  className = "",
}: {
  children: ReactNode;
  tone?: "ivory" | "white";
  className?: string;
}) {
  const tones = {
    ivory: "bg-ivory",
    white: "bg-white",
  } as const;
  return (
    <section className={`${tones[tone]} ${SECTION_Y} ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

/* ------------------------------------------------------------------------
 * Vertical rhythm.
 *
 * Four tiers, each stepping through the same six breakpoints, so the spacing
 * between every band stays in proportion at every width instead of any one
 * band flattening out on large screens. Keep bands on these constants rather
 * than hand-writing padding, or the rhythm drifts apart again.
 *
 *                base   sm    md    lg    2xl   3xl
 *  SECTION        80    96   112   160   192   224
 *  BAND           56    64    80   112   128   144
 *  STRIP          48    48    56    64    80    96
 * ---------------------------------------------------------------------- */

/** Major content band. */
export const SECTION_Y = "py-20 sm:py-24 md:py-28 lg:py-40 2xl:py-48 3xl:py-56";

/** Secondary band: closing CTAs and the footer. */
export const BAND_Y = "py-14 sm:py-16 md:py-20 lg:py-28 2xl:py-32 3xl:py-36";

/** Compact strip: the stats bar. */
export const STRIP_Y = "py-12 md:py-14 lg:py-16 2xl:py-20 3xl:py-24";

/** Page hero. Top padding also clears the fixed header (88px, 100px at 2xl). */
export const HERO_Y =
  "pt-28 pb-14 sm:pb-16 md:pt-32 lg:pt-36 lg:pb-24 2xl:pt-44 2xl:pb-28 3xl:pt-48 3xl:pb-32";

export function SectionHead({
  label,
  title,
  lede,
  className = "",
}: {
  label?: string;
  title: ReactNode;
  lede?: string;
  className?: string;
}) {
  return (
    <Reveal className={`flex max-w-3xl flex-col gap-7 ${className}`}>
      {label && <Label>{label}</Label>}
      {/* Steps up to the 34px desktop size instead of overshooting it at `sm`. */}
      <h2 className="text-[1.9rem] leading-[1.14] sm:text-[2rem] md:text-[2.1rem] lg:text-[34px] lg:font-semibold lg:leading-[1.3] 2xl:text-[40px] 3xl:text-[44px]">
        {title}
      </h2>
      {lede && (
        <p className="max-w-xl text-[1.05rem] font-light leading-relaxed text-muted">
          {lede}
        </p>
      )}
    </Reveal>
  );
}

/** Marks demo content. Deliberately visible. */
export function SampleTag() {
  return (
    <span className="border rounded-full px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-widest" style={{ color: "#09767C", borderColor: "rgba(9, 118, 124, 0.4)" }}>
      Sample
    </span>
  );
}
