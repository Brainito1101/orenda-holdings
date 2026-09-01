import type { Metadata } from "next";
import { ComingSoon } from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "For Founders",
};

export default function FoundersPage() {
  return (
    <ComingSoon
      title="For Founders"
      accent="#D4145A"
      note="A dedicated page for founders seeking capital and operating support is in preparation. In the meantime, reach out directly through the contact page."
    />
  );
}
