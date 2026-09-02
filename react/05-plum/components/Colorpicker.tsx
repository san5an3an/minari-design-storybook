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

// 시스템 색 표시 영역. role radiogroup, 이름 지정
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

// 지금 값, 복사 가능한 텍스트
export const ColorPickerValue = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, children, ...rest }, ref) => (
    <span ref={ref} className={cx("ods-colorpicker-value", className)} {...rest}>
      {children}
    </span>
  )
);
ColorPickerValue.displayName = "ColorPickerValue";
