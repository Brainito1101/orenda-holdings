"use client";

import Image from "next/image";
import Link from "next/link";
import { VERTICALS } from "@/data/verticals";

const QUICK_LINKS = [
  { label: "About", href: "/about" },
  { label: "Leadership", href: "/leadership" },
  { label: "Group", href: "/group" },
  { label: "Contact", href: "/#contact" },
];

export function Footer() {
  return (
    <footer className="relative mt-auto overflow-hidden bg-navy-deep text-ivory">
      <div className="relative z-10 mx-auto w-full max-w-[1320px] px-5 sm:px-7 lg:px-12 2xl:max-w-[1560px] 2xl:px-16 3xl:max-w-[1760px] 3xl:px-20">
        <div className="grid gap-12 py-14 sm:py-16 md:gap-14 md:py-20 lg:grid-cols-12 lg:gap-8 lg:py-28 2xl:py-32 3xl:py-36">
          
          {/* Column 1: Brand & Socials */}
          <div className="flex flex-col gap-7 lg:col-span-4">
            <div className="flex items-center gap-4">
              <Link 
                href="/" 
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                aria-label="Orenda Holdings, go to home"
                className="cursor-pointer"
              >
                <Image
                  src="/team/imgs/footer-logo.webp"
                  alt="Orenda Holdings"
                  width={545}
                  height={243}
                  loading="eager"
                  className="h-12 w-auto lg:h-14"
                />
              </Link>
            </div>
            
            <form className="mt-2 flex w-full max-w-[22rem] items-center rounded-full border border-white/10 bg-white/5 p-1 transition-colors focus-within:border-white/30" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full bg-transparent px-5 py-3 text-sm text-white placeholder-white/30 outline-none border-none focus:ring-0 focus:border-transparent focus:outline-none focus-visible:outline-none"
                required
              />
              <button 
                type="submit"
                className="shrink-0 cursor-pointer rounded-full bg-white px-5 py-3 text-sm font-bold text-navy transition-transform hover:scale-105 sm:px-6"
              >
                Subscribe
              </button>
            </form>
            
            {/* Socials */}
            <div className="mt-2 flex gap-4">
              <a href="#" className="flex h-11 w-11 items-center justify-center rounded-full bg-white/5 text-white/60 transition-colors hover:bg-white/10 hover:text-white" aria-label="Instagram">
                <svg className="h-[18px] w-[18px]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="flex h-11 w-11 items-center justify-center rounded-full bg-white/5 text-white/60 transition-colors hover:bg-white/10 hover:text-white" aria-label="Facebook">
                <svg className="h-[18px] w-[18px]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="flex h-11 w-11 items-center justify-center rounded-full bg-white/5 text-white/60 transition-colors hover:bg-white/10 hover:text-white" aria-label="LinkedIn">
                <svg className="h-[18px] w-[18px]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Link Columns */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:col-span-8 lg:flex lg:justify-between lg:pl-16">
            {/* Column 2: Quick Links */}
            <div className="flex flex-col gap-6">
              <h4 className="text-[0.95rem] font-bold tracking-widest text-white uppercase">Quick Links</h4>
              <nav aria-label="Footer Quick Links" className="flex flex-col gap-0.5 lg:gap-5">
                {QUICK_LINKS.map((l) => (
                  <Link
                    key={l.label}
                    href={l.href}
                    className="flex w-fit items-center py-3 text-sm font-normal text-white/60 transition-colors hover:text-white lg:py-0"
                  >
                    {l.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Column 3: Verticals */}
            <div className="flex flex-col gap-6">
              <h4 className="text-[0.95rem] font-bold tracking-widest text-white uppercase">Verticals</h4>
              <nav aria-label="Footer Verticals" className="flex flex-col gap-0.5 lg:gap-5">
                {VERTICALS.map((v) => (
                  <Link
                    key={v.slug}
                    href={`/group/${v.slug}`}
                    className="flex w-fit items-center py-3 text-sm font-normal text-white/60 transition-colors hover:text-white lg:py-0"
                  >
                    {v.name}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Column 4: Legal */}
            <div className="flex flex-col gap-6">
              <h4 className="text-[0.95rem] font-bold tracking-widest text-white uppercase">Legal</h4>
              <nav aria-label="Footer Legal" className="flex flex-col gap-0.5 lg:gap-5">
                {['Disclaimer', 'Terms and Conditions', 'Privacy Policy', 'Cookie Policy'].map((label) => (
                  <Link
                    key={label}
                    href="#"
                    className="flex w-fit items-center py-3 text-sm font-normal text-white/60 transition-colors hover:text-white lg:py-0"
                  >
                    {label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="relative z-10 flex flex-col gap-5 border-t border-white/10 py-6 sm:py-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-4">
            <p className="text-[0.75rem] font-medium text-white/40">
              © {new Date().getFullYear()} Orenda Holdings. All rights reserved.
            </p>
          </div>
          
          <div className="flex flex-wrap items-center gap-6 md:gap-8">
            <p className="text-sm font-normal text-white/50">
              Design by :- <a href="https://brainito.com" target="_blank" rel="noopener noreferrer" className="inline-block py-3 font-bold text-white hover:underline lg:py-0">Brainito INC</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
