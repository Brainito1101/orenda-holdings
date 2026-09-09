import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

/**
 * Substitute. The brand book specifies Stolzl and Acumin Variable, both
 * commercial licences not yet cleared. Manrope stands in for both and is
 * the only family the interface renders.
 */
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
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
      className={`${manrope.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans" style={{ backgroundColor: '#ffffff', color: '#0a1a2f', fontFamily: 'var(--font-manrope), sans-serif' }}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
