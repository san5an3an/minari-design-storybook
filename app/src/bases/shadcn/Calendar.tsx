import { getDefaultClassNames } from "react-day-picker";

import { Calendar as ShadcnCalendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { CALENDAR_COMPONENTS } from "../calendarDropdown";
import type { CalendarProps } from "../../systems/props";

export function Calendar({ mode = "single", className, ...rest }: CalendarProps) {
  return (
    <ShadcnCalendar
      mode={mode as never}
      className={className}
      components={CALENDAR_COMPONENTS}
      classNames={{
        outside: cn(
          "text-(--component-calendar-outside-fg)",
          "aria-selected:text-(--component-calendar-outside-fg)",
          getDefaultClassNames.outside,
        ),
      }}
      {...(rest as Record<string, never>)}
    />
  );
}
