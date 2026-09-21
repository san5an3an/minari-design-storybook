export type AssetStatus = "검토 대기" | "승인" | "반려";
export type AssetType = "이미지" | "영상" | "디자인 파일";

export interface Asset {
  id: string;
  name: string;
  image: string;
  type: AssetType;
  status: AssetStatus;
  reviewer: string;
  uploadedAt: string;
  dueDate: string;
  tags: readonly string[];
  fileSizeMb: number;
  comments: number;
}

export const ASSETS: readonly Asset[] = [
  { id: "a1", name: "가을 캠페인 배너 v3", image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=800&q=60", type: "이미지", status: "검토 대기", reviewer: "한지우", uploadedAt: "09-17", dueDate: "09-19", tags: ["캠페인", "SNS"], fileSizeMb: 4.2, comments: 3 },
  // 사진 교체 시 URL 실제 확인 후 사용. 목록 표기만으로는 판단할 수 없음
  { id: "a2", name: "제품 소개 영상 컷", image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=60", type: "영상", status: "검토 대기", reviewer: "박서연", uploadedAt: "09-16", dueDate: "09-18", tags: ["제품", "영상"], fileSizeMb: 128.5, comments: 1 },
  { id: "a3", name: "로고 리디자인 시안 A", image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=60", type: "디자인 파일", status: "승인", reviewer: "이도윤", uploadedAt: "09-14", dueDate: "09-16", tags: ["브랜딩"], fileSizeMb: 2.1, comments: 8 },
  { id: "a4", name: "겨울 룩북 표지", image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=60", type: "이미지", status: "반려", reviewer: "최민지", uploadedAt: "09-15", dueDate: "09-17", tags: ["룩북", "시즌"], fileSizeMb: 6.8, comments: 5 },
  { id: "a5", name: "웹사이트 히어로 이미지", image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&q=60", type: "이미지", status: "승인", reviewer: "한지우", uploadedAt: "09-13", dueDate: "09-15", tags: ["웹", "히어로"], fileSizeMb: 3.4, comments: 2 },
  { id: "a6", name: "브랜드 필름 예고편", image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=60", type: "영상", status: "검토 대기", reviewer: "박서연", uploadedAt: "09-17", dueDate: "09-20", tags: ["필름"], fileSizeMb: 214.0, comments: 0 },
  { id: "a7", name: "패키지 목업 3안", image: "https://images.unsplash.com/photo-1607083206968-13611e3d76db?auto=format&fit=crop&w=800&q=60", type: "디자인 파일", status: "검토 대기", reviewer: "이도윤", uploadedAt: "09-16", dueDate: "09-18", tags: ["패키지"], fileSizeMb: 12.3, comments: 4 },
  { id: "a8", name: "인스타 릴스 썸네일", image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&q=60", type: "이미지", status: "승인", reviewer: "최민지", uploadedAt: "09-12", dueDate: "09-14", tags: ["SNS", "릴스"], fileSizeMb: 1.8, comments: 6 },
];

export interface Reviewer {
  id: string;
  name: string;
  avatarSeed: string;
  pending: number;
  completedThisWeek: number;
  available: boolean;
}

export const REVIEWERS: readonly Reviewer[] = [
  { id: "r1", name: "한지우", avatarSeed: "HJ", pending: 2, completedThisWeek: 11, available: true },
  { id: "r2", name: "박서연", avatarSeed: "PS", pending: 2, completedThisWeek: 7, available: true },
  { id: "r3", name: "이도윤", avatarSeed: "LD", pending: 2, completedThisWeek: 14, available: false },
  { id: "r4", name: "최민지", avatarSeed: "CM", pending: 1, completedThisWeek: 9, available: true },
];

// 홈 화면 라인차트, 최근 8주 리뷰 처리량
export const WEEKLY_REVIEWS: readonly number[] = [18, 22, 19, 27, 24, 31, 28, 34];
export const WEEKLY_LABELS: readonly string[] = ["7주 전", "6주 전", "5주 전", "4주 전", "3주 전", "2주 전", "지난주", "이번주"];

// 홈 화면 도넛차트, 상태 분포 표시. 자산 전체를 더 큰 모집단으로 흉내 내기
export const STATUS_DISTRIBUTION: readonly { status: AssetStatus; count: number; color: string }[] = [
  { status: "승인", count: 62, color: "var(--semantic-fg-success-default)" },
  { status: "검토 대기", count: 21, color: "var(--semantic-fg-warning-default)" },
  { status: "반려", count: 9, color: "var(--semantic-fg-danger-default)" },
];

export interface Comment {
  id: string;
  author: string;
  text: string;
  time: string;
}

export const ASSET_COMMENTS: Record<string, readonly Comment[]> = {
  a1: [
    { id: "c1", author: "이도윤", text: "로고 위치를 좌상단으로 옮겨주세요.", time: "09-17 14:20" },
    { id: "c2", author: "한지우", text: "반영했습니다, 확인 부탁드려요.", time: "09-17 16:05" },
  ],
  a3: [
    { id: "c3", author: "최민지", text: "컬러가 브랜드 가이드와 잘 맞네요. 승인합니다.", time: "09-14 10:12" },
  ],
  a4: [
    { id: "c4", author: "박서연", text: "모델 포즈가 시즌 톤과 안 맞아요. 재촬영 필요할 것 같아요.", time: "09-15 09:40" },
  ],
};
