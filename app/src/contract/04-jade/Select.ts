export type SelectSize = "sm" | "md";

export interface SelectContract {
  // 여백과 글자 크기, 기본값 md
  size?: SelectSize;
  // 미선택 상태, 값을 흐리게 표시
  empty?: "true" | "false";
  // 오류 상태
  invalid?: "true" | "false";
  // 비활성화 여부
  disabled?: boolean;
}

// 베이스 구현과 무관하게 고정 이름으로 내보내기
export const SelectParts = [
  "SelectWrap", // 선택 표시용 래퍼
  "SelectMarker", // 접힘 상태 표시
  "SelectGroup", // 같은 성격 항목 그룹. label 속성이 그룹 이름 지정
  "SelectOption", // 옵션 하나. disabled 속성으로 개별 항목만 잠글 수 있음
] as const;
