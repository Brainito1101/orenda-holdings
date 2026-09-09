import Link from "next/link";
import { Starburst } from "./Starburst";
import { AmbientMark } from "./AmbientMark";

/**
 * Every route other than the home page. This is a demo build; the home
 * page is the deliverable and the rest are held.
 */
export function ComingSoon({
  title,
  note,
  accent = "#265DFE",
}: {
  title: string;
  note?: string;
  accent?: string;
}) {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-ivory px-5 pt-24 sm:px-7">
      <AmbientMark
        size={540}
        stroke={accent}
        opacity={0.16}
        className="pointer-events-none absolute -right-[8%] top-1/2 -translate-y-1/2 md:right-[2%] lg:right-[6%]"
      />
      <div className="relative z-10 mx-auto w-full max-w-[1320px] lg:px-12 2xl:max-w-[1560px] 2xl:px-16 3xl:max-w-[1760px] 3xl:px-20">
        <div className="max-w-2xl">
          <div className="fade-up flex items-center gap-5">
            <Starburst size={30} accent="var(--color-gold)" core="var(--color-navy)" />
            <span className="label text-gold">Coming soon</span>
          </div>

          <h1 className="fade-up d1 mt-8 text-[2.35rem] leading-[1.08] text-navy sm:text-[2.9rem] md:mt-10 md:text-[3.3rem] lg:text-[54px] lg:leading-[1.1] 2xl:text-[64px]">
            {title}
          </h1>

          <div className="fade-up d2 hair draw mt-10 max-w-[120px]" />

          <p className="fade-up d3 mt-10 max-w-md text-[1.05rem] font-light leading-relaxed text-muted">
            {note ??
              "This page is in preparation. The home page is live and shows the direction for the full site."}
          </p>

          <Link
            href="/"
            className="fade-up d4 group mt-10 inline-flex items-center gap-3 py-3 text-sm font-light text-navy md:mt-12"
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
