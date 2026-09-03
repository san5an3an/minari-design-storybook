import * as React from "react";
import { cx } from "./cx";

export type ColorpickerProps = React.HTMLAttributes<HTMLDivElement>;

export const Colorpicker = React.forwardRef<HTMLDivElement, ColorpickerProps>(
  ({ children, className, ...rest }, ref) => (
    <div
      className={cx("ods-colorpicker", className)}
      ref={ref}
      {...rest}
    >
      {children}
    </div>
  )
);
Colorpicker.displayName = "Colorpicker";

// 채도, 명도 면. 가로가 채도, 세로가 명도
export const ColorPickerArea = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...rest }, ref) => (
    <div ref={ref} className={cx("ods-colorpicker-area", className)} {...rest}>
      {children}
    </div>
  )
);
ColorPickerArea.displayName = "ColorPickerArea";

// 면 위 핸들. 속 비워 하단 색 노출
export const ColorPickerThumb = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...rest }, ref) => (
    <div ref={ref} className={cx("ods-colorpicker-thumb", className)} {...rest}>
      {children}
    </div>
  )
);
ColorPickerThumb.displayName = "ColorPickerThumb";

// 색상 띠. 색상값은 순환값이라 양 끝 색이 같음
export const ColorPickerHue = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, children, ...rest }, ref) => (
    <input ref={ref} className={cx("ods-colorpicker-hue", className)} {...rest}>
      {children}
    </input>
  )
);
ColorPickerHue.displayName = "ColorPickerHue";

// 투명도 띠, 뒤에 격자를 깔아 비침을 표시
export const ColorPickerAlpha = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, children, ...rest }, ref) => (
    <input ref={ref} className={cx("ods-colorpicker-alpha", className)} {...rest}>
      {children}
    </input>
  )
);
ColorPickerAlpha.displayName = "ColorPickerAlpha";

// 현재 색 표시 줄, 왼쪽 색상과 글자, 오른쪽 스포이드
export const ColorPickerPreview = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...rest }, ref) => (
    <div ref={ref} className={cx("ods-colorpicker-preview", className)} {...rest}>
      {children}
    </div>
  )
);
ColorPickerPreview.displayName = "ColorPickerPreview";

// 선택 색 표시 겸 스와치 추가 버튼
export const ColorPickerCurrent = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, children, ...rest }, ref) => (
    <button ref={ref} className={cx("ods-colorpicker-current", className)} {...rest}>
      {children}
    </button>
  )
);
ColorPickerCurrent.displayName = "ColorPickerCurrent";

// 담기 아이콘은 평소 숨김 처리, hover, focus 시에만 표시
export const ColorPickerCurrentMark = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, children, ...rest }, ref) => (
    <span ref={ref} className={cx("ods-colorpicker-current-mark", className)} {...rest}>
      {children}
    </span>
  )
);
ColorPickerCurrentMark.displayName = "ColorPickerCurrentMark";

// 현재 색 값 텍스트 표기
export const ColorPickerHex = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, children, ...rest }, ref) => (
    <span ref={ref} className={cx("ods-colorpicker-hex", className)} {...rest}>
      {children}
    </span>
  )
);
ColorPickerHex.displayName = "ColorPickerHex";

// 화면 색상 추출. 브라우저 미지원 시 동작하지 않음
export const ColorPickerPipette = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, children, ...rest }, ref) => (
    <button ref={ref} className={cx("ods-colorpicker-pipette", className)} {...rest}>
      {children}
    </button>
  )
);
ColorPickerPipette.displayName = "ColorPickerPipette";

// 값을 읽고 쓰는 위치, 형식/값/투명도를 나란히 배치
export const ColorPickerRow = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...rest }, ref) => (
    <div ref={ref} className={cx("ods-colorpicker-row", className)} {...rest}>
      {children}
    </div>
  )
);
ColorPickerRow.displayName = "ColorPickerRow";

// button에 button 못 넣어 형제 구조. 이 컨테이너가 목록 기준 위치임
export const ColorPickerFormatSlot = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...rest }, ref) => (
    <div ref={ref} className={cx("ods-colorpicker-format-slot", className)} {...rest}>
      {children}
    </div>
  )
);
ColorPickerFormatSlot.displayName = "ColorPickerFormatSlot";

// 값 형식 선택 버튼, 누르면 드롭다운 목록 표시
export const ColorPickerFormat = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, children, ...rest }, ref) => (
    <button ref={ref} className={cx("ods-colorpicker-format", className)} {...rest}>
      {children}
    </button>
  )
);
ColorPickerFormat.displayName = "ColorPickerFormat";

// 형식 목록, role=listbox, 바깥 클릭 시 닫기
export const ColorPickerFormatMenu = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...rest }, ref) => (
    <div ref={ref} className={cx("ods-colorpicker-format-menu", className)} {...rest}>
      {children}
    </div>
  )
);
ColorPickerFormatMenu.displayName = "ColorPickerFormatMenu";

// 형식 하나, role=option, aria-selected 적용
export const ColorPickerFormatOption = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, children, ...rest }, ref) => (
    <button ref={ref} className={cx("ods-colorpicker-format-option", className)} {...rest}>
      {children}
    </button>
  )
);
ColorPickerFormatOption.displayName = "ColorPickerFormatOption";

// 값 필드 배치 위치. 형식별 개수 다름, HEX 1개 RGB/HSL/LAB 3개
export const ColorPickerFields = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...rest }, ref) => (
    <div ref={ref} className={cx("ods-colorpicker-fields", className)} {...rest}>
      {children}
    </div>
  )
);
ColorPickerFields.displayName = "ColorPickerFields";

// 셀 하나, 고정 글자와 입력을 함께 담는 상자임
export interface ColorPickerFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  // 행 폭에 맞춰 크기 조정되는 숫자 필드
  num?: boolean;
  alpha?: boolean;
}
export const ColorPickerField = React.forwardRef<HTMLDivElement, ColorPickerFieldProps>(
  ({ num = false, alpha = false, className, children, ...rest }, ref) => (
    <div ref={ref} className={cx("ods-colorpicker-field", num && "ods-colorpicker-field--num", alpha && "ods-colorpicker-field--alpha", className)} {...rest}>
      {children}
    </div>
  )
);
ColorPickerField.displayName = "ColorPickerField";

// R, G, B 채널 글자는 필드 안에 배치. 밖에 두면 필드 셋이 여섯 개로 분리되어 보임
export const ColorPickerFieldLabel = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, children, ...rest }, ref) => (
    <span ref={ref} className={cx("ods-colorpicker-field-label", className)} {...rest}>
      {children}
    </span>
  )
);
ColorPickerFieldLabel.displayName = "ColorPickerFieldLabel";

// # % 같은 고정 문자. 입력값 아니라 필드 값이라 삭제되지 않음
export const ColorPickerFieldAffix = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, children, ...rest }, ref) => (
    <span ref={ref} className={cx("ods-colorpicker-field-affix", className)} {...rest}>
      {children}
    </span>
  )
);
ColorPickerFieldAffix.displayName = "ColorPickerFieldAffix";

// 실제 입력 영역, 숫자와 글자만 포함해 고정 요소, 라벨 제외
export const ColorPickerFieldInput = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, children, ...rest }, ref) => (
    <input ref={ref} className={cx("ods-colorpicker-field-input", className)} {...rest}>
      {children}
    </input>
  )
);
ColorPickerFieldInput.displayName = "ColorPickerFieldInput";

// 담아 둔 색 표시 위치. 맨 아래 배치. 주어진 목록이 아니라 누적된 결과이기 때문임
export const ColorPickerSwatches = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...rest }, ref) => (
    <div ref={ref} className={cx("ods-colorpicker-swatches", className)} {...rest}>
      {children}
    </div>
  )
);
ColorPickerSwatches.displayName = "ColorPickerSwatches";

// 이름, 개수, 최대 수용량 텍스트로 표시
export const ColorPickerSwatchesHead = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...rest }, ref) => (
    <div ref={ref} className={cx("ods-colorpicker-swatches-head", className)} {...rest}>
      {children}
    </div>
  )
);
ColorPickerSwatchesHead.displayName = "ColorPickerSwatchesHead";

// 3/10 형식 표시. 상한을 화면에서 셀 필요 없음
export const ColorPickerSwatchesCount = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, children, ...rest }, ref) => (
    <span ref={ref} className={cx("ods-colorpicker-swatches-count", className)} {...rest}>
      {children}
    </span>
  )
);
ColorPickerSwatchesCount.displayName = "ColorPickerSwatchesCount";

// 스와치가 흐르는 영역, 담긴 순서대로 정렬
export const ColorPickerSwatchGrid = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...rest }, ref) => (
    <div ref={ref} className={cx("ods-colorpicker-swatch-grid", className)} {...rest}>
      {children}
    </div>
  )
);
ColorPickerSwatchGrid.displayName = "ColorPickerSwatchGrid";

// 스와치와 삭제 버튼을 래퍼로 묶어 위치 고정. button 중첩이 안 되는 제약임
export const ColorPickerSwatchSlot = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...rest }, ref) => (
    <div ref={ref} className={cx("ods-colorpicker-swatch-slot", className)} {...rest}>
      {children}
    </div>
  )
);
ColorPickerSwatchSlot.displayName = "ColorPickerSwatchSlot";

// 클릭 불가한 색 하나만 표시
export const ColorPickerSwatch = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...rest }, ref) => (
    <div ref={ref} className={cx("ods-colorpicker-swatch", className)} {...rest}>
      {children}
    </div>
  )
);
ColorPickerSwatch.displayName = "ColorPickerSwatch";

// 스와치 전체를 덮는 오버레이로 스와치 삭제
export const ColorPickerSwatchRemove = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, children, ...rest }, ref) => (
    <button ref={ref} className={cx("ods-colorpicker-swatch-remove", className)} {...rest}>
      {children}
    </button>
  )
);
ColorPickerSwatchRemove.displayName = "ColorPickerSwatchRemove";

// Lucide 아이콘 선으로만 렌더링. 면으로 채우면 아래 색을 가리는 문제가 있음
export const ColorPickerIcon = React.forwardRef<SVGSVGElement, React.SVGAttributes<SVGSVGElement>>(
  ({ className, children, ...rest }, ref) => (
    <svg ref={ref} className={cx("ods-colorpicker-icon", className)} {...rest}>
      {children}
    </svg>
  )
);
ColorPickerIcon.displayName = "ColorPickerIcon";
