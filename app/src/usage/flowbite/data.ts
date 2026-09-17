export interface CustomerItem {
  id: string;
  name: string;
  company: string;
  plan: "Starter" | "Growth" | "Enterprise";
  mrr: number;
  status: "active" | "trial" | "churned";
}

export const CUSTOMERS: CustomerItem[] = [
  { id: "c1", name: "김하늘", company: "마포상사", plan: "Enterprise", mrr: 4200000, status: "active" },
  { id: "c2", name: "박서준", company: "서교테크", plan: "Growth", mrr: 980000, status: "active" },
  { id: "c3", name: "이도윤", company: "합정스튜디오", plan: "Starter", mrr: 120000, status: "trial" },
  { id: "c4", name: "최유진", company: "연남에이전시", plan: "Growth", mrr: 760000, status: "active" },
  { id: "c5", name: "정민재", company: "홍대웍스", plan: "Starter", mrr: 0, status: "churned" },
  { id: "c6", name: "한소율", company: "망원랩", plan: "Enterprise", mrr: 3500000, status: "active" },
  { id: "c7", name: "오지훈", company: "상수문구", plan: "Starter", mrr: 150000, status: "active" },
  { id: "c8", name: "배수아", company: "성산미디어", plan: "Growth", mrr: 890000, status: "trial" },
  { id: "c9", name: "노현우", company: "동교물류", plan: "Enterprise", mrr: 5100000, status: "active" },
  { id: "c10", name: "임채은", company: "연희베이커리", plan: "Starter", mrr: 95000, status: "active" },
  { id: "c11", name: "서준영", company: "합정디자인", plan: "Growth", mrr: 1020000, status: "active" },
  { id: "c12", name: "강다은", company: "망원북스", plan: "Starter", mrr: 0, status: "churned" },
];

export interface ReviewItem {
  id: string;
  customer: string;
  score: number;
  comment: string;
  dateLabel: string;
}

export const REVIEWS: ReviewItem[] = [
  { id: "r1", customer: "김하늘 · 마포상사", score: 5, comment: "온보딩이 빠르고 지원팀 응답이 빨라요.", dateLabel: "3일 전" },
  { id: "r2", customer: "박서준 · 서교테크", score: 4, comment: "기능은 좋은데 모바일 화면이 조금 아쉬워요.", dateLabel: "1주 전" },
  { id: "r3", customer: "최유진 · 연남에이전시", score: 5, comment: "가격 대비 만족도가 높습니다.", dateLabel: "2주 전" },
  { id: "r4", customer: "한소율 · 망원랩", score: 3, comment: "리포트 내보내기 형식이 더 다양했으면 해요.", dateLabel: "3주 전" },
  { id: "r5", customer: "오지훈 · 상수문구", score: 5, comment: "직원 온보딩 문서가 잘 되어 있어서 적응이 빨랐어요.", dateLabel: "1개월 전" },
  { id: "r6", customer: "배수아 · 성산미디어", score: 2, comment: "API 응답이 느릴 때가 있어서 아쉬워요.", dateLabel: "1개월 전" },
  { id: "r7", customer: "노현우 · 동교물류", score: 5, comment: "전담 매니저 지원이 정말 좋습니다.", dateLabel: "5주 전" },
  { id: "r8", customer: "임채은 · 연희베이커리", score: 4, comment: "가격 정책이 합리적이에요.", dateLabel: "6주 전" },
];

export interface DealActivityItem {
  id: string;
  customer: string;
  fromStage: string;
  toStage: string;
  actor: string;
  timeLabel: string;
}

export const DEAL_ACTIVITY: DealActivityItem[] = [
  { id: "d1", customer: "합정스튜디오", fromStage: "체험", toStage: "협상", actor: "박서준", timeLabel: "20분 전" },
  { id: "d2", customer: "연남에이전시", fromStage: "협상", toStage: "계약 완료", actor: "김하늘", timeLabel: "2시간 전" },
  { id: "d3", customer: "망원랩", fromStage: "첫 연락", toStage: "체험", actor: "이도윤", timeLabel: "어제" },
  { id: "d4", customer: "홍대웍스", fromStage: "계약", toStage: "해지", actor: "박서준", timeLabel: "3일 전" },
  { id: "d5", customer: "서교테크", fromStage: "체험", toStage: "협상", actor: "김하늘", timeLabel: "5일 전" },
  { id: "d6", customer: "상수문구", fromStage: "첫 연락", toStage: "체험", actor: "최유진", timeLabel: "6일 전" },
  { id: "d7", customer: "성산미디어", fromStage: "체험", toStage: "협상", actor: "이도윤", timeLabel: "1주 전" },
  { id: "d8", customer: "동교물류", fromStage: "협상", toStage: "계약 완료", actor: "박서준", timeLabel: "1주 전" },
  { id: "d9", customer: "연희베이커리", fromStage: "첫 연락", toStage: "체험", actor: "김하늘", timeLabel: "2주 전" },
  { id: "d10", customer: "합정디자인", fromStage: "체험", toStage: "계약", actor: "이도윤", timeLabel: "2주 전" },
];

// 브랜드 사이드바형 예약 리스트. CustomersScreen 2단 배치에 사용
export interface UpcomingMeeting {
  id: string;
  customer: string;
  topic: string;
  timeLabel: string;
  channel: "화상" | "방문" | "전화";
}

export const UPCOMING_MEETINGS: UpcomingMeeting[] = [
  { id: "m1", customer: "마포상사", topic: "연간 계약 갱신 논의", timeLabel: "오늘 15:00", channel: "화상" },
  { id: "m2", customer: "합정스튜디오", topic: "Growth 플랜 온보딩", timeLabel: "오늘 17:30", channel: "전화" },
  { id: "m3", customer: "망원랩", topic: "분기 리뷰", timeLabel: "내일 10:00", channel: "방문" },
  { id: "m4", customer: "연남에이전시", topic: "요금제 업그레이드 상담", timeLabel: "9/19 14:00", channel: "화상" },
  { id: "m5", customer: "상수문구", topic: "결제 이슈 확인", timeLabel: "9/20 11:00", channel: "전화" },
];
