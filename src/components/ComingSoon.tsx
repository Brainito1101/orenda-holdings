import Link from "next/link";
import { Starburst } from "./Starburst";

/**
 * Every route other than the home page. This is a demo build; the home
 * page is the deliverable and the rest are held.
 */
export function ComingSoon({ title, note }: { title: string; note?: string }) {
  return (
    <section className="flex min-h-[100svh] items-center bg-ivory px-7 pt-24">
      <div className="mx-auto w-full max-w-[1320px] lg:px-12">
        <div className="max-w-2xl">
          <div className="fade-up flex items-center gap-5">
            <Starburst size={30} accent="var(--color-gold)" core="var(--color-navy)" />
            <span className="label text-gold">Coming soon</span>
          </div>

          <h1 className="fade-up d1 mt-10 text-[3rem] leading-[1] text-navy sm:text-[4.5rem]">
            {title}
          </h1>

          <div className="fade-up d2 hair draw mt-10 max-w-[120px]" />

          <p className="fade-up d3 mt-10 max-w-md text-[1.05rem] font-light leading-relaxed text-muted">
            {note ??
              "This page is in preparation. The home page is live and shows the direction for the full site."}
          </p>

          <Link
            href="/"
            className="fade-up d4 group mt-12 inline-flex items-center gap-3 text-sm font-light text-navy"
          >
            <span aria-hidden className="transition-transform duration-500 group-hover:-translate-x-1">
              &larr;
            </span>
            Return home
          </Link>
        </div>
      </div>
    </section>
  );
}
