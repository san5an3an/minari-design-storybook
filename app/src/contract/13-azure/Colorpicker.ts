export interface ColorpickerContract {
  // 마크업과 토큰만으로 자동 결정, 별도 선택 없음
}

// 베이스 구현과 무관하게 고정 이름으로 내보내기
export const ColorpickerParts = [
  "ColorPickerSwatches", // 시스템 색상 스와치 영역, role=radiogroup, name 보유
  "ColorPickerSwatch", // 색 하나, role=radio, aria-checked 속성
  "ColorPickerMore", // 자유색 선택 영역 펼치기 버튼
  "ColorPickerCustom", // 펼침 시에만 나타나는 자유색 선택 영역
  "ColorPickerArea", // 채도 명도 선택 면, 가로축 채도, 세로축 명도
  "ColorPickerThumb", // 면 위의 핸들
  "ColorPickerHue", // 색상 띠 표시, 순환값이라 양 끝 색이 같음
  "ColorPickerValue", // 현재 값을 텍스트로 표시하고 복사하기
] as const;
