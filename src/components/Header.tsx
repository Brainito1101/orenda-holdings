"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Starburst } from "@/components/Starburst";

const NAV = [
  { label: "The Group", href: "#" },
  { label: "For Investors", href: "#" },
  { label: "For Founders", href: "#" },
  { label: "About", href: "#" },
  { label: "Our Investments", href: "#" },
  { label: "Media", href: "#" },
  { label: "Contact", href: "#" },
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const home = pathname === "/Home-2" || pathname === "/";

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
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 flex flex-col ${
        scrolled ? "bg-white/90 backdrop-blur-xl shadow-md border-b border-transparent" : "bg-white border-b border-black/10"
      }`}
    >

      <div className="mx-auto flex h-[88px] w-full max-w-[1320px] items-center justify-between px-7 lg:px-12">
        <button 
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Orenda Holdings, scroll to top" 
          className="flex items-center"
        >
          <img src="/team/imgs/web-logo (2).webp" alt="Orenda Holdings" className="h-14 lg:h-16 w-auto" />
        </button>

        <nav className="hidden items-center gap-9 lg:flex" aria-label="Primary">
          {NAV.map((n) => {
            const active = pathname === n.href;
            return (
              <Link
                key={n.href}
                href={n.href}
                className={`group relative py-1 text-[0.82rem] font-medium tracking-wide transition-colors duration-300 ${
                  active ? "text-navy" : "text-navy/75 hover:text-navy"
                }`}
              >
                {n.label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-px w-full origin-left bg-navy transition-transform duration-500 ${
                    active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
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
              <path d="M4 1L18 11M18 1L4 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M0 1h22M0 11h22" stroke="currentColor" strokeWidth="1.5" />
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
                className="flex items-center justify-between border-b border-line py-5 font-sans font-medium text-2xl text-navy"
              >
                {n.label}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M5 12h14m-7-7l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
