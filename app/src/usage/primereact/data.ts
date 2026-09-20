export interface Message {
  author: string;
  text: string;
  time: string;
}

export type TicketCategory = "결제" | "계정" | "로그인" | "API" | "일반";
export type TicketStatus = "열림" | "대기" | "닫힘";
export type TicketPriority = "긴급" | "보통" | "낮음";

export interface Ticket {
  id: string;
  subject: string;
  customer: string;
  category: TicketCategory;
  status: TicketStatus;
  priority: TicketPriority;
  assignee: string;
  createdAt: string;
  updatedAt: string;
  thread: Message[];
}

export const TICKETS: Ticket[] = [
  {
    id: "#4821", subject: "결제 승인 후 주문 미반영", customer: "(주)한빛물산", category: "결제",
    status: "열림", priority: "긴급", assignee: "김도현", createdAt: "09-20 09:12", updatedAt: "12분 전",
    thread: [
      { author: "(주)한빛물산", text: "카드 승인은 났는데 주문 목록에 안 떠요.", time: "09:12" },
      { author: "상담원", text: "결제 ID 확인 중입니다, 잠시만요.", time: "09:20" },
    ],
  },
  {
    id: "#4820", subject: "로그인 2단계 인증 오류", customer: "김도현", category: "로그인",
    status: "대기", priority: "보통", assignee: "이서아", createdAt: "어제 14:02", updatedAt: "어제 17:40",
    thread: [{ author: "김도현", text: "인증번호가 계속 안 와요.", time: "어제" }],
  },
  {
    id: "#4818", subject: "환불 처리 지연 문의", customer: "이서아", category: "결제",
    status: "열림", priority: "보통", assignee: "박준서", createdAt: "2일 전", updatedAt: "2일 전",
    thread: [{ author: "이서아", text: "환불 신청한 지 5일째인데 아직이에요.", time: "2일 전" }],
  },
  {
    id: "#4815", subject: "API 요청 한도 상향", customer: "그린테크", category: "API",
    status: "닫힘", priority: "낮음", assignee: "오세준", createdAt: "지난주", updatedAt: "지난주",
    thread: [
      { author: "그린테크", text: "요청 한도를 올릴 수 있을까요?", time: "지난주" },
      { author: "상담원", text: "엔터프라이즈 플랜으로 안내드렸고 반영 완료했습니다.", time: "지난주" },
    ],
  },
  {
    id: "#4812", subject: "청구서 항목 오류", customer: "박준서", category: "결제",
    status: "닫힘", priority: "낮음", assignee: "정하은", createdAt: "3일 전", updatedAt: "3일 전",
    thread: [{ author: "상담원", text: "중복 청구 확인 후 정정했습니다.", time: "3일 전" }],
  },
  {
    id: "#4826", subject: "비밀번호 재설정 메일 미수신", customer: "최유나", category: "로그인",
    status: "열림", priority: "보통", assignee: "이서아", createdAt: "38분 전", updatedAt: "5분 전",
    thread: [{ author: "최유나", text: "재설정 메일이 스팸함에도 없어요.", time: "38분 전" }],
  },
  {
    id: "#4825", subject: "웹훅 재전송 정책 문의", customer: "그린테크", category: "API",
    status: "대기", priority: "낮음", assignee: "오세준", createdAt: "오늘 08:50", updatedAt: "1시간 전",
    thread: [{ author: "그린테크", text: "실패한 웹훅은 몇 번 재시도되나요?", time: "08:50" }],
  },
  {
    id: "#4824", subject: "정기결제 카드 만료 안내", customer: "한지우", category: "결제",
    status: "열림", priority: "긴급", assignee: "김도현", createdAt: "오늘 07:30", updatedAt: "22분 전",
    thread: [{ author: "한지우", text: "카드가 만료됐는데 자동 갱신이 안 돼요.", time: "07:30" }],
  },
  {
    id: "#4823", subject: "팀 멤버 초대 권한 문의", customer: "(주)한빛물산", category: "계정",
    status: "대기", priority: "보통", assignee: "정하은", createdAt: "오늘 09:05", updatedAt: "40분 전",
    thread: [{ author: "(주)한빛물산", text: "멤버 초대 권한을 매니저에게도 줄 수 있나요?", time: "09:05" }],
  },
  {
    id: "#4822", subject: "탈퇴 계정 데이터 보관 기간", customer: "윤새별", category: "계정",
    status: "닫힘", priority: "낮음", assignee: "박준서", createdAt: "어제", updatedAt: "어제 11:20",
    thread: [{ author: "상담원", text: "탈퇴 후 30일간 보관되며 이후 완전 삭제됩니다.", time: "어제" }],
  },
  {
    id: "#4827", subject: "모바일 앱 푸시 알림 중복 수신", customer: "한지우", category: "일반",
    status: "열림", priority: "낮음", assignee: "최유나", createdAt: "오늘 10:02", updatedAt: "3분 전",
    thread: [{ author: "한지우", text: "같은 알림이 두 번씩 와요.", time: "10:02" }],
  },
];

export interface Agent {
  name: string;
  team: string;
  open: number;
  online: boolean;
  resolvedToday: number;
  csat: number;
}

export const AGENTS: Agent[] = [
  { name: "김도현", team: "결제팀", open: 6, online: true, resolvedToday: 9, csat: 4.8 },
  { name: "이서아", team: "계정팀", open: 3, online: true, resolvedToday: 6, csat: 4.6 },
  { name: "박준서", team: "결제팀", open: 9, online: false, resolvedToday: 4, csat: 4.2 },
  { name: "최유나", team: "일반문의", open: 2, online: true, resolvedToday: 8, csat: 4.9 },
  { name: "정하은", team: "계정팀", open: 5, online: true, resolvedToday: 5, csat: 4.5 },
  { name: "한지우", team: "일반문의", open: 4, online: false, resolvedToday: 3, csat: 4.3 },
  { name: "오세준", team: "결제팀", open: 7, online: true, resolvedToday: 7, csat: 4.4 },
  { name: "윤새별", team: "일반문의", open: 1, online: true, resolvedToday: 5, csat: 4.7 },
];

// 최근 7일 접수/해결 추이. ReportsScreen 트렌드 차트용
export const DAILY_VOLUME: readonly { day: string; received: number; resolved: number }[] = [
  { day: "9/14", received: 28, resolved: 25 },
  { day: "9/15", received: 31, resolved: 29 },
  { day: "9/16", received: 22, resolved: 24 },
  { day: "9/17", received: 35, resolved: 30 },
  { day: "9/18", received: 27, resolved: 26 },
  { day: "9/19", received: 19, resolved: 21 },
  { day: "9/20", received: 34, resolved: 27 },
];

// 최근 4주 접수/해결 추이. 기간 토글 반대쪽 데이터셋
export const WEEKLY_VOLUME: readonly { day: string; received: number; resolved: number }[] = [
  { day: "8월 4주", received: 168, resolved: 159 },
  { day: "9월 1주", received: 182, resolved: 171 },
  { day: "9월 2주", received: 175, resolved: 168 },
  { day: "9월 3주", received: 196, resolved: 182 },
];
