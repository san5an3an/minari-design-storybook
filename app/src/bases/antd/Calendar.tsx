import dayjs from "dayjs";
import { Calendar as AntCalendar } from "antd";
import type { CalendarProps } from "../../systems/props";

export function Calendar({ selected, onSelect, className }: CalendarProps) {
  const value = selected instanceof Date ? dayjs(selected) : undefined;
  return (
    <AntCalendar
      className={className}
      fullscreen={false}
      value={value}
      onSelect={(d) => (onSelect as ((v: Date) => void) | undefined)?.(d.toDate)}
    />
  );
}
