export interface ColorpickerContract {
  // 마크업과 토큰만으로 자동 결정, 별도 선택 없음
}

// 베이스 구현과 무관하게 고정 이름으로 내보내기
export const ColorpickerParts = [
  "ColorPickerArea", // 채도 명도 선택 면, 가로축 채도, 세로축 명도
  "ColorPickerThumb", // 면 위의 핸들, 속을 비워 아래 색상 노출
  "ColorPickerHue", // 색상 띠 표시, 순환값이라 양 끝 색이 같음
  "ColorPickerAlpha", // 투명도 띠, 뒤에 격자 배경으로 투명 표시
  "ColorPickerPreview", // 현재 색 미리보기 행, 왼쪽 색상과 텍스트, 오른쪽 끝 스포이드
  "ColorPickerCurrent", // 현재 색 표시 및 스와치 추가 버튼
  "ColorPickerCurrentMark", // + 기호 표시, 평소 숨김, hover 또는 focus 시에만 노출
  "ColorPickerHex", // 현재 색의 텍스트 표기, 등폭 폰트 사용
  "ColorPickerPipette", // 화면에서 색상 추출. 브라우저 지원 시에만 나타나는 기능임
  "ColorPickerRow", // 형식, 값, 투명도 입력을 한 행에 배치
  "ColorPickerFormatSlot", // 형식 버튼과 목록의 위치 기준 제공. button 중첩 불가라 형제 구조가 필수임
  "ColorPickerFormat", // 값 형식 선택 버튼, 클릭 시 목록 펼치기
  "ColorPickerFormatMenu", // 형식 목록, role=listbox, 바깥 클릭 시 닫기
  "ColorPickerFormatOption", // 형식 옵션, role=option, aria-selected 속성
  "ColorPickerFields", // 값 필드 영역, 형식별 개수 차이
  "ColorPickerField", // 고정 텍스트와 입력값을 포함하는 필드
  "ColorPickerFieldLabel", // R, G, B 등 채널명을 표시하는 필드 내부 라벨
  "ColorPickerFieldAffix", // #, % 같은 고정 접두/접미 텍스트, 삭제 불가
  "ColorPickerFieldInput", // 고정 텍스트와 라벨을 제외한 실제 입력 영역
  "ColorPickerSwatches", // 저장된 색상 스와치 목록, 하단에 배치
  "ColorPickerSwatchesHead", // 이름과 개수를 표시하는 행, 최대 개수 텍스트로 안내
  "ColorPickerSwatchesCount", // 3/10 형식의 스와치 개수 표시
  "ColorPickerSwatchGrid", // 스와치 목록을 담긴 순서대로 배치하는 그리드
  "ColorPickerSwatchSlot", // 스와치와 삭제 버튼의 위치 기준 제공. button 중첩 불가라 형제 구조가 필수임
  "ColorPickerSwatch", // 색 하나, 클릭 불가, 표시 전용
  "ColorPickerSwatchRemove", // 스와치 삭제 버튼, 스와치 전체를 덮어 배치
  "ColorPickerIcon", // Lucide 선 아이콘 사용
] as const;

export interface ColorPickerFieldContract {
  // 행 폭에 맞춰 크기 조정되는 숫자 필드
  num?: boolean;
  // 투명도 필드만 폭 고정. 함께 줄이면 100%가 90%와 구분되지 않음
  alpha?: boolean;
}
