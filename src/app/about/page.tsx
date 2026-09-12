import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { Action, BAND_Y, Container, HERO_MIN_H, HERO_Y, Label, Section, SectionHead } from "@/components/ui";
import { AmbientMark } from "@/components/AmbientMark";
import { Reveal } from "@/components/Reveal";
import { BELIEFS, STORY, TAGLINE, WHO_WE_SERVE } from "@/data/site";

export const metadata: Metadata = pageMetadata({
  title: "About the Group",
  description:
    "Orenda Holdings was founded in Ahmedabad to shorten the distance between a promoter with an idea and an investor with capital. Our story and principles.",
  keywords: ["about Orenda Holdings", "business group Ahmedabad", "company profile", "our principles", "promoters and investors"],
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* ═══════════ HERO ═══════════ */}
      <header className={`relative flex items-center overflow-hidden bg-ivory ${HERO_MIN_H} ${HERO_Y}`}>
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
            <h1 className="mt-6 max-w-4xl text-[2.35rem] leading-[1.08] text-navy sm:text-[2.9rem] md:text-[3.3rem] lg:text-[54px] lg:leading-[1.1] 2xl:text-[64px] 3xl:text-[72px]">
              Building the bridge between promoters and investors.
            </h1>
          </Reveal>
        </Container>
      </header>

      {/* ═══════════ STORY ═══════════ */}
      <Section tone="white" className="border-t border-black/10">
        {/* Label on its own line: in a 4/8 split it sat alone in a column and
            left 40% of the row empty. */}
        <Reveal>
          <Label as="h2">The founding idea</Label>
        </Reveal>
        <div className="mt-7">
          <div className="flex max-w-3xl flex-col gap-6">
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

        <dl className="mt-8 border-t border-black/10 md:mt-10 lg:mt-12">
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
        <div className="grid gap-12 md:gap-16 lg:grid-cols-12 lg:gap-12 xl:gap-24">
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

      {/* ═══════════ ONWARD ═══════════ */}
      {/* /about was a dead end - no in-content links out at all, so it passed no
          authority on to /group or /leadership. */}
      <section className={`bg-ivory border-t border-black/10 ${BAND_Y}`}>
        <Container>
          <Reveal>
            <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
              <div>
                <Label as="h2">Go deeper</Label>
                <p className="mt-5 max-w-xl text-[1.3rem] leading-snug text-navy sm:text-[1.5rem]">
                  Eight companies under one group, led by the people who built it.
                </p>
              </div>
              <div className="flex shrink-0 flex-wrap gap-4">
                <Action href="/group" variant="solid">Explore the Group</Action>
                <Action href="/leadership">Meet the founders</Action>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </div>
  );
}
