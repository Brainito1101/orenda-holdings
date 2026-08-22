import Link from "next/link";
import { Manrope } from "next/font/google";
import { AmbientMark } from "@/components/AmbientMark";
import { Header2 } from "./Header2";
import { Footer2 } from "./Footer2";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
});
import { CountUp } from "./CountUp";
import { Orbit2 } from "./Orbit2";
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

export default function Home2() {
  return (
    <div className={`${manrope.variable} manrope-override flex min-h-screen flex-col`}>
      <style>{`
        body {
          --color-ivory: #ffffff !important;
          background-color: #ffffff !important;
        }

        body > header,
        body > footer {
          display: none !important;
        }

        .manrope-override,
        .manrope-override * {
          font-family: var(--font-manrope), sans-serif !important;
        }
        
        /* Body: 400-500 */
        .manrope-override p,
        .manrope-override dd,
        .manrope-override figcaption {
          font-weight: 400 !important;
        }

        /* Gold to Teal Overrides for tags and lines */
        .manrope-override {
          --color-gold: #09767C !important;
          --color-gold-light: #09767C !important;
        }
        .manrope-override .hair {
          background-color: #09767C !important;
          opacity: 0.3 !important;
        }
        
        /* Hero Title */
        .manrope-override header h1 {
          font-weight: 500 !important;
          letter-spacing: -0.02em;
        }
        
        /* Section headings: 700 */
        .manrope-override h2,
        .manrope-override h3 {
          font-weight: 700 !important;
          letter-spacing: -0.01em;
        }
        
        /* Navigation: 500 (Targets the global header when this page is active) */
        header nav a,
        header a {
          font-family: var(--font-manrope), sans-serif !important;
          font-weight: 500 !important;
        }
        
        /* Buttons: 600 */
        .manrope-override a,
        .manrope-override button {
          font-weight: 600 !important;
        }
        
        .manrope-override .label {
          font-weight: 500 !important;
          letter-spacing: 0.15em;
        }
        
        .manrope-override .font-normal {
          font-weight: 400 !important; /* Bump light font up for Manrope */
        }
      `}</style>
      <Header2 />
      {/* ═══════════ 1. HERO ═══════════ */}
      <header className="relative flex min-h-[100svh] items-center overflow-hidden bg-ivory">
        {/* 3D Graphic */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-[30%] top-[5%] animate-[spin_60s_linear_infinite] md:top-1/2 md:-translate-y-[38%] md:-right-[5%] lg:right-[5%] xl:right-[8%]"
        >
          <img 
            src="/team/imgs/image%20557.webp" 
            alt="" 
            className="w-[350px] object-contain md:w-[380px] lg:w-[480px] xl:w-[550px]" 
          />
        </div>

        <Container className="relative pt-36">
          <Reveal>
            <div className="max-w-2xl xl:max-w-3xl">
              <h1 className="text-[2.8rem] leading-[1] text-navy sm:text-[4rem] lg:text-[5.2rem]">
                The force behind
                <br />
                enterprise.
              </h1>

              <p className="mt-12 max-w-lg text-[1.1rem] font-normal leading-relaxed text-muted">
                A multi-sector business and investment group. Eight verticals across capital,
                advisory, lending, legal, real estate, digital and hospitality, held under one
                parent logic.
              </p>

              <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-12 sm:flex sm:gap-x-8 sm:gap-y-5">
                <Action href="#" variant="solid" className="w-full justify-center px-2 sm:w-auto sm:px-8">For Investors</Action>
                <Action href="#" variant="outline" className="w-full justify-center px-2 sm:w-auto sm:px-8">For Founders</Action>
              </div>
            </div>
          </Reveal>
        </Container>
      </header>

      {/* ═══════════ 2. DATA ═══════════ */}
      <section className="border-t border-black/10 bg-white py-12 lg:py-16">
        <Container>
          <div className="grid grid-cols-2 gap-y-10 md:grid-cols-4 md:divide-x md:divide-black/10">
            {FIGURES.map((f, i) => (
              <div key={f.l} className="px-6 lg:px-12">
                <Reveal delay={i * 100}>
                  <div className="flex flex-col">
                  <dt className="font-display text-[3.2rem] leading-none text-navy lg:text-[4rem]">
                    <CountUp value={f.n} />
                  </dt>
                  <dd className="mt-4 max-w-[200px] text-[1.02rem] leading-relaxed text-muted">
                    {f.l}
                  </dd>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ═══════════ 3. THE GROUP ═══════════ */}
      <section className="border-t border-black/10 bg-white py-28 lg:py-40">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-10">
            <Reveal>
              <SectionHead
                label="The Group"
                title={<>Eight verticals.<br />One parent logic.</>}
              />
            </Reveal>
            <Reveal>
              <Action href="#" variant="outline">
                All eight
              </Action>
            </Reveal>
          </div>

          <div className="mt-10">
            <Orbit2 />
          </div>
        </Container>
      </section>

      {/* ═══════════ 4. ABOUT: TEAM + VALUES ═══════════ */}
      <Section className="border-t border-black/10">
        <div className="grid gap-20 lg:grid-cols-12 lg:gap-24">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionHead
                label="About"
                title="Founder led, finance first."
                lede="Orenda is led by chartered accountants whose discipline shapes how the Group builds, governs and grows."
              />
            </Reveal>
            <Reveal className="mt-12">
              <Action href="#" variant="outline">Read about the Group</Action>
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
                      rounded="rounded-md"
                      className="aspect-square w-full"
                      sizes="(max-width: 768px) 100vw, 380px"
                    />
                  </div>
                  <figcaption>
                    <h3 className="text-[1.6rem] leading-tight">{f.name}</h3>
                    <p className="label mt-3 text-faint">
                      {f.role}, {f.org}
                    </p>
                    {f.credentials && (
                      <p className="mt-2 text-sm font-normal text-muted">{f.credentials}</p>
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
          <dl className="mt-12 border-t border-black/10">
            {VALUES.map((v, i) => (
              <Reveal key={v.k} delay={i * 70}>
                <div className="group grid gap-3 border-b border-black/10 py-8 lg:grid-cols-12 lg:gap-10 lg:py-10">
                  <dt className="font-display text-2xl text-navy transition-transform duration-700 group-hover:translate-x-2 lg:col-span-4 lg:text-[2rem]">
                    {v.k}
                  </dt>
                  <dd className="text-[1.02rem] font-normal leading-relaxed text-muted lg:col-span-8">
                    {v.v}
                  </dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </Section>

      {/* ═══════════ 5. OUR INVESTMENTS ═══════════ */}
      <Section tone="white" className="border-t border-black/10">
        <div className="flex flex-wrap items-end justify-between gap-10">
          <Reveal>
            <SectionHead
              label="Our investments"
              title="Where the Group holds position."
              lede="Majority and minority positions across financial services, real estate, digital, hospitality and consumer."
            />
          </Reveal>
          <Reveal>
            <Action href="#" variant="outline">Full portfolio</Action>
          </Reveal>
        </div>

        <div className="mt-20 border-t border-black/10">
          {INVESTMENTS.map((inv, i) => (
            <Reveal key={`${inv.name}-${i}`} delay={i * 70}>
              <Link
                href="/investments"
                className="group grid items-baseline gap-4 border-b border-black/10 py-9 transition-colors duration-500 hover:bg-ivory lg:grid-cols-12 lg:gap-8 lg:py-11"
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
                <p className="text-sm font-normal text-muted lg:col-span-3">{inv.note}</p>
                <p className="label text-right text-faint tabular-nums lg:col-span-1">{inv.year}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ═══════════ 6. MEDIA ═══════════ */}
      <Section className="border-t border-black/10">
        <div className="flex flex-wrap items-end justify-between gap-10">
          <SectionHead
            label="Media"
            title="Press, podcasts, events and thinking."
          />
          <Reveal>
            <Action href="/media" variant="outline">The media room</Action>
          </Reveal>
        </div>

        <div className="mt-28 flex flex-col gap-16">
          {/* Top Row */}
          <div className="-mx-4 grid grid-cols-1 gap-y-12 md:-mx-8 md:grid-cols-2 md:divide-x md:divide-black/10 lg:-mx-12 lg:grid-cols-3">
            {MEDIA.slice(0, 3).map((m, i) => (
              <Reveal key={m.slug} delay={i * 60}>
                <article className="flex h-full flex-col gap-6 px-4 md:px-8 lg:px-12">
                  <div className="flex items-center justify-between gap-3">
                    <Label className="text-[#09767C] text-xs font-bold tracking-widest uppercase">{m.kind}</Label>
                    {m.sample && <SampleTag />}
                  </div>
                  <h3 className="text-[1.45rem] leading-[1.2]">{m.title}</h3>
                  <p className="mt-auto flex items-center gap-3 text-sm font-normal text-muted">
                    {m.source}
                    <span aria-hidden>&mdash;</span>
                    <span className="tabular-nums text-faint">{m.dateLabel}</span>
                  </p>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="h-px w-full bg-black/10" />

          {/* Bottom Row */}
          <div className="-mx-4 grid grid-cols-1 gap-y-12 md:-mx-8 md:grid-cols-2 md:divide-x md:divide-black/10 lg:-mx-12 lg:grid-cols-3">
            {MEDIA.slice(3, 6).map((m, i) => (
              <Reveal key={m.slug} delay={i * 60}>
                <article className="flex h-full flex-col gap-6 px-4 md:px-8 lg:px-12">
                  <div className="flex items-center justify-between gap-3">
                    <Label className="text-[#09767C] text-xs font-bold tracking-widest uppercase">{m.kind}</Label>
                    {m.sample && <SampleTag />}
                  </div>
                  <h3 className="text-[1.45rem] leading-[1.2]">{m.title}</h3>
                  <p className="mt-auto flex items-center gap-3 text-sm font-normal text-muted">
                    {m.source}
                    <span aria-hidden>&mdash;</span>
                    <span className="tabular-nums text-faint">{m.dateLabel}</span>
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* ═══════════ 7. WHAT NEXT ═══════════ */}
      <section className="border-t border-black/10 bg-white py-24 lg:py-32 relative overflow-hidden">
        <Container className="relative z-10 px-4 sm:px-6 lg:px-8">
          <Reveal>
              <div 
                className="mx-auto max-w-5xl rounded-[2.5rem] px-6 py-12 text-center shadow-2xl sm:p-12 lg:p-20 relative overflow-hidden border border-white/10"
                style={{ background: "linear-gradient(135deg, #09767C 0%, #02095C 100%)" }}
              >
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.1),transparent_70%)]"></div>
                
                <div className="relative z-10 flex flex-col items-center">
                  <h2 className="max-w-3xl text-[2.4rem] font-bold leading-[1.05] text-white sm:text-[3.6rem] lg:text-[4.2rem]">
                    Let&rsquo;s connect.
                  </h2>
                  
                  <p className="mt-6 sm:mt-8 max-w-2xl text-[1.1rem] font-light leading-relaxed text-white/60">
                    Whether you are an investor looking to review our Group structure, or a founder seeking capital and operating support to become enterprise ready, we are ready to build together.
                  </p>
                  
                  <div className="mt-10 sm:mt-12 flex w-full flex-col gap-4 sm:w-auto sm:flex-row sm:items-center sm:justify-center sm:gap-6">
                    <Link href="#" className="flex w-full items-center justify-center rounded-full bg-white px-9 py-4 text-[0.95rem] font-bold text-navy transition-transform hover:scale-105 sm:w-auto">
                      For Investors
                    </Link>
                    <Link href="#" className="flex w-full items-center justify-center rounded-full bg-transparent border border-white/20 px-9 py-4 text-[0.95rem] font-bold text-white transition-colors hover:bg-white/10 sm:w-auto">
                      For Founders
                    </Link>
                  </div>
                </div>
              </div>
          </Reveal>
        </Container>
      </section>
      <Footer2 />
    </div>
  );
}
