export interface TaskItem {
  id: string;
  title: string;
  bucket: string;
  done: boolean;
  dueLabel: string;
  priority: "high" | "normal" | "low";
}

export const TASKS: TaskItem[] = [
  { id: "t1", title: "분기 보고서 초안 검토", bucket: "이번 주", done: false, dueLabel: "오늘", priority: "high" },
  { id: "t2", title: "디자인 리뷰 피드백 반영", bucket: "이번 주", done: false, dueLabel: "내일", priority: "high" },
  { id: "t3", title: "팀 회의록 정리", bucket: "이번 주", done: true, dueLabel: "어제", priority: "normal" },
  { id: "t4", title: "신규 입사자 온보딩 자료 갱신", bucket: "이번 주", done: false, dueLabel: "금요일", priority: "normal" },
  { id: "t5", title: "예산안 1차 검토", bucket: "다음 주", done: false, dueLabel: "월요일", priority: "normal" },
  { id: "t6", title: "협력사 계약서 서명", bucket: "다음 주", done: false, dueLabel: "수요일", priority: "high" },
  { id: "t7", title: "사내 뉴스레터 발행", bucket: "다음 주", done: false, dueLabel: "목요일", priority: "low" },
];

export interface MeetingItem {
  id: string;
  time: string;
  title: string;
  room: string;
  attendees: number;
  color: "brand" | "success" | "warning" | "info";
}

export const MEETINGS: MeetingItem[] = [
  { id: "m1", time: "09:00", title: "일일 스탠드업", room: "온라인", attendees: 6, color: "info" },
  { id: "m2", time: "11:00", title: "분기 보고서 리뷰", room: "회의실 A", attendees: 4, color: "brand" },
  { id: "m3", time: "13:30", title: "디자인 시스템 싱크업", room: "온라인", attendees: 8, color: "brand" },
  { id: "m4", time: "15:00", title: "협력사 미팅", room: "회의실 B", attendees: 3, color: "warning" },
  { id: "m5", time: "16:30", title: "1:1 면담", room: "회의실 C", attendees: 2, color: "success" },
];

export interface FileItem {
  id: string;
  name: string;
  kind: "doc" | "sheet" | "slide" | "pdf";
  modified: string;
  size: string;
  owner: string;
}

export const FILES: FileItem[] = [
  { id: "f1", name: "2026 분기 보고서.docx", kind: "doc", modified: "10분 전", size: "1.2MB", owner: "김하늘" },
  { id: "f2", name: "예산 계획.xlsx", kind: "sheet", modified: "1시간 전", size: "480KB", owner: "박서준" },
  { id: "f3", name: "디자인 시스템 소개.pptx", kind: "slide", modified: "어제", size: "6.4MB", owner: "김하늘" },
  { id: "f4", name: "협력사 계약서.pdf", kind: "pdf", modified: "2일 전", size: "220KB", owner: "이도윤" },
  { id: "f5", name: "온보딩 체크리스트.docx", kind: "doc", modified: "3일 전", size: "88KB", owner: "김하늘" },
  { id: "f6", name: "매출 추이.xlsx", kind: "sheet", modified: "1주 전", size: "1.8MB", owner: "박서준" },
];
