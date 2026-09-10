import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { Container, HERO_Y, Label, Section } from "@/components/ui";
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
      <header className={`relative flex min-h-[60svh] items-center overflow-hidden bg-ivory md:min-h-[65svh] lg:min-h-[75svh] ${HERO_Y}`}>
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
        <div className="grid gap-12 sm:grid-cols-2 sm:gap-10 md:gap-14 lg:gap-20">
          {FOUNDERS.map((f, i) => (
            <Reveal key={f.slug} delay={i * 120}>
              <figure className="group flex flex-col gap-7">
                <div className="overflow-hidden">
                  <Portrait
                    name={f.name}
                    photo={f.photo}
                    rounded="rounded-md"
                    className="aspect-[4/5] w-full"
                    sizes="(max-width: 768px) 100vw, 480px"
                  />
                </div>
                <figcaption>
                  <h2 className="text-[1.8rem] leading-tight">{f.name}</h2>
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
    </div>
  );
}
