import { getDefaultClassNames } from "react-day-picker";

import { Calendar as ShadcnCalendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { CALENDAR_COMPONENTS } from "../calendarDropdown";
import type { CalendarProps } from "../../systems/props";

export function Calendar({ mode = "single", className, ...rest }: CalendarProps) {
  return (
    <ShadcnCalendar
      mode={mode as never}
      // 겉 여백과 날짜 칸 모서리 지정. 모서리는 shadcn 이 --cell-radius 변수 하나로 받아 그 변수만 바꿈
      // calendar-gap, calendar-radius 토큰은 연결 제외. 받을 요소가 분명하지 않아 이름으로 짐작하지 않음
      className={cn(
        "p-(--component-calendar-padding) [--cell-radius:var(--component-calendar-cell-radius)]",
        className,
      )}
      components={CALENDAR_COMPONENTS}
      classNames={{
        outside: cn(
          "text-(--component-calendar-outside-fg)",
          "aria-selected:text-(--component-calendar-outside-fg)",
          getDefaultClassNames().outside,
        ),
      }}
      {...(rest as Record<string, never>)}
    />
  );
}
