import * as React from "react";
import { cx } from "./cx";

export type AspectratioRatio = "square" | "video" | "portrait";

export interface AspectratioProps extends React.HTMLAttributes<HTMLDivElement> {
  // 영역의 가로세로 비
  ratio?: AspectratioRatio;
}

export const Aspectratio = React.forwardRef<HTMLDivElement, AspectratioProps>(
  ({ ratio = "video", children, className, ...rest }, ref) => (
    <div
      className={cx("ods-aspectratio", `ods-aspectratio--${ratio}`, className)}
      ref={ref}
      {...rest}
    >
      {children}
    </div>
  )
);
Aspectratio.displayName = "Aspectratio";
