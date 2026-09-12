import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { Action, BAND_Y, Container, HERO_MIN_H, HERO_Y, Label, Section } from "@/components/ui";
import { AmbientMark } from "@/components/AmbientMark";
import { Portrait } from "@/components/Portrait";
import { Reveal } from "@/components/Reveal";
import { FOUNDERS } from "@/data/team";

export const metadata: Metadata = pageMetadata({
  title: "Founders & Leadership",
  description:
    "Orenda Holdings is led by chartered accountants whose financial discipline shapes how the Group builds, governs and grows. Meet the founding team.",
  keywords: ["Orenda leadership", "founders", "chartered accountant", "management team", "Tarun Shah", "Mayur Fichadiya"],
  path: "/leadership",
});

export default function LeadershipPage() {
  return (
    <div className="flex flex-col">
      <header className={`relative flex items-center overflow-hidden bg-ivory ${HERO_MIN_H} ${HERO_Y}`}>
        <AmbientMark
          size={520}
          stroke="#7248F2"
          opacity={0.2}
          className="pointer-events-none absolute -right-[10%] top-1/2 -translate-y-1/2 md:right-[2%] lg:right-[6%]"
        />
        <Container className="relative w-full">
          <Reveal>
            <Label>Leadership</Label>
            <h1 className="mt-6 max-w-3xl text-[2.35rem] leading-[1.08] text-navy sm:text-[2.9rem] md:text-[3.3rem] lg:text-[54px] lg:leading-[1.1] 2xl:text-[64px] 3xl:text-[72px]">
              Founder led, finance first.
            </h1>
            <p className="mt-8 max-w-2xl text-[1.05rem] font-normal leading-relaxed text-muted">
              Orenda is led by chartered accountants whose financial discipline shapes how
              the Group builds, governs and grows.
            </p>
          </Reveal>
        </Container>
      </header>

      <Section tone="white" className="border-t border-black/10">
        <Reveal className="mb-10 lg:mb-12">
          <Label as="h2">The founders</Label>
        </Reveal>
        {/* Capped at 5xl: the full 1224px container gave two 572px columns for
            content that tops out at 448px, so the two founders drifted apart
            with 350px of white between the portraits. */}
        <div className="grid max-w-5xl gap-12 sm:grid-cols-2 sm:gap-10 md:gap-14 lg:gap-16">
          {FOUNDERS.map((f, i) => (
            <Reveal key={f.slug} delay={i * 120}>
              <figure className="group flex flex-col gap-7">
                {/* Capped rather than full-column: at two-up the column is
                    ~570px wide, which made the portraits dominate the page. */}
                <div className="overflow-hidden">
                  <Portrait
                    name={f.name}
                    photo={f.photo}
                    rounded="rounded-md"
                    className="aspect-[4/5] w-full max-w-[240px] sm:max-w-[260px] lg:max-w-[300px] 2xl:max-w-[340px]"
                    sizes="(max-width: 640px) 240px, (max-width: 1024px) 260px, (max-width: 1536px) 300px, 340px"
                  />
                </div>
                <figcaption>
                  <h3 className="text-[1.8rem] leading-tight">{f.name}</h3>
                  <p className="label mt-3 text-faint">
                    {f.role}, {f.org}
                  </p>
                  {f.credentials && (
                    <p className="mt-2 text-sm font-normal text-muted">{f.credentials}</p>
                  )}
                  {f.bio && (
                    <p className="mt-6 max-w-md text-[1.02rem] font-normal leading-relaxed text-muted">
                      {f.bio}
                    </p>
                  )}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ═══════════ ONWARD ═══════════ */}
      {/* /leadership was fully isolated: no in-content links in or out, reachable
          only through the header and footer nav. */}
      <section className={`bg-ivory border-t border-black/10 ${BAND_Y}`}>
        <Container>
          <Reveal>
            <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
              <div>
                <Label as="h2">Next</Label>
                <p className="mt-5 max-w-xl text-[1.3rem] leading-snug text-navy sm:text-[1.5rem]">
                  See what the founders have built, or talk to the team directly.
                </p>
              </div>
              <div className="flex shrink-0 flex-wrap gap-4">
                <Action href="/group" variant="solid">Explore the Group</Action>
                <Action href="/contact">Get in touch</Action>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </div>
  );
}
