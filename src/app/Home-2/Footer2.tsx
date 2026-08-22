"use client";

import Link from "next/link";
import { Starburst } from "@/components/Starburst";

const NAV = [
  { label: "The Group", href: "/group" },
  { label: "For Investors", href: "/investors" },
  { label: "For Founders", href: "/founders" },
  { label: "About", href: "/about" },
  { label: "Our Investments", href: "/investments" },
  { label: "Media", href: "/media" },
  { label: "Contact", href: "/contact" },
];

const LEGAL = [
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
  { label: "Disclaimer", href: "#" },
];

export function Footer2() {
  return (
    <footer className="relative mt-auto overflow-hidden bg-navy-deep text-ivory">
      <div className="relative z-10 mx-auto w-full max-w-[1320px] px-7 lg:px-12">
        <div className="grid gap-14 py-20 lg:grid-cols-12 lg:gap-8 lg:py-24">
          
          {/* Column 1: Brand & Socials */}
          <div className="flex flex-col gap-7 lg:col-span-4">
            <div className="flex items-center gap-4">
              <button 
                type="button" 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
                aria-label="Orenda Holdings, scroll to top"
              >
                <img src="/team/imgs/footer-logo.webp" alt="Orenda Holdings" className="h-12 w-auto lg:h-14" />
              </button>
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
                className="rounded-full bg-white px-6 py-3 text-sm font-bold text-navy transition-transform hover:scale-105"
              >
                Subscribe
              </button>
            </form>
            
            {/* Socials */}
            <div className="mt-2 flex gap-4">
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/60 transition-colors hover:bg-white/10 hover:text-white" aria-label="Instagram">
                <svg className="h-[18px] w-[18px]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/60 transition-colors hover:bg-white/10 hover:text-white" aria-label="Facebook">
                <svg className="h-[18px] w-[18px]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/60 transition-colors hover:bg-white/10 hover:text-white" aria-label="LinkedIn">
                <svg className="h-[18px] w-[18px]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Link Columns */}
          <div className="flex flex-col gap-10 md:flex-row md:justify-between lg:col-span-8 lg:pl-16">
            {/* Column 2: Quick Links */}
            <div className="flex flex-col gap-6">
              <h4 className="text-[0.95rem] font-bold tracking-widest text-white uppercase">Quick Links</h4>
              <nav aria-label="Footer Quick Links" className="flex flex-col gap-5">
                {['About', 'Services', 'Industries', 'Group Companies', 'Careers', 'Contact'].map((label) => (
                  <Link
                    key={label}
                    href="#"
                    className="w-fit text-sm font-normal text-white/60 transition-colors hover:text-white"
                  >
                    {label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Column 3: Verticals */}
            <div className="flex flex-col gap-6">
              <h4 className="text-[0.95rem] font-bold tracking-widest text-white uppercase">Verticals</h4>
              <nav aria-label="Footer Verticals" className="flex flex-col gap-5">
                {['Orenda Advisors', 'Orenda Capital', 'Orenda Finserve', 'Orenda Creative Holdings', 'Orenda Digital', 'Orenda Realtors', 'Orenda Legal', 'Orenda Star Holiday Homes'].map((label) => (
                  <Link
                    key={label}
                    href="#"
                    className="w-fit text-sm font-normal text-white/60 transition-colors hover:text-white"
                  >
                    {label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Column 4: Legal */}
            <div className="flex flex-col gap-6">
              <h4 className="text-[0.95rem] font-bold tracking-widest text-white uppercase">Legal</h4>
              <nav aria-label="Footer Legal" className="flex flex-col gap-5">
                {['Disclaimer', 'Terms and Conditions', 'Privacy Policy', 'Cookie Policy'].map((label) => (
                  <Link
                    key={label}
                    href="#"
                    className="w-fit text-sm font-normal text-white/60 transition-colors hover:text-white"
                  >
                    {label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col gap-6 border-t border-white/10 py-8 md:flex-row md:items-center md:justify-between relative z-10">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-4">
            <p className="text-[0.75rem] font-medium text-white/40">
              © {new Date().getFullYear()} Orenda Holdings. All rights reserved.
            </p>
          </div>
          
          <div className="flex flex-wrap items-center gap-6 md:gap-8">
            <p className="text-sm font-normal text-white/50">
              Design by :- <a href="https://brainito.com" target="_blank" rel="noopener noreferrer" className="font-bold text-white hover:underline">Brainito INC</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
