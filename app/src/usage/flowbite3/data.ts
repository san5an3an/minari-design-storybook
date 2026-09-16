export interface InvoiceLine {
  label: string;
  amount: number;
}

export interface Invoice {
  id: string;
  number: string;
  customer: string;
  total: number;
  status: "결제 완료" | "미결제" | "연체";
  issuedLabel: string;
  lines: InvoiceLine[];
}

export const INVOICES: Invoice[] = [
  {
    id: "in1", number: "INV-2026-0912", customer: "마포상사", total: 4620000, status: "결제 완료", issuedLabel: "2026-09-01",
    lines: [
      { label: "Enterprise 플랜 (9월)", amount: 4200000 },
      { label: "부가세", amount: 420000 },
    ],
  },
  {
    id: "in2", number: "INV-2026-0913", customer: "서교테크", total: 1078000, status: "미결제", issuedLabel: "2026-09-01",
    lines: [
      { label: "Growth 플랜 (9월)", amount: 980000 },
      { label: "부가세", amount: 98000 },
    ],
  },
  {
    id: "in3", number: "INV-2026-0814", customer: "홍대웍스", total: 132000, status: "연체", issuedLabel: "2026-08-01",
    lines: [
      { label: "Starter 플랜 (8월)", amount: 120000 },
      { label: "부가세", amount: 12000 },
    ],
  },
  {
    id: "in4", number: "INV-2026-0915", customer: "망원랩", total: 3850000, status: "결제 완료", issuedLabel: "2026-09-01",
    lines: [
      { label: "Enterprise 플랜 (9월)", amount: 3500000 },
      { label: "부가세", amount: 350000 },
    ],
  },
];

export interface Plan {
  id: string;
  name: string;
  monthlyPrice: number;
  features: string[];
  current: boolean;
}

export const PLANS: Plan[] = [
  { id: "pl1", name: "Starter", monthlyPrice: 120000, features: ["사용자 5명", "기본 리포트"], current: false },
  { id: "pl2", name: "Growth", monthlyPrice: 980000, features: ["사용자 30명", "고급 리포트", "API 접근"], current: true },
  { id: "pl3", name: "Enterprise", monthlyPrice: 4200000, features: ["사용자 무제한", "전담 매니저", "SLA 보장"], current: false },
];
