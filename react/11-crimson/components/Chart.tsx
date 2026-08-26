import * as React from "react";
import { cx } from "./cx";

export type ChartProps = React.HTMLAttributes<HTMLDivElement>;

export const Chart = React.forwardRef<HTMLDivElement, ChartProps>(
  ({ children, className, ...rest }, ref) => (
    <div
      className={cx("ods-chart", className)}
      ref={ref}
      {...rest}
    >
      {children}
    </div>
  )
);
Chart.displayName = "Chart";

// 값을 가리킬 때 뜨는 안내 쪽지
export const ChartTooltipContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...rest }, ref) => (
    <div ref={ref} className={cx("ods-chart-tooltip", className)} {...rest}>
      {children}
    </div>
  )
);
ChartTooltipContent.displayName = "ChartTooltipContent";

// 계열 라벨
export const ChartLegendContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...rest }, ref) => (
    <div ref={ref} className={cx("ods-chart-legend", className)} {...rest}>
      {children}
    </div>
  )
);
ChartLegendContent.displayName = "ChartLegendContent";
