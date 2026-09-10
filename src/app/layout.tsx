import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SITE_NAME, SITE_URL } from "@/lib/seo";
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

/**
 * Site-wide defaults. Each page supplies its own title, description, keywords
 * and canonical via `pageMetadata()`; what lives here is only the part that is
 * genuinely shared — the origin every relative URL resolves against, the title
 * template, and a fallback title/description for any route that forgets.
 */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Business & Investment Group`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "A diversified business and investment group bringing advisory, capital, lending, real estate, legal and digital together under one roof.",
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  formatDetection: { telephone: false, address: false, email: false },
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
