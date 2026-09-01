import type { Metadata } from "next";
import { ComingSoon } from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "For Investors",
};

export default function InvestorsPage() {
  return (
    <ComingSoon
      title="For Investors"
      accent="#265DFE"
      note="A dedicated page for investors reviewing the Orenda Group structure is in preparation. In the meantime, reach out directly through the contact page."
    />
  );
}
