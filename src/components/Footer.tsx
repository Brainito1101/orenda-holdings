"use client";

import Image from "next/image";
import { useActionState } from "react";
import { subscribeNewsletter } from "@/app/actions";
import { FacebookIcon, InstagramIcon, LinkedInIcon } from "@/components/icons";
import Link from "next/link";
import { VERTICALS } from "@/data/verticals";
import { SOCIAL_LINKS } from "@/data/site";

/** Maps each social account to its glyph. Keys match `SOCIAL_LINKS` labels. */
const SOCIAL_ICONS = {
  Instagram: InstagramIcon,
  Facebook: FacebookIcon,
  LinkedIn: LinkedInIcon,
} as const;

const QUICK_LINKS = [
  { label: "About", href: "/about" },
  { label: "Leadership", href: "/leadership" },
  { label: "Group", href: "/group" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  const [subscribed, subscribeAction, subscribing] = useActionState(subscribeNewsletter, null);

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
            
            {subscribed?.ok ? (
              <p
                role="status"
                className="mt-2 flex w-full max-w-[22rem] items-center rounded-full border border-white/20 bg-white/5 px-5 py-3.5 text-sm text-white/80"
              >
                Thank you — you&rsquo;re on the list.
              </p>
            ) : (
              <div className="mt-2 w-full max-w-[22rem]">
                <form
                  action={subscribeAction}
                  className="flex w-full items-center rounded-full border border-white/10 bg-white/5 p-1 transition-colors focus-within:border-white/30"
                >
                  <label htmlFor="newsletter-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="newsletter-email"
                    type="email"
                    name="email"
                    placeholder="Email address"
                    autoComplete="email"
                    maxLength={254}
                    className="w-full bg-transparent px-5 py-3 text-sm text-white placeholder-white/30 outline-none border-none focus:ring-0 focus:border-transparent focus:outline-none focus-visible:outline-none"
                    required
                  />
                  <button
                    type="submit"
                    disabled={subscribing}
                    className="shrink-0 cursor-pointer rounded-full bg-white px-5 py-3 text-sm font-bold text-navy transition-transform hover:scale-105 disabled:cursor-not-allowed disabled:opacity-60 sm:px-6"
                  >
                    {subscribing ? "Saving…" : "Subscribe"}
                  </button>
                </form>
                {subscribed && !subscribed.ok && (
                  <p role="alert" className="mt-2 px-5 text-[0.8rem] text-[#ff9d9d]">
                    {subscribed.error}
                  </p>
                )}
              </div>
            )}
            
            {/* Socials */}
            <div className="mt-2 flex gap-4">
              {SOCIAL_LINKS.map(({ label, href }) => {
                const Icon = SOCIAL_ICONS[label];
                return (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Orenda Holdings on ${label} (opens in a new tab)`}
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-white/5 text-white/60 transition-colors hover:bg-white/10 hover:text-white"
                  >
                    <Icon />
                  </a>
                );
              })}
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
