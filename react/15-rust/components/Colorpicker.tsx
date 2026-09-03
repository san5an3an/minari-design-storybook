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

// 담아 둔 색 표시 위치. 맨 아래 배치. 주어진 목록이 아니라 누적된 결과이기 때문임
export const ColorPickerSwatches = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...rest }, ref) => (
    <div ref={ref} className={cx("ods-colorpicker-swatches", className)} {...rest}>
      {children}
    </div>
  )
);
ColorPickerSwatches.displayName = "ColorPickerSwatches";

// 색 하나. role=radio, aria-checked
export const ColorPickerSwatch = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, children, ...rest }, ref) => (
    <button ref={ref} className={cx("ods-colorpicker-swatch", className)} {...rest}>
      {children}
    </button>
  )
);
ColorPickerSwatch.displayName = "ColorPickerSwatch";

// 자유색 펼치기 버튼
export const ColorPickerMore = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, children, ...rest }, ref) => (
    <button ref={ref} className={cx("ods-colorpicker-more", className)} {...rest}>
      {children}
    </button>
  )
);
ColorPickerMore.displayName = "ColorPickerMore";

// 펼쳤을 때만 나오는 자유 색상 영역
export const ColorPickerCustom = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...rest }, ref) => (
    <div ref={ref} className={cx("ods-colorpicker-custom", className)} {...rest}>
      {children}
    </div>
  )
);
ColorPickerCustom.displayName = "ColorPickerCustom";

// 채도, 명도 면. 가로가 채도, 세로가 명도
export const ColorPickerArea = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...rest }, ref) => (
    <div ref={ref} className={cx("ods-colorpicker-area", className)} {...rest}>
      {children}
    </div>
  )
);
ColorPickerArea.displayName = "ColorPickerArea";

// 면 위 핸들
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

// 값을 읽고 쓰는 위치, 흩어두지 않고 나란히 배치
export const ColorPickerRow = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...rest }, ref) => (
    <div ref={ref} className={cx("ods-colorpicker-row", className)} {...rest}>
      {children}
    </div>
  )
);
ColorPickerRow.displayName = "ColorPickerRow";

// 선택 색 표시 겸 스와치 추가/제거 토글 버튼
export const ColorPickerCurrent = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, children, ...rest }, ref) => (
    <button ref={ref} className={cx("ods-colorpicker-current", className)} {...rest}>
      {children}
    </button>
  )
);
ColorPickerCurrent.displayName = "ColorPickerCurrent";

// 담기, 빼기 아이콘 표시. 한 곳에서 상태 변경
export const ColorPickerCurrentMark = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, children, ...rest }, ref) => (
    <span ref={ref} className={cx("ods-colorpicker-current-mark", className)} {...rest}>
      {children}
    </span>
  )
);
ColorPickerCurrentMark.displayName = "ColorPickerCurrentMark";

// Lucide 아이콘 선으로만 렌더링. 면으로 채우면 아래 색을 가리는 문제가 있음
export const ColorPickerIcon = React.forwardRef<SVGSVGElement, React.SVGAttributes<SVGSVGElement>>(
  ({ className, children, ...rest }, ref) => (
    <svg ref={ref} className={cx("ods-colorpicker-icon", className)} {...rest}>
      {children}
    </svg>
  )
);
ColorPickerIcon.displayName = "ColorPickerIcon";

// 화면 색상 추출. 브라우저 미지원 시 동작하지 않음
export const ColorPickerPipette = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, children, ...rest }, ref) => (
    <button ref={ref} className={cx("ods-colorpicker-pipette", className)} {...rest}>
      {children}
    </button>
  )
);
ColorPickerPipette.displayName = "ColorPickerPipette";

export const ColorPickerFormat = React.forwardRef<HTMLSelectElement, React.SelectHTMLAttributes<HTMLSelectElement>>(
  ({ className, children, ...rest }, ref) => (
    <select ref={ref} className={cx("ods-colorpicker-format", className)} {...rest}>
      {children}
    </select>
  )
);
ColorPickerFormat.displayName = "ColorPickerFormat";

// 값 필드 배치 위치. 형식별 개수 다름, HEX 1개 RGB/HSL 3개
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

// # % 같은 고정 문자. 입력값 아니라 필드 값이라 삭제되지 않음
export const ColorPickerFieldAffix = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, children, ...rest }, ref) => (
    <span ref={ref} className={cx("ods-colorpicker-field-affix", className)} {...rest}>
      {children}
    </span>
  )
);
ColorPickerFieldAffix.displayName = "ColorPickerFieldAffix";

// 실제 입력 영역, 숫자와 글자만 포함해 고정 요소 제외
export const ColorPickerFieldInput = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, children, ...rest }, ref) => (
    <input ref={ref} className={cx("ods-colorpicker-field-input", className)} {...rest}>
      {children}
    </input>
  )
);
ColorPickerFieldInput.displayName = "ColorPickerFieldInput";

// 접힘 상태 값. 펼치면 입력 필드가 대체
export const ColorPickerValue = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, children, ...rest }, ref) => (
    <span ref={ref} className={cx("ods-colorpicker-value", className)} {...rest}>
      {children}
    </span>
  )
);
ColorPickerValue.displayName = "ColorPickerValue";
