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
  /**
   * Path under /public. Optional: where it is absent the card renders as name
   * and role only, rather than falling back to a monogram, so a vertical whose
   * photography hasn't arrived doesn't show a row of placeholders.
   */
  photo?: string;
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
  /**
   * A short hero paragraph. Where it is set, the hero shows this and the fuller
   * `description`/`descriptionMore` move into an Overview section below — some
   * heroes were carrying 400-690 characters of body copy, which buried the
   * headline and the call to action.
   */
  heroLede?: string;
  /** Fuller intro paragraph(s) for the detail page. Falls back to `body`. */
  description?: string;
  /** A second intro paragraph, rendered under `description`. */
  descriptionMore?: string;
  /** A vision statement, rendered as a pull quote in its own band. */
  vision?: string;
  /**
   * One highlighted item — a current property, initiative or project —
   * rendered as its own panel under the offerings.
   */
  spotlight?: { label: string; title: string; body: string };
  /** A second, shorter descriptive line some verticals carry (e.g. Orenda Realtors). */
  subline?: string;
  whatWeDoLabel?: string;
  whatWeDo?: string[];
  whatWeDoGrouped?: { title: string; items: string[] }[];
  /**
   * Offerings that carry a description rather than being a bare label, e.g.
   * Orenda Creatives. Takes precedence over `whatWeDo` where both are set.
   */
  whatWeDoDetailed?: { title: string; body: string }[];
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
      { name: "CA Heet Sedani", role: "Partner", photo: "/team/heet-sedani.jpg" },
      { name: "CA Meet Sedani", role: "Partner", photo: "/team/meet-sedani.jpg" },
      { name: "CS Bhargavi Gupta", role: "Partner", photo: "/team/bhargavi-gupta.jpg" },
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
    heroLede:
      "Loan advisory across 50+ banks and NBFCs, structured and negotiated on your behalf.",
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
      { name: "Harsh Bhojani", role: "Founder & Managing Director", credentials: "Chartered Accountant", photo: "/team/harsh-bhojani.jpg" },
      { name: "Sanket Parekh", role: "Chief Business Officer & Executive Director", credentials: "Chartered Accountant", photo: "/team/sanket-parekh.jpg" },
      { name: "Pranshu Rughani", role: "Strategic Advisor", credentials: "Engineer", photo: "/team/pranshu-rughani.jpg" },
    ],
    cta: "Looking for a home, business, or property loan? Talk to us before you accept the first offer.",
    externalSite: { label: "orendafinserv.com", href: "https://orendafinserv.com" },
    related: ["advisors", "realtors", "capital"],
  },
  {
    slug: "capital",
    seo: {
      title: "Orenda Capital | Fund Raising & M&A Advisory",
      description:
        "Fund raising for IPOs, pre-IPO rounds, AIF structuring, mergers and acquisitions, and real estate projects, handled by one advisory team end to end.",
      keywords: ["IPO fund raising", "pre-IPO capital", "AIF structuring", "mergers and acquisitions", "real estate funding", "capital advisory", "investment banking"],
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
    whatWeDoDetailed: [
      {
        title: "Fund Raising for IPOs",
        body: "End-to-end support for companies preparing to go public - from readiness assessment and structuring through to investor positioning and capital raise execution, aimed at a smooth, well-structured listing.",
      },
      {
        title: "Fund Raising for Pre-IPOs",
        body: "Structuring and raising pre-IPO capital for companies gearing up for a public listing, helping promoters bring in the right investors at the right stage without diluting long-term value.",
      },
      {
        title: "AIF Structuring & Fund Raising",
        body: "Structuring Alternative Investment Funds and raising capital for them - helping fund managers and promoters set up compliant, well-structured vehicles and connect with the right pool of investors.",
      },
      {
        title: "Mergers & Acquisitions",
        body: "Advisory across the M&A lifecycle - identifying opportunities, structuring the deal, and supporting negotiation and execution - for businesses looking to grow, consolidate, or exit through a merger or acquisition.",
      },
      {
        title: "Fund Raising for Real Estate Projects",
        body: "Structuring and raising capital specifically for real estate developments - connecting developers and promoters with investors and funding sources suited to a project's scale, stage, and timeline.",
      },
    ],
    whoItsFor: [
      "Businesses preparing for an IPO or pre-IPO raise",
      "Promoters and funds structuring an AIF",
      "Companies pursuing mergers or acquisitions",
      "Real estate developers and projects seeking capital",
    ],
    difference:
      "Fund-raising expertise across a genuinely wide spread - from IPO and pre-IPO capital to AIF structuring, M&A, and real estate project funding - under one advisory team, so clients don't need separate specialists for each stage or asset class.",
    cta: "Preparing to raise capital, structure a fund, or explore an acquisition? Talk to our team.",
    related: ["advisors", "financial-services", "creative-holdings"],
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
    heroLede:
      "Landmark residential, commercial, and plotting developments across Ahmedabad.",
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
    whoItsFor: [
      "Homebuyers",
      "Property investors",
      "Landowners exploring development or joint ventures",
      "Businesses seeking commercial or mixed-use space",
    ],
    difference:
      "Every project is backed by market intelligence and meticulous planning, not just construction - plus post-sale investment guidance, so a purchase is the start of building long-term wealth, not the end of the relationship.",
    cta: "Looking to buy, invest, or explore a land partnership? Talk to our team.",
    leadership: [{ name: "Karan Rupareliya", role: "Vertical Head & Partner", photo: "/team/karan-rupareliya.jpg" }],
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
    heroLede:
      "Litigation and advisory across civil, criminal, and commercial matters.",
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
    difference:
      "Representation that goes up to the Supreme Court itself, paired with the same meticulous, strategy-first approach at every level below it - so clients get top-court-caliber drafting and advisory even on matters that never leave a High Court or tribunal.",
    leadership: [
      { name: "Hemal Shah", role: "Advocate", credentials: "BSc LLB, LLM (Criminology), Registered Patent Attorney, Gujarat High Court", photo: "/team/hemal-shah.jpg" },
    ],
    cta: "Facing a dispute, or need counsel before one starts? Talk to our team.",
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
    leadership: [{ name: "Mansi", role: "Co-founder", photo: "/team/mansi.jpg" }],
    cta: "Book Your Growth Audit",
    related: ["creative-holdings", "financial-services", "realtors"],
  },
  {
    /**
     * Repositioned from "Orenda Creative Holdings" (brand/media) to
     * "Orenda Creatives" (culture and heritage). The slug is left alone so the
     * existing /group/creative-holdings URL keeps working.
     */
    slug: "creative-holdings",
    seo: {
      title: "Orenda Creatives | Culture & Heritage",
      description:
        "The culture and heritage vertical of Orenda Group: theatre, live shows, exhibitions and heritage preservation that reconnect communities with their roots.",
      keywords: ["cultural heritage", "theatre production", "heritage preservation", "exhibitions", "cultural programming", "live shows", "cultural CSR"],
    },
    name: "Orenda Creatives",
    short: "Creatives",
    eyebrow: "Creatives",
    accent: "#D4145A",
    accentName: "Crimson",
    tagline: "Reviving Culture. Reimagining Heritage. Reconnecting Roots.",
    promise: "Cultural value, alongside financial and digital.",
    body: "The culture and heritage vertical - theatre, live shows, exhibitions and heritage preservation that reconnect communities with their roots.",
    heroLede:
      "The culture and heritage vertical of Orenda Group.",
    description:
      "Orenda Creatives is the culture and heritage vertical of Orenda Group, dedicated to reviving, preserving, and celebrating cultural values through immersive experiences. We bring together theatre, live shows, exhibitions, and heritage preservation initiatives that reconnect communities with their roots while creating meaningful, memorable experiences for modern audiences.",
    descriptionMore:
      "Where other verticals of Orenda Group build financial and digital value, Orenda Creatives builds cultural value - ensuring that as businesses and communities grow, the stories, traditions, and identities that shape them are not left behind.",
    vision:
      "To be the bridge between the region's rich cultural heritage and the modern audience - reviving traditions, empowering artists, and creating platforms where culture is not just remembered, but experienced.",
    whatWeDoLabel: "What we offer",
    whatWeDoDetailed: [
      {
        title: "Theatre & Shows",
        body: "Producing and staging theatrical performances and live shows that bring cultural narratives, folklore, and history to life for contemporary audiences.",
      },
      {
        title: "Exhibitions",
        body: "Curating exhibitions that showcase art, craft, history, and heritage - creating immersive, educational, and experiential spaces for the public.",
      },
      {
        title: "Heritage Preservation",
        body: "Documenting, protecting, and reviving cultural practices, art forms, and traditions at risk of being forgotten.",
      },
      {
        title: "Cultural Programming",
        body: "Designing and curating culture-focused events, festivals, and community programs that increase engagement with local and regional heritage.",
      },
    ],
    // TODO: current initiative - the Radha Rani Show. Held back deliberately:
    // the full name and description were flagged as not final, and a bare title
    // with no description would read as unfinished on a live page.
    whoItsFor: [
      "Cultural institutions",
      "Event and festival organizers",
      "Heritage bodies and trusts",
      "Corporates seeking cultural CSR or brand association",
      "Audiences and communities looking to engage with regional history and tradition",
    ],
    differenceList: [
      "Backed by the trust, resources, and network of Orenda Group.",
      "A dedicated focus on authentic cultural revival, not just entertainment.",
      "Multidisciplinary expertise spanning theatre, exhibition curation, and heritage research.",
      "A growing portfolio of live and ongoing cultural initiatives.",
    ],
    // TODO: leadership - the supplied entry was a placeholder
    // ("Mr. / Ms. XYZZZZZZZZZZZZ"), so the section is omitted until a real
    // name and role arrive rather than shipping filler.
    cta: "Interested in a cultural collaboration, sponsorship, or event partnership with Orenda Creatives?",
    related: ["digital", "capital", "advisors"],
  },
  {
    /**
     * Repositioned from "Orenda Star Holiday Homes" (hospitality investment)
     * to "Orenda Holiday Homes" (premium short-term rental). The slug is left
     * alone so the existing /group/star-holiday-homes URL keeps working.
     */
    slug: "star-holiday-homes",
    seo: {
      title: "Orenda Holiday Homes | Premium Rentals",
      description:
        "Premium, professionally managed holiday accommodation in Dubai for families, groups and corporate travellers, with direct booking and OTA availability.",
      keywords: ["holiday homes", "Dubai holiday rental", "short-term rental", "luxury villa Dubai", "corporate long stay", "serviced accommodation"],
    },
    name: "Orenda Holiday Homes",
    short: "Holiday Homes",
    eyebrow: "Hospitality",
    accent: "#09767C",
    accentName: "Orenda Teal",
    tagline: "A premium holiday home rental vertical of Orenda Group.",
    promise: "Premium stays, professionally managed.",
    body: "Premium, professionally managed holiday accommodation for travellers seeking a comfortable, memorable stay.",
    heroLede:
      "Premium, professionally managed holiday accommodation for families, groups and corporate travellers.",
    description:
      "Orenda Holiday Homes is a dedicated hospitality and short-term rental vertical of Orenda Group, established to bring premium, professionally managed holiday accommodation to discerning travellers. Built on the same foundation of trust, precision, and service excellence that defines the Orenda name, Orenda Holiday Homes curates and manages high-end properties designed to deliver a comfortable, memorable stay for every guest.",
    descriptionMore:
      "As part of Orenda Group's expanding real estate and hospitality footprint, Orenda Holiday Homes generates revenue by offering its property on rent and short-term hire, while extending its reach through listings on leading global and regional travel platforms.",
    whatWeDoLabel: "What we offer",
    whatWeDo: [
      "Direct rental and hire of premium holiday property, for short and medium-term stays",
      "Direct bookings via the Orenda Holiday Homes website",
      "Listings on leading Online Travel Agencies (OTAs) and booking platforms",
      "Corporate and long-stay hire arrangements",
      "Professional property management ensuring consistent guest experience and asset upkeep",
      // Airbnb and Booking.com were marked "to be confirmed", so only the
      // confirmed platforms are named here.
      "Multi-platform distribution, currently including MakeMyTrip and Goibibo",
    ],
    spotlight: {
      label: "Current property",
      // TODO: confirm whether this is a penthouse or a villa - the brief said
      // "penthouse/villa", so the type is left out rather than guessed.
      title: "Dubai, UAE",
      body: "Family-friendly luxury living with premium in-home amenities. Designed for families and groups seeking a home away from home, combining spacious living areas with thoughtful amenities.",
    },
    // Supplied as one sentence of three semicolon-separated audiences; split so
    // each reads as its own entry in the tile layout.
    whoItsFor: [
      "Families and groups travelling to Dubai seeking a luxury, home-style stay",
      "Corporate travellers needing long-stay accommodation",
      "Travel agents and OTA users booking premium short-term rentals",
    ],
    differenceList: [
      "Backed by the trust and governance of Orenda Group.",
      "Premium, professionally managed luxury property.",
      "Family-friendly design with thoughtful amenities.",
      "Wide distribution across trusted booking platforms.",
      "Transparent, guest-first hospitality approach.",
    ],
    // TODO: leadership - the supplied entry was a placeholder ("Mr. ABCCCCCC"),
    // so the section is omitted until a real name and role arrive.
    cta: "Looking to book, or interested in a corporate or long-stay arrangement?",
    related: ["realtors", "capital", "advisors"],
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
