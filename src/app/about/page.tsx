import type { Metadata } from "next";
import { Container, Label, Section, SectionHead } from "@/components/ui";
import { AmbientMark } from "@/components/AmbientMark";
import { Reveal } from "@/components/Reveal";
import { BELIEFS, STORY, TAGLINE, WHO_WE_SERVE } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Orenda Holdings LLP was founded in 2026 in Ahmedabad on a simple premise: the gap between a promoter with an idea and an investor with capital should be shorter, clearer, and easier to cross.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* ═══════════ HERO ═══════════ */}
      <header className="relative flex min-h-[65svh] lg:min-h-[75svh] items-center overflow-hidden bg-ivory pt-28 pb-16 lg:pt-36 lg:pb-24">
        <AmbientMark
          size={520}
          stroke="#09767C"
          opacity={0.2}
          className="pointer-events-none absolute -right-[10%] top-1/2 -translate-y-1/2 md:right-[2%] lg:right-[6%]"
        />
        <Container className="relative w-full">
          <Reveal>
            <Label>Our Story</Label>
            <p className="mt-8 max-w-2xl text-[1.15rem] font-normal italic leading-relaxed text-gold">
              &ldquo;{TAGLINE}&rdquo;
            </p>
            <h1 className="mt-6 max-w-4xl text-[2.6rem] leading-[1.05] text-navy sm:text-[3.6rem] lg:text-[54px] lg:leading-[1.1]">
              Building the bridge between promoters and investors.
            </h1>
          </Reveal>
        </Container>
      </header>

      {/* ═══════════ STORY ═══════════ */}
      <Section tone="white" className="border-t border-black/10">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-24">
          <div className="lg:col-span-4">
            <Reveal>
              <Label>The founding idea</Label>
            </Reveal>
          </div>
          <div className="flex flex-col gap-7 lg:col-span-8">
            {STORY.map((p, i) => (
              <Reveal key={i} delay={i * 90}>
                <p className="max-w-2xl text-[1.1rem] font-normal leading-relaxed text-muted">{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* ═══════════ WHAT WE BELIEVE ═══════════ */}
      <Section className="border-t border-black/10">
        <SectionHead label="What we believe" title="Principles, not slogans." />

        <dl className="mt-16 border-t border-black/10">
          {BELIEFS.map((b, i) => (
            <Reveal key={b.k} delay={i * 80}>
              <div className="group grid gap-3 border-b border-black/10 py-8 lg:grid-cols-12 lg:gap-10 lg:py-10">
                <dt className="flex items-baseline gap-4 lg:col-span-4">
                  <span className="label text-faint tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                  <span className="font-display text-2xl text-navy transition-transform duration-700 group-hover:translate-x-2 lg:text-[1.7rem]">
                    {b.k}
                  </span>
                </dt>
                <dd className="text-[1.02rem] font-normal leading-relaxed text-muted lg:col-span-8">
                  {b.v}
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </Section>

      {/* ═══════════ WHO WE SERVE ═══════════ */}
      <Section tone="white" className="border-t border-black/10">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-24">
          <div className="lg:col-span-5">
            <SectionHead label="Who we serve" title="Built for both sides of the table." />
          </div>
          <div className="lg:col-span-7">
            <ul className="grid gap-x-10 gap-y-5 sm:grid-cols-2">
              {WHO_WE_SERVE.map((w, i) => (
                <Reveal key={w} delay={i * 60}>
                  <li className="flex items-start gap-3 text-[1.05rem] font-normal leading-relaxed text-navy">
                    <span aria-hidden className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    {w}
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </Section>
    </div>
  );
}
