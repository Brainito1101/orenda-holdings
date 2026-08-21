import type { Metadata } from "next";
import { ComingSoon } from "@/components/ComingSoon";

export const metadata: Metadata = { title: "For Founders" };

export default function Page() {
  return <ComingSoon title="For Founders" />;
}
