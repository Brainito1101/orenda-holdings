import type { MetadataRoute } from "next";
import { NOINDEX_PATHS, SITE_URL } from "@/lib/seo";

/** Served at /robots.txt. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Placeholder and sample-content routes. These also carry a noindex
      // robots meta tag, which is what actually keeps them out of the index —
      // a Disallow only stops the crawl.
      disallow: [...NOINDEX_PATHS],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
