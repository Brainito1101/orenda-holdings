import type { Metadata } from "next";
import { ComingSoon } from "@/components/ComingSoon";

export const metadata: Metadata = { title: "Our Investments" };

export default function Page() {
  return <ComingSoon title="Our Investments" />;
}
