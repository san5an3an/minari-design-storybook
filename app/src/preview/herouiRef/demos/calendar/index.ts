import * as m000 from "./basic";
import * as m001 from "./disabled";
import * as m002 from "./read-only";
import * as m003 from "./default-value";
import * as m004 from "./year-picker";
import * as m005 from "./controlled";
import * as m006 from "./min-max-dates";
import * as m007 from "./unavailable-dates";
import * as m008 from "./weeks-in-month";
import * as m009 from "./week-view";
import * as m010 from "./day-view";
import * as m011 from "./multiple-selection";
import * as m012 from "./focused-value";
import * as m013 from "./with-indicators";
import * as m014 from "./custom-icons";
import * as m015 from "./multiple-months";
import * as m016 from "./booking-calendar";
import * as m017 from "./international-calendar";
import * as m018 from "./custom-styles";

export const DEMOS = {
  "basic": m000.Basic,
  "disabled": m001.Disabled,
  "read-only": m002.ReadOnly,
  "default-value": m003.DefaultValue,
  "year-picker": m004.YearPicker,
  "controlled": m005.Controlled,
  "min-max-dates": m006.MinMaxDates,
  "unavailable-dates": m007.UnavailableDates,
  "weeks-in-month": m008.WeeksInMonth,
  "week-view": m009.WeekView,
  "day-view": m010.DayView,
  "multiple-selection": m011.MultipleSelection,
  "focused-value": m012.FocusedValue,
  "with-indicators": m013.WithIndicators,
  "custom-icons": m014.CustomIcons,
  "multiple-months": m015.MultipleMonths,
  "booking-calendar": m016.BookingCalendar,
  "international-calendar": m017.InternationalCalendar,
  "custom-styles": m018.CustomStyles,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
