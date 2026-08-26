import * as React from "react";
import { cx } from "./cx";

export interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  // 오류 상태
  invalid?: "true" | "false";
  // 비활성화 여부
  disabled?: boolean;
}

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ invalid = "false", disabled, children, className, ...rest }, ref) => (
    <label
      className={cx("ods-radio", className)}
    >
      <input type="radio" aria-invalid={invalid} disabled={disabled} ref={ref} {...rest} />
      <span className="ods-radio-mark" />
      {children}
    </label>
  )
);
Radio.displayName = "Radio";

// 라벨 아래 설명 문구. 선택 시 벌어지는 일 안내
export const RadioDescription = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, children, ...rest }, ref) => (
    <span ref={ref} className={cx("ods-radio-description", className)} {...rest}>
      {children}
    </span>
  )
);
RadioDescription.displayName = "RadioDescription";

// 한 그룹. 같은 name을 쓰는 범위임
export const RadioGroup = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...rest }, ref) => (
    <div ref={ref} className={cx("ods-radio-group", className)} {...rest}>
      {children}
    </div>
  )
);
RadioGroup.displayName = "RadioGroup";
