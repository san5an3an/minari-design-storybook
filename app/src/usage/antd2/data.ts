export interface Employee {
  id: string;
  name: string;
  role: string;
  department: string;
  status: "재직" | "온보딩" | "휴직";
  location: string;
  email: string;
  joinedLabel: string;
  onboardingStep: number;
}

export const EMPLOYEES: Employee[] = [
  { id: "e1", name: "김서연", role: "프로덕트 디자이너", department: "디자인", status: "재직", location: "서울", email: "seoyeon.kim@example.com", joinedLabel: "2023-03-02", onboardingStep: 4 },
  { id: "e2", name: "박도윤", role: "백엔드 엔지니어", department: "엔지니어링", status: "온보딩", location: "서울", email: "doyoon.park@example.com", joinedLabel: "2026-09-01", onboardingStep: 1 },
  { id: "e3", name: "이하은", role: "세일즈 매니저", department: "세일즈", status: "재직", location: "부산", email: "haeun.lee@example.com", joinedLabel: "2021-11-15", onboardingStep: 4 },
  { id: "e4", name: "최지훈", role: "프런트엔드 엔지니어", department: "엔지니어링", status: "온보딩", location: "원격", email: "jihoon.choi@example.com", joinedLabel: "2026-08-25", onboardingStep: 2 },
  { id: "e5", name: "정예린", role: "인사 담당자", department: "인사", status: "휴직", location: "서울", email: "yerin.jung@example.com", joinedLabel: "2022-05-10", onboardingStep: 4 },
  { id: "e6", name: "한지민", role: "QA 엔지니어", department: "엔지니어링", status: "재직", location: "대전", email: "jimin.han@example.com", joinedLabel: "2024-01-20", onboardingStep: 4 },
];

export const ONBOARDING_STEPS = ["서류 제출", "장비 지급", "팀 소개", "완료"];

export interface LeaveRequest {
  id: string;
  employeeName: string;
  type: "연차" | "병가" | "경조사";
  dateLabel: string;
  daysLabel: string;
  status: "대기" | "승인" | "반려";
}

export const LEAVE_REQUESTS: LeaveRequest[] = [
  { id: "l1", employeeName: "김서연", type: "연차", dateLabel: "9월 22일 ~ 9월 24일", daysLabel: "3일", status: "대기" },
  { id: "l2", employeeName: "한지민", type: "병가", dateLabel: "9월 18일", daysLabel: "1일", status: "대기" },
  { id: "l3", employeeName: "이하은", type: "경조사", dateLabel: "9월 27일 ~ 9월 29일", daysLabel: "3일", status: "대기" },
  { id: "l4", employeeName: "최지훈", type: "연차", dateLabel: "9월 10일", daysLabel: "1일", status: "승인" },
];

// 캘린더 날짜별 휴가자 수, 9월 한정 목업 데이터
export const LEAVE_BY_DAY: Record<number, number> = { 10: 1, 18: 1, 22: 2, 23: 2, 24: 1, 27: 1, 28: 1, 29: 1 };

export interface Candidate {
  id: string;
  name: string;
  role: string;
  stage: "서류 심사" | "1차 면접" | "2차 면접" | "오퍼";
  appliedLabel: string;
}

export const HIRING_STAGES = ["서류 심사", "1차 면접", "2차 면접", "오퍼", "입사"] as const;

export const CANDIDATES: Candidate[] = [
  { id: "c1", name: "오세훈", role: "시니어 백엔드 엔지니어", stage: "2차 면접", appliedLabel: "8월 20일" },
  { id: "c2", name: "강나은", role: "프로덕트 디자이너", stage: "오퍼", appliedLabel: "8월 12일" },
  { id: "c3", name: "윤태양", role: "데이터 분석가", stage: "1차 면접", appliedLabel: "9월 1일" },
  { id: "c4", name: "임수아", role: "프런트엔드 엔지니어", stage: "서류 심사", appliedLabel: "9월 10일" },
  { id: "c5", name: "배준호", role: "세일즈 매니저", stage: "1차 면접", appliedLabel: "9월 5일" },
];

export function stageCount(stage: (typeof HIRING_STAGES)[number]): number {
  if (stage === "입사") return 0;
  return CANDIDATES.filter((c) => c.stage === stage).length;
}
