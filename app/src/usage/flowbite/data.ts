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
];
