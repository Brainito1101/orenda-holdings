import type { Metadata } from "next";

/**
 * Canonical origin. Also fed to `metadataBase` in the root layout so every
 * relative canonical/OG URL resolves against a single value.
 */
export const SITE_URL = "https://orendagroup.in";

export const SITE_NAME = "Orenda Holdings";

/**
 * Targets used when writing the copy below, and asserted by `npm run seo:check`:
 *   title       <= 60 characters (Google truncates the SERP link around there)
 *   description <= 160 characters, >= 70 so it isn't padded out by Google
 *
 * The root layout applies the template `%s | Orenda Holdings`, which costs 18
 * characters, so a page-level title has a 42-character budget. Pages that need
 * the full 60 pass `titleAbsolute` instead.
 */
export const TITLE_MAX = 60;
export const DESC_MIN = 70;
export const DESC_MAX = 160;

const GOOGLE_BOT = {
  index: true,
  follow: true,
  "max-image-preview": "large",
  "max-snippet": -1,
  "max-video-preview": -1,
} as const;

type PageSeo = {
  /** Goes through the `%s | Orenda Holdings` template. */
  title?: string;
  /** Used verbatim, bypassing the template. */
  titleAbsolute?: string;
  description: string;
  keywords: string[];
  /** Route path, e.g. "/about". Resolved against `metadataBase`. */
  path: string;
  /**
   * Set for pages whose content is a placeholder or sample. Keeps thin pages
   * out of the index instead of letting them dilute the real ones.
   */
  noindex?: boolean;
};

/** Builds a page's metadata: title, description, keywords, canonical, robots. */
export function pageMetadata({
  title,
  titleAbsolute,
  description,
  keywords,
  path,
  noindex = false,
}: PageSeo): Metadata {
  return {
    title: titleAbsolute ? { absolute: titleAbsolute } : title,
    description,
    keywords,
    alternates: { canonical: path },
    robots: noindex
      ? { index: false, follow: true, googleBot: { index: false, follow: true } }
      : { index: true, follow: true, googleBot: GOOGLE_BOT },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      url: path,
      title: titleAbsolute ?? (title ? `${title} | ${SITE_NAME}` : SITE_NAME),
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: titleAbsolute ?? (title ? `${title} | ${SITE_NAME}` : SITE_NAME),
      description,
    },
  };
}

/** Routes that should stay out of the sitemap and the index. See `noindex`. */
export const NOINDEX_PATHS = ["/investments", "/investors", "/founders"] as const;
