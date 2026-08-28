import dayjs from "dayjs";
import { DatePicker } from "antd";
import type { DatepickerProps } from "../../systems/props";

export function Datepicker({ value, onValueChange, placeholder, className }: DatepickerProps) {
  return (
    <DatePicker
      className={className}
      placeholder={placeholder}
      value={value ? dayjs(value) : undefined}
      onChange={(d) => onValueChange?.(d ? d.toDate : undefined)}
    />
  );
}
