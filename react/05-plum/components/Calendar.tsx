import * as React from "react";
import { cx } from "./cx";

export type CalendarProps = React.HTMLAttributes<HTMLDivElement>;

export const Calendar = React.forwardRef<HTMLDivElement, CalendarProps>(
  ({ children, className, ...rest }, ref) => (
    <div
      className={cx("ods-calendar", className)}
      ref={ref}
      {...rest}
    >
      {children}
    </div>
  )
);
Calendar.displayName = "Calendar";

// 월 이름과 이전/다음 버튼
export const CalendarHead = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...rest }, ref) => (
    <div ref={ref} className={cx("ods-calendar-head", className)} {...rest}>
      {children}
    </div>
  )
);
CalendarHead.displayName = "CalendarHead";

// 날짜 격자
export const CalendarGrid = React.forwardRef<HTMLTableElement, React.TableHTMLAttributes<HTMLTableElement>>(
  ({ className, children, ...rest }, ref) => (
    <table ref={ref} className={cx("ods-calendar-grid", className)} {...rest}>
      {children}
    </table>
  )
);
CalendarGrid.displayName = "CalendarGrid";

// 요일 이름
export const CalendarWeekday = React.forwardRef<HTMLTableCellElement, React.ThHTMLAttributes<HTMLTableCellElement>>(
  ({ className, children, ...rest }, ref) => (
    <th ref={ref} className={cx("ods-calendar-weekday", className)} {...rest}>
      {children}
    </th>
  )
);
CalendarWeekday.displayName = "CalendarWeekday";

// 날짜 한 셀
export interface CalendarDayProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  // 선택한 날짜
  selected?: boolean;
  // 오늘 날짜
  today?: boolean;
  // 앞뒤 달 날짜, 흐리게 표시하고 유지
  outside?: boolean;
}
export const CalendarDay = React.forwardRef<HTMLButtonElement, CalendarDayProps>(
  ({ selected = false, today = false, outside = false, className, children, ...rest }, ref) => (
    <button ref={ref} className={cx("ods-calendar-day", selected && "ods-calendar-day--selected", today && "ods-calendar-day--today", outside && "ods-calendar-day--outside", className)} {...rest}>
      {children}
    </button>
  )
);
CalendarDay.displayName = "CalendarDay";
