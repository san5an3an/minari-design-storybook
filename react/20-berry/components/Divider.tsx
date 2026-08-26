import * as React from "react";
import { cx } from "./cx";

export interface DividerProps extends React.HTMLAttributes<HTMLHRElement> {
  // 구역이 바뀔 만큼 큰 경계
  strong?: boolean;
  // 왼쪽 들여쓰기 적용
  inset?: boolean;
  // 행 내에서 구분 표시
  vertical?: boolean;
}

export const Divider = React.forwardRef<HTMLHRElement, DividerProps>(
  ({ strong = false, inset = false, vertical = false, className, ...rest }, ref) => (
    <hr
      className={cx("ods-divider", strong && "ods-divider--strong", inset && "ods-divider--inset", vertical && "ods-divider--vertical", className)}
      ref={ref}
      {...rest}
    />
  )
);
Divider.displayName = "Divider";

// 라벨 붙은 선 별도 생성. <hr>은 자식을 가질 수 없어서임
export const DividerLabeled = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...rest }, ref) => (
    <div ref={ref} className={cx("ods-divider-labeled", className)} {...rest}>
      {children}
    </div>
  )
);
DividerLabeled.displayName = "DividerLabeled";
