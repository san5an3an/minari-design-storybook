export interface Account {
  id: string;
  name: string;
  industry: string;
  tier: "Enterprise" | "Growth" | "Startup";
  arr: number;
  owner: string;
  healthScore: number;
}

export const ACCOUNTS: Account[] = [
  { id: "ACC-01", name: "Cloudhub", industry: "SaaS", tier: "Enterprise", arr: 96_000_000, owner: "김서연", healthScore: 82 },
  { id: "ACC-02", name: "Northline Freight", industry: "물류", tier: "Enterprise", arr: 128_000_000, owner: "박도윤", healthScore: 74 },
  { id: "ACC-03", name: "Aster Biotech", industry: "제약", tier: "Growth", arr: 41_000_000, owner: "이하윤", healthScore: 91 },
  { id: "ACC-04", name: "Vermilion Retail", industry: "리테일", tier: "Growth", arr: 33_400_000, owner: "정우진", healthScore: 68 },
  { id: "ACC-05", name: "Harborline Logistics", industry: "물류", tier: "Startup", arr: 12_600_000, owner: "김서연", healthScore: 55 },
  { id: "ACC-06", name: "Silverline Media", industry: "미디어", tier: "Growth", arr: 27_800_000, owner: "박도윤", healthScore: 88 },
  { id: "ACC-07", name: "Copperfield Insurance", industry: "보험", tier: "Enterprise", arr: 89_300_000, owner: "이하윤", healthScore: 79 },
  { id: "ACC-08", name: "Riverton Energy", industry: "에너지", tier: "Enterprise", arr: 154_000_000, owner: "정우진", healthScore: 63 },
  { id: "ACC-09", name: "Fernwood Foods", industry: "식품", tier: "Startup", arr: 8_900_000, owner: "김서연", healthScore: 95 },
  { id: "ACC-10", name: "Brightline Telecom", industry: "통신", tier: "Growth", arr: 46_200_000, owner: "박도윤", healthScore: 71 },
];

export interface Contact {
  id: string;
  accountId: string;
  name: string;
  title: string;
  email: string;
  lastActivity: string;
}

export const CONTACTS: Contact[] = [
  { id: "CT-01", accountId: "ACC-01", name: "Jamie Rogers", title: "VP Engineering", email: "jrogers@cloudhub.example", lastActivity: "2026-09-15" },
  { id: "CT-02", accountId: "ACC-01", name: "Priya Nair", title: "Procurement Lead", email: "priya.nair@cloudhub.example", lastActivity: "2026-09-10" },
  { id: "CT-03", accountId: "ACC-02", name: "Marcus Webb", title: "COO", email: "mwebb@northline.example", lastActivity: "2026-09-12" },
  { id: "CT-04", accountId: "ACC-03", name: "Elena Cho", title: "Head of R&D", email: "echo@asterbio.example", lastActivity: "2026-09-17" },
  { id: "CT-05", accountId: "ACC-04", name: "Diego Alvarez", title: "IT Director", email: "dalvarez@vermilion.example", lastActivity: "2026-09-08" },
  { id: "CT-06", accountId: "ACC-05", name: "Sana Malik", title: "Ops Manager", email: "smalik@harborline.example", lastActivity: "2026-09-05" },
  { id: "CT-07", accountId: "ACC-06", name: "Tom Becker", title: "CTO", email: "tbecker@silverline.example", lastActivity: "2026-09-16" },
  { id: "CT-08", accountId: "ACC-07", name: "Grace Lin", title: "Claims Director", email: "glin@copperfield.example", lastActivity: "2026-09-11" },
  { id: "CT-09", accountId: "ACC-08", name: "Owen Park", title: "VP Operations", email: "opark@riverton.example", lastActivity: "2026-09-09" },
  { id: "CT-10", accountId: "ACC-09", name: "Nina Kessler", title: "Founder", email: "nina@fernwood.example", lastActivity: "2026-09-14" },
  { id: "CT-11", accountId: "ACC-10", name: "Leo Fischer", title: "Network Lead", email: "lfischer@brightline.example", lastActivity: "2026-09-13" },
];

export const TIER_SHARE: { name: string; value: number }[] = ["Enterprise", "Growth", "Startup"].map((tier) => ({
  name: tier,
  value: ACCOUNTS.filter((a) => a.tier === tier).length,
}));

export const ARR_TREND: { month: string; arr: number }[] = [
  { month: "4월", arr: 512 },
  { month: "5월", arr: 538 },
  { month: "6월", arr: 561 },
  { month: "7월", arr: 579 },
  { month: "8월", arr: 604 },
  { month: "9월", arr: 637 },
];

export const FEATURED_ACCOUNT = ACCOUNTS[0];
