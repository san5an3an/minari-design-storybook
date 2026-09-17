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
  {
    id: "as5", name: "MacBook Pro 14\"", serial: "MB-3320", category: "노트북", status: "사용 중", currentHolder: "정민재",
    history: [{ assignee: "정민재", fromLabel: "2025-08", toLabel: "현재" }],
  },
  {
    id: "as6", name: "LG UltraWide 34\"", serial: "LG-7742", category: "모니터", status: "사용 중", currentHolder: "오세훈",
    history: [
      { assignee: "김하늘", fromLabel: "2024-05", toLabel: "2025-09" },
      { assignee: "오세훈", fromLabel: "2025-09", toLabel: "현재" },
    ],
  },
  {
    id: "as7", name: "iPad Pro 11\"", serial: "IP-9931", category: "휴대폰", status: "창고 대기", currentHolder: null,
    history: [
      { assignee: "이도윤", fromLabel: "2024-11", toLabel: "2026-06" },
    ],
  },
  {
    id: "as8", name: "Sony WH-1000XM5", serial: "SN-4471", category: "주변기기", status: "사용 중", currentHolder: "최유진",
    history: [{ assignee: "최유진", fromLabel: "2025-04", toLabel: "현재" }],
  },
  {
    id: "as9", name: "ThinkPad T14", serial: "TP-5502", category: "노트북", status: "수리 중", currentHolder: null,
    history: [
      { assignee: "한소율", fromLabel: "2024-07", toLabel: "2026-09" },
    ],
  },
  {
    id: "as10", name: "Logitech MX Keys", serial: "MX-2290", category: "주변기기", status: "창고 대기", currentHolder: null,
    history: [
      { assignee: "박서준", fromLabel: "2025-03", toLabel: "2026-05" },
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
  { id: "rq4", requester: "정민재", assetCategory: "노트북", reason: "신규 입사자 지급용", status: "승인", requestedLabel: "2일 전" },
  { id: "rq5", requester: "오세훈", assetCategory: "주변기기", reason: "무선 마우스 파손 교체", status: "대기", requestedLabel: "오늘" },
  { id: "rq6", requester: "김하늘", assetCategory: "모니터", reason: "재택 근무용 모니터 추가", status: "승인", requestedLabel: "4일 전" },
  { id: "rq7", requester: "박서준", assetCategory: "휴대폰", reason: "업무용 회선 분리", status: "대기", requestedLabel: "1일 전" },
  { id: "rq8", requester: "최유진", assetCategory: "주변기기", reason: "헤드셋 파손", status: "반려", requestedLabel: "5일 전" },
  { id: "rq9", requester: "이도윤", assetCategory: "노트북", reason: "수리 기간 대체 기기 필요", status: "승인", requestedLabel: "6일 전" },
  { id: "rq10", requester: "한소율", assetCategory: "노트북", reason: "고사양 개발용 교체 요청", status: "대기", requestedLabel: "방금" },
];
