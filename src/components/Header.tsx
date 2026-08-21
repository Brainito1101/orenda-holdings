"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Starburst } from "./Starburst";

const NAV = [
  { label: "The Group", href: "/group" },
  { label: "For Investors", href: "/investors" },
  { label: "For Founders", href: "/founders" },
  { label: "About", href: "/about" },
  { label: "Our Investments", href: "/investments" },
  { label: "Media", href: "/media" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const home = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const onLight = !home || scrolled;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
        scrolled ? "bg-ivory/90 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div
        className={`hair absolute inset-x-0 bottom-0 transition-opacity duration-700 ${
          scrolled ? "opacity-100" : "opacity-0"
        }`}
      />
      <div className="mx-auto flex h-[88px] w-full max-w-[1320px] items-center justify-between px-7 lg:px-12">
        <Link href="/" aria-label="Orenda Holdings, home" className="flex items-center gap-3.5">
          <Starburst size={30} accent="var(--color-gold)" core="var(--color-navy)" />
          <span className="flex flex-col leading-none">
            <span className="font-sans text-[0.95rem] font-normal tracking-[0.16em] text-navy">
              ORENDA
            </span>
            <span className="label mt-1 text-[0.5rem] text-gold">Holdings</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-9 lg:flex" aria-label="Primary">
          {NAV.map((n) => {
            const active = pathname === n.href;
            return (
              <Link
                key={n.href}
                href={n.href}
                className={`relative py-1 text-[0.82rem] font-light tracking-wide transition-colors duration-300 ${
                  active ? "text-navy" : "text-muted hover:text-navy"
                }`}
              >
                {n.label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-px w-full origin-left bg-gold transition-transform duration-500 ${
                    active ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center text-navy lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <svg width="22" height="12" viewBox="0 0 22 12" aria-hidden>
            {open ? (
              <path d="M2 1l18 10M20 1L2 11" stroke="currentColor" strokeWidth="1" />
            ) : (
              <path d="M0 1h22M0 11h22" stroke="currentColor" strokeWidth="1" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="h-[calc(100dvh-88px)] bg-ivory px-7 lg:hidden">
          <nav className="flex flex-col pt-6" aria-label="Mobile">
            {NAV.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="border-b border-line py-5 font-display text-2xl text-navy"
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
