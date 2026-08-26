export type TooltipSide = "top" | "right" | "bottom" | "left";

export interface TooltipContract {
  // 띄우는 방향. 대상이 가장자리에 붙으면 자동 전환
  side?: TooltipSide;
}

// 베이스 구현과 무관하게 고정 이름으로 내보내기
export const TooltipParts = [
  "TooltipWrap", // 대상, 말풍선 래퍼
] as const;
