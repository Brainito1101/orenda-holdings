import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Action, BAND_Y, Container, HERO_Y, Label, Section } from "@/components/ui";
import { AmbientMark } from "@/components/AmbientMark";
import { Starburst } from "@/components/Starburst";
import { Portrait } from "@/components/Portrait";
import { Reveal } from "@/components/Reveal";
import { pageMetadata } from "@/lib/seo";
import { bySlug, VERTICALS } from "@/data/verticals";

export function generateStaticParams() {
  return VERTICALS.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata(props: PageProps<"/group/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const v = bySlug(slug);
  if (!v) return {};
  return pageMetadata({
    // `seo.title` already carries the company name, so it is used verbatim
    // rather than being run through the "| Orenda Holdings" template.
    titleAbsolute: v.seo.title,
    description: v.seo.description,
    keywords: v.seo.keywords,
    path: `/group/${v.slug}`,
  });
}

export default async function VerticalPage(props: PageProps<"/group/[slug]">) {
  const { slug } = await props.params;
  const v = bySlug(slug);
  if (!v) notFound();

  const related = v.related.map((s) => bySlug(s)).filter((x): x is NonNullable<typeof x> => Boolean(x));

  return (
    <div className="flex flex-col">
      {/* ═══════════ HERO ═══════════ */}
      <header className={`relative flex min-h-[60svh] items-center overflow-hidden bg-ivory md:min-h-[65svh] lg:min-h-[75svh] ${HERO_Y}`}>
        <AmbientMark
          size={520}
          stroke={v.accent}
          opacity={0.2}
          className="pointer-events-none absolute -right-[10%] top-1/2 -translate-y-1/2 md:right-[2%] lg:right-[6%]"
        />
        <Container className="relative w-full">
          <Reveal>
            <div className="flex items-center gap-4">
              <Starburst size={36} accent={v.accent} core="var(--color-navy)" />
              <Label>{v.eyebrow}</Label>
              {v.pending && (
                <span
                  className="shrink-0 whitespace-nowrap border rounded-full px-3 py-1 text-[0.65rem] font-bold uppercase tracking-widest leading-none"
                  style={{ color: v.accent, borderColor: v.accent + "66" }}
                >
                  Coming soon
                </span>
              )}
            </div>

            <h1 className="mt-8 max-w-3xl text-[2.2rem] leading-[1.08] text-navy sm:text-[2.8rem] md:text-[3.2rem] lg:text-[54px] lg:leading-[1.1] 2xl:text-[64px] 3xl:text-[72px]">
              {v.tagline}
            </h1>

            {v.subline && (
              <p className="mt-6 max-w-2xl text-[1.05rem] font-normal italic leading-relaxed" style={{ color: v.accent }}>
                {v.subline}
              </p>
            )}

            <p className="mt-8 max-w-2xl text-[1.05rem] font-normal leading-relaxed text-muted">
              {v.description ?? v.body}
            </p>

            {v.descriptionMore && (
              <p className="mt-5 max-w-2xl text-[1.05rem] font-normal leading-relaxed text-muted">
                {v.descriptionMore}
              </p>
            )}

            <div className="mt-10 flex flex-wrap items-center gap-4 sm:gap-8">
              <Action href={`/contact?vertical=${v.slug}`} variant="solid">Get in touch</Action>
              {v.externalSite && (
                <a
                  href={v.externalSite.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-sm font-light text-navy transition-colors hover:text-gold"
                >
                  Visit {v.externalSite.label}
                  <span aria-hidden className="transition-transform duration-500 group-hover:translate-x-1">↗</span>
                </a>
              )}
            </div>
          </Reveal>
        </Container>
      </header>

      {v.pending ? (
        <Section tone="white" className="border-t border-black/10">
          <Reveal>
            <div className="max-w-2xl">
              <Label>Full page coming soon</Label>
              <p className="mt-6 text-[1.05rem] font-normal leading-relaxed text-muted">
                {v.name} is an active part of the Orenda ecosystem - the detailed page is on its
                way. In the meantime, reach out directly and we&rsquo;ll connect you with the
                right team.
              </p>
              {v.whoItsFor && (
                <div className="mt-10">
                  <Label>Who it&rsquo;s for</Label>
                  <ul className="mt-5 flex flex-wrap gap-x-8 gap-y-3">
                    {v.whoItsFor.map((w) => (
                      <li key={w} className="text-[1rem] font-normal text-navy">{w}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </Reveal>
        </Section>
      ) : (
        <>
          {/* ═══════════ VISION ═══════════ */}
          {v.vision && (
            <Section tone="white" className="border-t border-black/10">
              <Reveal>
                <div className="mx-auto max-w-4xl text-center">
                  <Label>Vision</Label>
                  <blockquote className="mt-7">
                    <p className="text-[1.3rem] font-normal italic leading-snug text-navy sm:text-[1.6rem] lg:text-[1.85rem]">
                      &ldquo;{v.vision}&rdquo;
                    </p>
                  </blockquote>
                  <span
                    aria-hidden
                    className="mx-auto mt-9 block h-px w-16"
                    style={{ backgroundColor: v.accent }}
                  />
                </div>
              </Reveal>
            </Section>
          )}

          {/* ═══════════ WHAT WE DO ═══════════ */}
          {(v.whatWeDo || v.whatWeDoGrouped || v.whatWeDoDetailed) && (
            <Section tone="white" className="border-t border-black/10">
              <Reveal>
                <Label>{v.whatWeDoLabel ?? "What we do"}</Label>
              </Reveal>

              {v.whatWeDoDetailed ? (
                /* Offerings that carry a description: a titled card each, so
                   the body copy has somewhere to live. */
                <div className="mt-10 grid gap-5 sm:grid-cols-2">
                  {v.whatWeDoDetailed.map((o, i) => (
                    <Reveal key={o.title} delay={i * 70}>
                      <div
                        className="flex h-full flex-col gap-3 rounded-xl border p-6 sm:p-7"
                        style={{ borderColor: `${v.accent}33`, backgroundColor: `${v.accent}0a` }}
                      >
                        <h3 className="text-[1.15rem] font-semibold leading-tight text-navy">{o.title}</h3>
                        <p className="text-[0.98rem] font-normal leading-relaxed text-muted">{o.body}</p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              ) : v.whatWeDoGrouped ? (
                <div className="mt-10 grid gap-10 sm:grid-cols-2 md:gap-14 lg:grid-cols-3">
                  {v.whatWeDoGrouped.map((g, gi) => (
                    <Reveal key={g.title} delay={gi * 100}>
                      <h3 className="text-[1.2rem] font-semibold leading-tight text-navy">{g.title}</h3>
                      <ul className="mt-5 flex flex-col gap-3">
                        {g.items.map((item) => (
                          <li key={item} className="flex items-start gap-3 text-[0.98rem] font-normal leading-relaxed text-muted">
                            <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: v.accent }} />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </Reveal>
                  ))}
                </div>
              ) : (
                <ul className="mt-10 grid gap-x-10 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
                  {v.whatWeDo!.map((item, i) => (
                    <Reveal key={item} delay={i * 40}>
                      <li className="flex items-start gap-3 text-[1rem] font-normal leading-relaxed text-navy">
                        <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: v.accent }} />
                        {item}
                      </li>
                    </Reveal>
                  ))}
                </ul>
              )}
            </Section>
          )}

          {/* ═══════════ SPOTLIGHT ═══════════ */}
          {v.spotlight && (
            <Section className="border-t border-black/10">
              <Reveal>
                <div className="grid gap-10 md:gap-14 lg:grid-cols-12 lg:gap-12 xl:gap-24">
                  <div className="lg:col-span-4">
                    <Label>{v.spotlight.label}</Label>
                  </div>
                  <div className="lg:col-span-8">
                    <div
                      className="rounded-xl border px-6 py-7 sm:px-9 sm:py-9"
                      style={{ borderColor: `${v.accent}33`, backgroundColor: `${v.accent}0a` }}
                    >
                      <h3 className="text-[1.35rem] leading-tight text-navy sm:text-[1.6rem]">
                        {v.spotlight.title}
                      </h3>
                      <p className="mt-4 max-w-2xl text-[1.05rem] font-normal leading-relaxed text-muted">
                        {v.spotlight.body}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </Section>
          )}

          {/* ═══════════ WHO IT'S FOR ═══════════ */}
          {v.whoItsFor && (
            <Section className="border-t border-black/10">
              <div className="grid gap-10 md:gap-14 lg:grid-cols-12 lg:gap-12 xl:gap-24">
                <div className="lg:col-span-4">
                  <Reveal>
                    <Label>Who it&rsquo;s for</Label>
                  </Reveal>
                </div>
                <div className="lg:col-span-8">
                  {/* Numbered tiles rather than a bare bullet list: the entries
                      are short phrases, so they read better as discrete cards,
                      and the accent ties the block to this vertical. */}
                  <ul className="grid gap-4 sm:grid-cols-2">
                    {v.whoItsFor.map((w, i) => (
                      <Reveal key={w} delay={i * 60}>
                        <li
                          className="flex h-full items-start gap-4 rounded-xl border p-6 transition-colors duration-500 sm:p-7"
                          style={{ borderColor: `${v.accent}33`, backgroundColor: `${v.accent}0a` }}
                        >
                          <span className="label shrink-0 pt-1 tabular-nums" style={{ color: v.accent }}>
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span className="text-[1.02rem] font-normal leading-snug text-navy">{w}</span>
                        </li>
                      </Reveal>
                    ))}
                  </ul>
                </div>
              </div>
            </Section>
          )}

          {/* ═══════════ WHAT MAKES US DIFFERENT ═══════════ */}
          {(v.difference || v.differenceList) && (
            <Section tone="white" className="border-t border-black/10">
              <div className="grid gap-10 md:gap-14 lg:grid-cols-12 lg:gap-12 xl:gap-24">
                <div className="lg:col-span-4">
                  <Reveal>
                    <Label>What makes us different</Label>
                  </Reveal>
                </div>
                <div className="lg:col-span-8">
                  {/* Set in a panel with an accent rule rather than left as a
                      loose grey paragraph — it is the page's argument, so it
                      should carry more weight than the body copy around it. */}
                  <Reveal>
                    <div
                      className="rounded-xl border-l-2 px-6 py-7 sm:px-9 sm:py-9"
                      style={{ borderColor: v.accent, backgroundColor: `${v.accent}0a` }}
                    >
                      {v.differenceList ? (
                        <ul className="flex flex-col gap-6">
                          {v.differenceList.map((d, i) => (
                            <li key={d} className="flex items-start gap-4 text-[1.05rem] font-normal leading-relaxed text-navy">
                              <span className="label shrink-0 pt-1 tabular-nums" style={{ color: v.accent }}>
                                {String(i + 1).padStart(2, "0")}
                              </span>
                              {d}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="max-w-3xl text-[1.1rem] font-normal leading-relaxed text-navy sm:text-[1.2rem]">
                          {v.difference}
                        </p>
                      )}
                    </div>
                  </Reveal>
                </div>
              </div>
            </Section>
          )}

          {/* ═══════════ LEADERSHIP ═══════════ */}
          {v.leadership && (
            <Section className="border-t border-black/10">
              <Reveal>
                <Label>Leadership</Label>
              </Reveal>
              <div className="mt-10 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
                {v.leadership.map((l, i) => (
                  <Reveal key={l.name} delay={i * 80}>
                    {/* Only rendered where a photo exists — see Leader.photo. */}
                    {l.photo && (
                      <Portrait
                        name={l.name}
                        photo={l.photo}
                        rounded="rounded-md"
                        className="mb-5 aspect-[4/5] w-full max-w-[200px] lg:max-w-[220px]"
                        sizes="(max-width: 1024px) 200px, 220px"
                      />
                    )}
                    <h3 className="text-[1.2rem] font-semibold leading-tight text-navy">{l.name}</h3>
                    <p className="label mt-2 text-faint">{l.role}</p>
                    {l.credentials && (
                      <p className="mt-2 text-sm font-normal leading-relaxed text-muted">{l.credentials}</p>
                    )}
                  </Reveal>
                ))}
              </div>
              {v.leadershipNote && (
                <Reveal delay={200}>
                  <p className="mt-10 max-w-2xl text-[1rem] font-normal leading-relaxed text-muted">
                    {v.leadershipNote}
                  </p>
                </Reveal>
              )}
            </Section>
          )}

          {/* ═══════════ CLOSING CTA ═══════════ */}
          <section className={`border-t border-black/10 bg-white ${BAND_Y}`}>
            <Container>
              <Reveal>
                {/* A contained panel rather than a hairline and a floating
                    button, so the page closes on something deliberate. */}
                <div
                  className="rounded-2xl border px-6 py-9 sm:px-10 sm:py-11 lg:px-12"
                  style={{ borderColor: `${v.accent}33`, backgroundColor: `${v.accent}0d` }}
                >
                  <Label>Enquiry</Label>
                  <div className="mt-6 flex flex-col items-start gap-8 sm:flex-row sm:items-center sm:justify-between sm:gap-10">
                    <p className="max-w-xl text-[1.3rem] leading-snug text-navy sm:text-[1.55rem] lg:text-[1.7rem]">
                      {v.cta ?? v.tagline}
                    </p>
                    <div className="shrink-0">
                      <Action href={`/contact?vertical=${v.slug}`} variant="solid">Send an enquiry</Action>
                    </div>
                  </div>
                </div>
              </Reveal>
            </Container>
          </section>
        </>
      )}

      {/* ═══════════ RELATED ═══════════ */}
      {related.length > 0 && (
        <Section tone="white" className="border-t border-black/10">
          <Reveal>
            <Label>Elsewhere in the Group</Label>
          </Reveal>
          <div className="mt-10 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r, i) => (
              <Reveal key={r.slug} delay={i * 80}>
                <Link href={`/group/${r.slug}`} className="group flex flex-col gap-4">
                  <Starburst size={28} accent={r.accent} core="var(--color-navy)" />
                  <h3 className="text-[1.1rem] font-semibold leading-tight text-navy transition-colors group-hover:text-gold">{r.name}</h3>
                  <p className="text-sm font-normal leading-relaxed text-muted">{r.body}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </Section>
      )}
    </div>
  );
}
