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
  { id: "t8", title: "경비 정산 영수증 제출", bucket: "이번 주", done: true, dueLabel: "그제", priority: "low" },
  { id: "t9", title: "분기 목표 OKR 갱신", bucket: "이번 주", done: false, dueLabel: "금요일", priority: "high" },
  { id: "t10", title: "사내 설문 결과 정리", bucket: "다음 주", done: false, dueLabel: "화요일", priority: "normal" },
  { id: "t11", title: "채용 후보자 이력서 검토", bucket: "다음 주", done: false, dueLabel: "수요일", priority: "high" },
  { id: "t12", title: "휴가 일정 팀 공유", bucket: "다음 주", done: false, dueLabel: "금요일", priority: "low" },
];

export interface MeetingItem {
  id: string;
  time: string;
  title: string;
  room: string;
  attendees: number;
  color: "brand" | "success" | "warning" | "info";
  // 실제 상태 값, Switch와 병행 사용
  done: boolean;
}

export const MEETINGS: MeetingItem[] = [
  { id: "m1", time: "09:00", title: "일일 스탠드업", room: "온라인", attendees: 6, color: "info", done: true },
  { id: "m2", time: "11:00", title: "분기 보고서 리뷰", room: "회의실 A", attendees: 4, color: "brand", done: true },
  { id: "m3", time: "13:30", title: "디자인 시스템 싱크업", room: "온라인", attendees: 8, color: "brand", done: false },
  { id: "m4", time: "15:00", title: "협력사 미팅", room: "회의실 B", attendees: 3, color: "warning", done: false },
  { id: "m5", time: "16:30", title: "1:1 면담", room: "회의실 C", attendees: 2, color: "success", done: false },
  { id: "m6", time: "08:30", title: "임원 조찬 브리핑", room: "회의실 A", attendees: 5, color: "brand", done: true },
  { id: "m7", time: "10:00", title: "신규 입사자 오리엔테이션", room: "회의실 B", attendees: 9, color: "info", done: false },
  { id: "m8", time: "12:00", title: "점심 팀 빌딩", room: "온라인", attendees: 7, color: "success", done: false },
  { id: "m9", time: "14:00", title: "예산안 협의", room: "회의실 C", attendees: 4, color: "warning", done: false },
  { id: "m10", time: "17:00", title: "주간 마감 회고", room: "온라인", attendees: 6, color: "info", done: false },
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
  { id: "f7", name: "채용 공고 초안.docx", kind: "doc", modified: "30분 전", size: "64KB", owner: "이도윤" },
  { id: "f8", name: "행사 진행표.pptx", kind: "slide", modified: "2시간 전", size: "3.1MB", owner: "한소율" },
  { id: "f9", name: "출장 정산서.pdf", kind: "pdf", modified: "4일 전", size: "140KB", owner: "박서준" },
  { id: "f10", name: "인력 현황.xlsx", kind: "sheet", modified: "5일 전", size: "620KB", owner: "김하늘" },
  { id: "f11", name: "보안 정책 안내.pdf", kind: "pdf", modified: "1주 전", size: "310KB", owner: "이도윤" },
  { id: "f12", name: "팀 워크숍 제안서.pptx", kind: "slide", modified: "2주 전", size: "4.8MB", owner: "한소율" },
];
