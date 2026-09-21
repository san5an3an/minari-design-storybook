export interface ApprovalRequest {
  id: string;
  type: "할인 승인" | "경비 결재" | "휴가 신청" | "계약서 검토" | "채용 승인";
  requester: string;
  amount: number | null;
  submitted: string;
  dueDate: string;
  status: "대기" | "승인" | "반려";
  step: number;
  totalSteps: number;
}

export const REQUESTS: ApprovalRequest[] = [
  { id: "AP-2201", type: "할인 승인", requester: "김서연", amount: 4_200_000, submitted: "2026-09-15", dueDate: "2026-09-19", status: "대기", step: 2, totalSteps: 3 },
  { id: "AP-2202", type: "경비 결재", requester: "박도윤", amount: 380_000, submitted: "2026-09-16", dueDate: "2026-09-18", status: "대기", step: 1, totalSteps: 2 },
  { id: "AP-2203", type: "휴가 신청", requester: "이하윤", amount: null, submitted: "2026-09-14", dueDate: "2026-09-17", status: "승인", step: 2, totalSteps: 2 },
  { id: "AP-2204", type: "계약서 검토", requester: "정우진", amount: 96_000_000, submitted: "2026-09-10", dueDate: "2026-09-20", status: "대기", step: 1, totalSteps: 3 },
  { id: "AP-2205", type: "채용 승인", requester: "김서연", amount: null, submitted: "2026-09-08", dueDate: "2026-09-15", status: "반려", step: 1, totalSteps: 2 },
  { id: "AP-2206", type: "경비 결재", requester: "이하윤", amount: 210_000, submitted: "2026-09-16", dueDate: "2026-09-18", status: "대기", step: 1, totalSteps: 2 },
  { id: "AP-2207", type: "할인 승인", requester: "박도윤", amount: 1_800_000, submitted: "2026-09-13", dueDate: "2026-09-19", status: "승인", step: 3, totalSteps: 3 },
  { id: "AP-2208", type: "휴가 신청", requester: "정우진", amount: null, submitted: "2026-09-17", dueDate: "2026-09-21", status: "대기", step: 1, totalSteps: 2 },
  { id: "AP-2209", type: "계약서 검토", requester: "김서연", amount: 52_000_000, submitted: "2026-09-11", dueDate: "2026-09-19", status: "대기", step: 2, totalSteps: 3 },
  { id: "AP-2210", type: "경비 결재", requester: "박도윤", amount: 145_000, submitted: "2026-09-09", dueDate: "2026-09-13", status: "승인", step: 2, totalSteps: 2 },
  { id: "AP-2211", type: "채용 승인", requester: "이하윤", amount: null, submitted: "2026-09-12", dueDate: "2026-09-19", status: "대기", step: 1, totalSteps: 2 },
  { id: "AP-2212", type: "할인 승인", requester: "정우진", amount: 3_100_000, submitted: "2026-09-07", dueDate: "2026-09-14", status: "반려", step: 1, totalSteps: 3 },
  { id: "AP-2213", type: "경비 결재", requester: "김서연", amount: 620_000, submitted: "2026-09-17", dueDate: "2026-09-22", status: "대기", step: 1, totalSteps: 2 },
  { id: "AP-2214", type: "계약서 검토", requester: "박도윤", amount: 71_000_000, submitted: "2026-09-05", dueDate: "2026-09-12", status: "승인", step: 3, totalSteps: 3 },
];

export const WEEKLY_APPROVALS: { week: string; approved: number; rejected: number }[] = [
  { week: "8월 W3", approved: 9, rejected: 1 },
  { week: "8월 W4", approved: 11, rejected: 2 },
  { week: "9월 W1", approved: 8, rejected: 1 },
  { week: "9월 W2", approved: 12, rejected: 3 },
  { week: "9월 W3", approved: 10, rejected: 1 },
];

export const STATUS_SHARE: { name: string; value: number }[] = [
  { name: "대기", value: REQUESTS.filter((r) => r.status === "대기").length },
  { name: "승인", value: REQUESTS.filter((r) => r.status === "승인").length },
  { name: "반려", value: REQUESTS.filter((r) => r.status === "반려").length },
];

export const FEATURED_REQUEST = REQUESTS[0];
