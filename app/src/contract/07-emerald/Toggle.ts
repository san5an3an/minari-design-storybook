export type ToggleVariant = "plain" | "outline";
export type ToggleSize = "sm" | "md" | "lg";

export interface ToggleContract {
  // 테두리 여부. 기본값 plain
  variant?: ToggleVariant;
  // 한 변과 글자 크기. 기본값 md
  size?: ToggleSize;
  // 눌림 상태. 이 속성이 상태 자체임
  pressed?: "true" | "false";
  // 비활성화 여부
  disabled?: boolean;
}
