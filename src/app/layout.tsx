import type { Metadata } from "next";
import { Jost, Instrument_Serif, IBM_Plex_Mono } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

/**
 * Substitutes. The brand book specifies Stolzl and Acumin Variable, both
 * commercial licences not yet cleared. Instrument Serif carries the
 * editorial voice; Jost is the closest free relative to Stolzl.
 * See reference/DECISIONS.md.
 */
const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});
const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});
const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://orendagroup.in"),
  title: {
    default: "Orenda Holdings | The force behind enterprise",
    template: "%s | Orenda Holdings",
  },
  description:
    "A multi-sector business and investment group. Eight verticals across capital, advisory, lending, legal, real estate, digital and hospitality.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${instrument.variable} ${jost.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
