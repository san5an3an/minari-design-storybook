export type ColorCategory = "Primary" | "Secondary" | "Neutral" | "Semantic";

export interface ColorToken {
  id: string;
  name: string;
  hex: string;
  category: ColorCategory;
  usageCount: number;
  contrastOnWhite: number;
  contrastOnBlack: number;
  addedDate: string;
  owner: string;
}

export const COLOR_TOKENS: readonly ColorToken[] = [
  { id: "t1", name: "brand-600", hex: "#2B6CB0", category: "Primary", usageCount: 214, contrastOnWhite: 4.9, contrastOnBlack: 4.3, addedDate: "2025-11-02", owner: "한지우" },
  { id: "t2", name: "brand-400", hex: "#63B3ED", category: "Primary", usageCount: 87, contrastOnWhite: 1.8, contrastOnBlack: 11.7, addedDate: "2025-11-02", owner: "한지우" },
  { id: "t3", name: "accent-coral", hex: "#F2685B", category: "Secondary", usageCount: 46, contrastOnWhite: 3.1, contrastOnBlack: 6.8, addedDate: "2026-01-14", owner: "박서연" },
  { id: "t4", name: "accent-mint", hex: "#38B2AC", category: "Secondary", usageCount: 39, contrastOnWhite: 2.6, contrastOnBlack: 8.1, addedDate: "2026-01-14", owner: "박서연" },
  { id: "t5", name: "gray-900", hex: "#1A202C", category: "Neutral", usageCount: 512, contrastOnWhite: 15.8, contrastOnBlack: 1.3, addedDate: "2025-09-20", owner: "이도윤" },
  { id: "t6", name: "gray-500", hex: "#718096", category: "Neutral", usageCount: 301, contrastOnWhite: 4.6, contrastOnBlack: 4.6, addedDate: "2025-09-20", owner: "이도윤" },
  { id: "t7", name: "gray-100", hex: "#F7FAFC", category: "Neutral", usageCount: 428, contrastOnWhite: 1.1, contrastOnBlack: 19.1, addedDate: "2025-09-20", owner: "이도윤" },
  { id: "t8", name: "success-500", hex: "#38A169", category: "Semantic", usageCount: 164, contrastOnWhite: 3.4, contrastOnBlack: 6.2, addedDate: "2025-12-05", owner: "최민지" },
  { id: "t9", name: "warning-500", hex: "#DD6B20", category: "Semantic", usageCount: 98, contrastOnWhite: 3.0, contrastOnBlack: 7.1, addedDate: "2025-12-05", owner: "최민지" },
  { id: "t10", name: "danger-500", hex: "#E53E3E", category: "Semantic", usageCount: 152, contrastOnWhite: 3.9, contrastOnBlack: 5.5, addedDate: "2025-12-05", owner: "최민지" },
  { id: "t11", name: "accent-violet", hex: "#805AD5", category: "Secondary", usageCount: 22, contrastOnWhite: 4.9, contrastOnBlack: 4.3, addedDate: "2026-03-11", owner: "박서연" },
  { id: "t12", name: "gray-300", hex: "#CBD5E0", category: "Neutral", usageCount: 189, contrastOnWhite: 1.5, contrastOnBlack: 14.3, addedDate: "2025-09-20", owner: "이도윤" },
];

// 담당자 이름을 아바타 시드로 변환. 화면마다 따로 정하면 아바타가 달라질 수 있음
export const OWNER_SEED: Record<string, string> = {
  "한지우": "jiwoo",
  "박서연": "seoyeon",
  "이도윤": "doyun",
  "최민지": "minji",
};

// 월별 토큰 사용량 영역차트 표시, 열두 달 고정값
export interface TrendPoint {
  month: string;
  usage: number;
  newTokens: number;
}

export const USAGE_TREND: readonly TrendPoint[] = [
  { month: "10월", usage: 1420, newTokens: 2 },
  { month: "11월", usage: 1560, newTokens: 3 },
  { month: "12월", usage: 1685, newTokens: 3 },
  { month: "1월", usage: 1790, newTokens: 2 },
  { month: "2월", usage: 1845, newTokens: 1 },
  { month: "3월", usage: 1978, newTokens: 2 },
  { month: "4월", usage: 2094, newTokens: 1 },
  { month: "5월", usage: 2252, newTokens: 1 },
];

// 통계 카드 미니 스파크라인, 카드당 6포인트 고정
export const STAT_SPARKS = {
  tokens: [8, 9, 9, 10, 11, 12],
  usage: [1685, 1790, 1845, 1978, 2094, 2252],
  contrast: [3.6, 3.8, 3.9, 4.0, 4.1, 4.2],
  compliance: [42, 42, 50, 50, 58, 58],
} as const;

// 최근 변경 이력. 우측 레일 활동 피드에 PR 번호까지 표시
export interface TokenActivity {
  id: string;
  token: string;
  action: string;
  who: string;
  avatarSeed: string;
  when: string;
  pr: string;
  tone: "brand" | "success" | "warning";
}

export const RECENT_ACTIVITY: readonly TokenActivity[] = [
  { id: "a1", token: "accent-violet", action: "새 토큰 추가 · #805AD5", who: "박서연", avatarSeed: "seoyeon", when: "12분 전", pr: "#482", tone: "brand" },
  { id: "a2", token: "danger-500", action: "대비 재측정 3.9:1 → 4.6:1", who: "최민지", avatarSeed: "minji", when: "1시간 전", pr: "#479", tone: "success" },
  { id: "a3", token: "brand-400", action: "AA 미달 경고 확인", who: "한지우", avatarSeed: "jiwoo", when: "3시간 전", pr: "#477", tone: "warning" },
  { id: "a4", token: "gray-300", action: "사용처 재집계 189건", who: "이도윤", avatarSeed: "doyun", when: "어제 17:20", pr: "#471", tone: "brand" },
  { id: "a5", token: "success-500", action: "승인 처리 · 웹 앱 배포", who: "최민지", avatarSeed: "minji", when: "어제 11:04", pr: "#468", tone: "success" },
];

// 감사에서 열린 이슈, 우측 레일 상단 피드
export interface TokenIssue {
  id: string;
  severity: "critical" | "warning" | "info";
  token: string;
  detail: string;
  when: string;
}

export const OPEN_ISSUES: readonly TokenIssue[] = [
  { id: "ISS-214", severity: "critical", token: "brand-400", detail: "본문 대비 1.8:1 · AA 미달 (사용처 87건)", when: "3시간 전" },
  { id: "ISS-213", severity: "critical", token: "gray-100", detail: "본문 대비 1.1:1 · 흰 배경에서 판독 불가", when: "5시간 전" },
  { id: "ISS-211", severity: "warning", token: "accent-mint", detail: "2.6:1 · 큰 글자에만 사용 권장", when: "어제" },
  { id: "ISS-209", severity: "warning", token: "warning-500", detail: "버튼 배경 사용 12건, 대비 재확인 필요", when: "2일 전" },
  { id: "ISS-205", severity: "info", token: "gray-300", detail: "중복 후보 · gray-200 과 ΔE 2.1", when: "4일 전" },
];

// 토큰 담당자 랭킹, 우측 레일 중단 카드
export interface Contributor {
  name: string;
  avatarSeed: string;
  ownedTokens: number;
  changes30d: number;
  status: "active" | "idle";
}

export const CONTRIBUTORS: readonly Contributor[] = [
  { name: "이도윤", avatarSeed: "doyun", ownedTokens: 4, changes30d: 18, status: "active" },
  { name: "최민지", avatarSeed: "minji", ownedTokens: 3, changes30d: 14, status: "active" },
  { name: "박서연", avatarSeed: "seoyeon", ownedTokens: 3, changes30d: 9, status: "active" },
  { name: "한지우", avatarSeed: "jiwoo", ownedTokens: 2, changes30d: 5, status: "idle" },
];

// 토큰 한 건의 변경 이력. 상세 화면에서 사용
export interface HistoryEntry {
  date: string;
  label: string;
  by: string;
  commit: string;
}

export const TOKEN_HISTORY: readonly HistoryEntry[] = [
  { date: "2026-03-11", label: "명도 대비 재측정 · 4.9:1", by: "최민지", commit: "a7f31c9" },
  { date: "2026-01-20", label: "마케팅 사이트 배포 (PR #412)", by: "박서연", commit: "5c02be4" },
  { date: "2025-12-02", label: "값 조정 #3070C0 → #2B6CB0", by: "한지우", commit: "e19d70a" },
  { date: "2025-11-02", label: "토큰 생성 · Primary 등록", by: "한지우", commit: "0b4aa52" },
];

export interface UsageSite {
  screen: string;
  base: string;
  count: number;
}

export const TOKEN_USAGE: Record<string, readonly UsageSite[]> = {
  t1: [
    { screen: "Primary 버튼 배경", base: "웹 앱", count: 128 },
    { screen: "링크 텍스트", base: "마케팅 사이트", count: 54 },
    { screen: "탭 활성 표시", base: "모바일 앱", count: 32 },
  ],
  t2: [
    { screen: "정보 배너 배경", base: "웹 앱", count: 51 },
    { screen: "차트 보조선", base: "관리자 콘솔", count: 36 },
  ],
  t3: [
    { screen: "프로모 카드 강조", base: "마케팅 사이트", count: 28 },
    { screen: "빈 상태 일러스트", base: "웹 앱", count: 18 },
  ],
  t4: [
    { screen: "태그 배경", base: "웹 앱", count: 24 },
    { screen: "성공 토스트 보더", base: "모바일 앱", count: 15 },
  ],
  t5: [
    { screen: "본문 텍스트", base: "웹 앱", count: 312 },
    { screen: "헤딩", base: "마케팅 사이트", count: 200 },
  ],
  t6: [
    { screen: "보조 설명 텍스트", base: "웹 앱", count: 186 },
    { screen: "표 헤더 라벨", base: "관리자 콘솔", count: 115 },
  ],
  t7: [
    { screen: "페이지 배경", base: "웹 앱", count: 241 },
    { screen: "카드 내부 배경", base: "관리자 콘솔", count: 187 },
  ],
  t8: [
    { screen: "성공 상태 점", base: "웹 앱", count: 96 },
    { screen: "완료 배지", base: "모바일 앱", count: 68 },
  ],
  t9: [
    { screen: "경고 배너", base: "관리자 콘솔", count: 62 },
    { screen: "지연 상태 칩", base: "웹 앱", count: 36 },
  ],
  t10: [
    { screen: "오류 메시지", base: "웹 앱", count: 88 },
    { screen: "삭제 버튼", base: "관리자 콘솔", count: 64 },
  ],
  t11: [
    { screen: "신규 라벨", base: "마케팅 사이트", count: 22 },
  ],
  t12: [
    { screen: "구분선", base: "웹 앱", count: 121 },
    { screen: "비활성 컨트롤 보더", base: "관리자 콘솔", count: 68 },
  ],
};

// WCAG AA 본문 대비 기준 4.5. 감사 화면 판별에 사용
export const WCAG_AA_NORMAL = 4.5;
