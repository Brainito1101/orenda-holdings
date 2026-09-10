import type { Metadata } from "next";
import { ComingSoon } from "@/components/ComingSoon";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "For Founders",
  description:
    "For founders seeking capital and operating support from the Orenda Group. A dedicated page is in preparation, so please reach out through the contact page.",
  keywords: ["founders", "startup capital", "operating support", "fundraising", "Orenda Capital"],
  path: "/founders",
  noindex: true,
});

export default function FoundersPage() {
  return (
    <ComingSoon
      title="For Founders"
      accent="#D4145A"
      note="A dedicated page for founders seeking capital and operating support is in preparation. In the meantime, reach out directly through the contact page."
    />
  );
}
