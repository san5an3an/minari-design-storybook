export interface ColorpickerContract {
  // 마크업과 토큰만으로 자동 결정, 별도 선택 없음
}

// 베이스 구현과 무관하게 고정 이름으로 내보내기
export const ColorpickerParts = [
  "ColorPickerSwatches", // 저장된 색상 스와치 목록, 하단에 배치
  "ColorPickerSwatch", // 색 하나, role=radio, aria-checked 속성
  "ColorPickerMore", // 자유색 선택 영역 펼치기 버튼
  "ColorPickerCustom", // 펼침 시에만 나타나는 자유색 선택 영역
  "ColorPickerArea", // 채도 명도 선택 면, 가로축 채도, 세로축 명도
  "ColorPickerThumb", // 면 위의 핸들
  "ColorPickerHue", // 색상 띠 표시, 순환값이라 양 끝 색이 같음
  "ColorPickerAlpha", // 투명도 띠, 뒤에 격자 배경으로 투명 표시
  "ColorPickerRow", // 값 입력 요소들을 한 행에 배치
  "ColorPickerCurrent", // 현재 색 표시 및 스와치 추가/제거 버튼
  "ColorPickerCurrentMark", // 추가 제거 상태에 따라 + 또는 - 기호 표시
  "ColorPickerIcon", // Lucide 선 아이콘 사용
  "ColorPickerPipette", // 화면에서 색상 추출. 브라우저 지원 시에만 나타나는 기능임
  "ColorPickerFormat",
  "ColorPickerFields", // 값 필드 영역, 형식별 개수 차이
  "ColorPickerField", // 고정 텍스트와 입력값을 포함하는 필드
  "ColorPickerFieldAffix", // #, % 같은 고정 접두/접미 텍스트, 삭제 불가
  "ColorPickerFieldInput", // 고정 텍스트를 제외한 실제 입력 영역
  "ColorPickerValue", // 접힘 상태의 값 표시, 펼치면 입력 필드로 대체
] as const;

export interface ColorPickerFieldContract {
  // 행 폭에 맞춰 크기 조정되는 숫자 필드
  num?: boolean;
  // 투명도 필드만 폭 고정. 함께 줄이면 100%가 90%와 구분되지 않음
  alpha?: boolean;
}
