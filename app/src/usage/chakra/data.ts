export interface ClassSession {
  id: string;
  time: string;
  name: string;
  instructor: string;
  capacity: number;
  booked: number;
}

export const CLASSES: ClassSession[] = [
  { id: "c1", time: "07:00", name: "모닝 빈야사", instructor: "이하진", capacity: 12, booked: 12 },
  { id: "c2", time: "09:00", name: "필라테스 기초", instructor: "박서연", capacity: 8, booked: 8 },
  { id: "c3", time: "10:30", name: "하타 요가", instructor: "이하진", capacity: 14, booked: 9 },
  { id: "c4", time: "12:00", name: "런치타임 스트레칭", instructor: "김도윤", capacity: 16, booked: 6 },
  { id: "c5", time: "14:00", name: "리포머 필라테스", instructor: "박서연", capacity: 6, booked: 6 },
  { id: "c6", time: "16:00", name: "인요가", instructor: "정하은", capacity: 10, booked: 3 },
  { id: "c7", time: "18:00", name: "저녁 빈야사", instructor: "이하진", capacity: 14, booked: 13 },
  { id: "c8", time: "19:30", name: "리포머 필라테스", instructor: "박서연", capacity: 6, booked: 5 },
  { id: "c9", time: "20:30", name: "회복 요가", instructor: "정하은", capacity: 12, booked: 4 },
];

export interface Member {
  id: string;
  name: string;
  email: string;
  tier: "베이직" | "프리미엄" | "1:1 PT";
  joinedLabel: string;
  visitsThisMonth: number;
}

export const MEMBERS: Member[] = [
  { id: "m1", name: "김도윤", email: "doyun.kim@example.com", tier: "프리미엄", joinedLabel: "2025년 3월", visitsThisMonth: 14 },
  { id: "m2", name: "이서연", email: "seoyeon.lee@example.com", tier: "베이직", joinedLabel: "2026년 1월", visitsThisMonth: 4 },
  { id: "m3", name: "박지훈", email: "jihoon.park@example.com", tier: "1:1 PT", joinedLabel: "2024년 11월", visitsThisMonth: 18 },
  { id: "m4", name: "최민서", email: "minseo.choi@example.com", tier: "베이직", joinedLabel: "2026년 2월", visitsThisMonth: 2 },
  { id: "m5", name: "정하은", email: "haeun.jung@example.com", tier: "프리미엄", joinedLabel: "2025년 7월", visitsThisMonth: 11 },
  { id: "m6", name: "한소율", email: "soyul.han@example.com", tier: "1:1 PT", joinedLabel: "2025년 9월", visitsThisMonth: 16 },
  { id: "m7", name: "오지호", email: "jiho.oh@example.com", tier: "베이직", joinedLabel: "2026년 3월", visitsThisMonth: 1 },
  { id: "m8", name: "윤아름", email: "areum.yoon@example.com", tier: "프리미엄", joinedLabel: "2025년 5월", visitsThisMonth: 9 },
  { id: "m9", name: "장서윤", email: "seoyoon.jang@example.com", tier: "베이직", joinedLabel: "2026년 1월", visitsThisMonth: 5 },
  { id: "m10", name: "임도현", email: "dohyun.lim@example.com", tier: "프리미엄", joinedLabel: "2024년 8월", visitsThisMonth: 13 },
];

export interface Booking {
  id: string;
  memberName: string;
  className: string;
  time: string;
  status: "확정" | "대기" | "취소";
}

// 오늘 예약자 이름, 넓은 테이블 항목용
export const BOOKINGS: Booking[] = [
  { id: "b1", memberName: "김도윤", className: "모닝 빈야사", time: "07:00", status: "확정" },
  { id: "b2", memberName: "정하은", className: "모닝 빈야사", time: "07:00", status: "확정" },
  { id: "b3", memberName: "박지훈", className: "필라테스 기초", time: "09:00", status: "확정" },
  { id: "b4", memberName: "한소율", className: "필라테스 기초", time: "09:00", status: "확정" },
  { id: "b5", memberName: "이서연", className: "하타 요가", time: "10:30", status: "대기" },
  { id: "b6", memberName: "윤아름", className: "리포머 필라테스", time: "14:00", status: "확정" },
  { id: "b7", memberName: "장서윤", className: "인요가", time: "16:00", status: "확정" },
  { id: "b8", memberName: "최민서", className: "저녁 빈야사", time: "18:00", status: "대기" },
  { id: "b9", memberName: "오지호", className: "저녁 빈야사", time: "18:00", status: "취소" },
  { id: "b10", memberName: "임도현", className: "리포머 필라테스", time: "19:30", status: "확정" },
];

// 최근 7일 예약 추이 라인차트
export const WEEKLY_TREND = [
  { day: "지난 월", count: 58 }, { day: "지난 화", count: 61 }, { day: "지난 수", count: 55 },
  { day: "지난 목", count: 67 }, { day: "지난 금", count: 72 }, { day: "지난 토", count: 80 },
  { day: "오늘", count: 66 },
] as const;

// 클래스 유형별 비중 도넛차트
export const CLASS_TYPE_SHARE = [
  { name: "빈야사", value: 25 },
  { name: "필라테스", value: 19 },
  { name: "하타", value: 9 },
  { name: "인요가", value: 7 },
  { name: "회복 요가", value: 4 },
] as const;
