import * as React from "react";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { ko } from "date-fns/locale";

export interface MuiCalendarProps {
  mode?: "single" | "multiple" | "range";
  selected?: unknown;
  onSelect?: (value: never) => void;
  captionLayout?: "label" | "dropdown" | "dropdown-months" | "dropdown-years";
  startMonth?: Date;
  endMonth?: Date;
  reverseYears?: boolean;
  className?: string;
}

export function Calendar({
  selected, onSelect, captionLayout = "label", startMonth, endMonth, reverseYears, className,
}: MuiCalendarProps) {
  // 월, 연 선택 가능 여부. dropdown 계열만 이 옵션 지원
  const views: Array<"year" | "month" | "day"> =
    captionLayout === "dropdown" ? ["year", "month", "day"]
    : captionLayout === "dropdown-months" ? ["month", "day"]
    : captionLayout === "dropdown-years" ? ["year", "day"]
    : ["day"];

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ko}>
      <DateCalendar
        className={className}
        value={(selected as Date | undefined) ?? null}
        onChange={(d) => onSelect?.(d as never)}
        views={views}
        minDate={startMonth}
        maxDate={endMonth}
        yearsOrder={reverseYears ? "desc" : "asc"}
      />
    </LocalizationProvider>
  );
}
