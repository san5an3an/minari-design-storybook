export interface DatatableContract {
  // 마크업과 토큰만으로 자동 결정, 별도 선택 없음
}

// 베이스 구현과 무관하게 고정 이름으로 내보내기
export const DatatableParts = [
  "DataTableToolbar", // 필터 입력과 열 선택이 놓이는 행
  "DataTableSort", // 열 이름 겸 정렬 버튼
  "DataTableStatus", // 선택된 항목 수 표시, 페이지 이동해도 유지
] as const;

export interface DataTableSortContract {
  // 현재 정렬 기준 열 여부. 기본값 false
  active?: boolean;
}
