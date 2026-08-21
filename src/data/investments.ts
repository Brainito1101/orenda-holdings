/**
 * Portfolio entries.
 *
 * DEMO CONTENT. Every record is marked `sample: true` and renders with a
 * visible tag. These are structural placeholders showing the layout, not
 * real holdings. Replace with genuine positions before this is published.
 */

export type Investment = {
  name: string;
  sector: string;
  stage: string;
  year: string;
  note: string;
  accent: string;
  sample?: boolean;
};

export const INVESTMENTS: Investment[] = [
  {
    name: "Portfolio company",
    sector: "Financial services",
    stage: "Majority",
    year: "2024",
    note: "Lending distribution platform operating across banks and NBFCs.",
    accent: "var(--color-v-finserve)",
    sample: true,
  },
  {
    name: "Portfolio company",
    sector: "Real estate",
    stage: "Development",
    year: "2024",
    note: "Residential and plotting development in western India.",
    accent: "var(--color-v-realtors)",
    sample: true,
  },
  {
    name: "Portfolio company",
    sector: "Digital",
    stage: "Majority",
    year: "2025",
    note: "Performance and brand studio serving trust-led categories.",
    accent: "var(--color-v-digital)",
    sample: true,
  },
  {
    name: "Portfolio company",
    sector: "Hospitality",
    stage: "Minority",
    year: "2025",
    note: "Holiday home and stay assets held outside India.",
    accent: "var(--color-v-star)",
    sample: true,
  },
  {
    name: "Portfolio company",
    sector: "Consumer",
    stage: "Seed",
    year: "2026",
    note: "Personal care brand within the allied ventures tier.",
    accent: "var(--color-v-creative)",
    sample: true,
  },
];
