import * as React from "react";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker as MuiDatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { ko } from "date-fns/locale";

export interface MuiDatepickerProps {
  value?: Date;
  onValueChange?: (date: Date | undefined) => void;
  placeholder?: string;
  className?: string;
}

export function Datepicker({ value, onValueChange, className }: MuiDatepickerProps) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ko}>
      <MuiDatePicker
        className={className}
        // 계약은 undefined를 미선택 값으로 사용. MUI는 null 사용해 여기서 값 변환
        value={value ?? null}
        onChange={(d) => onValueChange?.(d ?? undefined)}
      />
    </LocalizationProvider>
  );
}
