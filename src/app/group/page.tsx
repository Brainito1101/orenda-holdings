import type { Metadata } from "next";
import { ComingSoon } from "@/components/ComingSoon";

export const metadata: Metadata = { title: "The Group" };

export default function Page() {
  return <ComingSoon title="The Group" />;
}
