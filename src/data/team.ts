/**
 * Leadership records.
 *
 * `photo` points at /public/team/<file>. Where the file is absent the
 * Portrait component falls back to a designed monogram, so the layout
 * is identical whether or not headshots have been supplied yet.
 *
 * Drop headshots into public/team/ using the filenames below.
 * Square crops, 800x800 or larger.
 */

export type Person = {
  slug: string;
  name: string;
  role: string;
  org: string;
  credentials?: string;
  bio?: string;
  photo?: string;
  founder?: boolean;
};

export const FOUNDERS: Person[] = [
  {
    slug: "tarun-shah",
    name: "Tarun Shah",
    role: "Founder",
    org: "Orenda Group",
    credentials: "Chartered Accountant",
    photo: "/team/tarun-shah.jpg",
    founder: true,
    bio: "Tarun Shah is the Founder of Orenda Group and a Chartered Accountant. His financial background brings discipline, structure and strategic clarity to the Group's approach across advisory, capital, taxation, audit and long-term enterprise building.",
  },
  {
    slug: "mayur-fichadiya",
    name: "Mayur Fichadiya",
    role: "Founder",
    org: "Orenda Group",
    credentials: "CA Inter, M.Com",
    photo: "/team/mayur-fichadiya.jpg",
    founder: true,
    bio: "Mayur Fichadiya is the Founder of Orenda Group with qualifications in CA Inter and M.Com. His experience strengthens the Group's business thinking, financial understanding and operational approach across Orenda's growing ecosystem.",
  },
];

export const TEAM: Person[] = [
  { slug: "mansi", name: "Mansi", role: "Co-founder", org: "Orenda Digital", photo: "/team/mansi.jpg" },
  { slug: "hemal-shah", name: "Hemal Shah", role: "Advocate", org: "Orenda Legal", photo: "/team/hemal-shah.jpg" },
  { slug: "heet-sedani", name: "Heet Sedani", role: "Partner", org: "Orenda Advisors", photo: "/team/heet-sedani.jpg" },
  { slug: "meet-sedani", name: "Meet Sedani", role: "Partner", org: "Orenda Advisors", photo: "/team/meet-sedani.jpg" },
  { slug: "bhargavi-gupta", name: "CS Bhargavi Gupta", role: "Company Secretary, Partner", org: "Orenda Advisors", photo: "/team/bhargavi-gupta.jpg" },
  { slug: "harsh-bhojani", name: "Harsh Bhojani", role: "Founder & Managing Director", org: "Orenda Financial Services", photo: "/team/harsh-bhojani.jpg" },
  { slug: "sanket-parekh", name: "Sanket Parekh", role: "Chief Business Officer & Executive Director", org: "Orenda Financial Services", photo: "/team/sanket-parekh.jpg" },
  { slug: "pranshu-rughani", name: "Pranshu Rughani", role: "Strategic Advisor, Engineer", org: "Orenda Financial Services", photo: "/team/pranshu-rughani.jpg" },
  { slug: "karan-rupareliya", name: "Karan Rupareliya", role: "Vertical Head & Partner", org: "Orenda Realtors", photo: "/team/karan-rupareliya.jpg" },
  { slug: "kunj-doshi", name: "Kunj Doshi", role: "Group", org: "Orenda Group", photo: "/team/kunj-doshi.jpg" },
  { slug: "ashana", name: "Ashana", role: "Group", org: "Orenda Group", photo: "/team/ashana.jpg" },
];

export const ALL_PEOPLE = [...FOUNDERS, ...TEAM];
