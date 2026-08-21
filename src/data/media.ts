/**
 * Media presence: press, podcasts, events, case studies, insights.
 *
 * DEMO CONTENT. Every record is marked `sample: true`. These are structural
 * placeholders, not real coverage. Replace before publishing.
 */

export type MediaKind = "press" | "podcast" | "event" | "case study" | "insight";

export type MediaItem = {
  slug: string;
  kind: MediaKind;
  title: string;
  source: string;
  dateLabel: string;
  href?: string;
  sample?: boolean;
};

export const MEDIA: MediaItem[] = [
  {
    slug: "m1",
    kind: "press",
    title: "Coverage of the Group's formation and structure",
    source: "Publication name",
    dateLabel: "Aug 2026",
    sample: true,
  },
  {
    slug: "m2",
    kind: "podcast",
    title: "The founders on building a multi-sector group",
    source: "Show name",
    dateLabel: "Jul 2026",
    sample: true,
  },
  {
    slug: "m3",
    kind: "event",
    title: "Investor briefing on the Orenda ecosystem",
    source: "Ahmedabad",
    dateLabel: "Jul 2026",
    sample: true,
  },
  {
    slug: "m4",
    kind: "case study",
    title: "Structuring a cross-border holding for an IFSC entity",
    source: "Orenda Advisors",
    dateLabel: "Jun 2026",
    sample: true,
  },
  {
    slug: "m5",
    kind: "insight",
    title: "What lenders actually read in an MSME file",
    source: "Orenda Financial Services",
    dateLabel: "Jun 2026",
    sample: true,
  },
  {
    slug: "m6",
    kind: "press",
    title: "Commentary on capital access for growth businesses",
    source: "Publication name",
    dateLabel: "May 2026",
    sample: true,
  },
];

export const VALUES = [
  { k: "Trust", v: "Every decision must earn confidence before it asks for commitment." },
  { k: "Integrity", v: "Financial ambition must be backed by responsibility and discipline." },
  { k: "Expertise", v: "The Group should sound precise, considered and deeply competent." },
  { k: "Value driven", v: "Growth must lead to real, measurable and protected value." },
  { k: "Global orientation", v: "Built with a mindset that can travel across markets and audiences." },
];
