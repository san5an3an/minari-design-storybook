export interface Deal {
  id: string;
  account: string;
  owner: string;
  stage: "발굴" | "검증" | "제안" | "협상" | "완료";
  amount: number;
  closeDate: string;
  probability: number;
}

export const STAGES: Deal["stage"][] = ["발굴", "검증", "제안", "협상", "완료"];

export const DEALS: Deal[] = [
  { id: "OP-1001", account: "Cloudhub", owner: "김서연", stage: "협상", amount: 84_000_000, closeDate: "2026-09-30", probability: 75 },
  { id: "OP-1002", account: "Cloudhub + Anypoint Connectors", owner: "김서연", stage: "제안", amount: 42_500_000, closeDate: "2026-10-08", probability: 55 },
  { id: "OP-1003", account: "Northline Freight", owner: "박도윤", stage: "완료", amount: 128_000_000, closeDate: "2026-09-12", probability: 100 },
  { id: "OP-1004", account: "Northline Freight", owner: "박도윤", stage: "검증", amount: 21_300_000, closeDate: "2026-10-22", probability: 35 },
  { id: "OP-1005", account: "Aster Biotech", owner: "이하윤", stage: "협상", amount: 96_800_000, closeDate: "2026-10-02", probability: 70 },
  { id: "OP-1006", account: "Aster Biotech Labs", owner: "이하윤", stage: "발굴", amount: 15_000_000, closeDate: "2026-11-14", probability: 15 },
  { id: "OP-1007", account: "Vermilion Retail", owner: "정우진", stage: "제안", amount: 58_200_000, closeDate: "2026-10-11", probability: 50 },
  { id: "OP-1008", account: "Vermilion Retail Group", owner: "정우진", stage: "완료", amount: 33_400_000, closeDate: "2026-09-08", probability: 100 },
  { id: "OP-1009", account: "Harborline Logistics", owner: "김서연", stage: "검증", amount: 47_900_000, closeDate: "2026-10-27", probability: 30 },
  { id: "OP-1010", account: "Harborline Logistics APAC", owner: "박도윤", stage: "발굴", amount: 12_600_000, closeDate: "2026-11-20", probability: 10 },
  { id: "OP-1011", account: "Silverline Media", owner: "이하윤", stage: "협상", amount: 71_500_000, closeDate: "2026-10-05", probability: 65 },
  { id: "OP-1012", account: "Silverline Media Group", owner: "정우진", stage: "제안", amount: 26_000_000, closeDate: "2026-10-19", probability: 45 },
  { id: "OP-1013", account: "Copperfield Insurance", owner: "김서연", stage: "완료", amount: 89_300_000, closeDate: "2026-09-04", probability: 100 },
  { id: "OP-1014", account: "Copperfield Insurance Group", owner: "박도윤", stage: "검증", amount: 19_700_000, closeDate: "2026-11-02", probability: 25 },
];

export const WEEKLY_PIPELINE: { week: string; amount: number }[] = [
  { week: "8월 W1", amount: 412 },
  { week: "8월 W2", amount: 448 },
  { week: "8월 W3", amount: 431 },
  { week: "8월 W4", amount: 467 },
  { week: "9월 W1", amount: 502 },
  { week: "9월 W2", amount: 548 },
  { week: "9월 W3", amount: 611 },
];

export const STAGE_SHARE: { name: string; value: number }[] = STAGES.map((stage) => ({
  name: stage,
  value: DEALS.filter((d) => d.stage === stage).reduce((sum, d) => sum + d.amount, 0),
}));

export const FEATURED_DEAL = DEALS[0];
