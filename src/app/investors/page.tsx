import type { Metadata } from "next";
import { ComingSoon } from "@/components/ComingSoon";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "For Investors",
  description:
    "Information for investors reviewing the Orenda Group structure, verticals and opportunities. A dedicated page is in preparation, so please get in touch.",
  keywords: ["investor relations", "Orenda Group investors", "investment opportunities", "group structure"],
  path: "/investors",
  noindex: true,
});

export default function InvestorsPage() {
  return (
    <ComingSoon
      title="For Investors"
      accent="#265DFE"
      note="A dedicated page for investors reviewing the Orenda Group structure is in preparation. In the meantime, reach out directly through the contact page."
    />
  );
}
