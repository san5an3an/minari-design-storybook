export type ButtonVariant = "solid" | "subtle" | "surface" | "outline" | "plain";
export type ButtonTone = "neutral" | "brand" | "danger" | "success" | "warning" | "info";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonContract {
  // 시각적 무게 값
  variant?: ButtonVariant;
  // 팔레트 구성과 1:1 대응하는 의미 색
  tone?: ButtonTone;
  // 여백과 글자 크기 동시 변경, 기본값 md
  size?: ButtonSize;
  // 비활성 상태를 중립 배경과 커서 변경으로 표시
  disabled?: boolean;
}
