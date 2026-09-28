export interface EventItem {
  id: string;
  title: string;
  category: "컨퍼런스" | "밋업" | "워크숍" | "네트워킹";
  dateLabel: string;
  venue: string;
  capacity: number;
  registered: number;
  ticketPrice: number;
  status: "모집중" | "마감임박" | "종료";
}

export const EVENTS: readonly EventItem[] = [
  { id: "e1", title: "프런트엔드 서밋 2026", category: "컨퍼런스", dateLabel: "10월 14일 (수)", venue: "코엑스 그랜드볼룸", capacity: 400, registered: 356, ticketPrice: 89000, status: "마감임박" },
  { id: "e2", title: "디자인 시스템 밋업", category: "밋업", dateLabel: "10월 21일 (수)", venue: "역삼 스타트업 라운지", capacity: 80, registered: 41, ticketPrice: 0, status: "모집중" },
  { id: "e3", title: "타입스크립트 심화 워크숍", category: "워크숍", dateLabel: "10월 28일 (수)", venue: "판교 오피스 3층", capacity: 40, registered: 40, ticketPrice: 55000, status: "종료" },
  { id: "e4", title: "여성 개발자 네트워킹 나이트", category: "네트워킹", dateLabel: "11월 4일 (수)", venue: "성수 카페 델픽", capacity: 60, registered: 22, ticketPrice: 15000, status: "모집중" },
  { id: "e5", title: "AI 프로덕트 컨퍼런스", category: "컨퍼런스", dateLabel: "11월 12일 (목)", venue: "잠실 롯데호텔", capacity: 500, registered: 468, ticketPrice: 129000, status: "마감임박" },
  { id: "e6", title: "오픈소스 기여 밋업", category: "밋업", dateLabel: "11월 18일 (수)", venue: "합정 콜렉티브 홀", capacity: 70, registered: 30, ticketPrice: 0, status: "모집중" },
  { id: "e7", title: "접근성 실전 워크숍", category: "워크숍", dateLabel: "11월 25일 (수)", venue: "을지로 스튜디오", capacity: 30, registered: 12, ticketPrice: 40000, status: "모집중" },
  { id: "e8", title: "스타트업 창업가 네트워킹", category: "네트워킹", dateLabel: "12월 2일 (수)", venue: "강남 파트너스타워", capacity: 90, registered: 55, ticketPrice: 20000, status: "모집중" },
  { id: "e9", title: "백엔드 아키텍처 컨퍼런스", category: "컨퍼런스", dateLabel: "12월 9일 (수)", venue: "코엑스 아트홀", capacity: 350, registered: 118, ticketPrice: 79000, status: "모집중" },
  { id: "e10", title: "그로스 마케팅 밋업", category: "밋업", dateLabel: "12월 16일 (수)", venue: "성수 언더스탠드", capacity: 60, registered: 9, ticketPrice: 0, status: "모집중" },
];

export interface Attendee {
  id: string;
  eventId: string;
  name: string;
  email: string;
  ticketType: "일반" | "얼리버드" | "VIP" | "초청";
  status: "확정" | "대기" | "취소";
  registeredAt: string;
  checkedIn: boolean;
}

export const ATTENDEES: readonly Attendee[] = [
  { id: "a1", eventId: "e1", name: "김하늘", email: "haneul@example.com", ticketType: "얼리버드", status: "확정", registeredAt: "09-02", checkedIn: true },
  { id: "a2", eventId: "e1", name: "박서연", email: "seoyeon@example.com", ticketType: "일반", status: "확정", registeredAt: "09-05", checkedIn: true },
  { id: "a3", eventId: "e1", name: "이도윤", email: "doyoon@example.com", ticketType: "VIP", status: "확정", registeredAt: "09-06", checkedIn: false },
  { id: "a4", eventId: "e1", name: "최민지", email: "minji@example.com", ticketType: "일반", status: "대기", registeredAt: "09-08", checkedIn: false },
  { id: "a5", eventId: "e1", name: "정우진", email: "woojin@example.com", ticketType: "일반", status: "확정", registeredAt: "09-09", checkedIn: false },
  { id: "a6", eventId: "e1", name: "한소율", email: "soyul@example.com", ticketType: "얼리버드", status: "취소", registeredAt: "09-10", checkedIn: false },
  { id: "a7", eventId: "e1", name: "윤지호", email: "jiho@example.com", ticketType: "일반", status: "확정", registeredAt: "09-11", checkedIn: true },
  { id: "a8", eventId: "e1", name: "임채원", email: "chaewon@example.com", ticketType: "초청", status: "확정", registeredAt: "09-12", checkedIn: false },
  { id: "a9", eventId: "e1", name: "서지안", email: "jian@example.com", ticketType: "일반", status: "확정", registeredAt: "09-13", checkedIn: false },
  { id: "a10", eventId: "e1", name: "강은우", email: "eunwoo@example.com", ticketType: "VIP", status: "대기", registeredAt: "09-14", checkedIn: false },
  { id: "a11", eventId: "e1", name: "조유나", email: "yuna@example.com", ticketType: "일반", status: "확정", registeredAt: "09-15", checkedIn: true },
  { id: "a12", eventId: "e1", name: "신태양", email: "taeyang@example.com", ticketType: "일반", status: "확정", registeredAt: "09-16", checkedIn: false },
];

// 요일별 등록 수
export const REGISTRATIONS_BY_DAY: readonly { label: string; value: number }[] = [
  { label: "월", value: 18 }, { label: "화", value: 24 }, { label: "수", value: 41 },
  { label: "목", value: 30 }, { label: "금", value: 22 }, { label: "토", value: 12 }, { label: "일", value: 8 },
];

// 참가자 유형별 등록 수
export const REGISTRATIONS_BY_TICKET: readonly { label: string; value: number }[] = [
  { label: "일반", value: 62 }, { label: "얼리버드", value: 24 }, { label: "VIP", value: 9 }, { label: "초청", value: 5 },
];

export const ORGANIZER = { name: "하늘 매니저", role: "이벤트 운영팀" };
