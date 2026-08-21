import type { Metadata } from "next";
import { ComingSoon } from "@/components/ComingSoon";

export const metadata: Metadata = { title: "For Investors" };

export default function Page() {
  return <ComingSoon title="For Investors" />;
}
