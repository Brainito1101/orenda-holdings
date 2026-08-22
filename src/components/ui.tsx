import Link from "next/link";
import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`mx-auto w-full max-w-[1320px] px-7 lg:px-12 ${className}`}>{children}</div>
  );
}

export function Label({ children, tone = "gold", className = "" }: { children: ReactNode; tone?: "gold" | "muted" | "light"; className?: string }) {
  const tones = { gold: "text-gold", muted: "text-faint", light: "text-white/35" } as const;
  return <span className={`label ${tones[tone]} ${className}`}>{children}</span>;
}

/** Understated link-style action. Luxury does not shout. */
export function Action({
  href,
  children,
  variant = "line",
  invert = false,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "line" | "outline" | "solid";
  invert?: boolean;
  className?: string;
}) {
  if (variant === "solid") {
    return (
      <Link
        href={href}
        className={`group inline-flex whitespace-nowrap items-center justify-center gap-3.5 rounded-full px-4 sm:px-8 py-3 sm:py-4 text-sm font-light transition-colors duration-500 ${
          invert
            ? "bg-white text-navy hover:bg-white/90"
            : "bg-navy text-ivory hover:bg-navy/90"
        } ${className}`}
      >
        {children}
        <span aria-hidden className="transition-transform duration-500 group-hover:translate-x-1.5">
          &rarr;
        </span>
      </Link>
    );
  }

  if (variant === "outline") {
    return (
      <Link
        href={href}
        className={`group inline-flex whitespace-nowrap items-center justify-center gap-3.5 rounded-full border px-4 sm:px-8 py-3 sm:py-4 text-sm font-light transition-colors duration-500 ${
          invert
            ? "border-white/25 text-white hover:border-white hover:text-white hover:bg-transparent"
            : "border-navy/25 text-navy hover:border-[#09767C] hover:text-[#09767C] hover:bg-transparent"
        } ${className}`}
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
      className={`group inline-flex items-center gap-3 pb-1.5 text-sm font-light transition-colors duration-500 ${
        invert ? "text-white/70 hover:text-white" : "text-navy hover:text-gold"
      }`}
    >
      <span className="relative">
        {children}
        <span
          className={`absolute -bottom-1 left-0 h-px w-full origin-left scale-x-100 transition-transform duration-500 group-hover:scale-x-0 ${
            invert ? "bg-white/30" : "bg-navy/25"
          }`}
        />
        <span
          className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-gold transition-transform duration-500 group-hover:scale-x-100"
        />
      </span>
      <span aria-hidden className="transition-transform duration-500 group-hover:translate-x-1.5">
        &rarr;
      </span>
    </Link>
  );
}

export function Section({
  children,
  tone = "ivory",
  id,
  className = "",
}: {
  children: ReactNode;
  tone?: "ivory" | "white" | "navy" | "deep";
  id?: string;
  className?: string;
}) {
  const tones = {
    ivory: "bg-ivory",
    white: "bg-white",
    navy: "bg-navy",
    deep: "bg-navy-deep text-white",
  } as const;
  return (
    <section id={id} className={`${tones[tone]} py-28 lg:py-40 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

export function SectionHead({
  label,
  title,
  lede,
  tone = "dark",
  className = "",
}: {
  label?: string;
  title: ReactNode;
  lede?: string;
  tone?: "dark" | "light";
  className?: string;
}) {
  const light = tone === "light";
  return (
    <Reveal className={`flex max-w-3xl flex-col gap-7 ${className}`}>
      {label && <Label tone={light ? "light" : "gold"}>{label}</Label>}
      <h2 className={`text-[2.4rem] leading-[1.04] sm:text-[3.2rem] lg:text-[4rem] ${light ? "text-white" : ""}`}>
        {title}
      </h2>
      {lede && (
        <p className={`max-w-xl text-[1.05rem] font-light leading-relaxed ${light ? "text-white/45" : "text-muted"}`}>
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
