import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { VERTICALS } from "@/data/verticals";

/**
 * Served at /sitemap.xml.
 *
 * Indexable routes only. /investments, /investors and /founders are left out
 * deliberately: they carry placeholder or sample content and are marked
 * noindex, and listing a noindex URL here just asks Google to crawl something
 * it has been told to drop.
 *
 * The eight vertical URLs are generated from VERTICALS, so adding a company to
 * the data file puts it in the sitemap without a second edit.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: SITE_URL, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/group`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/about`, lastModified, changeFrequency: "yearly", priority: 0.8 },
    { url: `${SITE_URL}/contact`, lastModified, changeFrequency: "yearly", priority: 0.8 },
    ...VERTICALS.map((v) => ({
      url: `${SITE_URL}/group/${v.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    { url: `${SITE_URL}/leadership`, lastModified, changeFrequency: "yearly", priority: 0.7 },
  ];
}
