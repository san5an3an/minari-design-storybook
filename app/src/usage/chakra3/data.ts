export interface Campaign {
  id: string;
  title: string;
  category: string;
  goal: number;
  raised: number;
  backerCount: number;
  daysLeft: number;
  image: string;
  status: "진행중" | "성공" | "종료";
}

export const CAMPAIGNS: Campaign[] = [
  { id: "cp1", title: "손뜨개 원데이 키트", category: "공예", goal: 5000000, raised: 6200000, backerCount: 214, daysLeft: 0, status: "성공",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=60" },
  { id: "cp2", title: "반려식물 자동 급수기", category: "테크", goal: 20000000, raised: 14300000, backerCount: 388, daysLeft: 9, status: "진행중",
    image: "https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=600&q=60" },
  { id: "cp3", title: "동네 책방 큐레이션 북박스", category: "출판", goal: 3000000, raised: 1180000, backerCount: 62, daysLeft: 15, status: "진행중",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=60" },
  { id: "cp4", title: "업사이클 가방 브랜드 런칭", category: "패션", goal: 8000000, raised: 8500000, backerCount: 301, daysLeft: 3, status: "진행중",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=60" },
  { id: "cp5", title: "독립 다큐멘터리 후반작업", category: "영상", goal: 12000000, raised: 3400000, backerCount: 97, daysLeft: 21, status: "진행중",
    image: "https://images.unsplash.com/photo-1489599162946-4dd7a1a8b6ef?auto=format&fit=crop&w=600&q=60" },
  { id: "cp6", title: "제로웨이스트 세제 리필스테이션", category: "생활", goal: 6000000, raised: 2100000, backerCount: 78, daysLeft: 0, status: "종료",
    image: "https://images.unsplash.com/photo-1611270629569-8b357cb88da9?auto=format&fit=crop&w=600&q=60" },
  { id: "cp7", title: "핸드드립 원두 정기구독", category: "식품", goal: 4000000, raised: 4900000, backerCount: 156, daysLeft: 6, status: "진행중",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=60" },
  { id: "cp8", title: "1인 가구용 접이식 테이블", category: "가구", goal: 15000000, raised: 5200000, backerCount: 140, daysLeft: 12, status: "진행중",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=60" },
];

export interface Reward {
  campaignId: string;
  tier: string;
  price: number;
  claimed: number;
  limit: number | null;
}

export const REWARDS: Reward[] = [
  { campaignId: "cp2", tier: "얼리버드", price: 39000, claimed: 120, limit: 120 },
  { campaignId: "cp2", tier: "스탠다드", price: 49000, claimed: 210, limit: null },
  { campaignId: "cp2", tier: "2대 세트", price: 89000, claimed: 58, limit: 100 },
  { campaignId: "cp3", tier: "북박스 1회", price: 22000, claimed: 40, limit: null },
  { campaignId: "cp3", tier: "북박스 3개월", price: 60000, claimed: 22, limit: null },
];

export interface Backer {
  id: string;
  name: string;
  campaignTitle: string;
  amount: number;
  tier: string;
  dateLabel: string;
}

export const BACKERS: Backer[] = [
  { id: "bk1", name: "김도윤", campaignTitle: "반려식물 자동 급수기", amount: 89000, tier: "2대 세트", dateLabel: "9월 17일" },
  { id: "bk2", name: "이서연", campaignTitle: "업사이클 가방 브랜드 런칭", amount: 45000, tier: "스탠다드", dateLabel: "9월 16일" },
  { id: "bk3", name: "박지훈", campaignTitle: "반려식물 자동 급수기", amount: 39000, tier: "얼리버드", dateLabel: "9월 10일" },
  { id: "bk4", name: "최민서", campaignTitle: "핸드드립 원두 정기구독", amount: 28000, tier: "1개월", dateLabel: "9월 14일" },
  { id: "bk5", name: "정하은", campaignTitle: "동네 책방 큐레이션 북박스", amount: 60000, tier: "북박스 3개월", dateLabel: "9월 15일" },
  { id: "bk6", name: "한소율", campaignTitle: "1인 가구용 접이식 테이블", amount: 72000, tier: "스탠다드", dateLabel: "9월 13일" },
  { id: "bk7", name: "오지호", campaignTitle: "반려식물 자동 급수기", amount: 49000, tier: "스탠다드", dateLabel: "9월 9일" },
  { id: "bk8", name: "윤아름", campaignTitle: "독립 다큐멘터리 후반작업", amount: 30000, tier: "이름 크레딧", dateLabel: "9월 12일" },
  { id: "bk9", name: "장서윤", campaignTitle: "업사이클 가방 브랜드 런칭", amount: 45000, tier: "스탠다드", dateLabel: "9월 8일" },
  { id: "bk10", name: "임도현", campaignTitle: "동네 책방 큐레이션 북박스", amount: 22000, tier: "북박스 1회", dateLabel: "9월 17일" },
];
