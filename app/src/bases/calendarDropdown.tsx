import * as React from "react";
import type { DropdownProps } from "react-day-picker";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { SELECT_ALIGN_UNCLAMP } from "./selectAlign";

export function CalendarDropdown({
  options,
  value,
  onChange,
  disabled,
  "aria-label": ariaLabel,
}: DropdownProps) {
  // 값을 표시 이름으로 매핑하는 표. 월은 0부터 시작해 8월이 7로 보임
  const labels = React.useMemo( => {
    const map: Record<string, string> = {};
    for (const o of options ?? []) map[String(o.value)] = o.label;
    return map;
  }, [options]);

  return (
    <Select
      items={labels}
      value={value === undefined ? undefined : String(value)}
      disabled={disabled}
      onValueChange={(next) => {
        if (next === null) return;
        // react-day-picker는 e.target.value만 읽음. 값만 채워 전달
        onChange?.({
          target: { value: String(next) },
        } as unknown as React.ChangeEvent<HTMLSelectElement>);
      }}
    >
      <SelectTrigger
        size="sm"
        aria-label={ariaLabel}
        className={cn(
          // 공식 caption_label 클래스 그대로 적용
          "gap-1 border-0 bg-transparent px-1.5 py-0 font-medium shadow-none",
          "relative z-10",
          "[&_svg]:size-3.5",
          // 변형 접두사 맞춰 재정의. rounded-*는 특이도 낮아 밀리는 문제 있음
          "data-[size=sm]:rounded-(--cell-radius)",
          "dark:bg-transparent dark:hover:bg-transparent",
        )}
      >
        <SelectValue />
      </SelectTrigger>
      {/* SelectContent 그대로 사용 */}
      <SelectContent className={SELECT_ALIGN_UNCLAMP}>
        {(options ?? []).map((o) => (
          <SelectItem key={o.value} value={String(o.value)} disabled={o.disabled}>
            {o.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

// DayPicker components prop 그대로 전달. 월과 연도 선택에 동시 적용
export const CALENDAR_COMPONENTS = { Dropdown: CalendarDropdown };
