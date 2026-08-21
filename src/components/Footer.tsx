import Link from "next/link";
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

const LEGAL = [
  { label: "Privacy", href: "/legal/privacy" },
  { label: "Terms", href: "/legal/terms" },
  { label: "Disclaimer", href: "/legal/disclaimer" },
];

export function Footer() {
  return (
    <footer className="mt-auto bg-navy-deep text-ivory">
      <div className="mx-auto w-full max-w-[1320px] px-7 lg:px-12">
        <div className="grid gap-14 py-20 lg:grid-cols-12 lg:py-24">
          <div className="flex flex-col gap-7 lg:col-span-5">
            <div className="flex items-center gap-4">
              <Starburst size={40} accent="var(--color-gold-light)" core="#ffffff" />
              <span className="flex flex-col leading-none">
                <span className="text-[1.1rem] font-normal tracking-[0.16em] text-white">ORENDA</span>
                <span className="label mt-1.5 text-[0.55rem] text-gold-light">Holdings</span>
              </span>
            </div>
            <p className="max-w-xs text-[0.95rem] font-light leading-relaxed text-white/45">
              The force behind enterprise.
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-col gap-4 lg:col-span-4">
            {NAV.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="w-fit text-sm font-light text-white/50 transition-colors hover:text-white"
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-4 lg:col-span-3">
            <span className="label text-white/30">Ahmedabad, India</span>
            <a
              href="mailto:inquiry@orendagroup.in"
              className="w-fit text-sm font-light text-white/50 transition-colors hover:text-gold-light"
            >
              inquiry@orendagroup.in
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 py-8 md:flex-row md:items-center md:justify-between">
          <p className="label text-white/25">
            © {new Date().getFullYear()} Orenda Holdings
          </p>
          <div className="flex gap-8">
            {LEGAL.map((l) => (
              <Link key={l.href} href={l.href} className="label text-white/25 transition-colors hover:text-white/60">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
