export interface AssignmentRecord {
  assignee: string;
  fromLabel: string;
  toLabel: string;
}

export interface Asset {
  id: string;
  name: string;
  serial: string;
  category: "노트북" | "모니터" | "휴대폰" | "주변기기";
  status: "사용 중" | "창고 대기" | "수리 중";
  currentHolder: string | null;
  history: AssignmentRecord[];
}

export const ASSETS: Asset[] = [
  {
    id: "as1", name: "ThinkPad X1 Carbon", serial: "TP-2291", category: "노트북", status: "사용 중", currentHolder: "김하늘",
    history: [
      { assignee: "이도윤", fromLabel: "2024-03", toLabel: "2025-06" },
      { assignee: "김하늘", fromLabel: "2025-06", toLabel: "현재" },
    ],
  },
  {
    id: "as2", name: "Dell UltraSharp 27\"", serial: "DL-5583", category: "모니터", status: "사용 중", currentHolder: "박서준",
    history: [{ assignee: "박서준", fromLabel: "2025-01", toLabel: "현재" }],
  },
  {
    id: "as3", name: "iPhone 15 (업무용)", serial: "IP-0042", category: "휴대폰", status: "수리 중", currentHolder: null,
    history: [
      { assignee: "최유진", fromLabel: "2024-09", toLabel: "2026-08" },
    ],
  },
  {
    id: "as4", name: "MX Master 3S", serial: "MX-1187", category: "주변기기", status: "창고 대기", currentHolder: null,
    history: [
      { assignee: "한소율", fromLabel: "2025-02", toLabel: "2026-07" },
    ],
  },
];

export interface AssetRequest {
  id: string;
  requester: string;
  assetCategory: string;
  reason: string;
  status: "대기" | "승인" | "반려";
  requestedLabel: string;
}

export const REQUESTS: AssetRequest[] = [
  { id: "rq1", requester: "이도윤", assetCategory: "노트북", reason: "기존 장비 배터리 노후화", status: "대기", requestedLabel: "오늘" },
  { id: "rq2", requester: "최유진", assetCategory: "휴대폰", reason: "수리 기간 대체 기기 필요", status: "승인", requestedLabel: "어제" },
  { id: "rq3", requester: "한소율", assetCategory: "모니터", reason: "듀얼 모니터 구성", status: "반려", requestedLabel: "3일 전" },
];
