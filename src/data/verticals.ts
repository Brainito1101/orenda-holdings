/**
 * The single source of truth for the eight verticals.
 *
 * Drives: the home orbit, /group, the eight /group/[slug] pages,
 * the footer column and the nav dropdown.
 *
 * On the previous WordPress site the orbit's panel IDs were stale
 * template slugs (#legal rendered Financial Services, #hr rendered
 * Legal). Everything reads from this file so that cannot recur.
 */

export type Leader = {
  name: string;
  role: string;
  credentials?: string;
};

/**
 * Search copy, written per vertical rather than derived from `description`.
 * Those run 104-535 characters, well past the ~160 Google renders, and read as
 * prose rather than as a result snippet. `npm run seo:check` asserts the
 * lengths. `title` is used verbatim (it already carries the company name, so
 * the "| Orenda Holdings" template would push it past 60).
 */
export type VerticalSeo = {
  title: string;
  description: string;
  keywords: string[];
};

export type Vertical = {
  slug: string;
  name: string;
  short: string;
  eyebrow: string;
  seo: VerticalSeo;
  /** Sub-brand accent from the brand book, p27. */
  accent: string;
  accentName: string;
  /** Big headline used on the vertical's own page. */
  tagline: string;
  /** Short line used in the orbit / home summary. */
  promise: string;
  /** Short paragraph used in the orbit / home summary. */
  body: string;
  /** Fuller intro paragraph(s) for the detail page. Falls back to `body`. */
  description?: string;
  /** A second, shorter descriptive line some verticals carry (e.g. Orenda Realtors). */
  subline?: string;
  whatWeDoLabel?: string;
  whatWeDo?: string[];
  whatWeDoGrouped?: { title: string; items: string[] }[];
  whoItsFor?: string[];
  difference?: string;
  differenceList?: string[];
  leadership?: Leader[];
  leadershipNote?: string;
  /** Set for verticals that carry their own site, e.g. Orenda Financial Services. */
  externalSite?: { label: string; href: string };
  /** A closing call to action line specific to this vertical. */
  cta?: string;
  related: string[];
  /** Full detail copy not yet supplied by the client — page renders a holding state. */
  pending?: boolean;
};

export const VERTICALS: Vertical[] = [
  {
    slug: "advisors",
    seo: {
      title: "Orenda Advisors | Tax & Transaction Advisory",
      description:
        "Multidisciplinary tax, corporate, transaction and regulatory advisory for promoters, investors and businesses, from restructuring and M&A to IPO support.",
      keywords: ["tax advisory", "transaction advisory", "corporate restructuring", "mergers and acquisitions", "GIFT City advisory", "virtual CFO", "Ahmedabad"],
    },
    name: "Orenda Advisors",
    short: "Advisors",
    eyebrow: "Advisory",
    accent: "#00AAC6",
    accentName: "Ocean Blue",
    tagline: "Advising for Generational Wealth.",
    promise: "Clarity before action.",
    body: "Multidisciplinary tax, corporate, regulatory, and transaction advisory for promoters, investors, and businesses.",
    description:
      "A multidisciplinary advisory firm providing integrated tax, corporate, transaction, financial, regulatory and strategic advisory solutions to businesses, promoters, investors and families.",
    whatWeDoLabel: "What we do",
    whatWeDo: [
      "Direct Tax & International Tax Advisory",
      "Corporate Restructuring & Reorganisation",
      "Mergers & Acquisitions",
      "Divestment & Transaction Advisory",
      "Inbound & Outbound Investment Advisory",
      "Fundraising & Capital Structuring",
      "AIF Formation & Advisory",
      "GIFT City / IFSC Advisory & Set-up",
      "SME & Main Board IPO Advisory",
      "Virtual CFO Services",
      "ERP Implementation & Business Process Advisory",
      "KPO",
      "Corporate & Secretarial Advisory",
    ],
    whoItsFor: [
      "Promoters and entrepreneurs",
      "Startups and growing businesses",
      "Corporates",
      "Investors and HNIs",
      "Family-owned businesses",
      "Funds and fund managers",
      "AIFs",
      "Companies preparing for IPOs",
      "Businesses undertaking M&A or restructuring",
      "Entities expanding into GIFT City / IFSC",
    ],
    difference:
      "We combine taxation, finance, corporate law, securities, and regulatory expertise under one roof - integrated advice instead of fragmented professional services, backed by technology and strategic advisory capability.",
    leadership: [
      { name: "CA Heet Sedani", role: "Partner" },
      { name: "CA Meet Sedani", role: "Partner" },
      { name: "CS Bhargavi Gupta", role: "Partner" },
    ],
    leadershipNote:
      "A leadership team spanning taxation, finance, corporate law, securities, and regulatory compliance.",
    cta: "Advising for Generational Wealth",
    related: ["capital", "legal", "financial-services"],
  },
  {
    slug: "financial-services",
    seo: {
      title: "Orenda Financial Services | Loan Advisory",
      description:
        "Loan advisory comparing your profile across 50+ banks and NBFCs, then structuring and negotiating the deal, from eligibility check through to disbursement.",
      keywords: ["loan advisory", "debt syndication", "business loan", "home loan", "loan against property", "NBFC", "Ahmedabad"],
    },
    name: "Orenda Financial Services",
    short: "Financial Services",
    eyebrow: "Financial services",
    accent: "#265DFE",
    accentName: "Ultramarine Blue",
    tagline: "We help individuals and businesses secure the right loan, from the right lender, at the best possible terms.",
    promise: "Borrow with confidence.",
    body: "Loan advisory across 50+ banks and NBFCs - the right lender, the right terms, every time.",
    description:
      "Founded in 2017, Orenda Financial Services is a loan advisory firm built on a simple observation: most borrowers accept the first offer they get, simply because no one ever showed them what else was out there. Our technology compares your profile against 50+ banks and NBFCs to find lenders that genuinely suit you, and our team structures and negotiates the deal on your behalf, from checking eligibility to disbursement.",
    whatWeDoLabel: "What we offer",
    whatWeDo: ["Home Loans", "Business Loans", "Loan against Property", "Personal Loans", "Professional Loans"],
    whoItsFor: ["MSME and business owners", "Salaried professionals", "Doctors", "CAs and professionals", "Property owners and home buyers"],
    differenceList: [
      "You see what you'll actually get - real terms across 50+ lenders, not a \"rates starting from\" teaser, before anything touches your CIBIL score.",
      "We pick the structure that fits you - term loan, OD, dropline, LAP matched to how your income actually comes in.",
      "You talk to people who know loans, no call centre scripts.",
      "We don't disappear after approval - support through paperwork, approval, and balance transfers down the line.",
    ],
    leadership: [
      { name: "Harsh Bhojani", role: "Founder & Managing Director", credentials: "Chartered Accountant" },
      { name: "Sanket Parekh", role: "Chief Business Officer & Executive Director", credentials: "Chartered Accountant" },
      { name: "Pranshu Rughani", role: "Strategic Advisor", credentials: "Engineer" },
    ],
    externalSite: { label: "orendafinserv.com", href: "https://orendafinserv.com" },
    related: ["advisors", "realtors", "capital"],
  },
  {
    slug: "capital",
    seo: {
      title: "Orenda Capital | Investment & Capital Advisory",
      description:
        "Investment and capital advisory for businesses, promoters, investors and funds structuring opportunity with clarity, discipline and long-term value in mind.",
      keywords: ["capital advisory", "investment advisory", "fundraising", "capital structuring", "private equity", "AIF"],
    },
    name: "Orenda Capital",
    short: "Capital",
    eyebrow: "Capital",
    accent: "#7248F2",
    accentName: "Iris",
    tagline: "Investing in possibility.",
    promise: "Investing in possibility.",
    body: "Capital markets and investment structuring.",
    description:
      "Investment and capital advisory for businesses, promoters, investors and funds looking to structure opportunity with clarity, discipline and long-term value in mind.",
    whatWeDoLabel: "What we do",
    whatWeDo: [
      "Investment advisory",
      "Venture capital and private equity access",
      "AIF-related advisory",
      "IPO advisory",
      "Investment banking support",
    ],
    whoItsFor: ["Founders raising capital", "Investors and HNIs", "Funds", "Merchant and investment bankers"],
    related: ["advisors", "financial-services", "creative-holdings"],
    pending: true,
  },
  {
    slug: "realtors",
    seo: {
      title: "Orenda Realtors | Real Estate Development",
      description:
        "Ahmedabad-based developer of residential, commercial and plotting projects, with strategic real estate investment guidance for long-term wealth creation.",
      keywords: ["real estate development", "Ahmedabad property", "residential projects", "commercial real estate", "plotting development", "real estate investment"],
    },
    name: "Orenda Realtors",
    short: "Realtors",
    eyebrow: "Realtors",
    accent: "#E39C1F",
    accentName: "Quiet Gold",
    tagline: "Creating Landmark Developments with Purpose, Precision, and Trust.",
    promise: "Landmark residential, commercial, and plotting developments across Ahmedabad, built on precision and trust.",
    body: "Landmark residential, commercial, and plotting developments across Ahmedabad, built on precision and trust.",
    description:
      "An Ahmedabad-based real estate development company creating residential, commercial, and plotting developments across strategically selected locations, combining market intelligence, meticulous planning, premium quality, and flawless execution. Every project is designed with modern architecture, premium amenities, advanced technologies, and environmentally responsible construction practices. Beyond development, we provide strategic real estate investment guidance to help clients build long-term wealth through future-ready assets.",
    subline: "Strategic Land Investments that reflect innovation, quality, and trust.",
    whatWeDoLabel: "What we offer",
    whatWeDo: [
      "Residential Developments",
      "Commercial Developments",
      "Mixed-Use Developments",
      "Plotting & Township Developments",
      "Land Acquisition & Development",
      "Strategic Land Investments",
    ],
    leadership: [{ name: "Karan Rupareliya", role: "Vertical Head & Partner" }],
    related: ["financial-services", "star-holiday-homes", "legal"],
  },
  {
    slug: "legal",
    seo: {
      title: "Orenda Legal | Litigation & Legal Advisory",
      description:
        "Dispute resolution and legal advisory before the Supreme Court, High Courts and statutory tribunals, across civil, criminal and commercial matters.",
      keywords: ["litigation", "legal advisory", "dispute resolution", "Supreme Court", "High Court", "commercial litigation", "arbitration"],
    },
    name: "Orenda Legal",
    short: "Legal",
    eyebrow: "Legal",
    accent: "#5B3FA8",
    accentName: "Violet",
    tagline: "Strategic dispute resolution and advisory before the Supreme Court, High Courts, and statutory tribunals.",
    promise: "Strategic legal counsel for complex matters.",
    body: "Strategic dispute resolution and advisory before the Supreme Court, High Courts, and statutory tribunals.",
    description:
      "A premier legal practice dedicated to delivering strategic, results-oriented dispute resolution and comprehensive advisory services across diverse sectors. Our vertical specialises in complex civil, criminal, and commercial litigation, representing clients before the Supreme Court of India, various High Courts, and specialised statutory tribunals with robust legal representation, meticulous drafting, and strategic advisory to safeguard client interests.",
    whatWeDoLabel: "What we offer",
    whatWeDo: [
      "Supreme Court & High Court Litigation",
      "Constitutional Law",
      "Commercial & Corporate Disputes",
      "Civil Litigation",
      "Criminal Defense",
      "Intellectual Property Rights",
      "Arbitration & Dispute Resolution",
      "Legal Drafting & Opinions",
      "Corporate Legal Advisory",
    ],
    whoItsFor: [
      "Corporates & businesses",
      "Start-ups",
      "MSMEs",
      "High-net worth individuals",
      "Property owners & developers",
      "Professionals & entrepreneurs",
      "Individuals seeking civil or criminal legal remedies",
    ],
    leadership: [
      { name: "Hemal Shah", role: "Advocate", credentials: "BSc LLB, LLM (Criminology), Registered Patent Attorney, Gujarat High Court" },
    ],
    related: ["advisors", "realtors", "capital"],
  },
  {
    slug: "digital",
    seo: {
      title: "Orenda Digital | Digital Growth Partner",
      description:
        "A digital growth partner combining branding, content, technology and data intelligence to deliver marketing with measurable impact on business results.",
      keywords: ["digital marketing", "branding", "performance marketing", "SEO", "content strategy", "web development"],
    },
    name: "Orenda Digital",
    short: "Digital",
    eyebrow: "Digital",
    accent: "#DF5123",
    accentName: "Flame",
    tagline: "Transforming Businesses Through Digital Excellence.",
    promise: "Brand, content, and performance marketing for businesses that want to lead.",
    body: "Brand, content, and performance marketing for businesses that want to lead.",
    description:
      "A strategic digital growth partner for businesses that aspire to lead, innovate, and scale. We integrate branding, content, technology, and data intelligence to deliver marketing that drives measurable business impact - powered by real-world financial expertise, driven by digital innovation.",
    whatWeDoLabel: "What we offer",
    whatWeDoGrouped: [
      {
        title: "Strategy & Management",
        items: ["Social media strategy across LinkedIn, Instagram, WhatsApp, Facebook, YouTube, X", "Performance Marketing (Meta & Google Ads)"],
      },
      {
        title: "Creative Services",
        items: ["Branding & creative design", "Video editing", "Content creation"],
      },
      {
        title: "Technical Development",
        items: ["Website design & development", "SEO"],
      },
    ],
    whoItsFor: ["Financial services", "Healthcare & wellness", "Real estate", "Professional & corporate services", "Founder & executive personal branding"],
    difference: "Powered by real-world financial expertise, driven by digital innovation.",
    leadership: [{ name: "Mansi", role: "Co-founder" }],
    cta: "Book Your Growth Audit",
    related: ["creative-holdings", "financial-services", "realtors"],
  },
  {
    slug: "creative-holdings",
    seo: {
      title: "Orenda Creative Holdings | Brand & Media",
      description:
        "Orenda's creative, brand and media interests, supporting businesses with communication-led thinking, content direction and brand building across the Group.",
      keywords: ["creative agency", "brand building", "media", "content direction", "communication strategy"],
    },
    name: "Orenda Creative Holdings",
    short: "Creative Holdings",
    eyebrow: "Creatives",
    accent: "#D4145A",
    accentName: "Crimson",
    tagline: "Ideas as market-facing assets.",
    promise: "Ideas as market-facing assets.",
    body: "Creative, brand and media-led business assets built to strengthen visibility, communication and enterprise value within the Group.",
    description:
      "Creative Holdings brings together Orenda's creative, brand and media interests, supporting businesses with communication-led thinking, content direction, brand building and media opportunities.",
    whoItsFor: ["Group businesses", "Media partners", "Brand-led ventures"],
    related: ["digital", "capital", "advisors"],
    pending: true,
  },
  {
    slug: "star-holiday-homes",
    seo: {
      title: "Orenda Star Holiday Homes | Hospitality",
      description:
        "The Group's presence in global hospitality and holiday home opportunities, built around lifestyle, guest experience and long-term asset value.",
      keywords: ["holiday homes", "hospitality investment", "lifestyle assets", "vacation homes", "hospitality assets"],
    },
    name: "Orenda Star Holiday Homes",
    short: "Star Holiday Homes",
    eyebrow: "Hospitality",
    accent: "#09767C",
    accentName: "Orenda Teal",
    tagline: "Lifestyle-led value, beyond core finance.",
    promise: "Lifestyle-led value, beyond core finance.",
    body: "Holiday homes and hospitality-led assets within the wider Orenda ecosystem, built around lifestyle, experience and long-term value.",
    description:
      "Star Holiday Homes represents the Group's presence in global hospitality and holiday home opportunities.",
    whoItsFor: ["International investors", "Lifestyle buyers", "Hospitality partners"],
    related: ["realtors", "capital", "advisors"],
    pending: true,
  },
];

export const bySlug = (slug: string) => VERTICALS.find((v) => v.slug === slug);

/**
 * Options for the enquiry form's vertical dropdown, in the order they appear.
 * `value` is what gets stored in `enquiries.vertical`.
 *
 * Shared by the form and the server action so the rendered choices and the
 * accepted values cannot drift apart — a select is trivially editable in the
 * browser, so the action validates against this list rather than trusting it.
 */
export const ENQUIRY_VERTICALS: { value: string; label: string }[] = [
  ...VERTICALS.map((v) => ({ value: v.slug, label: v.name })),
  { value: "general", label: "General enquiry / not sure" },
];

export const ENQUIRY_VERTICAL_VALUES = ENQUIRY_VERTICALS.map((o) => o.value);

/**
 * Tier 2, independent brands from the brand book's architecture.
 * Carry their own identity; no Orenda lockup. (Decision D1)
 */
export const INDEPENDENT = [
  { name: "SocAcc", note: "A complete society compliance platform." },
  { name: "dabas organic", note: "Personal care and organic products." },
  { name: "Viral X", note: "Media and audience-led ventures." },
  { name: "Future NBFC", note: "Planned, subject to regulatory approval.", planned: true },
];
