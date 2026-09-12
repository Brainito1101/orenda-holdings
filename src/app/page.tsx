import Image from "next/image";
import Link from "next/link";
import { AmbientMark } from "@/components/AmbientMark";
import { ClientMarquee } from "@/components/ClientMarquee";
import { CountUp } from "@/components/CountUp";
import { Orbit2 } from "@/components/Orbit2";
import { Reveal } from "@/components/Reveal";
import { Action, Container, Label, Section, SECTION_Y, SectionHead, STRIP_Y } from "@/components/ui";
import { InquiryForm } from "@/components/InquiryForm";
import { bySlug } from "@/data/verticals";
import { CONTACT, ECOSYSTEM, PRIMARY_EMAIL, PROCESS, STATS, TAGLINE } from "@/data/site";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  titleAbsolute: "Orenda Holdings | Business & Investment Group",
  description:
    "A diversified business and investment group in Ahmedabad, bringing investment advisory, real estate, capital markets and legal expertise under one roof.",
  keywords: ["business group", "investment group", "investment advisory", "capital markets", "real estate", "legal advisory", "Ahmedabad", "Orenda Holdings"],
  path: "/",
});

export default function Home() {
  return (
    <div className="manrope-override flex min-h-screen flex-col">
      <style>{`
        .manrope-override,
        .manrope-override * {
          font-family: var(--font-manrope), sans-serif !important;
        }
        .manrope-override p,
        .manrope-override dd,
        .manrope-override figcaption {
          font-weight: 400 !important;
        }
        .manrope-override {
          --color-gold: #09767C !important;
        }
        .manrope-override .hair {
          background-color: #09767C !important;
          opacity: 0.3 !important;
        }
        .manrope-override header h1 {
          font-weight: 500 !important;
          letter-spacing: -0.02em;
        }
        .manrope-override a,
        .manrope-override button {
          font-weight: 600 !important;
        }
        .manrope-override .label {
          font-weight: 500 !important;
          letter-spacing: 0.15em;
        }
        .manrope-override .font-normal {
          font-weight: 400 !important;
        }
      `}</style>
      
      {/* ═══════════ 1. HERO ═══════════ */}
      <header className="relative flex min-h-[100svh] items-center overflow-hidden bg-ivory" id="home">
        {/* 3D Graphic */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-[15%] top-[12%] animate-[spin_60s_linear_infinite] opacity-30 md:opacity-100 md:top-1/2 md:-translate-y-[45%] md:-right-[5%] lg:right-[5%] xl:right-[8%]"
        >
          {/*
            The bare asset URL is a 522px render, which goes soft once it is
            drawn at 720px on a large Retina display. `w_1440` asks Cloudinary
            for the full-resolution original; `sizes` mirrors the width classes
            below so phones still fetch a small file rather than the 1440px one.
          */}
          <Image
            src="https://res.cloudinary.com/mqzbailq/image/upload/w_1440/v1787425096/image_557.webp"
            alt=""
            width={1440}
            height={1440}
            loading="eager"
            sizes="(max-width: 767px) 270px, (max-width: 1023px) 380px, (max-width: 1279px) 480px, (max-width: 1535px) 550px, (max-width: 1919px) 640px, 720px"
            className="w-[270px] object-contain md:w-[380px] lg:w-[480px] xl:w-[550px] 2xl:w-[640px] 3xl:w-[720px]"
          />
        </div>

        <Container className="relative pt-32 sm:pt-36 2xl:pt-44 3xl:pt-48">
          <Reveal>
            <div className="max-w-2xl xl:max-w-3xl">
              <p className="text-[1.05rem] font-normal italic leading-relaxed text-gold">
                &ldquo;{TAGLINE}&rdquo;
              </p>

              <h1 className="mt-6 text-[2.35rem] leading-[1.08] text-navy sm:text-[2.9rem] md:text-[3.3rem] lg:text-[54px] lg:leading-[1.1] 2xl:text-[64px] 3xl:text-[72px]">
                Building capital. Building trust. Building what&rsquo;s next.
              </h1>

              <p className="mt-8 max-w-lg text-[1.1rem] font-normal leading-relaxed text-muted">
                Orenda Holdings is a diversified group bringing investment advisory, real estate,
                capital markets, and legal expertise together - all solutions under one roof.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-12 sm:flex sm:gap-x-8 sm:gap-y-5">
                <Action href="/contact" variant="solid" className="w-full justify-center px-2 sm:w-auto sm:px-8">Contact Us</Action>
                <Action href="/about" variant="outline" className="w-full justify-center px-2 sm:w-auto sm:px-8">About Orenda</Action>
              </div>
            </div>
          </Reveal>
        </Container>
      </header>

      {/* ═══════════ 2. STATS BAR ═══════════ */}
      <section className={`border-t border-black/10 bg-white ${STRIP_Y}`}>
        <Container>
          <div className="grid grid-cols-1 gap-y-10 text-center sm:grid-cols-3 sm:divide-x sm:divide-black/10">
            {STATS.map((f, i) => (
              <div key={f.l} className="px-0 sm:px-8 lg:px-12">
                <Reveal delay={i * 100}>
                  <div className="flex flex-col items-center">
                  <dt className="font-display text-[2.8rem] leading-none text-navy sm:text-[3.2rem] lg:text-[4rem] 2xl:text-[4.6rem] 3xl:text-[5.2rem]">
                    <CountUp value={f.n} />
                  </dt>
                  <dd className="mx-auto mt-4 max-w-[220px] text-[1.02rem] leading-relaxed text-muted">
                    {f.l}
                  </dd>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ═══════════ 3. CLIENTS ═══════════ */}
      <section className={`border-t border-black/10 bg-white ${STRIP_Y}`}>
        <Container>
          <Reveal>
            <h2 className="label text-center text-faint">Trusted by</h2>
          </Reveal>
        </Container>
        <Reveal delay={80} className="mt-8 md:mt-10">
          <ClientMarquee />
        </Reveal>
      </section>

      {/* ═══════════ 4. 01 / ABOUT ═══════════ */}
      <Section className="border-t border-black/10">
        <div className="grid gap-12 md:gap-16 lg:grid-cols-12 lg:gap-12 xl:gap-24">
          <div className="lg:col-span-5">
            <SectionHead
              label="01 / About"
              title="Engineering trust into every transaction."
            />
          </div>
          <div className="flex flex-col gap-7 lg:col-span-7">
            <Reveal>
              <p className="text-[1.05rem] font-normal leading-relaxed text-muted">
                Orenda Holdings was built on a simple idea: the space between a promoter and an
                investor should be shorter, clearer, and easier to cross.
              </p>
            </Reveal>
            <Reveal delay={80}>
              <p className="text-[1.05rem] font-normal leading-relaxed text-muted">
                We do not simply offer services. We structure capital, advise on transactions,
                build assets, and protect our clients&rsquo; interests end to end, under one roof.
              </p>
            </Reveal>
            <Reveal delay={160}>
              <p className="text-[1.05rem] font-normal leading-relaxed text-muted">
                We work with an owner&rsquo;s mindset: reducing complexity, protecting compliance,
                and taking responsibility for outcomes, not just advice.
              </p>
            </Reveal>
            <Reveal delay={240} className="mt-3 flex flex-wrap gap-4">
              <Action href="/about" variant="outline">Read about the Group</Action>
              {/* /leadership had no in-content inbound link anywhere on the site,
                  only the header and footer nav. */}
              <Action href="/leadership" variant="outline">Meet the founders</Action>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* ═══════════ 5. 02 / WHAT WE BUILD ═══════════ */}
      <section className={`border-t border-black/10 bg-white ${SECTION_Y}`}>
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-10">
            <Reveal>
              <SectionHead
                label="02 / What we build"
                title={<>Structures for capital. Advisory for growth.<br />Assets for the long term.</>}
              />
            </Reveal>
            <Reveal>
              <Action href="/group" variant="outline">
                All eight
              </Action>
            </Reveal>
          </div>

          <div className="mt-6 md:mt-10">
            <Orbit2 />
          </div>
        </Container>
      </section>

      {/* ═══════════ 6. 03 / HOW WE WORK ═══════════ */}
      <Section className="border-t border-black/10">
        <SectionHead
          label="03 / How we work"
          title="Discipline before complexity."
        />

        <dl className="mt-8 border-t border-black/10 md:mt-10 lg:mt-12">
          {PROCESS.map((p, i) => (
            <Reveal key={p.k} delay={i * 70}>
              <div className="group grid gap-3 border-b border-black/10 py-8 lg:grid-cols-12 lg:gap-10 lg:py-10">
                <dt className="flex items-baseline gap-4 lg:col-span-4">
                  <span className="label text-faint tabular-nums">{p.n}</span>
                  <span className="font-display text-2xl text-navy transition-transform duration-700 group-hover:translate-x-2 lg:text-[2rem]">
                    {p.k}.
                  </span>
                </dt>
                <dd className="text-[1.02rem] font-normal leading-relaxed text-muted lg:col-span-8">
                  {p.v}
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </Section>

      {/* ═══════════ 7. 04 / ECOSYSTEM ═══════════ */}
      <section id="group" className={`border-t border-black/10 bg-white ${SECTION_Y}`}>
        <Container>
          <SectionHead
            label="04 / Ecosystem"
            title="Distinct companies. One group."
            lede="Each Orenda company has a clear role. Together, they cover the full journey from advice to asset."
          />

          <div className="mt-8 border-t border-black/10 md:mt-10 lg:mt-12">
            {ECOSYSTEM.map((e, i) => {
              const v = bySlug(e.slug);
              return (
                <Reveal key={e.slug} delay={i * 70}>
                  <Link
                    href={`/group/${e.slug}`}
                    className="group flex items-center justify-between gap-4 border-b border-black/10 py-6 transition-colors duration-500 hover:bg-ivory sm:py-7 lg:py-9"
                  >
                    <span className="flex items-center gap-4">
                      <span
                        className="h-2 w-2 shrink-0 rounded-full transition-transform duration-500 group-hover:scale-150"
                        style={{ background: v?.accent }}
                      />
                      <span className="text-[1.15rem] leading-tight text-navy sm:text-[1.4rem] lg:text-[1.6rem] 2xl:text-[1.8rem]">
                        {e.name} <span className="font-normal text-muted">{e.verb}</span>
                      </span>
                    </span>
                    <span aria-hidden className="text-navy/40 transition-transform duration-500 group-hover:translate-x-1.5 group-hover:text-navy">
                      &rarr;
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ═══════════ 8. 05 / CONTACT ═══════════ */}
      <section id="contact" className="relative overflow-hidden border-t border-black/10 bg-white">
        <AmbientMark size={480} className="pointer-events-none absolute -right-[8%] top-1/2 -translate-y-1/2 opacity-[0.04]" />
        <Container className={`relative ${SECTION_Y}`}>
          <div className="grid gap-12 md:gap-16 lg:grid-cols-12 lg:gap-12 xl:gap-24">
            <div className="lg:col-span-5">
              <SectionHead
                label="05 / Contact"
                title="Let’s build what matters."
                lede="Whether you’re a promoter, an investor, or a business exploring the group - we’d like to hear from you."
              />

              <div className="mt-10 flex flex-col gap-7">
                <Reveal delay={60}>
                  <Label>Email</Label>
                  <a href={`mailto:${PRIMARY_EMAIL}`} className="mt-1.5 inline-block py-1.5 text-[1.2rem] text-navy transition-colors hover:text-gold">
                    {PRIMARY_EMAIL}
                  </a>
                </Reveal>
                <Reveal delay={120}>
                  <Label>Office</Label>
                  <p className="mt-3 text-[1.05rem] font-normal leading-relaxed text-navy">
                    {CONTACT.city}
                    <br />
                    Registered &amp; Corporate Office
                  </p>
                </Reveal>
                <Reveal delay={180}>
                  <Label>Hours</Label>
                  <p className="mt-3 text-[1.05rem] font-normal leading-relaxed text-navy">{CONTACT.hours}</p>
                </Reveal>
                <Reveal delay={240}>
                  <Action href="/contact" variant="outline">Full contact details</Action>
                </Reveal>
              </div>
            </div>

            <div className="lg:col-span-7">
              <Reveal delay={100}>
                <InquiryForm />
              </Reveal>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
