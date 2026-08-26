export interface BreadcrumbContract {
  // 마크업과 토큰만으로 자동 결정, 별도 선택 없음
}

// 베이스 구현과 무관하게 고정 이름으로 내보내기
export const BreadcrumbParts = [
  "BreadcrumbSeparator", // 항목 사이 구분자, 첫 항목 앞은 제외
  "BreadcrumbEllipsis", // 가운데 생략 표시
  "BreadcrumbHome", // 첫 항목의 집 아이콘, 글자 대신 사용, 구분자 제외
] as const;
