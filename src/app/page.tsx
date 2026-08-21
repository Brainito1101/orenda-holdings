import Link from "next/link";
import { AmbientMark } from "@/components/AmbientMark";
import { Orbit } from "@/components/Orbit";
import { Portrait } from "@/components/Portrait";
import { Reveal } from "@/components/Reveal";
import { Starburst } from "@/components/Starburst";
import { Action, Container, Label, Section, SectionHead, SampleTag } from "@/components/ui";
import { INVESTMENTS } from "@/data/investments";
import { MEDIA, VALUES } from "@/data/media";
import { FOUNDERS } from "@/data/team";

const FIGURES = [
  { n: "15+", l: "Years of leadership in finance and audit" },
  { n: "08", l: "Active verticals under one parent" },
  { n: "06", l: "Core sectors served across the Group" },
  { n: "50+", l: "Lending partners across banks and NBFCs" },
];

export default function Home() {
  return (
    <>
      {/* ═══════════ 1. HERO ═══════════ */}
      <header className="relative flex min-h-[100svh] items-center overflow-hidden bg-ivory">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-[38%] top-1/2 -translate-y-1/2 sm:-right-[30%] lg:-right-[18%]"
        >
          <AmbientMark size={880} opacity={0.14} />
        </div>

        <Container className="relative pt-28">
          <div className="max-w-4xl">
            <div className="fade-up flex items-center gap-5">
              <span className="hair w-12" />
              <Label>Orenda Holdings</Label>
            </div>

            <h1 className="fade-up d1 mt-12 text-[3.2rem] leading-[0.98] text-navy sm:text-[5rem] lg:text-[6.6rem]">
              The force behind
              <br />
              enterprise.
            </h1>

            <p className="fade-up d2 mt-12 max-w-lg text-[1.1rem] font-light leading-relaxed text-muted">
              A multi-sector business and investment group. Eight verticals across capital,
              advisory, lending, legal, real estate, digital and hospitality, held under one
              parent logic.
            </p>

            <div className="fade-up d3 mt-14 flex flex-wrap items-center gap-x-10 gap-y-5">
              <Action href="/investors" variant="outline">For Investors</Action>
              <Action href="/founders">For Founders</Action>
            </div>
          </div>
        </Container>

        <div
          aria-hidden
          className="fade-up d5 absolute bottom-10 left-1/2 hidden -translate-x-1/2 lg:block"
        >
          <span className="label text-faint">Scroll</span>
        </div>
      </header>

      {/* ═══════════ 2. DATA ═══════════ */}
      <section className="border-y border-line bg-ivory-deep">
        <Container>
          <dl className="grid divide-y divide-line sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4">
            {FIGURES.map((f, i) => (
              <Reveal key={f.l} delay={i * 90}>
                <div
                  className={`flex flex-col gap-4 py-14 lg:py-20 ${
                    i > 0 ? "lg:border-l lg:border-line lg:pl-12" : ""
                  }`}
                >
                  <dt className="font-display text-[3.6rem] leading-none tabular-nums text-navy lg:text-[4.6rem]">
                    {f.n}
                  </dt>
                  <dd className="max-w-[20ch] text-sm font-light leading-relaxed text-muted">
                    {f.l}
                  </dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </Container>
      </section>

      {/* ═══════════ 3. THE GROUP ═══════════ */}
      <section className="bg-navy-deep py-28 lg:py-40">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-10">
            <SectionHead
              label="The Group"
              title={<>Eight verticals.<br />One parent logic.</>}
              tone="light"
            />
            <Reveal>
              <Action href="/group" variant="outline" invert>
                All eight
              </Action>
            </Reveal>
          </div>

          <div className="mt-24">
            <Orbit />
          </div>
        </Container>
      </section>

      {/* ═══════════ 4. ABOUT: TEAM + VALUES ═══════════ */}
      <Section>
        <div className="grid gap-20 lg:grid-cols-12 lg:gap-24">
          <div className="lg:col-span-5">
            <SectionHead
              label="About"
              title="Founder led, finance first."
              lede="Orenda is led by chartered accountants whose discipline shapes how the Group builds, governs and grows."
            />
            <Reveal className="mt-12">
              <Action href="/about">Read about the Group</Action>
            </Reveal>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-7">
            {FOUNDERS.map((f, i) => (
              <Reveal key={f.slug} delay={i * 120}>
                <figure className="group flex flex-col gap-7">
                  <div className="overflow-hidden">
                    <Portrait
                      name={f.name}
                      photo={f.photo}
                      rounded="rounded-none"
                      className="aspect-[3/4] w-full"
                      sizes="(max-width: 768px) 100vw, 380px"
                    />
                  </div>
                  <figcaption>
                    <h3 className="text-[1.6rem] leading-tight">{f.name}</h3>
                    <p className="label mt-3 text-faint">
                      {f.role}, {f.org}
                    </p>
                    {f.credentials && (
                      <p className="mt-2 text-sm font-light text-muted">{f.credentials}</p>
                    )}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>

        {/* core values */}
        <div className="mt-28 lg:mt-40">
          <Reveal>
            <Label>Core values</Label>
          </Reveal>
          <dl className="mt-12 border-t border-line">
            {VALUES.map((v, i) => (
              <Reveal key={v.k} delay={i * 70}>
                <div className="group grid gap-3 border-b border-line py-8 lg:grid-cols-12 lg:gap-10 lg:py-10">
                  <dt className="font-display text-2xl text-navy transition-transform duration-700 group-hover:translate-x-2 lg:col-span-4 lg:text-[2rem]">
                    {v.k}
                  </dt>
                  <dd className="text-[1.02rem] font-light leading-relaxed text-muted lg:col-span-8">
                    {v.v}
                  </dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </Section>

      {/* ═══════════ 5. OUR INVESTMENTS ═══════════ */}
      <Section tone="white">
        <div className="flex flex-wrap items-end justify-between gap-10">
          <SectionHead
            label="Our investments"
            title="Where the Group holds position."
            lede="Majority and minority positions across financial services, real estate, digital, hospitality and consumer."
          />
          <Reveal>
            <Action href="/investments" variant="outline">Full portfolio</Action>
          </Reveal>
        </div>

        <div className="mt-20 border-t border-line">
          {INVESTMENTS.map((inv, i) => (
            <Reveal key={`${inv.name}-${i}`} delay={i * 70}>
              <Link
                href="/investments"
                className="group grid items-baseline gap-4 border-b border-line py-9 transition-colors duration-500 hover:bg-ivory lg:grid-cols-12 lg:gap-8 lg:py-11"
              >
                <div className="flex items-center gap-4 lg:col-span-4">
                  <span
                    className="h-2 w-2 shrink-0 rounded-full transition-transform duration-500 group-hover:scale-150"
                    style={{ background: inv.accent }}
                  />
                  <h3 className="text-[1.5rem] leading-tight lg:text-[1.8rem]">{inv.name}</h3>
                  {inv.sample && <SampleTag />}
                </div>
                <p className="label text-faint lg:col-span-2">{inv.sector}</p>
                <p className="label text-faint lg:col-span-2">{inv.stage}</p>
                <p className="text-sm font-light text-muted lg:col-span-3">{inv.note}</p>
                <p className="label text-right text-faint tabular-nums lg:col-span-1">{inv.year}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ═══════════ 6. MEDIA ═══════════ */}
      <Section>
        <div className="flex flex-wrap items-end justify-between gap-10">
          <SectionHead
            label="Media"
            title="Press, podcasts, events and thinking."
          />
          <Reveal>
            <Action href="/media" variant="outline">The media room</Action>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-px bg-line md:grid-cols-2 lg:grid-cols-3">
          {MEDIA.map((m, i) => (
            <Reveal key={m.slug} delay={i * 60}>
              <article className="flex h-full flex-col gap-6 bg-ivory p-9 transition-colors duration-500 hover:bg-white lg:p-10">
                <div className="flex items-center justify-between gap-3">
                  <Label>{m.kind}</Label>
                  {m.sample && <SampleTag />}
                </div>
                <h3 className="text-[1.45rem] leading-[1.2]">{m.title}</h3>
                <p className="mt-auto flex items-center gap-3 text-sm font-light text-muted">
                  {m.source}
                  <span aria-hidden className="h-px w-4 bg-line" />
                  <span className="tabular-nums text-faint">{m.dateLabel}</span>
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ═══════════ 7. WHAT NEXT ═══════════ */}
      <section className="relative overflow-hidden bg-navy-deep">
        <div aria-hidden className="pointer-events-none absolute -left-[16%] top-1/2 -translate-y-1/2">
          <AmbientMark size={780} stroke="#ffffff" opacity={0.05} />
        </div>

        <Container className="relative">
          <Reveal className="flex flex-col items-center gap-8 pt-28 text-center lg:pt-40">
            <Label tone="light">What next</Label>
            <h2 className="max-w-3xl text-[2.6rem] leading-[1.03] text-white sm:text-[3.6rem] lg:text-[4.4rem]">
              Let&rsquo;s connect.
            </h2>
          </Reveal>

          <div className="mt-20 grid divide-y divide-white/10 pb-28 lg:mt-28 lg:grid-cols-2 lg:divide-x lg:divide-y-0 lg:pb-40">
            <Reveal>
              <Link href="/investors" className="group flex h-full flex-col gap-7 py-14 lg:py-4 lg:pr-16">
                <Starburst size={38} accent="var(--color-gold-light)" core="#ffffff" />
                <h3 className="text-[2rem] leading-tight text-white lg:text-[2.6rem]">
                  Are you an investor?
                </h3>
                <p className="max-w-sm text-[1rem] font-light leading-relaxed text-white/45">
                  Review the Group structure, governance and how capital participates across the
                  eight verticals.
                </p>
                <span className="mt-2 inline-flex items-center gap-3 text-sm font-light text-white/70 transition-colors group-hover:text-white">
                  For Investors
                  <span aria-hidden className="transition-transform duration-500 group-hover:translate-x-1.5">
                    &rarr;
                  </span>
                </span>
              </Link>
            </Reveal>

            <Reveal delay={120}>
              <Link href="/founders" className="group flex h-full flex-col gap-7 py-14 lg:py-4 lg:pl-16">
                <Starburst size={38} accent="var(--color-gold-light)" core="#ffffff" />
                <h3 className="text-[2rem] leading-tight text-white lg:text-[2.6rem]">
                  Seeking investment?
                </h3>
                <p className="max-w-sm text-[1rem] font-light leading-relaxed text-white/45">
                  Bring a business that needs capital, structure and operating support to become
                  enterprise ready.
                </p>
                <span className="mt-2 inline-flex items-center gap-3 text-sm font-light text-white/70 transition-colors group-hover:text-white">
                  For Founders
                  <span aria-hidden className="transition-transform duration-500 group-hover:translate-x-1.5">
                    &rarr;
                  </span>
                </span>
              </Link>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
