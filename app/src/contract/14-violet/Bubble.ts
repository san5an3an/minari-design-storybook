export type BubbleVariant = "default" | "secondary" | "muted" | "tinted" | "outline" | "ghost" | "destructive";
export type BubbleAlign = "start" | "end";

export interface BubbleContract {
  // 레이블이 앞으로 나간 정도. 기본값 default
  variant?: BubbleVariant;
  // 붙는 위치, 기본값 start
  align?: BubbleAlign;
}

// 베이스 구현과 무관하게 고정 이름으로 내보내기
export const BubbleParts = [
  "BubbleContent", // 말풍선 내용
  "BubbleReactions", // 말풍선에 겹쳐진 반응 표시
  "BubbleGroup", // 같은 사람이 연속으로 보낸 메시지 그룹
] as const;

export type BubbleReactionsSide = "top" | "bottom";
export type BubbleReactionsAlign = "start" | "end";
export interface BubbleReactionsContract {
  // 걸리는 변, 기본값 bottom
  side?: BubbleReactionsSide;
  // 몰리는 방향, 기본값 end
  align?: BubbleReactionsAlign;
}
