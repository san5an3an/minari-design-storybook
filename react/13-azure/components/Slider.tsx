import * as React from "react";
import { cx } from "./cx";

export interface SliderProps extends React.InputHTMLAttributes<HTMLInputElement> {
  // 값 고정
  disabled?: boolean;
}

export const Slider = React.forwardRef<HTMLInputElement, SliderProps>(
  ({ disabled, className, ...rest }, ref) => (
    <input type="range"
      className={cx("ods-slider", className)}
      disabled={disabled}
      ref={ref}
      {...rest}
    />
  )
);
Slider.displayName = "Slider";

// 이름, 값, 트랙 래퍼
export const SliderField = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...rest }, ref) => (
    <div ref={ref} className={cx("ods-slider-field", className)} {...rest}>
      {children}
    </div>
  )
);
SliderField.displayName = "SliderField";

// 이름과 값이 놓이는 행
export const SliderHead = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...rest }, ref) => (
    <div ref={ref} className={cx("ods-slider-head", className)} {...rest}>
      {children}
    </div>
  )
);
SliderHead.displayName = "SliderHead";

// 지금 값
export const SliderValue = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, children, ...rest }, ref) => (
    <span ref={ref} className={cx("ods-slider-value", className)} {...rest}>
      {children}
    </span>
  )
);
SliderValue.displayName = "SliderValue";

// 양 끝값
export const SliderTicks = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...rest }, ref) => (
    <div ref={ref} className={cx("ods-slider-ticks", className)} {...rest}>
      {children}
    </div>
  )
);
SliderTicks.displayName = "SliderTicks";
