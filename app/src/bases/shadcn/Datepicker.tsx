import { CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { CALENDAR_COMPONENTS } from "../calendarDropdown";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import type { DatepickerProps } from "../../systems/props";

const FMT = new Intl.DateTimeFormat("ko-KR", {
  year: "numeric", month: "long", day: "numeric",
});

export function Datepicker({
  value, onValueChange, placeholder = "날짜를 골라 주세요", className,
}: DatepickerProps) {
  return (
    <Popover>
      <PopoverTrigger
        render={
          <Button
            variant="outline"
            data-empty={!value}
            className="justify-start text-left font-normal data-[empty=true]:text-muted-foreground"
          />
        }
      >
        <CalendarIcon />
        {value ? FMT.format(value) : <span>{placeholder}</span>}
      </PopoverTrigger>
      <PopoverContent className={className ?? "w-auto p-0"}>
        <Calendar
          mode="single"
          components={CALENDAR_COMPONENTS}
          selected={value}
          onSelect={onValueChange as never}
        />
      </PopoverContent>
    </Popover>
  );
}
