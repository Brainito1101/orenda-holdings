import type { Metadata } from "next";
import Link from "next/link";
import { Container, Label, Section } from "@/components/ui";
import { AmbientMark } from "@/components/AmbientMark";
import { Starburst } from "@/components/Starburst";
import { Reveal } from "@/components/Reveal";
import { VERTICALS } from "@/data/verticals";

export const metadata: Metadata = {
  title: "Group",
  description:
    "Eight companies, one parent logic. Orenda Advisors structures, Orenda Capital funds, Orenda Financial Services lends, Orenda Realtors builds, Orenda Legal protects, Orenda Digital grows.",
};

export default function GroupPage() {
  return (
    <div className="flex flex-col">
      <header className="relative flex min-h-[65svh] lg:min-h-[75svh] items-center overflow-hidden bg-ivory pt-28 pb-16 lg:pt-36 lg:pb-24">
        <AmbientMark
          size={520}
          stroke="#00AAC6"
          opacity={0.2}
          className="pointer-events-none absolute -right-[10%] top-1/2 -translate-y-1/2 md:right-[2%] lg:right-[6%]"
        />
        <Container className="relative w-full">
          <Reveal>
            <Label>Group</Label>
            <h1 className="mt-6 max-w-3xl text-[2.6rem] leading-[1.05] text-navy sm:text-[3.6rem] lg:text-[54px] lg:leading-[1.1]">
              Eight companies. One group.
            </h1>
            <p className="mt-8 max-w-2xl text-[1.05rem] font-normal leading-relaxed text-muted">
              Each Orenda company has a clear role. Together, they cover the full journey
              from advice to asset - structuring capital, lending, building, protecting and
              growing.
            </p>
          </Reveal>
        </Container>
      </header>

      <Section tone="white" className="border-t border-black/10">
        <div className="border-t border-black/10">
          {VERTICALS.map((v, i) => (
            <Reveal key={v.slug} delay={i * 60}>
              <Link
                href={`/group/${v.slug}`}
                className="group grid items-center gap-4 border-b border-black/10 py-9 transition-colors duration-500 hover:bg-ivory lg:grid-cols-12 lg:gap-8 lg:py-11"
              >
                <div className="flex items-center gap-4 lg:col-span-1">
                  <span className="label text-faint tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <div className="flex items-center gap-4 lg:col-span-6">
                  <Starburst size={28} accent={v.accent} core="var(--color-navy)" />
                  <h3 className="text-[1.5rem] leading-tight lg:text-[1.8rem]">{v.name}</h3>
                  {v.pending && (
                    <span
                      className="shrink-0 whitespace-nowrap border rounded-full px-3 py-1 text-[0.65rem] font-bold uppercase tracking-widest leading-none"
                      style={{ color: v.accent, borderColor: v.accent + "66" }}
                    >
                      Coming soon
                    </span>
                  )}
                </div>
                <p className="text-sm font-normal text-muted lg:col-span-4">{v.body}</p>
                <span aria-hidden className="hidden text-navy/40 transition-transform duration-500 group-hover:translate-x-1.5 group-hover:text-navy lg:col-span-1 lg:block lg:text-right">
                  &rarr;
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>
    </div>
  );
}
