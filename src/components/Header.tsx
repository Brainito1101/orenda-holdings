"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV = [
  { label: "About", href: "/about" },
  { label: "Leadership", href: "/leadership" },
  { label: "Group", href: "/group" },
  { label: "Contact", href: "/#contact" },
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  /**
   * The mobile menu records the route it was opened on rather than a plain
   * boolean, so navigating away closes it by derivation. A route change makes
   * `menuPath` stale and `open` false on the next render, with no effect and
   * no setState needed to reset it.
   */
  const [menuPath, setMenuPath] = useState<string | null>(null);
  const open = menuPath === pathname;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 flex flex-col ${
        scrolled ? "bg-white/90 backdrop-blur-xl shadow-md border-b border-transparent" : "bg-white border-b border-black/10"
      }`}
    >

      <div className="mx-auto flex h-[88px] w-full max-w-[1320px] items-center justify-between px-5 sm:px-7 lg:px-12 2xl:h-[100px] 2xl:max-w-[1560px] 2xl:px-16 3xl:max-w-[1760px] 3xl:px-20">
        <Link 
          href="/"
          onClick={(e) => {
            if (pathname === "/" || pathname === "/#home") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          aria-label="Orenda Holdings, go to home" 
          className="flex items-center cursor-pointer"
        >
          <Image
            src="/team/imgs/web-logo (2).webp"
            alt="Orenda Holdings"
            width={545}
            height={243}
            loading="eager"
            className="h-11 w-auto sm:h-14 lg:h-16 2xl:h-[72px]"
          />
        </Link>

        <nav className="hidden items-center gap-6 md:flex lg:gap-9 2xl:gap-12" aria-label="Primary">
          {NAV.map((n) => {
            const active = pathname === n.href;
            return (
              <Link
                key={n.label}
                href={n.href}
                className={`group relative py-1 text-[0.82rem] font-medium tracking-wide transition-colors duration-300 2xl:text-[0.9rem] ${
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
          onClick={() => setMenuPath((v) => (v === pathname ? null : pathname))}
          className="-mr-2 flex h-11 w-11 cursor-pointer items-center justify-center text-navy md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? (
            <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden>
              <path d="M5 5L17 17M17 5L5 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="22" height="12" viewBox="0 0 22 12" aria-hidden>
              <path d="M0 1h22M0 11h22" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <div className="h-[calc(100dvh-88px)] overflow-y-auto overscroll-contain bg-ivory px-5 sm:px-7 md:hidden">
          <nav className="flex flex-col pt-6" aria-label="Mobile">
            {NAV.map((n) => (
              <Link
                key={n.label}
                href={n.href}
                className="flex items-center justify-between border-b border-line py-5 font-sans text-xl font-medium text-navy sm:text-2xl"
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
