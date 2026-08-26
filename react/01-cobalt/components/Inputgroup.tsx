import * as React from "react";
import { cx } from "./cx";

export type InputgroupProps = React.HTMLAttributes<HTMLDivElement>;

export const Inputgroup = React.forwardRef<HTMLDivElement, InputgroupProps>(
  ({ children, className, ...rest }, ref) => (
    <div
      className={cx("ods-inputgroup", className)}
      ref={ref}
      {...rest}
    >
      {children}
    </div>
  )
);
Inputgroup.displayName = "Inputgroup";

// 실제 입력 필드, 테두리와 배경 제외
export const InputGroupInput = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, children, ...rest }, ref) => (
    <input ref={ref} className={cx("ods-inputgroup-input", className)} {...rest}>
      {children}
    </input>
  )
);
InputGroupInput.displayName = "InputGroupInput";

// 아이콘, 단위, 버튼이 들어가는 부착 요소
export type InputGroupAddonAlign = "inline-start" | "inline-end" | "block-start" | "block-end";
export interface InputGroupAddonProps extends React.HTMLAttributes<HTMLDivElement> {
  // 부착 위치
  align?: InputGroupAddonAlign;
}
export const InputGroupAddon = React.forwardRef<HTMLDivElement, InputGroupAddonProps>(
  ({ align = "inline-start", className, children, ...rest }, ref) => (
    <div ref={ref} className={cx("ods-inputgroup-addon", `ods-inputgroup-addon--${align}`, className)} {...rest}>
      {children}
    </div>
  )
);
InputGroupAddon.displayName = "InputGroupAddon";

// 프래그먼트 안 텍스트, 단위와 접두사
export const InputGroupText = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, children, ...rest }, ref) => (
    <span ref={ref} className={cx("ods-inputgroup-text", className)} {...rest}>
      {children}
    </span>
  )
);
InputGroupText.displayName = "InputGroupText";

// 프래그먼트 안 버튼. 지우기, 보이기 등
export const InputGroupButton = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, children, ...rest }, ref) => (
    <button ref={ref} className={cx("ods-inputgroup-button", className)} {...rest}>
      {children}
    </button>
  )
);
InputGroupButton.displayName = "InputGroupButton";
