export interface CommandContract {
  // 마크업과 토큰만으로 자동 결정, 별도 선택 없음
}

// 베이스 구현과 무관하게 고정 이름으로 내보내기
export const CommandParts = [
  "CommandInput", // 검색어 입력 필드
  "CommandList", // 검색 결과 목록
  "CommandGroup", // 그룹 라벨
  "CommandItem",
  "CommandShortcut", // 단축키 표시
  "CommandEmpty", // 검색 결과 없음 상태, 안내 문구 표시
] as const;
