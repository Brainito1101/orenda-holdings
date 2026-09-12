import type { Metadata } from "next";
import { AmbientMark } from "@/components/AmbientMark";
import { InquiryForm } from "@/components/InquiryForm";
import { Reveal } from "@/components/Reveal";
import { Container, HERO_Y, Label, Section } from "@/components/ui";
import { CONTACT } from "@/data/site";
import { ENQUIRY_VERTICAL_VALUES } from "@/data/verticals";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description:
    "Get in touch with Orenda Holdings. Email, office hours and both our Ahmedabad offices in Prahlad Nagar and Thaltej, plus an enquiry form.",
  keywords: [
    "contact Orenda Holdings",
    "Orenda Holdings Ahmedabad",
    "Prahlad Nagar office",
    "Thaltej office",
    "enquiry",
    "office address",
  ],
  path: "/contact",
});

/** Small stacked block: micro-label above its value. Keeps the column rhythm even. */
function Detail({
  label,
  children,
  delay = 0,
}: {
  label: string;
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <Reveal delay={delay}>
      <Label>{label}</Label>
      <div className="mt-4">{children}</div>
    </Reveal>
  );
}

/**
 * Reads `?vertical=` so arriving from a company page pre-selects that company
 * in the form — nobody should have to re-pick what they just clicked from.
 *
 * Taking it from searchParams on the server rather than with useSearchParams
 * on the client is deliberate: the hook would pull the form out of the
 * prerender, and seeding React state from it in an effect both trips
 * react-hooks/set-state-in-effect and causes a hydration mismatch. This way
 * the value is already in the HTML on first paint. The trade-off is that this
 * one route is server-rendered per request rather than static.
 */
export default async function ContactPage(props: PageProps<"/contact">) {
  const { vertical } = await props.searchParams;
  // Arrives from the URL, so it is untrusted; the action re-checks it too.
  const preselected =
    typeof vertical === "string" && ENQUIRY_VERTICAL_VALUES.includes(vertical) ? vertical : "";

  return (
    <div className="flex flex-col">
      {/* ═══════════ HERO ═══════════ */}
      <header
        className={`relative flex min-h-[45svh] items-center overflow-hidden bg-ivory md:min-h-[50svh] lg:min-h-[55svh] ${HERO_Y}`}
      >
        <AmbientMark
          size={520}
          stroke="#09767C"
          opacity={0.2}
          className="pointer-events-none absolute -right-[10%] top-1/2 -translate-y-1/2 md:right-[2%] lg:right-[6%]"
        />
        <Container className="relative w-full">
          <Reveal>
            <Label>Contact</Label>
            <h1 className="mt-6 max-w-3xl text-[2.35rem] leading-[1.08] text-navy sm:text-[2.9rem] md:text-[3.3rem] lg:text-[54px] lg:leading-[1.1] 2xl:text-[64px] 3xl:text-[72px]">
              Let&rsquo;s build what matters.
            </h1>
            <p className="mt-8 max-w-2xl text-[1.05rem] font-normal leading-relaxed text-muted">
              Whether you&rsquo;re a promoter, an investor, or a business exploring the group -
              we&rsquo;d like to hear from you.
            </p>
          </Reveal>
        </Container>
      </header>

      {/* ═══════════ DETAILS + FORM ═══════════ */}
      <Section tone="white" className="border-t border-black/10">
        <div className="grid gap-12 md:gap-16 lg:grid-cols-12 lg:gap-12 xl:gap-24">
          {/* details column */}
          <div className="flex flex-col gap-10 md:gap-12 lg:col-span-5">
            <Detail label="Email">
              <ul className="flex flex-col gap-5">
                {CONTACT.emails.map((e) => (
                  <li key={e.address}>
                    <a
                      href={`mailto:${e.address}`}
                      className="inline-block break-words py-1 text-[1.15rem] text-navy transition-colors hover:text-gold sm:text-[1.2rem]"
                    >
                      {e.address}
                    </a>
                    <p className="text-[0.9rem] font-normal leading-relaxed text-muted">{e.label}</p>
                  </li>
                ))}
              </ul>
            </Detail>

            {CONTACT.phone && (
              <Detail label="Phone" delay={60}>
                <a
                  href={`tel:${CONTACT.phone.replace(/[^+\d]/g, "")}`}
                  className="inline-block py-1 text-[1.15rem] text-navy transition-colors hover:text-gold sm:text-[1.2rem]"
                >
                  {CONTACT.phone}
                </a>
              </Detail>
            )}

            {CONTACT.offices.map((office, i) => (
              <Detail key={office.label} label={office.label} delay={120 + i * 60}>
                <address className="text-[1.02rem] font-normal not-italic leading-relaxed text-navy">
                  {office.lines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
              </Detail>
            ))}

            <Detail label="Office hours" delay={240}>
              <p className="text-[1.02rem] font-normal leading-relaxed text-navy">{CONTACT.hours}</p>
            </Detail>
          </div>

          {/* form column */}
          <div className="lg:col-span-7">
            <Reveal delay={100}>
              <div className="border border-black/10 bg-ivory p-7 sm:p-10 lg:p-12">
                <h2 className="text-[1.6rem] leading-tight text-navy sm:text-[1.8rem] lg:text-[2rem] lg:font-semibold">
                  Send an enquiry
                </h2>
                <p className="mt-3 max-w-md text-[1rem] font-normal leading-relaxed text-muted">
                  Tell us a little about what you need and the right team will come back to you.
                </p>
                <div className="mt-9">
                  <InquiryForm defaultVertical={preselected} />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>
    </div>
  );
}
