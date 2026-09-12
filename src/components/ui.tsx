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

/**
 * The small gold eyebrow. Most sections are titled by nothing else, so pass
 * `as="h2"` where that is the case: rendered as a span the section titles were
 * invisible to the document outline, and every vertical page jumped straight
 * from its h1 to the h3s inside its sections. Stays a span for the hero eyebrow
 * (it sits above the h1) and for inline metadata like a leader's role.
 */
export function Label({
  children,
  as: Tag = "span",
  className = "",
}: {
  children: ReactNode;
  as?: "span" | "h2" | "h3";
  className?: string;
}) {
  return <Tag className={`label text-gold ${className}`}>{children}</Tag>;
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
 * between every band stays in proportion at every width. Keep bands on these
 * constants rather than hand-writing padding, or the rhythm drifts apart.
 *
 * These were cut roughly 40%: SECTION was 160px top and bottom at lg, which
 * put 320px of blank space between one section's content and the next. The
 * page read as disconnected rather than spacious. 96px a side gives a 192px
 * gap, which still breathes without losing the thread.
 *
 *                base   sm    md    lg    2xl   3xl
 *  SECTION        56    64    80    96   112   128
 *  BAND           40    48    56    64    80    96
 *  STRIP          40    40    48    56    64    80
 * ---------------------------------------------------------------------- */

/** Major content band. */
export const SECTION_Y = "py-14 sm:py-16 md:py-20 lg:py-24 2xl:py-28 3xl:py-32";

/** Secondary band: closing CTAs and the footer. */
export const BAND_Y = "py-10 sm:py-12 md:py-14 lg:py-16 2xl:py-20 3xl:py-24";

/** Compact strip: the stats bar and the client logos. */
export const STRIP_Y = "py-10 md:py-12 lg:py-14 2xl:py-16 3xl:py-20";

/**
 * Minimum hero height for the inner pages. They all carried 75svh at lg, which
 * reserved 675px for roughly 170px of content, so every one of them opened on a
 * band of empty ivory. These are the values the contact hero already used, which
 * was the one inner hero that read correctly. The home hero keeps 100svh on
 * purpose; heroes with taller content (the vertical pages add two buttons) grow
 * past the floor on their own.
 */
export const HERO_MIN_H = "min-h-[45svh] md:min-h-[50svh] lg:min-h-[55svh]";

/**
 * Page hero. Top padding also clears the fixed header (88px, 100px at 2xl),
 * so it cannot be trimmed as far as the bottom.
 */
export const HERO_Y =
  "pt-28 pb-12 sm:pb-14 md:pt-32 md:pb-16 lg:pt-36 lg:pb-20 2xl:pt-44 2xl:pb-24 3xl:pt-48 3xl:pb-28";

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
    <Reveal className={`flex max-w-3xl flex-col gap-5 ${className}`}>
      {label && <Label>{label}</Label>}
      {/* Steps up to the 34px desktop size instead of overshooting it at `sm`. */}
      <h2 className="text-[1.9rem] leading-[1.14] sm:text-[2rem] md:text-[2.1rem] lg:text-[36px] lg:font-semibold lg:leading-[1.25] 2xl:text-[42px] 3xl:text-[46px]">
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
