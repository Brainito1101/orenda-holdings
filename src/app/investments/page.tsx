import type { Metadata } from "next";
import { Container, Label, SampleTag, Section } from "@/components/ui";
import { AmbientMark } from "@/components/AmbientMark";
import { Reveal } from "@/components/Reveal";
import { INVESTMENTS } from "@/data/investments";

export const metadata: Metadata = {
  title: "Our Investments",
  description: "Where the Group holds position - majority and minority positions across financial services, real estate, digital, hospitality and consumer.",
};

export default function InvestmentsPage() {
  return (
    <div className="flex flex-col">
      <header className="relative flex min-h-[65svh] lg:min-h-[75svh] items-center overflow-hidden bg-ivory pt-28 pb-16 lg:pt-36 lg:pb-24">
        <AmbientMark
          size={520}
          stroke="#DF5123"
          opacity={0.2}
          className="pointer-events-none absolute -right-[10%] top-1/2 -translate-y-1/2 md:right-[2%] lg:right-[6%]"
        />
        <Container className="relative w-full">
          <Reveal>
            <Label>Our investments</Label>
            <h1 className="mt-6 max-w-2xl text-[2.6rem] leading-[1.05] text-navy sm:text-[3.6rem] lg:text-[54px] lg:leading-[1.1]">
              Where the Group holds position.
            </h1>
            <p className="mt-8 max-w-xl text-[1.05rem] font-normal leading-relaxed text-muted">
              Majority and minority positions across financial services, real estate, digital,
              hospitality and consumer.
            </p>
          </Reveal>
        </Container>
      </header>

      <Section tone="white" className="border-t border-black/10">
        <div className="border-t border-black/10">
          {INVESTMENTS.map((inv, i) => (
            <Reveal key={`${inv.name}-${i}`} delay={i * 70}>
              <div className="grid items-baseline gap-4 border-b border-black/10 py-9 lg:grid-cols-12 lg:gap-8 lg:py-11">
                <div className="flex items-center gap-4 lg:col-span-4">
                  <span className="h-2 w-2 shrink-0 rounded-full" style={{ background: inv.accent }} />
                  <h3 className="text-[1.5rem] leading-tight lg:text-[1.8rem]">{inv.name}</h3>
                  {inv.sample && <SampleTag />}
                </div>
                <p className="label text-faint lg:col-span-2">{inv.sector}</p>
                <p className="label text-faint lg:col-span-2">{inv.stage}</p>
                <p className="text-sm font-normal text-muted lg:col-span-3">{inv.note}</p>
                <p className="label text-right text-faint tabular-nums lg:col-span-1">{inv.year}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </div>
  );
}
