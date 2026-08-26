export interface InputgroupContract {
  // 마크업과 토큰만으로 자동 결정, 별도 선택 없음
}

// 베이스 구현과 무관하게 고정 이름으로 내보내기
export const InputgroupParts = [
  "InputGroupInput", // 테두리, 배경 없는 실제 입력 필드
  "InputGroupAddon", // 아이콘, 단위, 버튼이 붙는 요소
  "InputGroupText", // 단위, 접두사 등 요소 내 글자
  "InputGroupButton", // 지우기, 보이기 등 요소 내 버튼
] as const;

export type InputGroupAddonAlign = "inline-start" | "inline-end" | "block-start" | "block-end";
export interface InputGroupAddonContract {
  // 부착 위치, 기본값 inline-start
  align?: InputGroupAddonAlign;
}
