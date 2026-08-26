export interface PageheaderContract {
  // 마크업과 토큰만으로 자동 결정, 별도 선택 없음
}

// 베이스 구현과 무관하게 고정 이름으로 내보내기
export const PageheaderParts = [
  "PageHeaderMain", // 제목, 설명 놓이는 위치
  "PageHeaderTitle", // 화면 이름
  "PageHeaderLede", // 선택적 한 문장 설명
  "PageHeaderMeta", // 보조 정보, 상태 또는 갱신 시각
  "PageHeaderActions", // 동작 버튼 위치, 주 동작은 오른쪽 끝에 고정
] as const;
