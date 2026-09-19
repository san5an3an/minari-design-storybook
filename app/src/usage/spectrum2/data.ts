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

export interface UsageSite {
  screen: string;
  base: string;
  count: number;
}

export const TOKEN_USAGE: Record<string, readonly UsageSite[]> = {
  t1: [
    { screen: "버튼 배경", base: "웹 앱", count: 128 },
    { screen: "링크 텍스트", base: "마케팅 사이트", count: 54 },
    { screen: "탭 활성 표시", base: "모바일 앱", count: 32 },
  ],
  t5: [
    { screen: "본문 텍스트", base: "웹 앱", count: 312 },
    { screen: "헤딩", base: "마케팅 사이트", count: 200 },
  ],
};

// WCAG AA 본문 대비 기준 4.5. 감사 화면 판별에 사용
export const WCAG_AA_NORMAL = 4.5;
